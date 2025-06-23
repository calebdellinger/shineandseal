# Environment Variables Setup

## For Local Development

Create a `.env.local` file in your project root with the following variables:

```env
# SmugMug API Configuration
# Get your API key from: https://api.smugmug.com/api/developer/apply
SMUGMUG_API_KEY=your_smugmug_api_key_here

# Optional: Album key (defaults to 'sPKjsL' if not set)
# You can find this in your SmugMug album URL or API response
SMUGMUG_ALBUM_KEY=sPKjsL
```

## For Netlify Deployment

1. Go to your Netlify dashboard
2. Navigate to Site settings > Environment variables
3. Add the following environment variables:

   - **Key**: `SMUGMUG_API_KEY`
   - **Value**: Your SmugMug API key

   - **Key**: `SMUGMUG_ALBUM_KEY` (optional)
   - **Value**: Your album key (defaults to 'sPKjsL')

## Getting Your SmugMug API Key

1. Visit: https://api.smugmug.com/api/developer/apply
2. Fill out the application form
3. Once approved, you'll receive your API key
4. Add it to your environment variables

## Getting Your Album Key

1. Go to your SmugMug album
2. Look at the URL or check the API response
3. The album key is usually in the format like 'sPKjsL'

## How It Works

- The gallery fetches images server-side via `/api/gallery` route
- This avoids CORS issues and keeps your API key secure
- Images are fetched from SmugMug using your API key and album key
- The API route processes the images and returns them to the client
- No hardcoded images are used - everything comes from your SmugMug account

## Testing

After setting up the environment variables:

1. Restart your development server: `npm run dev`
2. Visit `/gallery` to test the API
3. Check the browser console and server logs for any errors
4. The gallery should load images from your SmugMug account

## Troubleshooting

If you see errors:

1. **"API key not configured"**: Make sure `SMUGMUG_API_KEY` is set in your environment
2. **"Album not found"**: Check that `SMUGMUG_ALBUM_KEY` is correct
3. **"CORS error"**: This shouldn't happen since we're using server-side API calls
4. **"Network error"**: Check your internet connection and SmugMug API status 