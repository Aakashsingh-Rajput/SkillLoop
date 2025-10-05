import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel 
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  MessageCircle, 
  Video, 
  Bell, 
  Phone, 
  Users, 
  Calendar,
  User,
  Settings,
  LogOut,
  Dot,
  Menu,
  X
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVideoCallOpen, setIsVideoCallOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path || 
    (path === '/dashboard' && location.pathname === '/');

  // Mock data for messages and notifications
  const unreadMessages = 3;
  const notifications = 2;
  const isOnline = true;

  const recentMessages = [
    { id: 1, name: "Sarah Chen", message: "Ready for our React session?", time: "2m ago", avatar: "SC", isOnline: true },
    { id: 2, name: "Mike Johnson", message: "Thanks for the Python help!", time: "5m ago", avatar: "MJ", isOnline: false },
    { id: 3, name: "Emma Davis", message: "Can we reschedule?", time: "1h ago", avatar: "ED", isOnline: true },
  ];

  const activeVideoSessions = [
    { id: 1, name: "Sarah Chen", type: "Teaching React", duration: "15:30" },
    { id: 2, name: "Study Group", type: "Python Discussion", participants: 5 },
  ];

  const handleStartVideoCall = (contactName: string) => {
    // In a real app, this would initiate a video call
    console.log(`Starting video call with ${contactName}`);
    setIsVideoCallOpen(false);
  };

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
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-2 mt-6">
                <Button
                  variant={isActive('/dashboard') ? 'secondary' : 'ghost'}
                  onClick={() => {
                    navigate('/dashboard');
                    setIsMobileMenuOpen(false);
                  }}
                  className="justify-start"
                >
                  Dashboard
                </Button>
                <Button
                  variant={isActive('/matches') ? 'secondary' : 'ghost'}
                  onClick={() => {
                    navigate('/matches');
                    setIsMobileMenuOpen(false);
                  }}
                  className="justify-start"
                >
                  Matches
                </Button>
                <Button
                  variant={isActive('/sessions') ? 'secondary' : 'ghost'}
                  onClick={() => {
                    navigate('/sessions');
                    setIsMobileMenuOpen(false);
                  }}
                  className="justify-start"
                >
                  Sessions
                </Button>
                <Button
                  variant={isActive('/community') ? 'secondary' : 'ghost'}
                  onClick={() => {
                    navigate('/community');
                    setIsMobileMenuOpen(false);
                  }}
                  className="justify-start"
                >
                  Community
                </Button>
                <Button
                  variant={isActive('/profile') ? 'secondary' : 'ghost'}
                  onClick={() => {
                    navigate('/profile');
                    setIsMobileMenuOpen(false);
                  }}
                  className="justify-start"
                >
                  Profile
                </Button>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 lg:space-x-6">
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
              onClick={() => navigate('/community')}
              className={`text-sm font-medium transition-colors px-3 py-2 rounded-lg ${
                isActive('/community') 
                  ? 'text-indigo bg-indigo/10' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
              }`}
            >
              Community
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
          </nav>

          {/* Message Center */}
          <Dialog open={isMessagesOpen} onOpenChange={setIsMessagesOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="relative">
                <MessageCircle className="h-5 w-5" />
                {unreadMessages > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {unreadMessages}
                  </Badge>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Messages</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                {recentMessages.map((msg) => (
                  <div key={msg.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{msg.avatar}</AvatarFallback>
                      </Avatar>
                      {msg.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium truncate">{msg.name}</p>
                        <span className="text-xs text-muted-foreground">{msg.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{msg.message}</p>
                    </div>
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => {
                    navigate('/chat');
                    setIsMessagesOpen(false);
                  }}
                >
                  View All Messages
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Video Call Center */}
          <Dialog open={isVideoCallOpen} onOpenChange={setIsVideoCallOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="relative">
                <Video className="h-5 w-5" />
                {activeVideoSessions.length > 0 && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Video Calls</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                {activeVideoSessions.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Active Sessions</h4>
                    {activeVideoSessions.map((session) => (
                      <div key={session.id} className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <div>
                            <p className="text-sm font-medium">{session.name}</p>
                            <p className="text-xs text-muted-foreground">{session.type}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {session.duration && (
                            <span className="text-xs text-muted-foreground">{session.duration}</span>
                          )}
                          {session.participants && (
                            <Badge variant="secondary" className="text-xs">
                              {session.participants} users
                            </Badge>
                          )}
                          <Button size="sm" variant="outline">
                            Join
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Quick Start Call</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleStartVideoCall("Contact")}
                      className="flex items-center space-x-2"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Audio Call</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleStartVideoCall("Contact")}
                      className="flex items-center space-x-2"
                    >
                      <Video className="h-4 w-4" />
                      <span>Video Call</span>
                    </Button>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => {
                    navigate('/sessions');
                    setIsVideoCallOpen(false);
                  }}
                >
                  Schedule New Session
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {notifications}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="end">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-start space-x-3 p-3">
                <Calendar className="h-4 w-4 mt-0.5 text-blue-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Session Reminder</p>
                  <p className="text-xs text-muted-foreground">React session with Sarah in 30 minutes</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-start space-x-3 p-3">
                <Users className="h-4 w-4 mt-0.5 text-green-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New Match Found</p>
                  <p className="text-xs text-muted-foreground">Mike Johnson wants to learn Python</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center text-sm">
                View All Notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" alt="User" />
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                    AR
                  </AvatarFallback>
                </Avatar>
                {/* Online Status Indicator */}
                {isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Aakash Rajput</p>
                  <p className="text-xs leading-none text-muted-foreground">aakash@example.com</p>
                  <div className="flex items-center mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs text-green-600">Online</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/profile')}>
                <User className="mr-2 h-4 w-4" />
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/chat')}>
                <MessageCircle className="mr-2 h-4 w-4" />
                Messages
                {unreadMessages > 0 && (
                  <Badge variant="secondary" className="ml-auto">
                    {unreadMessages}
                  </Badge>
                )}
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Badge variant="outline" className="mr-2">
                  Credits: 150
                </Badge>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="text-destructive"
                onClick={() => {
                  localStorage.removeItem('skillloop_authenticated');
                  localStorage.removeItem('skillloop_user');
                  window.location.href = '/';
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
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