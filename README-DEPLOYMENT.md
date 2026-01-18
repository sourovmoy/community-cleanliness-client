# Vercel Deployment Guide

## Quick Deploy Options

### Option 1: One-Click Deploy (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/your-repo-name)

### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 3: GitHub Integration
1. Push code to GitHub
2. Connect repository at vercel.com
3. Add environment variables
4. Deploy automatically

## Environment Variables (Required)
Add these in your Vercel dashboard under Settings > Environment Variables:

```
VITE_APIKEY=AIzaSyAnlkszNRgvFLz_kKwmA_egUexusuJgy5g
VITE_AUTHDOMAIN=community-cleanliness-17266.firebaseapp.com
VITE_PROJECTID=community-cleanliness-17266
VITE_STORAGEBUCKET=community-cleanliness-17266.firebasestorage.app
VITE_MESSAGINGSENDERID=549267415829
VITE_APPID=1:549267415829:web:4190f49b58f4f4e6143f1c
VITE_IMAGEBB_API=5b1aedebe91b0c73d353cb603f6f630e
VITE_API_URL=https://community-cleanliness-server.vercel.app
```

## Build Settings (Auto-detected)
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## Files Added for Deployment
- `vercel.json` - Vercel configuration with SPA routing
- `.vercelignore` - Files to exclude from deployment
- `vite.config.js` - Updated with build optimizations

## Post-Deployment Checklist
- [ ] Test all routes work correctly
- [ ] Verify Firebase authentication
- [ ] Check API connectivity
- [ ] Test responsive design
- [ ] Validate environment variables

## Troubleshooting
- **Build fails**: Check package.json dependencies
- **Routes don't work**: Verify vercel.json SPA configuration
- **API errors**: Confirm VITE_API_URL is correct
- **Firebase issues**: Validate Firebase config variables