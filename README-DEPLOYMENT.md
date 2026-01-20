# Community Cleanliness Platform - Deployment Guide

A comprehensive deployment guide for the Community Cleanliness & Issue Reporting Portal built with React, Vite, Firebase, and deployed on Vercel.

## 1. Prerequisites & Setup

### System Requirements
- Node.js 18+ and npm/yarn
- Git for version control
- Vercel account (free tier available)
- Firebase project with Authentication enabled
- ImgBB account for image hosting

### Local Development Setup
```bash
# Clone the repository
git clone <your-repo-url>
cd community-cleanliness-client

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Edit .env with your Firebase and API credentials

# Start development server
npm run dev
```

## 2. Environment Configuration

### Required Environment Variables
Add these to your `.env` file and Vercel dashboard:

```env
# Firebase Configuration
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your-project.firebaseapp.com
VITE_PROJECTID=your-firebase-project-id
VITE_STORAGEBUCKET=your-project.firebasestorage.app
VITE_MESSAGINGSENDERID=your_messaging_sender_id
VITE_APPID=your_firebase_app_id

# External Services
VITE_IMAGEBB_API=your_imagebb_api_key
VITE_API_URL=https://your-backend-server.vercel.app
```

### Environment-Specific URLs
- **Development**: `VITE_API_URL=http://localhost:3000`
- **Production**: `VITE_API_URL=https://community-cleanliness-server.vercel.app`

## 3. Firebase Integration Setup

### Authentication Configuration
1. Enable Email/Password and Google authentication in Firebase Console
2. Add your domain to authorized domains:
   - `localhost` (for development)
   - `your-vercel-domain.vercel.app`
   - Your custom domain (if applicable)

### Security Rules
Ensure Firebase security rules are properly configured for user data protection and role-based access control.

### Firebase SDK Optimization
The project uses Firebase v9+ modular SDK for optimal bundle size:
```javascript
// Optimized imports in vite.config.js
optimizeDeps: {
  include: ['firebase/app', 'firebase/auth']
}
```

## 4. Vercel Deployment Options

### Option 1: GitHub Integration (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and import your repository
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push to main branch

### Option 2: Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Option 3: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/community-cleanliness-client)

## 5. Build Configuration & Optimization

### Vite Configuration
The project uses optimized Vite settings for production:

```javascript
// vite.config.js
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    chunkSizeWarningLimit: 1000  // Optimized for large dependencies
  },
  optimizeDeps: {
    include: ['firebase/app', 'firebase/auth']
  }
});
```

### Build Settings (Auto-detected by Vercel)
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node.js Version**: 18.x (recommended)

## 6. Single Page Application (SPA) Routing

### Vercel SPA Configuration
The `vercel.json` file ensures proper client-side routing:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This configuration handles:
- React Router navigation
- Direct URL access to any route
- Browser refresh on nested routes
- 404 error prevention for valid app routes

## 7. Performance & Security Optimizations

### Bundle Optimization
- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Automatic image and CSS optimization
- **Chunk Size Management**: Configured warning limit for large bundles

### Security Headers
Consider adding security headers in `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

## 8. API Integration & Backend Connectivity

### Backend Server Requirements
Ensure your backend server (community-cleanliness-server) is deployed and configured with:
- CORS settings for your frontend domain
- Firebase Admin SDK for token verification
- MongoDB connection for data persistence
- Proper error handling and logging

### API Endpoint Testing
Test these critical endpoints after deployment:
- Authentication: `/api/auth/login`
- Issues: `/api/issues`
- Contributions: `/api/contributions`
- User Profile: `/api/users/profile`
- Admin Dashboard: `/api/admin/stats`

## 9. Post-Deployment Testing & Validation

### Functional Testing Checklist
- [ ] **Authentication Flow**
  - [ ] Email/Password login and registration
  - [ ] Google OAuth integration
  - [ ] JWT token refresh
  - [ ] Logout functionality

- [ ] **Core Features**
  - [ ] Issue creation, editing, and deletion
  - [ ] Contribution payments and tracking
  - [ ] User dashboard statistics
  - [ ] Admin panel access and data

- [ ] **UI/UX Validation**
  - [ ] Responsive design on mobile/tablet/desktop
  - [ ] Dark/Light theme switching
  - [ ] Loading states and error handling
  - [ ] Navigation and routing

- [ ] **Performance Metrics**
  - [ ] Page load times < 3 seconds
  - [ ] Lighthouse score > 90
  - [ ] Core Web Vitals optimization

## 10. Monitoring, Maintenance & Troubleshooting

### Deployment Monitoring
- **Vercel Analytics**: Monitor performance and user behavior
- **Error Tracking**: Implement error logging for production issues
- **Uptime Monitoring**: Set up alerts for service availability

### Common Issues & Solutions

**Build Failures**
```bash
# Check for dependency conflicts
npm audit fix

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Routing Issues**
- Verify `vercel.json` SPA configuration
- Check React Router setup in `main.jsx`
- Ensure all routes are properly defined

**Firebase Authentication Errors**
- Validate environment variables in Vercel dashboard
- Check Firebase project configuration
- Verify authorized domains in Firebase Console

**API Connection Problems**
- Confirm `VITE_API_URL` points to correct backend
- Test backend server health endpoint
- Check CORS configuration on backend

### Maintenance Schedule
- **Weekly**: Monitor error logs and performance metrics
- **Monthly**: Update dependencies and security patches
- **Quarterly**: Review and optimize bundle size and performance

### Support & Documentation
- **Project Repository**: [GitHub Link]
- **Live Demo**: [Vercel Deployment URL]
- **Backend API**: [Server Documentation]
- **Firebase Console**: [Project Dashboard]

---

**Deployment completed successfully!** 🚀

Your Community Cleanliness Platform is now live and ready to help communities report and resolve cleanliness issues.