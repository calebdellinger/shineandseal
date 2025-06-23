import { NextResponse } from 'next/server';

const API_KEY = process.env.SMUGMUG_API_KEY;
const ALBUM_KEY = process.env.SMUGMUG_ALBUM_KEY || 'sPKjsL';

interface SmugMugImage {
  ImageKey: string;
  ThumbnailUrl: string;
  WebUri: string;
  Caption: string;
  Title: string;
  FileName: string;
  IsVideo: boolean;
  Format: string;
  X5Url?: string;
  LargeUrl?: string;
}

interface SmugMugResponse {
  Response: {
    AlbumImage: SmugMugImage[];
    Pages: {
      Total: number;
      Start: number;
      Count: number;
    };
  };
  Code: number;
  Message: string;
}

function getX5Url(thumbnailUrl: string): string {
  return thumbnailUrl
    .replace('/Th/', '/X5/')
    .replace(/-Th\./, '.');
}

function getLargeUrl(thumbnailUrl: string): string {
  return thumbnailUrl
    .replace('/Th/', '/L/')
    .replace(/-Th\./, '.');
}

export async function GET() {
  if (!API_KEY) {
    console.error('SMUGMUG_API_KEY environment variable is not set');
    return NextResponse.json(
      { error: 'SmugMug API key is not configured. Please set SMUGMUG_API_KEY in your environment variables.' },
      { status: 500 }
    );
  }

  try {
    const imagesUrl = `https://api.smugmug.com/api/v2/album/${ALBUM_KEY}!images?APIKey=${API_KEY}`;
    
    console.log(`Fetching images from SmugMug API: ${imagesUrl}`);
    
    const imagesResponse = await fetch(imagesUrl, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Shine-Seal-Website/1.0'
      },
      cache: 'no-store',
    });

    if (!imagesResponse.ok) {
      const errorText = await imagesResponse.text();
      console.error('SmugMug API Error:', imagesResponse.status, imagesResponse.statusText, errorText);
      return NextResponse.json(
        { error: `SmugMug API request failed: ${imagesResponse.status} ${imagesResponse.statusText}` },
        { status: imagesResponse.status }
      );
    }

    const data: SmugMugResponse = await imagesResponse.json();
    
    if (data.Code && data.Code !== 200) {
      console.error('SmugMug API returned an error code:', data.Code, data.Message, data);
      return NextResponse.json(
        { error: `SmugMug API Error: ${data.Message || 'Unknown error'} (Code: ${data.Code})` },
        { status: 400 }
      );
    }

    if (!data.Response?.AlbumImage) {
      console.error('Invalid response structure from SmugMug API:', data);
      return NextResponse.json(
        { error: 'Invalid response structure from SmugMug API' },
        { status: 500 }
      );
    }
    
    const processedImages = data.Response.AlbumImage.map(image => {
      const mappedImage: SmugMugImage = {
        ...image,
        Caption: image.Caption || '',
        Title: image.Title || image.FileName || '',
        IsVideo: image.IsVideo || false,
        Format: image.Format || 'JPG',
      };
      if (!image.IsVideo) {
        mappedImage.X5Url = getX5Url(image.ThumbnailUrl);
        mappedImage.LargeUrl = getLargeUrl(image.ThumbnailUrl);
      }
      return mappedImage;
    });

    console.log(`Successfully processed ${processedImages.length} images from SmugMug`);

    // Set cache headers for better performance
    return NextResponse.json(processedImages, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600', // Cache for 5 minutes, stale for 10 minutes
      },
    });
  } catch (error) {
    console.error('Error in gallery API route:', error);
    return NextResponse.json(
      { error: 'Internal server error while fetching gallery images' },
      { status: 500 }
    );
  }
} 