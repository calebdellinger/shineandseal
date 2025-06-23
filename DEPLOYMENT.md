# Netlify Deployment Guide

## Overview
This project uses Next.js with Netlify Functions for API routes and Netlify Forms for contact form handling. The gallery API is implemented as a Netlify function to handle server-side functionality.

## Environment Variables
Make sure to set these environment variables in your Netlify dashboard:

- `SMUGMUG_API_KEY`: Your SmugMug API key
- `SMUGMUG_ALBUM_KEY`: Your SmugMug album key (defaults to 'sPKjsL' if not set)

## Deployment Process

1. **Build Configuration**
   - The project uses `distDir: 'out'` for static export
   - API routes are handled by Netlify Functions
   - Contact forms are handled by Netlify Forms
   - Functions are located in `.netlify/functions/`

2. **API Routes**
   - `/api/gallery` → `/.netlify/functions/api-gallery`
   - All API routes are redirected to corresponding Netlify functions

3. **Contact Form**
   - Form name: `contact`
   - Includes honeypot field for spam protection
   - Redirects to `/thank-you/` after successful submission
   - Static form file: `public/form.html`

4. **Build Command**
   ```bash
   npm run build
   ```

5. **Publish Directory**
   ```
   out
   ```

## Contact Form Setup

### Form Configuration
The contact form is configured with the following features:

- **Form Name**: `contact`
- **Method**: POST
- **Spam Protection**: Honeypot field (`bot-field`)
- **Success Redirect**: `/thank-you/`
- **Required Fields**: Full Name, Email, Project Details

### Form Files
1. **React Component**: `app/contact/page.tsx`
2. **Static Form**: `public/form.html` (required for Netlify form detection)
3. **Thank You Page**: `app/thank-you/page.tsx`

### Form Handling
- Forms are automatically detected by Netlify
- Submissions are stored in the Netlify dashboard
- Email notifications can be configured in Netlify dashboard
- Spam protection is enabled via honeypot field

### Setting Up Email Notifications
1. Go to Netlify Dashboard → Forms
2. Click on the "contact" form
3. Go to Settings → Notifications
4. Add email notification recipients
5. Configure notification settings (immediate, daily digest, etc.)

## Troubleshooting

### Gallery API Error: "Unexpected token '<', "<!DOCTYPE "... is not valid JSON"

This error occurs when the API endpoint returns HTML instead of JSON. Common causes:

1. **Missing Environment Variables**: Ensure `SMUGMUG_API_KEY` is set in Netlify
2. **Function Not Deployed**: Check that the Netlify function is properly deployed
3. **Incorrect Redirect**: Verify the redirect rule in `netlify.toml`

### Contact Form Not Working

1. **Check Form Detection**:
   - Go to Netlify Dashboard → Forms
   - Ensure the "contact" form is listed
   - Check that `public/form.html` is included in the build

2. **Verify Form Configuration**:
   - Ensure form has `data-netlify="true"`
   - Check that `form-name` hidden input is present
   - Verify honeypot field is properly hidden

3. **Test Form Submission**:
   - Submit a test form
   - Check Netlify Forms dashboard for submission
   - Verify email notifications are working

### Solutions

1. **Check Environment Variables**:
   - Go to Netlify Dashboard → Site Settings → Environment Variables
   - Ensure `SMUGMUG_API_KEY` is set correctly

2. **Verify Function Deployment**:
   - Check Netlify Functions tab in dashboard
   - Ensure `api-gallery` function is listed and deployed

3. **Test Function Locally**:
   ```bash
   netlify dev
   ```
   Then visit `http://localhost:8888/.netlify/functions/api-gallery`

4. **Check Function Logs**:
   - Go to Netlify Dashboard → Functions → api-gallery
   - Check the function logs for errors

5. **Form Testing**:
   - Use `netlify dev` to test forms locally
   - Check form submissions in Netlify dashboard
   - Verify email notifications are configured

## Fallback Behavior

The gallery component includes fallback images that will be displayed if:
- The API is unavailable
- Environment variables are missing
- The SmugMug API returns an error

This ensures the gallery always shows content, even if the API fails.

## Local Development

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Start development server:
   ```bash
   netlify dev
   ```

3. Test the function:
   ```bash
   node test-function.js
   ```

4. Test forms locally:
   - Forms will work with `netlify dev`
   - Submissions will appear in Netlify dashboard

## File Structure

```
.netlify/
  functions/
    api-gallery.js      # Gallery API function
    package.json        # Function dependencies
app/
  contact/
    page.tsx           # Contact form page
  thank-you/
    page.tsx           # Thank you page
public/
  form.html           # Static form for Netlify detection
netlify.toml          # Netlify configuration
next.config.js        # Next.js configuration
```

## API Response Format

The gallery API returns an array of image objects:

```json
[
  {
    "ImageKey": "string",
    "ThumbnailUrl": "string",
    "X5Url": "string",
    "LargeUrl": "string",
    "WebUri": "string",
    "Caption": "string",
    "Title": "string",
    "FileName": "string",
    "IsVideo": false,
    "Format": "JPG"
  }
]
```

## Form Submission Data

Contact form submissions include:
- `fullName`: Customer's full name
- `email`: Customer's email address
- `description`: Project details and requirements
- `bot-field`: Honeypot field (hidden from users) 