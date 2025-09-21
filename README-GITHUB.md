# 🍔 FoodFlow - Modern Food Delivery Application

A comprehensive food delivery application built with React, TypeScript, and Vite, featuring restaurant browsing, menu management, order tracking, and AI chatbot integration.

## ✨ Features

### 🏪 **Restaurant Management**
- Browse restaurants with high-quality images
- View restaurant details and ratings
- Real-time restaurant information

### 🍕 **Menu & Food Items**
- **Enhanced "View Item" Feature**: Browse through multiple images of each dish
- **Multiple Images per Item**: 5-6 images per food item for better user experience
- **Real Food Photos**: High-quality images for authentic preview
- **Menu Categories**: Organized by food types

### 🛒 **Shopping Experience**
- Add items to cart with customization
- Real-time cart updates
- Order tracking system
- Multiple payment options

### 🤖 **AI Integration**
- Intelligent food recommendations
- AI chatbot for customer support
- Personalized suggestions

### 👥 **Multi-Role Support**
- **Customer Dashboard**: Browse, order, and track
- **Restaurant Dashboard**: Manage orders and menu
- **Delivery Dashboard**: Track and manage deliveries

## 🚀 Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Real-time**: Supabase real-time subscriptions
- **Icons**: Lucide React
- **State Management**: React Query

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # UI components (49 files)
│   ├── AIChat.tsx      # AI chatbot
│   ├── Cart.tsx        # Shopping cart
│   ├── DishPreview.tsx # Enhanced food preview
│   └── RestaurantDetails.tsx # Restaurant details
├── pages/              # Page components
│   ├── CustomerDashboard.tsx
│   ├── RestaurantDashboard.tsx
│   └── DeliveryDashboard.tsx
├── lib/                # Utilities and services
├── integrations/       # Supabase integration
└── hooks/              # Custom hooks
```

## 🖼️ Enhanced Image System

### **29 High-Quality Images**
- **Restaurant Images**: 2 files
- **Menu Item Images**: 9 files (3 original + 6 variations)
- **Real Food Photos**: 12 files
- **3D Render Images**: 6 files

### **"View Item" Feature**
- Browse through multiple images of each dish
- Smooth image transitions
- Image navigation controls
- Enhanced user experience

## 🛠️ Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/kapayashwanth/food-delivery.git
cd food-delivery

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Netlify Deployment (Recommended)
1. Connect your GitHub repository to Netlify
2. Netlify will auto-detect build settings from `netlify.toml`
3. Deploy with one click!

### Manual Deployment
```bash
# Build the project
npm run build

# Upload the 'dist' folder to your hosting provider
```

## 🎯 Key Enhancements

### ✅ **"View Item" Feature**
- Replaced "3D View" with more intuitive "View Item"
- Enhanced user experience
- Better terminology for users

### ✅ **Multiple Images per Food Item**
- Each food item has 5-6 images
- Real food photos for authentic preview
- Menu item variations
- Enhanced browsing experience

### ✅ **Production Ready**
- All 29 images working correctly
- Optimized file sizes (40KB - 194KB)
- Mobile-responsive design
- No linting errors

## 📱 Demo Credentials

- **Customer**: `customer@demo.com` / `demo123`
- **Restaurant**: `restaurant@demo.com` / `demo123`
- **Delivery**: `delivery@demo.com` / `demo123`

## 🔧 Configuration Files

- `package.json` - Dependencies and scripts
- `vite.config.ts` - Build configuration
- `netlify.toml` - Deployment configuration
- `tailwind.config.ts` - Styling configuration
- `tsconfig.json` - TypeScript configuration

## 📊 Project Statistics

- **Total Files**: 100+ files
- **Images**: 29 files (all optimized)
- **Components**: 57 React components
- **Dependencies**: 64 production dependencies
- **Linting**: ✅ No errors

## 🎨 UI Components

Built with shadcn/ui components:
- Buttons, Cards, Forms
- Navigation, Modals, Dialogs
- Charts, Tables, Calendars
- And 40+ more components

## 🚀 Performance

- **Build Time**: Optimized with Vite
- **Image Loading**: Lazy loading and optimization
- **Bundle Size**: Optimized for production
- **Mobile**: Fully responsive design

## 📈 Features Working

- ✅ Restaurant browsing with images
- ✅ Menu items with "View Item" feature
- ✅ Shopping cart functionality
- ✅ Order tracking system
- ✅ AI chatbot integration
- ✅ Multi-role dashboards
- ✅ Real-time updates
- ✅ Mobile responsive

## 🎉 Ready for Production

Your FoodFlow application is production-ready with:
- ✅ All images working correctly
- ✅ Enhanced user experience
- ✅ "View Item" feature
- ✅ Multiple images per food item
- ✅ Mobile responsive design
- ✅ No errors or issues

## 📞 Support

For questions or support, please open an issue in the repository.

## 📄 License

This project is open source and available under the MIT License.

---

**🍔 FoodFlow - Delivering delicious experiences!** 🚀
