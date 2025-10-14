// Mock Users Dataset
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio: string;
  location: string;
  credits: number;
  rating: number;
  totalSessions: number;
  skillsTeaching: Skill[];
  skillsLearning: Skill[];
  availability: {
    weekdays: string;
    weekends: string;
  };
  joinedDate: string;
}

export interface Skill {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: string;
  priority?: 'low' | 'medium' | 'high';
}

export const skillCategories = [
  'Programming',
  'Design',
  'Business',
  'Marketing',
  'Languages',
  'Music',
  'Fitness',
  'Cooking',
  'Photography',
  'Writing'
];

export const mockSkills: Skill[] = [
  // Programming
  { name: 'React', level: 'advanced', category: 'Programming' },
  { name: 'TypeScript', level: 'intermediate', category: 'Programming' },
  { name: 'Python', level: 'expert', category: 'Programming' },
  { name: 'JavaScript', level: 'advanced', category: 'Programming' },
  { name: 'Node.js', level: 'intermediate', category: 'Programming' },
  { name: 'SQL', level: 'intermediate', category: 'Programming' },
  { name: 'MongoDB', level: 'beginner', category: 'Programming' },
  { name: 'AWS', level: 'intermediate', category: 'Programming' },
  { name: 'Docker', level: 'beginner', category: 'Programming' },
  { name: 'GraphQL', level: 'intermediate', category: 'Programming' },
  
  // Design
  { name: 'UI/UX Design', level: 'advanced', category: 'Design' },
  { name: 'Figma', level: 'expert', category: 'Design' },
  { name: 'Adobe Photoshop', level: 'intermediate', category: 'Design' },
  { name: 'Illustrator', level: 'intermediate', category: 'Design' },
  { name: 'Brand Design', level: 'advanced', category: 'Design' },
  { name: 'Web Design', level: 'advanced', category: 'Design' },
  
  // Business
  { name: 'Product Management', level: 'advanced', category: 'Business' },
  { name: 'Agile Methodology', level: 'intermediate', category: 'Business' },
  { name: 'Business Strategy', level: 'expert', category: 'Business' },
  { name: 'Financial Analysis', level: 'intermediate', category: 'Business' },
  { name: 'Project Management', level: 'advanced', category: 'Business' },
  
  // Marketing
  { name: 'Digital Marketing', level: 'advanced', category: 'Marketing' },
  { name: 'SEO', level: 'intermediate', category: 'Marketing' },
  { name: 'Content Marketing', level: 'advanced', category: 'Marketing' },
  { name: 'Social Media', level: 'intermediate', category: 'Marketing' },
  { name: 'Email Marketing', level: 'beginner', category: 'Marketing' },
  
  // Languages
  { name: 'Spanish', level: 'intermediate', category: 'Languages' },
  { name: 'French', level: 'beginner', category: 'Languages' },
  { name: 'German', level: 'intermediate', category: 'Languages' },
  { name: 'Japanese', level: 'beginner', category: 'Languages' },
  { name: 'Mandarin', level: 'beginner', category: 'Languages' },
  
  // Music
  { name: 'Guitar', level: 'advanced', category: 'Music' },
  { name: 'Piano', level: 'intermediate', category: 'Music' },
  { name: 'Music Theory', level: 'intermediate', category: 'Music' },
  { name: 'Vocals', level: 'beginner', category: 'Music' },
  
  // Other
  { name: 'Yoga', level: 'advanced', category: 'Fitness' },
  { name: 'Cooking', level: 'intermediate', category: 'Cooking' },
  { name: 'Photography', level: 'advanced', category: 'Photography' },
  { name: 'Creative Writing', level: 'intermediate', category: 'Writing' },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    bio: 'Full-stack developer passionate about teaching React and TypeScript. Love helping others learn to code!',
    location: 'San Francisco, CA',
    credits: 150,
    rating: 4.8,
    totalSessions: 45,
    skillsTeaching: [
      { name: 'React', level: 'expert', category: 'Programming', priority: 'high' },
      { name: 'TypeScript', level: 'advanced', category: 'Programming', priority: 'high' },
      { name: 'Node.js', level: 'intermediate', category: 'Programming', priority: 'medium' }
    ],
    skillsLearning: [
      { name: 'UI/UX Design', level: 'beginner', category: 'Design', priority: 'high' },
      { name: 'AWS', level: 'beginner', category: 'Programming', priority: 'medium' }
    ],
    availability: {
      weekdays: '6:00 PM - 9:00 PM',
      weekends: '10:00 AM - 4:00 PM'
    },
    joinedDate: '2024-01-15'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    bio: 'UX designer with 8 years of experience. I enjoy mentoring aspiring designers and learning new technologies.',
    location: 'New York, NY',
    credits: 200,
    rating: 4.9,
    totalSessions: 67,
    skillsTeaching: [
      { name: 'UI/UX Design', level: 'expert', category: 'Design', priority: 'high' },
      { name: 'Figma', level: 'expert', category: 'Design', priority: 'high' },
      { name: 'Adobe Photoshop', level: 'advanced', category: 'Design', priority: 'medium' }
    ],
    skillsLearning: [
      { name: 'React', level: 'beginner', category: 'Programming', priority: 'high' },
      { name: 'JavaScript', level: 'intermediate', category: 'Programming', priority: 'medium' }
    ],
    availability: {
      weekdays: '7:00 PM - 10:00 PM',
      weekends: '9:00 AM - 5:00 PM'
    },
    joinedDate: '2023-11-20'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@example.com',
    bio: 'Product manager turned business consultant. Happy to share insights on product strategy and agile methodologies.',
    location: 'Austin, TX',
    credits: 175,
    rating: 4.7,
    totalSessions: 52,
    skillsTeaching: [
      { name: 'Product Management', level: 'expert', category: 'Business', priority: 'high' },
      { name: 'Agile Methodology', level: 'advanced', category: 'Business', priority: 'high' },
      { name: 'Business Strategy', level: 'advanced', category: 'Business', priority: 'medium' }
    ],
    skillsLearning: [
      { name: 'Digital Marketing', level: 'beginner', category: 'Marketing', priority: 'high' },
      { name: 'Python', level: 'beginner', category: 'Programming', priority: 'low' }
    ],
    availability: {
      weekdays: '5:00 PM - 8:00 PM',
      weekends: '11:00 AM - 3:00 PM'
    },
    joinedDate: '2024-02-10'
  },
  {
    id: '4',
    name: 'David Kim',
    email: 'david.kim@example.com',
    bio: 'Python enthusiast and data science practitioner. Love teaching programming fundamentals and data analysis.',
    location: 'Seattle, WA',
    credits: 125,
    rating: 4.6,
    totalSessions: 38,
    skillsTeaching: [
      { name: 'Python', level: 'expert', category: 'Programming', priority: 'high' },
      { name: 'SQL', level: 'advanced', category: 'Programming', priority: 'high' },
      { name: 'MongoDB', level: 'intermediate', category: 'Programming', priority: 'medium' }
    ],
    skillsLearning: [
      { name: 'GraphQL', level: 'beginner', category: 'Programming', priority: 'high' },
      { name: 'Docker', level: 'beginner', category: 'Programming', priority: 'medium' }
    ],
    availability: {
      weekdays: '6:30 PM - 9:30 PM',
      weekends: '10:00 AM - 2:00 PM'
    },
    joinedDate: '2024-03-05'
  },
  {
    id: '5',
    name: 'Jessica Williams',
    email: 'jessica.williams@example.com',
    bio: 'Digital marketer specializing in SEO and content strategy. Looking to expand into web development.',
    location: 'Los Angeles, CA',
    credits: 90,
    rating: 4.8,
    totalSessions: 29,
    skillsTeaching: [
      { name: 'Digital Marketing', level: 'expert', category: 'Marketing', priority: 'high' },
      { name: 'SEO', level: 'advanced', category: 'Marketing', priority: 'high' },
      { name: 'Content Marketing', level: 'advanced', category: 'Marketing', priority: 'medium' }
    ],
    skillsLearning: [
      { name: 'JavaScript', level: 'beginner', category: 'Programming', priority: 'high' },
      { name: 'Web Design', level: 'beginner', category: 'Design', priority: 'medium' }
    ],
    availability: {
      weekdays: '7:00 PM - 10:00 PM',
      weekends: '1:00 PM - 6:00 PM'
    },
    joinedDate: '2024-04-12'
  },
  {
    id: '6',
    name: 'James Anderson',
    email: 'james.anderson@example.com',
    bio: 'Financial analyst with a passion for teaching business strategy and financial modeling.',
    location: 'Chicago, IL',
    credits: 110,
    rating: 4.5,
    totalSessions: 33,
    skillsTeaching: [
      { name: 'Financial Analysis', level: 'expert', category: 'Business', priority: 'high' },
      { name: 'Business Strategy', level: 'advanced', category: 'Business', priority: 'high' },
      { name: 'Project Management', level: 'intermediate', category: 'Business', priority: 'medium' }
    ],
    skillsLearning: [
      { name: 'Python', level: 'beginner', category: 'Programming', priority: 'high' },
      { name: 'SQL', level: 'beginner', category: 'Programming', priority: 'medium' }
    ],
    availability: {
      weekdays: '6:00 PM - 9:00 PM',
      weekends: '9:00 AM - 1:00 PM'
    },
    joinedDate: '2024-01-28'
  },
  {
    id: '7',
    name: 'Maria Garcia',
    email: 'maria.garcia@example.com',
    bio: 'Multilingual language teacher. Native Spanish speaker, fluent in French and German. Love cultural exchange!',
    location: 'Miami, FL',
    credits: 140,
    rating: 4.9,
    totalSessions: 56,
    skillsTeaching: [
      { name: 'Spanish', level: 'expert', category: 'Languages', priority: 'high' },
      { name: 'French', level: 'advanced', category: 'Languages', priority: 'high' },
      { name: 'German', level: 'intermediate', category: 'Languages', priority: 'medium' }
    ],
    skillsLearning: [
      { name: 'Japanese', level: 'beginner', category: 'Languages', priority: 'high' },
      { name: 'Guitar', level: 'beginner', category: 'Music', priority: 'low' }
    ],
    availability: {
      weekdays: '5:30 PM - 8:30 PM',
      weekends: '10:00 AM - 5:00 PM'
    },
    joinedDate: '2023-12-08'
  },
  {
    id: '8',
    name: 'Robert Taylor',
    email: 'robert.taylor@example.com',
    bio: 'Professional photographer and creative. Teaching photography fundamentals and Adobe suite.',
    location: 'Portland, OR',
    credits: 85,
    rating: 4.7,
    totalSessions: 24,
    skillsTeaching: [
      { name: 'Photography', level: 'expert', category: 'Photography', priority: 'high' },
      { name: 'Adobe Photoshop', level: 'advanced', category: 'Design', priority: 'high' },
      { name: 'Illustrator', level: 'intermediate', category: 'Design', priority: 'medium' }
    ],
    skillsLearning: [
      { name: 'UI/UX Design', level: 'beginner', category: 'Design', priority: 'medium' },
      { name: 'Social Media', level: 'beginner', category: 'Marketing', priority: 'high' }
    ],
    availability: {
      weekdays: '7:00 PM - 10:00 PM',
      weekends: '11:00 AM - 4:00 PM'
    },
    joinedDate: '2024-05-20'
  },
  {
    id: '9',
    name: 'Lisa Thompson',
    email: 'lisa.thompson@example.com',
    bio: 'Certified yoga instructor and wellness coach. Passionate about helping others find balance.',
    location: 'Denver, CO',
    credits: 95,
    rating: 4.8,
    totalSessions: 41,
    skillsTeaching: [
      { name: 'Yoga', level: 'expert', category: 'Fitness', priority: 'high' },
      { name: 'Cooking', level: 'intermediate', category: 'Cooking', priority: 'medium' }
    ],
    skillsLearning: [
      { name: 'Creative Writing', level: 'beginner', category: 'Writing', priority: 'medium' },
      { name: 'Piano', level: 'beginner', category: 'Music', priority: 'low' }
    ],
    availability: {
      weekdays: '6:00 AM - 8:00 AM',
      weekends: '8:00 AM - 12:00 PM'
    },
    joinedDate: '2024-02-25'
  },
  {
    id: '10',
    name: 'Daniel Martinez',
    email: 'daniel.martinez@example.com',
    bio: 'Musician and music theory instructor. 15 years of teaching experience with guitar and piano.',
    location: 'Nashville, TN',
    credits: 130,
    rating: 4.9,
    totalSessions: 63,
    skillsTeaching: [
      { name: 'Guitar', level: 'expert', category: 'Music', priority: 'high' },
      { name: 'Piano', level: 'advanced', category: 'Music', priority: 'high' },
      { name: 'Music Theory', level: 'expert', category: 'Music', priority: 'medium' }
    ],
    skillsLearning: [
      { name: 'Digital Marketing', level: 'beginner', category: 'Marketing', priority: 'medium' },
      { name: 'Photography', level: 'beginner', category: 'Photography', priority: 'low' }
    ],
    availability: {
      weekdays: '4:00 PM - 8:00 PM',
      weekends: '12:00 PM - 6:00 PM'
    },
    joinedDate: '2023-10-15'
  }
];

