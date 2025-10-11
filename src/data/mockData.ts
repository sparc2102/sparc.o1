import { Event, Resource, MembershipTier, ForumPost, Job } from '../types';
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
},
{
    id: '2',
    title: 'E-POSTER COMPETITION 2025: AI in Diagnostic and Clinical Decision Making',
    date: '2025-10-16T10:00:00+05:30',
    type: 'competition',
    description: 'SPARC invites students, interns, researchers, and healthcare professionals to present original e-posters on AI applications in diagnostics and clinical decision-making. Explore disease prediction, AI in radiology/pathology, clinical decision support systems, and ethical considerations in healthcare AI.',
    accessTiers: ['genesis', 'standard'],
    capacity: 100,
    registered: 30,
    speaker: 'Organized by SPARC',
    category: 'e-poster-competition',
    duration: 'All Day Online',
    location: 'Virtual',
    tags: ['AI-in-2025', 'Smart-Diagnostics-2025,', 'AI-Clinical-Decision-2025', 'AI-in-ClinicalCare', 'SPARC'],
    link: 'https://tally.so/r/mOO7bg',
    image: 'https://www.oecd.org/adobe/dynamicmedia/deliver/dm-aid--2e4da78d-75f0-416e-9d51-118328e4227f/competition-market-studies-gettyimages-803862830.jpg?width=2048&quality=80&preferwebp=true',
    submission: {
        email: 'zanesparc@gmail.com',
        deadline: '2025-10-16',
        fileFormat: ['JPEG', 'PNG', 'PDF'],
        fileNameFormat: 'ParticipantName_InstituteName',
        entryFee: 100,
        paymentMethods: ['UPI', 'QR', 'SPARC payment link'],
    },
    eligibility: ['Students', 'Interns', 'Researchers', 'Healthcare Professionals'],
    evaluationCriteria: ['Relevance to theme', 'Scientific accuracy', 'Creativity and innovation', 'Clarity and presentation quality'],
    rewards: {
        top: ['Digital Certificate of Excellence', 'Feature on SPARC website', 'Social Media Recognition'],
        participants: ['E-Certificate of Participation', 'SPARC Credits'],
    },
    importantDates: {
        abstractSubmission: '2025-10-13',
        posterSubmission: '2025-10-14',
        presentationDate: '2025-10-16',
    },
  },
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


// src/data/mockData.ts
import { 
  Users, TrendingUp, Globe, Target, UserPlus, Building2, Rocket, 
  GraduationCap, Lightbulb, BookOpen, FileText, Users2, 
  Award, Calendar, Star, Zap, Network, 
  Eye
} from 'lucide-react';

export interface Feature {
  icon: any;
  title: string;
  description: string;
}

export interface Objective {
  icon: any;
  title: string;
  description: string;
}

export interface Pillar {
  icon: any;
  title: string;
  description: string;
}

export interface FeatureCard {
  icon: any;
  title: string;
  subtitle: string;
  description: string;
  color: ColorKey;
}

export type ColorKey =
  | 'blue' | 'green' | 'purple' | 'orange' | 'indigo' | 'yellow' | 'pink' | 'teal'
  | 'red' | 'cyan' | 'emerald' | 'amber' | 'violet' | 'rose' | 'lime' | 'sky' | 'gray';

export interface Testimonial {
  name: string;
  role: string;
  tier: string;
  content: string;
  avatar: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  speaker: string;
  type: string;
  registered: number;
  capacity: number;
}

export const features: Feature[] = [
  {
    icon: Users,
    title: 'Global Community',
    description: 'Connect with pharmaceutical professionals, researchers, and students worldwide'
  },
  {
    icon: TrendingUp,
    title: 'Career Advancement',
    description: 'Access exclusive opportunities, mentorship, and career development resources'
  },
  {
    icon: Globe,
    title: 'Industry Insights',
    description: 'Stay ahead with cutting-edge research, trends, and market intelligence'
  },
  {
    icon: Target,
    title: 'Targeted Learning',
    description: 'Participate in specialized programs tailored to your career stage and interests'
  }
];

export const missionObjectives: Objective[] = [
  {
    icon: UserPlus,
    title: 'Empower Talent',
    description: 'Resources, events, and mentorship programs'
  },
  {
    icon: Building2,
    title: 'Build Collaborations',
    description: 'Academia–industry–regulatory partnerships'
  },
  {
    icon: Rocket,
    title: 'Fuel Growth',
    description: 'Career advancement and scientific progress worldwide'
  }
];

