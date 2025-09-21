import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { authService } from '@/lib/auth';
import { Truck, ArrowLeft } from 'lucide-react';

const DeliveryLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSignIn = async () => {
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    const { data, error } = await authService.signIn(email, password);
    
    if (error) {
      toast({
        title: "Login Failed",
        description: error.message,
        variant: "destructive"
      });
    } else if (data.user) {
      // Check if user has delivery role
      const { profile } = await authService.getUserProfile(data.user.id);
      if (profile?.role !== 'delivery') {
        toast({
          title: "Access Denied",
          description: "This account is not authorized for delivery access",
          variant: "destructive"
        });
        await authService.signOut();
      } else {
        toast({
          title: "Welcome back!",
          description: "Successfully signed in to delivery portal",
        });
        window.location.href = '/';
      }
    }
    
    setLoading(false);
  };

  const useDemoAccount = () => {
    setEmail('delivery@foodflow.com');
    setPassword('demo123');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/30 to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md fade-in">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Truck className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-primary">FoodFlow</h1>
          </div>
          <p className="text-muted-foreground">Delivery Partner Portal</p>
        </div>

        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              Delivery Portal
            </CardTitle>
            <CardDescription>
              Sign in to start delivering orders
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Delivery Partner Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="space-y-3">
              <Button 
                onClick={handleSignIn} 
                className="w-full btn-hero" 
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign In to Delivery Portal'}
              </Button>
              
              <Button
                variant="outline"
                onClick={useDemoAccount}
                className="w-full"
              >
                Use Demo Delivery Account
              </Button>
            </div>

            <div className="mt-6 pt-4 border-t">
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <a href="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Customer Portal
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-muted-foreground space-y-1">
          <p><strong>Demo Login:</strong></p>
          <p>Email: delivery@foodflow.com</p>
          <p>Password: demo123</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryLoginPage;