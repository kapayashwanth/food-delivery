import { useState } from 'react';
import { storageService, User } from '@/lib/storage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { UtensilsCrossed, Truck, User as UserIcon } from 'lucide-react';

interface LoginPageProps {
  onLogin: (user: User) => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async () => {
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const user = storageService.login(email, password);
      
      if (user) {
        toast({
          title: "Welcome!",
          description: `Logged in as ${user.role}`,
        });
        onLogin(user);
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials. Use demo account.",
          variant: "destructive"
        });
      }
      
      setLoading(false);
    }, 1000);
  };

  const setDemoCredentials = (role: 'customer' | 'restaurant' | 'delivery') => {
    const credentials = {
      customer: 'customer@demo.com',
      restaurant: 'restaurant@demo.com',
      delivery: 'delivery@demo.com'
    };
    setEmail(credentials[role]);
    setPassword('demo123');
  };

  const roleIcons = {
    customer: <UserIcon className="w-8 h-8" />,
    restaurant: <UtensilsCrossed className="w-8 h-8" />,
    delivery: <Truck className="w-8 h-8" />
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-light/30 to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md fade-in">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">FoodFlow</h1>
          <p className="text-muted-foreground">Next-Gen Food Delivery</p>
        </div>

        <Card className="card-elevated">
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>
              Choose your role and sign in to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="customer" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="customer" className="flex items-center gap-2">
                  <UserIcon className="w-4 h-4" />
                  Customer
                </TabsTrigger>
                <TabsTrigger value="restaurant" className="flex items-center gap-2">
                  <UtensilsCrossed className="w-4 h-4" />
                  Restaurant
                </TabsTrigger>
                <TabsTrigger value="delivery" className="flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  Delivery
                </TabsTrigger>
              </TabsList>

              {(['customer', 'restaurant', 'delivery'] as const).map((role) => (
                <TabsContent key={role} value={role} className="space-y-4">
                  <div className="flex items-center justify-center p-4 bg-secondary/50 rounded-lg">
                    {roleIcons[role]}
                    <div className="ml-3">
                      <h3 className="font-semibold capitalize">{role} Portal</h3>
                      <p className="text-sm text-muted-foreground">
                        {role === 'customer' && 'Browse restaurants and order food'}
                        {role === 'restaurant' && 'Manage menu and orders'}
                        {role === 'delivery' && 'Accept and deliver orders'}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Email"
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
                      onClick={handleLogin} 
                      className="w-full btn-hero" 
                      disabled={loading}
                    >
                      {loading ? 'Signing in...' : 'Sign In'}
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={() => setDemoCredentials(role)}
                      className="w-full"
                    >
                      Use Demo Account
                    </Button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>Demo app - All data is stored locally</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;