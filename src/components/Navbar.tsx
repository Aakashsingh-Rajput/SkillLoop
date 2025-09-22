import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path || 
    (path === '/dashboard' && location.pathname === '/');

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">SL</span>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="font-semibold text-xl bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            SkillLoop
          </button>
        </div>

        {/* Navigation Section */}
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => navigate('/dashboard')}
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
                isActive('/dashboard') 
                  ? 'text-indigo bg-indigo/10' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
              }`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => navigate('/matches')}
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
                isActive('/matches') 
                  ? 'text-indigo bg-indigo/10' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
              }`}
            >
              Matches
            </button>
            <button 
              onClick={() => navigate('/sessions')}
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
                isActive('/sessions') 
                  ? 'text-indigo bg-indigo/10' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
              }`}
            >
              Sessions
            </button>
            <button 
              onClick={() => navigate('/profile')}
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
                isActive('/profile') 
                  ? 'text-indigo bg-indigo/10' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
              }`}
            >
              Profile
            </button>
            <button 
              onClick={() => navigate('/community')}
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
                isActive('/community') 
                  ? 'text-indigo bg-indigo/10' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
              }`}
            >
              Community
            </button>
          </nav>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem onClick={() => navigate('/profile')}>
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/chat')}>
                Messages
              </DropdownMenuItem>
              <DropdownMenuItem>
                Credits: 150
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="text-destructive"
                onClick={() => {
                  localStorage.removeItem('skillloop_authenticated');
                  localStorage.removeItem('skillloop_user');
                  window.location.href = '/';
                }}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;