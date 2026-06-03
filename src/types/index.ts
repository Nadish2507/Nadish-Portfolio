export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[]; // level: percentage (0-100) for progress animation
}

export interface ProjectItem {
  id: string;
  title: string;
  techStack: string[];
  description: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  year: string;
  description?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  link?: string;
}

export interface CodingProfileItem {
  platform: string;
  metrics: string;
  url?: string;
}

export interface PortfolioData {
  name: string;
  tagline: string;
  about: string;
  education: EducationItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  certifications: CertificationItem[];
  codingProfiles: CodingProfileItem[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    leetcode: string;
    skillrack: string;
  };
}
