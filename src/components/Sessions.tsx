import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Users, Video, Filter, Plus } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";

const upcomingSessions = [
  {
    id: 1,
    title: "React Hooks Deep Dive",
    partner: "Sarah Chen",
    date: "Tomorrow",
    time: "2:00 PM",
    duration: "60 min",
    type: "1-on-1",
    status: "confirmed",
    meetingLink: "https://meet.skillloop.app/room/abc123"
  },
  {
    id: 2,
    title: "Python Basics",
    partner: "Mike Johnson",
    date: "Friday",
    time: "10:00 AM",
    duration: "45 min",
    type: "1-on-1",
    status: "pending",
    meetingLink: null
  }
];

const pastSessions = [
  {
    id: 3,
    title: "UI/UX Design Principles",
    partner: "Emma Davis",
    date: "Last Tuesday",
    time: "3:00 PM",
    duration: "60 min",
    type: "1-on-1",
    status: "completed",
    rating: null
  },
  {
    id: 4,
    title: "TypeScript Advanced Types",
    partner: "Alex Wong",
    date: "Last Friday",
    time: "1:00 PM",
    duration: "45 min",
    type: "1-on-1",
    status: "completed",
    rating: 5
  }
];

const Sessions = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="container max-w-7xl mx-auto px-4 py-4 sm:py-8 space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-semibold">Your Sessions</h1>
          <p className="text-muted-foreground">Manage your upcoming and past learning sessions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="indigo">
            <Plus className="w-4 h-4 mr-2" />
            Schedule Session
          </Button>
        </div>
      </div>

      {/* Calendar and Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-sm">Session Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <Calendar className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo" />
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-xs text-muted-foreground">This Week</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-xs text-muted-foreground">Total Hours</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

        <Tabs defaultValue="upcoming" className="space-y-6">
        <div className="overflow-x-auto">
          <TabsList className="grid w-full grid-cols-3 max-w-full sm:max-w-lg">
            <TabsTrigger value="upcoming" className="text-xs sm:text-sm">Upcoming</TabsTrigger>
            <TabsTrigger value="past" className="text-xs sm:text-sm">Past Sessions</TabsTrigger>
            <TabsTrigger value="calendar" className="text-xs sm:text-sm">Calendar View</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="upcoming" className="space-y-4">
          {upcomingSessions.map((session) => (
            <Card key={session.id} className="hover:shadow-card transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{session.title}</CardTitle>
                    <CardDescription>
                      with {session.partner} • {session.date}, {session.time} • {session.duration}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={session.status === 'confirmed' ? 'default' : 'secondary'}>
                      {session.status}
                    </Badge>
                    <Badge variant="outline">{session.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  {session.status === 'confirmed' && session.meetingLink ? (
                    <div className="flex gap-2">
                      <Button variant="indigo">
                        <Video className="w-4 h-4 mr-2" />
                        Join Session
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">
                            Session Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{session.title}</DialogTitle>
                            <DialogDescription>Session with {session.partner}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">Date & Time</p>
                                <p>{session.date}, {session.time}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Duration</p>
                                <p>{session.duration}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Type</p>
                                <p>{session.type}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Status</p>
                                <Badge variant="default">{session.status}</Badge>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" className="flex-1">Reschedule</Button>
                              <Button variant="destructive" className="flex-1">Cancel</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  ) : (
                    <Button variant="outline" disabled>
                      <Clock className="w-4 h-4 mr-2" />
                      Waiting for confirmation
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}

          {upcomingSessions.length === 0 && (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">No upcoming sessions scheduled</p>
                <Button variant="indigo" className="mt-4">
                  Find Matches
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          {pastSessions.map((session) => (
            <Card key={session.id} className="hover:shadow-card transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{session.title}</CardTitle>
                    <CardDescription>
                      with {session.partner} • {session.date}, {session.time} • {session.duration}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">completed</Badge>
                    {session.rating && (
                      <Badge variant="outline">★ {session.rating}/5</Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  {!session.rating ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="indigo">
                          Give Feedback
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Session Feedback</DialogTitle>
                          <DialogDescription>
                            How was your session with {session.partner}?
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <Label htmlFor="rating">Rating (1-5)</Label>
                            <div className="flex space-x-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                  key={star}
                                  className="w-8 h-8 text-2xl hover:text-yellow-400 transition-colors"
                                >
                                  ★
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="comment">Comment (optional)</Label>
                            <Textarea 
                              id="comment" 
                              placeholder="Share your experience..." 
                              className="min-h-20"
                            />
                          </div>
                          <div className="flex space-x-2 pt-4">
                            <Button variant="outline" className="flex-1">
                              Skip
                            </Button>
                            <Button variant="indigo" className="flex-1">
                              Submit Feedback
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button variant="outline" disabled>
                      Feedback Given
                    </Button>
                  )}
                  <Button variant="ghost">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Calendar View</CardTitle>
              <CardDescription>See all your sessions at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }, (_, i) => {
                  const dayNumber = i - 5 + 1; // Assuming month starts on a Wednesday
                  const hasSession = [15, 18, 22].includes(dayNumber);
                  return (
                    <div
                      key={i}
                      className={`aspect-square p-2 text-sm border rounded-lg flex flex-col ${
                        dayNumber > 0 && dayNumber <= 31
                          ? hasSession
                            ? 'bg-indigo/10 border-indigo text-indigo'
                            : 'hover:bg-muted/50 cursor-pointer'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {dayNumber > 0 && dayNumber <= 31 && (
                        <>
                          <span>{dayNumber}</span>
                          {hasSession && (
                            <div className="text-xs mt-1">
                              <div className="w-2 h-2 bg-indigo rounded-full"></div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Sessions;