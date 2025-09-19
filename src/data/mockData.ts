import { Event, Resource, MembershipTier, ForumPost, Job } from '../types';

export const membershipTiers: MembershipTier[] = [
  {
    id: 'genesis',
    name: 'SPARC Genesis',
    price: 'Free',
    duration: 'Lifetime for students',
    benefits: [
      'Student-centric events access',
      'Career bootcamps',
      'Networking cohorts',
      'Research presentations',
      'Basic resource library',
      'Community forum access'
    ],
    eligibility: 'Students & 0-1 years experience',
    color: '#10B981',
    popular: true
  },
  {
    id: 'professional',
    name: 'SPARC Professional',
    price: '$199/year',
    duration: 'Annual membership',
    benefits: [
      'Executive masterclasses',
      'Premium networking events',
      'Research collaboration opportunities',
      'Advanced resource library',
      'Industry mentor matching',
      'Career placement services'
    ],
    eligibility: 'Mid-to-Senior professionals',
    color: '#3B82F6'
  },
  {
    id: 'fellows',
    name: 'SPARC Fellows',
    price: 'Invitation Only',
    duration: 'Exclusive membership',
    benefits: [
      'Advisory board participation',
      'Thought leadership platform',
      'Exclusive executive forums',
      'Global summit VIP access',
      'Strategic partnership opportunities',
      'Industry influence programs'
    ],
    eligibility: 'C-suite, renowned researchers',
    color: '#7C3AED'
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'SPARC Career Growth: Fueling Innovation and Research in Core Pharmaceutical Industries',
    date: '2025-09-20T18:00:00+05:30',
    type: 'webinar',
    description: 'Orientation about the SPARC community and the innovation requirements in the pharmaceutical industry.',
    accessTiers: ['genesis'],
    capacity: 200,
    registered: 113,
    speaker: 'Dr. Melwin Vincent, CEO and Founder of Zane Pro Ed',
    category: 'lite-the-sparc',
    duration: '60 minutes',
    location: 'Virtual',
    tags: ['career-guidance', 'research-guidance', 'pharmaceutical-innovation', 'SPARC'],
    link: 'https://meet.google.com/jte-ncci-qud' 
}
];

export const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Drug Development Pipeline: A Comprehensive Guide',
    type: 'guide',
    description: 'Complete overview of the pharmaceutical drug development process from discovery to market approval.',
    accessTiers: ['genesis', 'professional', 'fellows'],
    downloadCount: 1247,
    uploadDate: '2024-11-15',
    category: 'drug-development',
    fileSize: '2.3 MB',
    author: 'SPARC Research Team',
    tags: ['drug-development', 'pipeline', 'regulatory']
  },
  {
    id: '2',
    title: 'AI in Pharmaceutical Research: Case Studies',
    type: 'case-study',
    description: 'Real-world applications of artificial intelligence in drug discovery and clinical trials.',
    accessTiers: ['professional', 'fellows'],
    downloadCount: 892,
    uploadDate: '2024-11-10',
    category: 'technology',
    fileSize: '5.7 MB',
    author: 'Dr. Jennifer Wang',
    tags: ['ai', 'machine-learning', 'case-studies']
  },
  {
    id: '3',
    title: 'Regulatory Affairs Career Pathways',
    type: 'whitepaper',
    description: 'Detailed analysis of career opportunities and requirements in pharmaceutical regulatory affairs.',
    accessTiers: ['genesis', 'professional'],
    downloadCount: 654,
    uploadDate: '2024-11-05',
    category: 'career-development',
    fileSize: '1.8 MB',
    author: 'Career Services Team',
    tags: ['regulatory', 'career', 'pathways']
  },
  {
    id: '4',
    title: 'Personalized Medicine: Future Trends',
    type: 'research-paper',
    description: 'Academic paper exploring the future of personalized medicine and precision therapeutics.',
    accessTiers: ['professional', 'fellows'],
    downloadCount: 423,
    uploadDate: '2024-10-28',
    category: 'research',
    fileSize: '3.2 MB',
    author: 'Dr. Sarah Chen',
    tags: ['personalized-medicine', 'precision', 'therapeutics']
  },
  {
    id: '5',
    title: 'Biotech Startup Funding Webinar',
    type: 'video',
    description: 'Recording of our exclusive webinar on securing funding for biotech startups.',
    accessTiers: ['professional', 'fellows'],
    downloadCount: 337,
    uploadDate: '2024-10-20',
    category: 'entrepreneurship',
    fileSize: '450 MB',
    author: 'Industry Expert Panel',
    tags: ['funding', 'biotech', 'startup']
  }
];

export const mockForumPosts: ForumPost[] = [
  {
    id: '1',
    title: 'Best practices for clinical trial design in oncology?',
    content: 'Looking for insights on designing effective Phase II oncology trials. What are the key considerations for patient stratification and endpoint selection?',
    author: 'Alex Johnson',
    authorTier: 'genesis',
    category: 'Clinical Research',
    replies: 12,
    views: 89,
    date: '2024-11-20',
    tags: ['clinical-trials', 'oncology', 'study-design']
  },
  {
    id: '2',
    title: 'Career transition from academia to industry',
    content: 'After 5 years in academic research, I\'m considering moving to industry. What should I expect in terms of work culture, compensation, and career progression?',
    author: 'Dr. Sarah Chen',
    authorTier: 'professional',
    category: 'Career Development',
    replies: 18,
    views: 156,
    date: '2024-11-18',
    tags: ['career', 'academia', 'industry', 'transition']
  },
  {
    id: '3',
    title: 'Regulatory submission strategies for breakthrough therapies',
    content: 'Has anyone had experience with FDA\'s Breakthrough Therapy designation? Looking for tips on preparing a successful submission.',
    author: 'Dr. Michael Roberts',
    authorTier: 'fellows',
    category: 'Regulatory Affairs',
    replies: 8,
    views: 67,
    date: '2024-11-17',
    tags: ['regulatory', 'fda', 'breakthrough-therapy']
  }
];

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Research Scientist - Oncology',
    company: 'PharmaCorp',
    location: 'Boston, MA',
    type: 'full-time',
    salary: '$120,000 - $150,000',
    description: 'Lead oncology research programs focusing on novel immunotherapy approaches. Collaborate with cross-functional teams to advance pipeline compounds.',
    requirements: [
      'PhD in relevant field with 3+ years experience',
      'Experience in oncology drug development',
      'Strong publication record',
      'Leadership experience preferred'
    ],
    benefits: [
      'Comprehensive health insurance',
      'Stock options',
      'Flexible work arrangements',
      'Professional development budget'
    ],
    postedDate: '2024-11-15',
    applicationDeadline: '2024-12-15',
    accessTiers: ['professional', 'fellows']
  },
  {
    id: '2',
    title: 'Research Intern - Drug Discovery',
    company: 'BioInnovate Inc.',
    location: 'San Diego, CA',
    type: 'internship',
    description: 'Support drug discovery efforts through computational modeling and experimental validation. Great opportunity for students to gain industry experience.',
    requirements: [
      'Currently enrolled in relevant PhD/MS program',
      'Strong analytical skills',
      'Experience with computational tools preferred',
      'Ability to work independently'
    ],
    benefits: [
      'Competitive stipend',
      'Mentorship program',
      'Networking opportunities',
      'Potential for full-time offer'
    ],
    postedDate: '2024-11-10',
    applicationDeadline: '2024-12-31',
    accessTiers: ['genesis', 'professional']
  }
];