# 🚀 FoodFlow - Deployment Guide

## Project Overview
FoodFlow is a modern food delivery application built with React, TypeScript, and Vite. It features restaurant browsing, menu management, order tracking, and AI chatbot integration.

## ✅ Issues Fixed
- **Image Loading**: All food and restaurant images are now properly configured
- **Asset Management**: Images moved to `public/assets/` for proper serving
- **Database Paths**: Updated all image references to use correct paths
- **3D Preview**: Real food photos are now accessible for the 3D view feature

## 🛠️ Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Demo Credentials
- **Customer**: `customer@demo.com` / `demo123`
- **Restaurant**: `restaurant@demo.com` / `demo123`
- **Delivery**: `delivery@demo.com` / `demo123`

## 🌐 Netlify Deployment

### Option 1: Automatic Deployment
1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the build settings from `netlify.toml`
3. Deploy with one click!

### Option 2: Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Build Configuration
The project includes a `netlify.toml` file with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirects configured
- Node.js version: 18

## 📁 Project Structure
```
├── public/
│   └── assets/          # All images (restaurants, food, 3D views)
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── lib/            # Utilities and services
│   └── integrations/   # Supabase integration
├── supabase/           # Database migrations
├── netlify.toml        # Netlify configuration
└── build.bat           # Windows build script
```

## 🎨 Features
- **Restaurant Browsing**: Browse restaurants with images and ratings
- **Menu Management**: View menu items with 3D preview
- **Shopping Cart**: Add items to cart with customization
- **Order Tracking**: Real-time order status updates
- **AI Chatbot**: Intelligent food recommendations
- **Multi-role Support**: Customer, Restaurant, Delivery dashboards

## 🔧 Technical Details
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Real-time**: Supabase real-time subscriptions
- **Icons**: Lucide React

## 🚀 Quick Start (Without Node.js)
If you don't have Node.js installed, you can:
1. Open `simple-test.html` in your browser to see the project overview
2. Install Node.js from [nodejs.org](https://nodejs.org)
3. Run the build script: `build.bat` (Windows) or `npm run build`

## 📱 Mobile Responsive
The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All screen sizes

## 🎯 Production Ready
- Images optimized and properly served
- Database migrations included
- Environment variables configured
- Build process automated
- Deployment configuration ready