export const strategicPillars: Pillar[] = [
  {
    icon: BookOpen,
    title: 'Knowledge Dissemination',
    description: 'Webinars, panels, thought leaders'
  },
  {
    icon: GraduationCap,
    title: 'Competency Building',
    description: 'Advanced training, workshops, certifications'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Incubation',
    description: 'Hackathons, accelerators, prototypes'
  },
  {
    icon: TrendingUp,
    title: 'Career Propulsion',
    description: 'Mentorship, career expos, partnerships'
  },
  {
    icon: Users2,
    title: 'Leadership Cultivation',
    description: 'Councils, regional hubs, forums'
  },
  {
    icon: FileText,
    title: 'Policy Influence',
    description: 'Whitepapers, advocacy, reforms'
  }
];

export const topCards: FeatureCard[] = [
   {
       icon: Globe,
       title: "Global Prestige",
       subtitle: "Local Impact",
       description: "Be part of a community that connects pharma minds across continents while empowering you in your own institution or city.",
       color: "blue"
     },
     {
       icon: TrendingUp,
       title: "Career Accelerator",
       subtitle: "Not Just a Club",
       description: "From bootcamps to job-matching, SPARC is designed to push your career forward, not keep you stuck in endless \"networking.\"",
       color: "green"
     },
     {
       icon: Eye,
       title: "Industry Giants",
       subtitle: "Front-Row Access",
       description: "Exclusive masterclasses, summits, and panels put you face-to-face with global pharma and biotech leaders.",
       color: "purple"
     },
     {
       icon: Lightbulb,
       title: "Innovation Labs",
       subtitle: "Playground",
       description: "Through SPARC Innovation Labs and hackathons, your ideas don't sit in a notebook — they become prototypes and real-world projects.",
       color: "orange"
     },
     {
       icon: UserPlus,
       title: "Zero-Barrier Entry",
       subtitle: "For Students",
       description: "SPARC Genesis membership is free for students and freshers, giving you elite exposure without financial burden.",
       color: "blue"
     },
     {
       icon: Users,
       title: "Mentorship",
       subtitle: "That Matters",
       description: "Personalized guidance from experienced researchers, executives, and innovators to shape your professional journey.",
       color: "indigo"
     },
     {
       icon: BookOpen,
       title: "Knowledge Vault",
       subtitle: "Premium Access",
       description: "Access curated journals, case studies, whitepapers, and insights you won't find in regular classrooms.",
       color: "yellow"
     },
     {
       icon: Award,
       title: "Recognition",
       subtitle: "& Awards",
       description: "Stand out with SPARC Honors — celebrate your achievements with global visibility.",
       color: "pink"
     },
     {
       icon: Target,
       title: "R&D Opportunities",
       subtitle: "Direct Access",
       description: "Collaborate with peers, institutions, and corporates on funded research projects through SPARC incubators.",
       color: "teal"
     }
   ];
export const bottomCards: FeatureCard[] = [
   {
        icon: Zap,
        title: "Resume Power-Up",
        subtitle: "Instant Credibility",
        description: "SPARC membership signals credibility and ambition — recruiters notice, instantly.",
        color: "red"
      },
      {
        icon: Star,
        title: "Leadership",
        subtitle: "Launchpad",
        description: "Student councils, regional hubs, and advisory boards give you a voice and leadership credentials early on.",
        color: "cyan"
      },
      {
        icon: Network,
        title: "Cross-Border",
        subtitle: "Collaboration",
        description: "Work with global peers and experts — SPARC is not bounded by geography, but built for worldwide impact.",
        color: "emerald"
      },
      {
        icon: Building2,
        title: "Institutional",
        subtitle: "Advantage",
        description: "For colleges, SPARC boosts NAAC/NBA/NIRF metrics and employability — making students more competitive and institutions more prestigious.",
        color: "amber"
      },
      {
        icon: Building2,
        title: "Corporate",
        subtitle: "Gateway",
        description: "For companies, SPARC opens access to vetted talent pools and innovation pipelines ready to deploy.",
        color: "violet"
      },
      {
        icon: FileText,
        title: "Policy Leadership",
        subtitle: "Thought Leadership",
        description: "Shape the future of pharma — contribute to whitepapers, advocacy reports, and reform agendas.",
        color: "rose"
      },
      {
        icon: Calendar,
        title: "Events",
        subtitle: "That Matter",
        description: "From the SPARC Global Summit to regional innovation hubs, events here create opportunities — not just photo ops.",
        color: "lime"
      },
      {
        icon: Rocket,
        title: "Future of Pharma",
        subtitle: "Next Decade",
        description: "SPARC isn't about today's industry alone — it's where the next decade of healthcare innovation is being built.",
        color: "sky"
      },
      {
        icon: Users2,
        title: "Community",
        subtitle: "With Momentum",
        description: "This isn't a static society — it's a movement backed by ZANE ProEd's infrastructure and global network.",
        color: "gray"
      }
    ];

