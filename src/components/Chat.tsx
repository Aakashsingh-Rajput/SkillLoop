import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { 
  Send, 
  Video, 
  Phone, 
  MoreVertical, 
  Paperclip, 
  Smile,
  Search,
  Info,
  Archive,
  Trash2,
  Star,
  ImageIcon,
  FileText,
  Check,
  CheckCheck,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const conversations = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "SC",
    lastMessage: "Hey! Ready for our React session?",
    timestamp: "2m ago",
    unread: 0,
    online: true,
    typing: false,
    pinned: true
  },
  {
    id: 2,
    name: "Mike Johnson", 
    avatar: "MJ",
    lastMessage: "Can we reschedule tomorrow's session?",
    timestamp: "1h ago",
    unread: 2,
    online: false,
    typing: false,
    pinned: false
  },
  {
    id: 3,
    name: "Emma Davis",
    avatar: "ED",
    lastMessage: "Here's the design file we discussed",
    timestamp: "3h ago", 
    unread: 0,
    online: true,
    typing: false,
    pinned: false
  },
  {
    id: 4,
    name: "John Wilson",
    avatar: "JW",
    lastMessage: "Thanks for the Python help!",
    timestamp: "Yesterday",
    unread: 0,
    online: false,
    typing: false,
    pinned: false
  }
];

const messages = [
  {
    id: 1,
    sender: "Sarah Chen",
    avatar: "SC",
    content: "Hey! Ready for our React session?",
    timestamp: "10:25 AM",
    isSelf: false,
    status: "read",
    type: "text"
  },
  {
    id: 2,
    sender: "You",
    avatar: "AR",
    content: "Yes! Looking forward to learning about hooks",
    timestamp: "10:26 AM", 
    isSelf: true,
    status: "read",
    type: "text"
  },
  {
    id: 3,
    sender: "Sarah Chen",
    avatar: "SC",
    content: "Perfect! I've prepared some examples. Should we start with useState?",
    timestamp: "10:27 AM",
    isSelf: false,
    status: "read",
    type: "text"
  },
  {
    id: 4,
    sender: "You", 
    avatar: "AR",
    content: "That sounds great! I have some specific questions about state management",
    timestamp: "10:28 AM",
    isSelf: true,
    status: "delivered",
    type: "text"
  },
  {
    id: 5,
    sender: "Sarah Chen",
    avatar: "SC",
    content: "Great! Let me share a code example with you",
    timestamp: "10:29 AM",
    isSelf: false,
    status: "read",
    type: "text"
  }
];

const Chat = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isVideoCallOpen, setIsVideoCallOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Simulate message sending
      toast({
        title: "Message sent",
        description: "Your message has been delivered",
      });
      setNewMessage("");
      
      // Simulate typing indicator
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
      }, 2000);
    }
  };

  const handleStartVideoCall = () => {
    setIsVideoCallOpen(true);
    toast({
      title: "Starting video call",
      description: `Connecting with ${selectedConversation.name}...`,
    });
  };

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getMessageStatus = (status: string) => {
    switch (status) {
      case "sent":
        return <Check className="w-3 h-3 text-muted-foreground" />;
      case "delivered":
        return <CheckCheck className="w-3 h-3 text-muted-foreground" />;
      case "read":
        return <CheckCheck className="w-3 h-3 text-indigo" />;
      default:
        return <Clock className="w-3 h-3 text-muted-foreground" />;
    }
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
        {/* Conversations List */}
        <Card className="lg:col-span-1 flex flex-col">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Messages</CardTitle>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0 flex-1">
            <ScrollArea className="h-full">
              <div className="space-y-1 p-4">
                {filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors relative ${
                      selectedConversation?.id === conversation.id
                        ? "bg-indigo/10 border border-indigo/20"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    {conversation.pinned && (
                      <Star className="absolute top-2 right-2 w-3 h-3 text-yellow-500 fill-current" />
                    )}
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                          {conversation.avatar}
                        </AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm truncate">{conversation.name}</p>
                        <span className="text-xs text-muted-foreground">
                          {conversation.timestamp}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground truncate">
                          {conversation.typing ? (
                            <span className="text-indigo italic">typing...</span>
                          ) : (
                            conversation.lastMessage
                          )}
                        </p>
                        {conversation.unread > 0 && (
                          <Badge variant="destructive" className="text-xs ml-2">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-2 flex flex-col">
          {selectedConversation && (
            <>
              {/* Chat Header */}
              <CardHeader className="pb-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                          {selectedConversation.avatar}
                        </AvatarFallback>
                      </Avatar>
                      {selectedConversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{selectedConversation.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {selectedConversation.online ? (
                          <span className="text-green-600">Online</span>
                        ) : (
                          "Last seen 1h ago"
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={handleStartVideoCall}
                    >
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Info className="w-4 h-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Archive className="w-4 h-4 mr-2" />
                          Archive Chat
                        </DropdownMenuItem>
                        <Separator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete Chat
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-4 overflow-hidden">
                <ScrollArea className="h-full">
                  <div className="space-y-4 pb-4">
                    {messages.map((message, index) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.isSelf ? "flex-row-reverse" : ""}`}
                      >
                        <Avatar className="w-8 h-8 flex-shrink-0">
                          <AvatarFallback className="text-xs bg-gradient-primary text-primary-foreground">
                            {message.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`max-w-xs lg:max-w-md ${message.isSelf ? "text-right" : ""}`}>
                          <div
                            className={`p-3 rounded-2xl ${
                              message.isSelf
                                ? "bg-indigo text-indigo-foreground rounded-br-md"
                                : "bg-muted rounded-bl-md"
                            }`}
                          >
                            <p className="text-sm leading-relaxed">{message.content}</p>
                          </div>
                          <div className={`flex items-center gap-1 mt-1 ${message.isSelf ? "justify-end" : ""}`}>
                            <p className="text-xs text-muted-foreground">
                              {message.timestamp}
                            </p>
                            {message.isSelf && getMessageStatus(message.status)}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Typing Indicator */}
                    {isTyping && (
                      <div className="flex gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs bg-gradient-primary text-primary-foreground">
                            {selectedConversation.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-muted p-3 rounded-2xl rounded-bl-md">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              </CardContent>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex items-end gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <Paperclip className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>
                        <ImageIcon className="w-4 h-4 mr-2" />
                        Share Image
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileText className="w-4 h-4 mr-2" />
                        Share Document
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSendMessage()}
                      className="pr-10 resize-none min-h-[40px]"
                    />
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    >
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <Button 
                    variant="indigo" 
                    size="sm"
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </Card>
      </div>

      {/* Video Call Dialog */}
      <Dialog open={isVideoCallOpen} onOpenChange={setIsVideoCallOpen}>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Video Call with {selectedConversation?.name}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 text-center text-white">
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarFallback className="text-2xl bg-white/20 text-white">
                  {selectedConversation?.avatar}
                </AvatarFallback>
              </Avatar>
              <p className="text-lg font-medium mb-2">{selectedConversation?.name}</p>
              <p className="text-sm opacity-80">Connecting...</p>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
              <Button variant="destructive" size="sm" onClick={() => setIsVideoCallOpen(false)}>
                End Call
              </Button>
              <Button variant="outline" size="sm">
                <Video className="w-4 h-4 mr-2" />
                Video Off
              </Button>
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Mute
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Chat;