export interface PersonalInfo {
  name: string;
  location: string;
  phone: string;
  email: string;
  tagline: string;
  shortDescription: string;
  aboutStory: string[];
  educationBrief: {
    degree: string;
    specialization: string;
    institution: string;
    graduationYear: number;
    cpi: string;
  };
}

export interface NavItem {
  name: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  status: 'In Progress' | 'Planned' | 'Completed';
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface AchievementItem {
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  link?: string;
}

export interface EducationItem {
  qualification: string;
  field?: string;
  institution?: string;
  periodOrYear: string;
  score: string;
  statusBadge?: string;
  details?: string;
}

export interface CodingPlatform {
  platform: string;
  handle: string;
  url: string;
  statBadge: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}
