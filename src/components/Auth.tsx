import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle authentication via Supabase
    // For now, we'll simulate successful auth
    localStorage.setItem('skillloop_authenticated', 'true');
    localStorage.setItem('skillloop_user', JSON.stringify({
      name: 'Aakash Rajput',
      email: 'aakash@example.com'
    }));
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md shadow-card">
        <CardHeader className="space-y-1 pb-4">
          <CardTitle className="text-xl sm:text-2xl font-semibold text-center">
            {isSignUp ? "Create your account" : "Welcome back"}
          </CardTitle>
          <CardDescription className="text-center">
            {isSignUp 
              ? "Join SkillLoop to start learning and teaching"
              : "Sign in to your SkillLoop account"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" required />
            </div>
            <Button variant="indigo" type="submit" className="w-full">
              {isSignUp ? "Create Account" : "Sign In"}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            {isSignUp ? (
              <span>
                Already have an account?{" "}
                <button 
                  onClick={() => setIsSignUp(false)}
                  className="text-indigo hover:underline font-medium"
                  type="button"
                >
                  Sign in
                </button>
              </span>
            ) : (
              <span>
                Don't have an account?{" "}
                <button 
                  onClick={() => setIsSignUp(true)}
                  className="text-indigo hover:underline font-medium"
                  type="button"
                >
                  Sign up
                </button>
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;