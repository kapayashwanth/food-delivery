import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { MenuItem } from '@/lib/supabase-service';

// Import real dish images from public folder
const margheritaReal1 = '/assets/margherita-real-1.jpg';
const margheritaReal2 = '/assets/margherita-real-2.jpg';
const margheritaReal3 = '/assets/margherita-real-3.jpg';
const pepperoniReal1 = '/assets/pepperoni-real-1.jpg';
const pepperoniReal2 = '/assets/pepperoni-real-2.jpg';
const pepperoniReal3 = '/assets/pepperoni-real-3.jpg';
const burgerReal1 = '/assets/burger-real-1.jpg';
const burgerReal2 = '/assets/burger-real-2.jpg';
const burgerReal3 = '/assets/burger-real-3.jpg';
const veggieReal1 = '/assets/veggie-real-1.jpg';
const veggieReal2 = '/assets/veggie-real-2.jpg';
const veggieReal3 = '/assets/veggie-real-3.jpg';

interface DishPreviewProps {
  dish: MenuItem;
  onClose: () => void;
}

// Map dish names to diverse food images
const DISH_VIEW_IMAGES: Record<string, string[]> = {
  'Margherita Pizza': [
    margheritaReal1, margheritaReal2, margheritaReal3,
    '/assets/margherita-pizza.jpg', '/assets/margherita-pizza-2.jpg', '/assets/margherita-pizza-3.jpg'
  ],
  'Pepperoni Pizza': [
    pepperoniReal1, pepperoniReal2, pepperoniReal3,
    '/assets/pepperoni-pizza.jpg', '/assets/pepperoni-pizza-2.jpg', '/assets/pepperoni-pizza-3.jpg'
  ],
  'Veggie Supreme': [
    veggieReal1, veggieReal2, veggieReal3,
    '/assets/margherita-pizza.jpg', '/assets/pepperoni-pizza.jpg'
  ],
  'Classic Burger': [
    burgerReal1, burgerReal2, burgerReal3,
    '/assets/classic-burger.jpg', '/assets/classic-burger-2.jpg', '/assets/classic-burger-3.jpg'
  ],
  'Chicken Deluxe': [
    burgerReal2, burgerReal3, burgerReal1,
    '/assets/classic-burger.jpg', '/assets/classic-burger-2.jpg'
  ],
  'Chicken BBQ': [
    burgerReal3, burgerReal1, burgerReal2,
    '/assets/pepperoni-pizza.jpg', '/assets/classic-burger.jpg'
  ],
  'Veggie Burger': [
    veggieReal1, veggieReal2, veggieReal3,
    '/assets/classic-burger.jpg', '/assets/margherita-pizza.jpg'
  ],
  'Double Cheese': [
    burgerReal1, burgerReal2, burgerReal3,
    '/assets/classic-burger.jpg', '/assets/pepperoni-pizza.jpg'
  ]
};

export const DishPreview = ({ dish, onClose }: DishPreviewProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'2d' | '3d'>('2d');
  
  const viewImages = DISH_VIEW_IMAGES[dish.name] || [margheritaReal1, margheritaReal2, margheritaReal3];
  const currentImages = viewMode === '3d' ? viewImages : [dish.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <CardContent className="p-0">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-card">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold">{dish.name}</h2>
              <Badge variant="secondary">{dish.category}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === '2d' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setViewMode('2d');
                  setCurrentImageIndex(0);
                }}
              >
                2D View
              </Button>
              <Button
                variant={viewMode === '3d' ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setViewMode('3d');
                  setCurrentImageIndex(0);
                }}
              >
                <Eye className="w-4 h-4 mr-1" />
                View Item
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Image Viewer */}
          <div className="relative">
            <div className="aspect-video bg-muted overflow-hidden">
              <img
                src={currentImages[currentImageIndex]}
                alt={`${dish.name} - ${viewMode.toUpperCase()} view`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              
              {/* Image Navigation */}
              {currentImages.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute left-4 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute right-4 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {currentImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* View Mode Badge */}
            <Badge
              variant="secondary"
              className="absolute top-4 left-4 bg-black/50 text-white"
            >
              {viewMode === '2d' ? 'STANDARD' : 'ITEM'} View {currentImageIndex + 1}/{currentImages.length}
            </Badge>
          </div>

          {/* Details */}
          <div className="p-6 space-y-4">
            <div>
              <p className="text-muted-foreground mb-2">{dish.description}</p>
              <p className="text-2xl font-bold text-primary">₹{dish.price}</p>
            </div>

            {viewMode === '3d' && (
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  📸 <strong>Item Preview:</strong> Browse through multiple images of this dish! 
                  Navigate through different angles and variations to see exactly how your food will look. 
                  All images are optimized for the best viewing experience.
                </p>
              </div>
            )}

            <div className="flex gap-4 text-sm text-muted-foreground">
              <div>
                <strong>Category:</strong> {dish.category}
              </div>
              <div>
                <strong>Prep Time:</strong> 15-20 minutes
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};