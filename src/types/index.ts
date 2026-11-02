export interface ProfileData {
  name: string;
  professionalTitle: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  academicStatus: string;
  careerInterests: string[];
  introduction: string;
  aboutContent: string[];
  highlightCards: {
    title: string;
    subtitle: string;
    icon: string;
  }[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Machine Learning' | 'Data Analytics' | 'Business Intelligence' | 'Exploratory Data Analysis' | 'Artificial Intelligence' | 'Hackathon';
  shortDescription: string;
  problemStatement: string;
  keyImplementation: string[];
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  image?: string;
  featured: boolean;
  metricsOrOutcomes?: string[];
}

export interface ExperienceItem {
  id: string;
  position: string;
  organization: string;
  workMode: string;
  duration: string;
  responsibilities: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  status: string;
  scoreLabel: string;
  scoreValue: string;
  details?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  completionDate?: string;
  image: string;
  credentialUrl?: string;
  topics?: string[];
}
