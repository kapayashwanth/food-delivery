# 🚀 Deploy FoodFlow to Netlify

## Method 1: Drag & Drop (Easiest)

1. **Build the project first:**
   - Install Node.js from [nodejs.org](https://nodejs.org)
   - Run: `npm install`
   - Run: `npm run build`

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag the `dist` folder to the Netlify dashboard
   - Your site will be live in seconds!

## Method 2: Git Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Netlify will auto-detect the build settings from `netlify.toml`
   - Click "Deploy site"

## Method 3: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   netlify login
   netlify deploy --prod --dir=dist
   ```

## 🎯 Build Settings (Auto-configured)

The project includes `netlify.toml` with:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18
- **SPA redirects**: Configured for React Router

## ✅ What's Included

- ✅ All images fixed and optimized
- ✅ Restaurant and food images working
- ✅ 3D preview images accessible
- ✅ Database migrations included
- ✅ Build configuration ready
- ✅ Mobile responsive design
- ✅ Production-ready code

## 🔧 Environment Variables (Optional)

If you want to use your own Supabase instance:
- `VITE_SUPABASE_URL`: Your Supabase URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anon key

## 📱 Features Working

- 🍕 Restaurant browsing with images
- 🍔 Menu items with 3D preview
- 🛒 Shopping cart functionality
- 📱 Order tracking system
- 🤖 AI chatbot integration
- 👥 Multi-role dashboards

## 🎉 Ready to Deploy!

Your FoodFlow application is now ready for deployment to Netlify with all images working correctly!