export const testimonials: Testimonial[] = [
  {
    name: 'Arjun Anand',
    role: 'Final Year Pharm.D Student, Hyderabad',
    tier: 'Genesis',
    content: 'The live sessions with industry experts are my favorite part. It feels like having direct access to mentors who actually care about students’ growth. The case studies we worked on gave me an edge during campus placements.',
    avatar: 'AA'
  },
   {
      name: 'Keerthana Subramanian',
      role: 'M.Pharm Student, Chennai',
      tier: 'Genesis',
      content: 'As someone from Tamil Nadu aiming for a clinical research career, Genesis gave me structured learning and mentorship that clarified my next steps. I even got connected with alumni working in top pharma companies.',
      avatar: 'KS'
    },
    {
      name: 'Darshan Reddy',
      role: 'Clinical Data Management Intern, Bengaluru',
      tier: 'Genesis',
      content: 'Being in Bengaluru, the networking opportunities through Genesis were huge. I got to attend virtual sessions with industry leaders and it directly helped me secure my internship in clinical data management.',
      avatar: 'DR'
    }, 
    {
      name: 'Vikram Kumar',
      role: 'BDS Student, Pune',
      tier: 'Genesis',
      content: 'SPARC helped me bridge the gap between academics and industry expectations. I landed a part-time internship while still in my final semester — something I never thought was possible!',
      avatar: 'VK'
    }
  // ... Add the rest of testimonials array
];


export const membershipTiers = [
  {
    name: 'SPARC Genesis',
    price: 'FREE',
    description: 'Entry-Level Access',
    eligibility: 'Open to all aspiring professionals and students.',
    benefits: [
      'Case Simulations for skill-building',
      'Workshops & Webinars for career growth',
      'Entitle Program for article writing',
      'Research Guidance from experts',
      'Zane Omega Trials access'
    ],
    icon: Users,
    color: 'green'
  },
  {
    name: 'SPARC Premium',
    price: '₹5000 /year', // Default price, adjust dynamically in component
    description: 'Advanced Professionals',
    eligibility: 'Professionals seeking advanced career and academic growth.',
    benefits: [
      'Hospital Internships for Clinical Experience Training',
      'Premium Workshops & Networking',
      'Dreamverse for pitching ideas',
      'SPARC Publications for research',
      'Competitive Exam Resources'
    ],
    icon: TrendingUp,
    color: 'blue'
  },
  {
    name: 'SPARC VIP',
    price: '₹15,000 /year', // Default price, adjust dynamically in component
    description: 'Elite Professionals',
    eligibility: 'Invitation-only for top professionals and researchers.',
    benefits: [
      'All Genesis and Premium benefits',
      'Leadership programs and high-value collaborations',
      'Global VIP Networking Access in Top Pharma Companies & Hospitals',
      'SPARC Honors & Awards recognition'
    ],
    icon: Award,
    color: 'yellow'
  }
];