// Get current user (Aakash Rajput)
export const getCurrentUser = (): User => {
  return {
    id: 'current',
    name: 'Aakashsingh Rajput',
    email: 'aakash@example.com',
    bio: 'Enthusiastic learner looking to exchange skills and grow together with the community.',
    location: 'Boston, MA',
    credits: 100,
    rating: 4.5,
    totalSessions: 12,
    skillsTeaching: [
      { name: 'JavaScript', level: 'intermediate', category: 'Programming', priority: 'high' },
      { name: 'Web Design', level: 'intermediate', category: 'Design', priority: 'medium' }
    ],
    skillsLearning: [
      { name: 'React', level: 'beginner', category: 'Programming', priority: 'high' },
      { name: 'TypeScript', level: 'beginner', category: 'Programming', priority: 'high' },
      { name: 'UI/UX Design', level: 'beginner', category: 'Design', priority: 'medium' }
    ],
    availability: {
      weekdays: '6:00 PM - 9:00 PM',
      weekends: '10:00 AM - 4:00 PM'
    },
    joinedDate: '2024-06-01'
  };
};

// Generate potential matches based on skills
export const generateMatches = (currentUser: User = getCurrentUser()) => {
  return mockUsers.filter(user => {
    // Check if user teaches any skill the current user wants to learn
    const teachesWhatIWantToLearn = user.skillsTeaching.some(skill =>
      currentUser.skillsLearning.some(learning => learning.name === skill.name)
    );
    
    // Check if user wants to learn any skill the current user teaches
    const learnsWhatITeach = user.skillsLearning.some(skill =>
      currentUser.skillsTeaching.some(teaching => teaching.name === skill.name)
    );
    
    return teachesWhatIWantToLearn || learnsWhatITeach;
  }).map(user => {
    // Calculate match score
    let matchScore = 0;
    
    // Perfect matches (they teach what I want to learn)
    const perfectMatches = user.skillsTeaching.filter(skill =>
      currentUser.skillsLearning.some(learning => learning.name === skill.name)
    );
    matchScore += perfectMatches.length * 30;
    
    // Good matches (I teach what they want to learn)
    const goodMatches = user.skillsLearning.filter(skill =>
      currentUser.skillsTeaching.some(teaching => teaching.name === skill.name)
    );
    matchScore += goodMatches.length * 25;
    
    // Add rating bonus
    matchScore += user.rating * 2;
    
    return {
      ...user,
      matchScore: Math.min(matchScore, 98),
      matchedSkills: [...perfectMatches, ...goodMatches].map(s => s.name)
    };
  }).sort((a, b) => b.matchScore - a.matchScore);
};

export default mockUsers;
