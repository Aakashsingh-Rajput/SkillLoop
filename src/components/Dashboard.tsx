import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, Clock, Star, Award, Target } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Sample data for charts
  const weeklyActivityData = [
    { day: 'Mon', sessions: 2, hours: 3 },
    { day: 'Tue', sessions: 1, hours: 1.5 },
    { day: 'Wed', sessions: 3, hours: 4 },
    { day: 'Thu', sessions: 2, hours: 2.5 },
    { day: 'Fri', sessions: 1, hours: 1 },
    { day: 'Sat', sessions: 0, hours: 0 },
    { day: 'Sun', sessions: 2, hours: 3 }
  ];

  const skillProgressData = [
    { skill: 'React', level: 'Advanced', sessionsCompleted: 15, totalSessions: 20, hoursSpent: 45 },
    { skill: 'Python', level: 'Intermediate', sessionsCompleted: 8, totalSessions: 15, hoursSpent: 24 },
    { skill: 'Design', level: 'Intermediate', sessionsCompleted: 12, totalSessions: 18, hoursSpent: 36 },
    { skill: 'Communication', level: 'Advanced', sessionsCompleted: 16, totalSessions: 18, hoursSpent: 32 }
  ];

  const creditsData = [
    { name: 'Earned', value: 150, color: '#3b82f6' },
    { name: 'Spent', value: 120, color: '#10b981' },
    { name: 'Pending', value: 30, color: '#f59e0b' }
  ];

  return (
    <div className="container max-w-7xl mx-auto px-4 py-4 sm:py-8">
      <div className="space-y-6 sm:space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">Welcome back, Aakash!</h1>
            <p className="text-muted-foreground">You're on track to achieve your learning goals. Keep going!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="indigo" 
              onClick={() => navigate("/matches")}
            >
              Find New Matches
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate("/sessions")}
            >
              Schedule Session
            </Button>
          </div>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-primary text-primary-foreground hover:shadow-card transition-shadow cursor-pointer">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription className="text-primary-foreground/80">Credits Balance</CardDescription>
                <Award className="w-5 h-5 text-primary-foreground/80" />
              </div>
              <CardTitle className="text-3xl font-bold">150</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-primary-foreground/80">
                <TrendingUp className="w-4 h-4 mr-1" />
                +20 from last week
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-card transition-shadow cursor-pointer">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>Active Matches</CardDescription>
                <Users className="w-5 h-5 text-muted-foreground" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">8</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-success">
                <span className="mr-1">+</span>
                2 new this week
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-card transition-shadow cursor-pointer">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>Learning Hours</CardDescription>
                <Clock className="w-5 h-5 text-muted-foreground" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">32</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card transition-shadow cursor-pointer">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>Average Rating</CardDescription>
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">4.8</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">From 23 reviews</p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Activity</CardTitle>
              <CardDescription>Your learning sessions and hours this week</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={weeklyActivityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sessions" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Credits Overview</CardTitle>
              <CardDescription>Your credit usage breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={creditsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {creditsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4">
                {creditsData.map((entry) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                    <span className="text-sm text-muted-foreground">{entry.name}: {entry.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Learning Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Skill Development Progress
            </CardTitle>
            <CardDescription>Track your learning journey with sessions and experience levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {skillProgressData.map((skill) => {
                const progressPercentage = (skill.sessionsCompleted / skill.totalSessions) * 100;
                const getLevelColor = (level: string) => {
                  switch (level.toLowerCase()) {
                    case 'beginner': return 'bg-yellow-500';
                    case 'intermediate': return 'bg-blue-500';
                    case 'advanced': return 'bg-green-500';
                    case 'expert': return 'bg-purple-500';
                    default: return 'bg-gray-500';
                  }
                };
                
                return (
                  <div key={skill.skill} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{skill.skill}</span>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="text-xs">
                          <div className={`w-2 h-2 rounded-full ${getLevelColor(skill.level)} mr-1`}></div>
                          {skill.level}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {skill.sessionsCompleted}/{skill.totalSessions} sessions
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Progress value={progressPercentage} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{skill.hoursSpent} hours practiced</span>
                        <span>{Math.round(progressPercentage)}% sessions completed</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Skills Overview */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="overflow-x-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview" className="text-xs sm:text-sm">Overview</TabsTrigger>
              <TabsTrigger value="teaching" className="text-xs sm:text-sm">Teaching</TabsTrigger>
              <TabsTrigger value="learning" className="text-xs sm:text-sm">Learning</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="indigo" className="w-full" onClick={() => navigate("/matches")}>
                    Find New Matches
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => navigate("/sessions")}>
                    Schedule Session
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => navigate("/community")}>
                    Join Community
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => navigate("/chat")}>
                    Open Messages
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Completed React session with Sarah</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>New match found: Mike Johnson</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Upcoming: Python session tomorrow</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">First Session Complete</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">10 Sessions Milestone</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Highly Rated Teacher</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="teaching" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skills I Teach</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">UI/UX Design</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Teaching Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Sessions</span>
                    <span className="font-semibold">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Average Rating</span>
                    <span className="font-semibold">4.9/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Credits Earned</span>
                    <span className="font-semibold">470</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="learning" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skills I Want to Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Data Science</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                    <Badge variant="outline">Public Speaking</Badge>
                    <Badge variant="outline">DevOps</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Learning Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sessions Attended</span>
                    <span className="font-semibold">32</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Skills Acquired</span>
                    <span className="font-semibold">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Credits Spent</span>
                    <span className="font-semibold">320</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Upcoming Sessions */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Your scheduled learning and teaching sessions</CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={() => navigate("/sessions")}>
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-1">
                  <div className="font-medium text-foreground">React Hooks Deep Dive</div>
                  <div className="text-sm text-muted-foreground">with Sarah Chen • Tomorrow at 2:00 PM</div>
                  <div className="text-xs text-muted-foreground mt-1">60 minutes • Video Call</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Teaching</Badge>
                  <Button size="sm" variant="outline">
                    Join
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-1">
                  <div className="font-medium text-foreground">Python Fundamentals</div>
                  <div className="text-sm text-muted-foreground">with Mike Johnson • Friday at 10:00 AM</div>
                  <div className="text-xs text-muted-foreground mt-1">45 minutes • Video Call</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Learning</Badge>
                  <Button size="sm" variant="outline">
                    Prepare
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-1">
                  <div className="font-medium text-foreground">Design Systems Workshop</div>
                  <div className="text-sm text-muted-foreground">with Alex Rivera • Next Monday at 3:00 PM</div>
                  <div className="text-xs text-muted-foreground mt-1">90 minutes • Video Call</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Teaching</Badge>
                  <Button size="sm" variant="outline">
                    Plan
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;