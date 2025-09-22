import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Send, Video, Phone, MoreVertical, Paperclip } from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "SC",
    lastMessage: "Thanks for the React session! Really helpful",
    timestamp: "2m ago",
    unread: 0,
    online: true
  },
  {
    id: 2,
    name: "Mike Johnson", 
    avatar: "MJ",
    lastMessage: "Can we reschedule tomorrow's session?",
    timestamp: "1h ago",
    unread: 2,
    online: false
  },
  {
    id: 3,
    name: "Emma Davis",
    avatar: "ED",
    lastMessage: "Here's the design file we discussed",
    timestamp: "3h ago", 
    unread: 0,
    online: true
  }
];

const messages = [
  {
    id: 1,
    sender: "Sarah Chen",
    avatar: "SC",
    content: "Hey! Ready for our React session?",
    timestamp: "10:25 AM",
    isSelf: false
  },
  {
    id: 2,
    sender: "You",
    avatar: "JD",
    content: "Yes! Looking forward to learning about hooks",
    timestamp: "10:26 AM", 
    isSelf: true
  },
  {
    id: 3,
    sender: "Sarah Chen",
    avatar: "SC",
    content: "Perfect! I've prepared some examples. Should we start with useState?",
    timestamp: "10:27 AM",
    isSelf: false
  },
  {
    id: 4,
    sender: "You", 
    avatar: "JD",
    content: "That sounds great! I have some specific questions about state management",
    timestamp: "10:28 AM",
    isSelf: true
  }
];

const Chat = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage("");
    }
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Messages</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-full">
              <div className="space-y-1 p-4">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedConversation?.id === conversation.id
                        ? "bg-indigo/10"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback>{conversation.avatar}</AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm">{conversation.name}</p>
                        <span className="text-xs text-muted-foreground">
                          {conversation.timestamp}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {conversation.lastMessage}
                      </p>
                    </div>
                    {conversation.unread > 0 && (
                      <Badge variant="destructive" className="text-xs">
                        {conversation.unread}
                      </Badge>
                    )}
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
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>{selectedConversation.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{selectedConversation.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {selectedConversation.online ? "Online" : "Last seen 1h ago"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Video className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>Video Call with {selectedConversation.name}</DialogTitle>
                        </DialogHeader>
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <p className="text-muted-foreground">Video call interface would go here</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="ghost" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-4">
                <ScrollArea className="h-full">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.isSelf ? "flex-row-reverse" : ""}`}
                      >
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs">{message.avatar}</AvatarFallback>
                        </Avatar>
                        <div className={`max-w-xs lg:max-w-md ${message.isSelf ? "text-right" : ""}`}>
                          <div
                            className={`p-3 rounded-lg ${
                              message.isSelf
                                ? "bg-indigo text-indigo-foreground"
                                : "bg-muted"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <Input
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button 
                    variant="indigo" 
                    size="sm"
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Chat;