export const leadership = [
  { 
    name: 'Samyuktha Hariraman Indumathy', 
    title: "President's Office Associate", 
    bio: 'Supports organizational leadership by coordinating projects, managing documentation, and streamlining strategic initiatives.', 
    avatar: 'https://static.wixstatic.com/media/6abdd9_8e0724d86e30469385bfe17a38bffac7~mv2.png' 
  },
  { 
    name: 'Jersha SJ', 
    title: 'Events Coordinator', 
    bio: 'Plans, organizes, and delivers events with a focus on flawless execution and meaningful participant experiences.', 
    avatar: 'https://avatar.iran.liara.run/public/74' 
  },
  { 
    name: 'Nishanth', 
    title: 'Partnership & Sponsorship Associate', 
    bio: 'Builds partnerships and supports sponsorship initiatives to strengthen organizational programs and collaborations.', 
    avatar: 'https://static.wixstatic.com/media/6abdd9_b21b7b78756c4e36b0c0e90a8acdd488~mv2.png' 
  },
  { 
    name: 'Tharaneeshwaran', 
    title: 'Partnership & Sponsorship Associate', 
    bio: 'Supports partnership efforts by identifying opportunities and maintaining strong sponsor relationships.', 
    avatar: 'https://avatar.iran.liara.run/public/40' 
  },
  { 
    name: 'Arudhra', 
    title: 'Media & Design Intern', 
    bio: 'Creates engaging media assets and visual content to promote initiatives and events effectively.', 
    avatar: 'https://static.wixstatic.com/media/6abdd9_cfda1e84816740e5969267a0727f94c7~mv2.jpg' 
  },
  { 
    name: 'Praveen P', 
    title: 'Event Coordinator', 
    bio: 'Coordinates event logistics, ensuring smooth operations and a professional experience for participants.', 
    avatar: 'https://avatar.iran.liara.run/public/40' 
  },
  { 
    name: 'Sowjanya R', 
    title: 'Member Engagement Coordinator', 
    bio: 'Facilitates member participation and supports programs designed to boost engagement and collaboration.', 
    avatar: 'https://avatar.iran.liara.run/public/80' 
  },
  { 
    name: 'Sreenidhi V', 
    title: 'Community Outreach Lead', 
    bio: 'Leads initiatives to connect with the community, grow networks, and strengthen external relationships.', 
    avatar: 'https://static.wixstatic.com/media/6abdd9_252c82651f264a0eb6f86139853fd1b4~mv2.jpg' 
  },
  { 
    name: 'Jayanthi G', 
    title: 'Innovation Lab Intern', 
    bio: 'Assists with research and contributes creative ideas to innovation-driven projects and experiments.', 
    avatar: 'https://static.wixstatic.com/media/6abdd9_99b469bbd4f448e3a6210ba94022559f~mv2.jpg' 
  },
  { 
    name: 'Mithuna S', 
    title: 'Community Outreach Lead', 
    bio: 'Develops outreach campaigns and drives initiatives to expand community engagement and partnerships.', 
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQE5Z--_9oCfFg/profile-displayphoto-scale_400_400/B56ZkvURVZH8Ag-/0/1757435469005?e=1760572800&v=beta&t=SgJULxhACkn5N-l7v6Z6Yzf9b3dv1ncpsvoDIrYNy-k' 
  },
  { 
    name: 'Sriram Malipriyan Sivakumar', 
    title: 'Member Engagement Manager', 
    bio: 'Implements strategies to boost participation and ensure a vibrant, connected member community.', 
    avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQEvl3o7w5rYNQ/profile-displayphoto-scale_400_400/B4EZk9EJT1GcAg-/0/1757666123217?e=1760572800&v=beta&t=gMnxw21OvrNR4287NcyUo6MGJFApGoyF9ylD4n15X-k' 
  },
  { 
    name: 'Siva Priyan G', 
    title: 'Partnership & Sponsorship Associate', 
    bio: 'Supports business development through research, partner engagement, and sponsorship coordination.', 
    avatar: 'https://static.wixstatic.com/media/6abdd9_1b520a94da134bb2a2367237fc927714~mv2.png' 
  },
  { 
    name: 'Neena Roshini', 
    title: 'Content Strategist', 
    bio: 'Develops content strategies and creates impactful communication materials for campaigns and initiatives.', 
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQE4GclPPKnmtA/profile-displayphoto-scale_400_400/B56ZktkCuiHIAg-/0/1757406049078?e=1760572800&v=beta&t=5z4kYEdNSBdPRmmI912c22DZoWeaKuSgUBugwCpnbVo' 
  },
  { 
    name: 'Rohith S', 
    title: 'Member Engagement Manager', 
    bio: 'Coordinates engagement activities and ensures members stay connected to organizational initiatives.', 
    avatar: 'https://static.wixstatic.com/media/6abdd9_af6acfaa20774e3791cd22f0de6f989a~mv2.png' 
  },
  { 
    name: 'Merrin K', 
    title: 'Partnership & Sponsorship Associate', 
    bio: 'Manages sponsorship relations and develops new opportunities to enhance organizational impact.', 
    avatar: 'https://static.wixstatic.com/media/6abdd9_90ddec92c086465eb41420cb9fb605df~mv2.jpg' 
  }
];

export const values = [
  { title: 'Excellence', description: 'We strive for the highest standards in pharmaceutical sciences education and professional development.' },
  { title: 'Community', description: 'Building strong connections between students, researchers, and industry professionals worldwide.' },
  { title: 'Innovation', description: 'Fostering cutting-edge research and breakthrough thinking in pharmaceutical advancement.' },
  { title: 'Impact', description: 'Driving positive change in healthcare through collaborative pharmaceutical research and development.' }
];

export const milestones = [
  { year: '2025', title: 'SPARC Founded', description: 'Launched by ZANE ProEd with 17 founding members' },
];