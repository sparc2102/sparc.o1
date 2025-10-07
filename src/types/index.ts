export interface User {
  id: string;
  email: string;
  name: string;
  membershipTier: 'genesis' | 'professional' | 'fellows';
  university?: string;
  graduationYear?: string;
  major?: string;
  company?: string;
  position?: string;
  joinDate: string;
  profileComplete: boolean;
  avatar?: string;
  bio?: string;
  location?: string;
  phone?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  type: 'webinar' | 'workshop' | 'networking' | 'bootcamp' | 'masterclass' | 'forum' | 'competition';
  description: string;
  accessTiers: string[];
  capacity: number;
  registered: number;
  speaker: string;
  category: string;
  image?: string;
  location?: string;
  duration?: string;
  tags?: string[];
  link?: string;
  // Extended fields for competitions
  submission?: {
    email: string;
    deadline: string;
    fileFormat: string[];
    fileNameFormat: string;
    entryFee?: number;
    paymentMethods?: string[];
  };
  eligibility?: string[];
  evaluationCriteria?: string[];
  rewards?: {
    top?: string[];
    participants?: string[];
  };
  importantDates?: {
    abstractSubmission?: string;
    posterSubmission?: string;
    presentationDate?: string;
  };
}

export interface Resource {
  id: string;
  title: string;
  type: 'research-paper' | 'case-study' | 'whitepaper' | 'video' | 'guide' | 'template';
  description: string;
  accessTiers: string[];
  downloadCount: number;
  uploadDate: string;
  category: string;
  fileSize?: string;
  author?: string;
  tags?: string[];
}

export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  duration: string;
  benefits: string[];
  eligibility: string;
  color: string;
  popular?: boolean;
}

export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: string;
  authorTier: string;
  category: string;
  replies: number;
  views: number;
  date: string;
  tags?: string[];
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'internship' | 'contract';
  salary?: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  applicationDeadline: string;
  accessTiers: string[];
}