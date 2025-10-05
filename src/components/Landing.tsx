import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-3d.jpg";
import Footer from "./Footer";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-semibold text-lg text-foreground">SkillLoop</div>
          <Button 
            variant="indigo" 
            size="sm"
            onClick={() => navigate("/auth")}
          >
            Get Started Free
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <div className="container max-w-7xl mx-auto px-4 py-10 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit text-xs sm:text-sm">
                  Join 10,000+ Learners Worldwide
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                  Transform Skills Into
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Success</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Connect with peers, exchange expertise, and accelerate your growth through our intelligent skill-matching platform. Learn faster, teach better, grow together.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="indigo" 
                  size="lg" 
                  className="h-12 px-8"
                  onClick={() => navigate("/auth")}
                >
                  Start Learning Free
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-12 px-8"
                >
                  Watch Demo
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-semibold text-foreground">50K+</div>
                  <div className="text-sm text-muted-foreground">Skills Exchanged</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Global Access</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professionals collaborating and sharing knowledge" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="bg-muted/30 py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Why Choose SkillLoop?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the future of peer-to-peer learning with our advanced matching system and credit-based economy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-indigo/10 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-indigo rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Smart Matching</h3>
                  <p className="text-muted-foreground">
                    AI-powered algorithm connects you with the perfect learning partners based on skills, goals, and availability.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-success/10 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-success rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Credit System</h3>
                  <p className="text-muted-foreground">
                    Fair and transparent credit-based exchange ensures everyone contributes and benefits equally from the community.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Global Community</h3>
                  <p className="text-muted-foreground">
                    Connect with learners and experts worldwide. Access diverse perspectives and accelerate your growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-20">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Ready to Transform Your Learning Journey?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of professionals who are already growing their skills and advancing their careers through SkillLoop.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="indigo" 
                  size="lg" 
                  className="h-12 px-8"
                  onClick={() => navigate("/auth")}
                >
                  Get Started Free
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-12 px-8"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Landing;