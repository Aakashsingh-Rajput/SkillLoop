import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Filter, Star, MessageCircle, Video } from "lucide-react";

const matches = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "SC",
    teaches: ["React", "TypeScript", "Next.js"],
    learns: ["Python", "Data Science"],
    matchScore: 95,
    bio: "Frontend engineer with 5 years experience. Love teaching React patterns!"
  },
  {
    id: 2,
    name: "Mike Johnson",
    avatar: "MJ",
    teaches: ["Python", "Machine Learning", "Data Analysis"],
    learns: ["React", "UI Design"],
    matchScore: 88,
    bio: "Data scientist passionate about making ML accessible to everyone."
  },
  {
    id: 3,
    name: "Emma Davis",
    avatar: "ED",
    teaches: ["UI/UX Design", "Figma", "Photography"],
    learns: ["React", "Web Development"],
    matchScore: 82,
    bio: "Product designer who loves creating beautiful, user-centered experiences."
  }
];

const Matches = () => {
  const [selectedMatch, setSelectedMatch] = useState<typeof matches[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [skillFilter, setSkillFilter] = useState("all");

  const filteredMatches = matches.filter(match => {
    const matchesSearch = match.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         match.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkill = !skillFilter || skillFilter === "all" || 
                        match.teaches.some(skill => skill.toLowerCase().includes(skillFilter.toLowerCase())) ||
                        match.learns.some(skill => skill.toLowerCase().includes(skillFilter.toLowerCase()));
    return matchesSearch && matchesSkill;
  });

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Your Matches</h1>
          <p className="text-muted-foreground">Connect with peers who complement your skills</p>
        </div>
        <Button variant="indigo">
          Find More Matches
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search by name, skills, or bio..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select value={skillFilter} onValueChange={setSkillFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by skill" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Skills</SelectItem>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMatches.map((match) => (
          <Card key={match.id} className="hover:shadow-card transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-indigo text-indigo-foreground flex items-center justify-center font-medium">
                    {match.avatar}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{match.name}</CardTitle>
                    <CardDescription className="text-sm text-indigo font-medium">
                      {match.matchScore}% match
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Teaches</p>
                <div className="flex flex-wrap gap-1">
                  {match.teaches.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Wants to learn</p>
                <div className="flex flex-wrap gap-1">
                  {match.learns.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">{match.bio}</p>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    <span className="text-xs">Chat</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <Video className="w-3 h-3" />
                    <span className="text-xs">Video</span>
                  </Button>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-muted-foreground">4.9</span>
                  </div>
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="indigo" 
                    className="w-full"
                    onClick={() => setSelectedMatch(match)}
                  >
                    Request Session
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Request Session with {match.name}</DialogTitle>
                    <DialogDescription>
                      Schedule a skill exchange session
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="session-type">Session Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose session type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1on1">1-on-1 Session</SelectItem>
                          <SelectItem value="group">Small Group (3-6 people)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="45">45 minutes</SelectItem>
                          <SelectItem value="60">60 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input type="date" id="date" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time</Label>
                      <Input type="time" id="time" />
                    </div>

                    <div className="flex space-x-2 pt-4">
                      <Button variant="outline" className="flex-1">
                        Cancel
                      </Button>
                      <Button variant="indigo" className="flex-1">
                        Send Request
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Matches;