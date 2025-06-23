const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  console.log('=== Gallery Function Called ===');
  console.log('Event:', JSON.stringify(event, null, 2));
  console.log('Context:', JSON.stringify(context, null, 2));
  
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Check environment variables
  const API_KEY = process.env.SMUGMUG_API_KEY;
  const ALBUM_KEY = process.env.SMUGMUG_ALBUM_KEY || 'sPKjsL';

  console.log('Environment variables:');
  console.log('- API_KEY exists:', !!API_KEY);
  console.log('- ALBUM_KEY:', ALBUM_KEY);

  if (!API_KEY) {
    console.error('SMUGMUG_API_KEY environment variable is not set');
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'SmugMug API key is not configured. Please set SMUGMUG_API_KEY in your environment variables.',
        timestamp: new Date().toISOString()
      })
    };
  }

  try {
    const imagesUrl = `https://api.smugmug.com/api/v2/album/${ALBUM_KEY}!images?APIKey=${API_KEY}`;
    
    console.log('Making request to SmugMug API:', imagesUrl);
    
    const imagesResponse = await fetch(imagesUrl, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Shine-Seal-Website/1.0'
      },
    });

    console.log('SmugMug API response status:', imagesResponse.status);
    console.log('SmugMug API response headers:', Object.fromEntries(imagesResponse.headers.entries()));

    if (!imagesResponse.ok) {
      const errorText = await imagesResponse.text();
      console.error('SmugMug API Error:', {
        status: imagesResponse.status,
        statusText: imagesResponse.statusText,
        errorText: errorText
      });
      
      return {
        statusCode: imagesResponse.status,
        headers,
        body: JSON.stringify({
          error: `SmugMug API request failed: ${imagesResponse.status} ${imagesResponse.statusText}`,
          details: errorText,
          timestamp: new Date().toISOString()
        })
      };
    }

    const data = await imagesResponse.json();
    console.log('SmugMug API response data keys:', Object.keys(data));
    console.log('SmugMug API response structure:', {
      hasResponse: !!data.Response,
      hasAlbumImage: !!(data.Response && data.Response.AlbumImage),
      albumImageCount: data.Response?.AlbumImage?.length || 0
    });
    
    if (data.Code && data.Code !== 200) {
      console.error('SmugMug API returned an error code:', {
        code: data.Code,
        message: data.Message,
        data: data
      });
      
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: `SmugMug API Error: ${data.Message || 'Unknown error'} (Code: ${data.Code})`,
          timestamp: new Date().toISOString()
        })
      };
    }

    if (!data.Response?.AlbumImage) {
      console.error('Invalid response structure from SmugMug API:', data);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'Invalid response structure from SmugMug API',
          receivedData: data,
          timestamp: new Date().toISOString()
        })
      };
    }
    
    const processedImages = data.Response.AlbumImage.map((image, index) => {
      console.log(`Processing image ${index + 1}:`, {
        imageKey: image.ImageKey,
        fileName: image.FileName,
        isVideo: image.IsVideo
      });
      
      const mappedImage = {
        ...image,
        Caption: image.Caption || '',
        Title: image.Title || image.FileName || '',
        IsVideo: image.IsVideo || false,
        Format: image.Format || 'JPG',
      };
      
      if (!image.IsVideo) {
        mappedImage.X5Url = image.ThumbnailUrl.replace('/Th/', '/X5/').replace(/-Th\./, '.');
        mappedImage.LargeUrl = image.ThumbnailUrl.replace('/Th/', '/L/').replace(/-Th\./, '.');
      }
      
      return mappedImage;
    });

    console.log(`Successfully processed ${processedImages.length} images from SmugMug`);

    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      },
      body: JSON.stringify(processedImages)
    };
  } catch (error) {
    console.error('Error in gallery API function:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error while fetching gallery images',
        details: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
}; 