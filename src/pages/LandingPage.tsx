import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { membershipTiers, mockEvents } from '../data/mockData';
import { 
  Lock, 
  Users, 
  Calendar, 
  BookOpen, 
  Award, 
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
  TrendingUp,
  Globe,
  Target,
  Eye,
  Lightbulb,
  Building2,
  Rocket,
  GraduationCap,
  Network,
  Zap,
  UserPlus,
  Users2,
  FileText
} from 'lucide-react';

// Split Scrolling Features Component
const SplitScrollingFeatures = () => {
  // First 9 cards for top row
  const topCards: FeatureCard[] = [
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

  // Next 9 cards for bottom row
  const bottomCards: FeatureCard[] = [
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

  type ColorKey =
    | 'blue' | 'green' | 'purple' | 'orange' | 'indigo' | 'yellow' | 'pink' | 'teal'
    | 'red' | 'cyan' | 'emerald' | 'amber' | 'violet' | 'rose' | 'lime' | 'sky' | 'gray';

  interface FeatureCard {
    icon: any;
    title: string;
    subtitle: string;
    description: string;
    color: ColorKey;
  }

  const renderCard = (card: FeatureCard, index: React.Key | null | undefined) => {
    const Icon = card.icon;
    const colorClasses: Record<ColorKey, { bg: string; text: string; border: string }> = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'hover:border-blue-300' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'hover:border-green-300' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'hover:border-purple-300' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'hover:border-orange-300' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'hover:border-indigo-300' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'hover:border-yellow-300' },
      pink: { bg: 'bg-pink-100', text: 'text-pink-600', border: 'hover:border-pink-300' },
      teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'hover:border-teal-300' },
      red: { bg: 'bg-red-100', text: 'text-red-600', border: 'hover:border-red-300' },
      cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'hover:border-cyan-300' },
      emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'hover:border-emerald-300' },
      amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'hover:border-amber-300' },
      violet: { bg: 'bg-violet-100', text: 'text-violet-600', border: 'hover:border-violet-300' },
      rose: { bg: 'bg-rose-100', text: 'text-rose-600', border: 'hover:border-rose-300' },
      lime: { bg: 'bg-lime-100', text: 'text-lime-600', border: 'hover:border-lime-300' },
      sky: { bg: 'bg-sky-100', text: 'text-sky-600', border: 'hover:border-sky-300' },
      gray: { bg: 'bg-gray-100', text: 'text-gray-600', border: 'hover:border-gray-400' }
    };

    const colors = colorClasses[card.color];

    return (
      <div 
        key={index}
        className={`bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 group ${colors.border} w-64 sm:w-80 flex-shrink-0`}
      >
        <div className="flex items-center mb-3 sm:mb-4">
          <div className={`w-8 h-8 sm:w-10 sm:h-10 ${colors.bg} rounded-full flex items-center justify-center mr-2 sm:mr-3`}>
            <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${colors.text}`} />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900">{card.title}</h3>
            <p className={`text-xs sm:text-sm ${colors.text}`}>{card.subtitle}</p>
          </div>
        </div>
        <p className="text-gray-600 text-xs sm:text-sm">
          {card.description}
        </p>
      </div>
    );
  };

  return (
    <section className="py-12 sm:py-20 bg-gray-50 overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        
        .scroll-right {
          animation: scroll-right 60s linear infinite;
        }
        
        .scroll-container-top:hover .scroll-left {
          animation-play-state: paused;
        }
        
        .scroll-container-bottom:hover .scroll-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-full">
        
        {/* Top Scrolling Row - Left Direction */}
        <div className="scroll-container-top mb-6 sm:mb-8 overflow-hidden">
          <div className="flex scroll-left">
            {/* First set of 9 cards */}
            <div className="flex space-x-4 sm:space-x-6 flex-shrink-0">
              {topCards.map((card, index) => renderCard(card, index))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-4 sm:space-x-6 flex-shrink-0 ml-4 sm:ml-6">
              {topCards.map((card, index) => renderCard(card, `duplicate-top-${index}`))}
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div className="text-center py-10 sm:py-16 px-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Why Choose SPARC?
          </h2>
        </div>

        {/* Bottom Scrolling Row - Right Direction */}
        <div className="scroll-container-bottom mt-6 sm:mt-8 overflow-hidden">
          <div className="flex scroll-right">
            {/* First set of 9 cards */}
            <div className="flex space-x-4 sm:space-x-6 flex-shrink-0">
              {bottomCards.map((card, index) => renderCard(card, index))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-4 sm:space-x-6 flex-shrink-0 ml-4 sm:ml-6">
              {bottomCards.map((card, index) => renderCard(card, `duplicate-bottom-${index}`))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export function LandingPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Set your hero image URL here - replace with your actual image URL
  const heroImageUrl = ''; // Put your image URL here like: 'https://example.com/your-image.jpg'
  const heroMediaUrl = heroImageUrl;

  const testimonials = [
   
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
  ];

  const features = [
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

  const missionObjectives = [
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

  const strategicPillars = [
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

  const upcomingEvents = mockEvents.slice(0, 3);

  function isVideo(heroMediaUrl: string): boolean {
    if (!heroMediaUrl) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
    return videoExtensions.some(ext => heroMediaUrl.toLowerCase().endsWith(ext));
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Height Split Layout */}
      <section className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Gradient with Blue Grainy Shade */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-blue-900 opacity-90"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          opacity: 0.2
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 col-span-2">
              <div className="text-left">
                {/* Large SPARC Title */}
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 sm:mb-8 text-white leading-none">
                  SPARC
                </h1>
                
                {/* Subtitle */}
                <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-4 sm:mb-6 font-semibold">
                  Society for Pharma Advancement & Research Collaboration
                </h2>
                
                {/* Description */}
                <p className="text-sm sm:text-lg lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                 The Gold Standard for Pharma Collaboration.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {user ? (
                    <Button
                      size="sm"
                      className="
                        bg-gradient-to-r from-blue-600 to-blue-700 
                        text-white font-semibold
                        shadow-md
                        hover:from-blue-700 hover:to-blue-800
                        hover:shadow-xl hover:scale-105
                        transition-all duration-300 ease-in-out 
                        rounded-xl
                        group
                        text-sm sm:text-base
                        py-2 sm:py-3
                      "
                      onClick={() => navigate('/dashboard')}
                    >
                      Go to Dashboard 
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  ) : (
                    <>
                      <Link to="/sparcform">
                        <Button
                          size="sm"
                          className="
                            bg-gradient-to-r from-blue-500 to-blue-700 
                            text-white font-semibold
                            shadow-md
                            hover:from-blue-600 hover:to-blue-800
                            hover:shadow-xl hover:scale-105
                            transition-all duration-300 ease-in-out 
                            rounded-xl
                            group
                            text-sm sm:text-base
                            py-2 sm:py-3
                            w-full sm:w-auto
                          "
                        >
                          Join SPARC Today 
                          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                      
                      <Link to="/about">
                        <Button
                          size="sm"
                          className="
                            bg-blue-100 
                            text-blue-700 font-semibold
                            border border-blue-700
                            shadow-md
                            hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 
                            hover:text-white
                            hover:shadow-xl hover:scale-105
                            transition-all duration-300 ease-in-out 
                            rounded-xl
                            group
                            text-sm sm:text-base
                            py-2 sm:py-3
                            w-full sm:w-auto
                          "
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Vision - Left Side */}
            <div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Vision
              </h2>
              <p className="text-base sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
                To emerge as the <span className="font-bold text-blue-600">global force</span> uniting pharma education, research, and industry application — shaping the future of healthcare.
              </p>
            </div>

            {/* Mission Objectives - Right Side */}
            <div>
              <h3 className="text-xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                Mission Objectives
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {missionObjectives.map((objective, index) => {
                  const Icon = objective.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-3 sm:gap-4"
                    >
                      <div className="bg-blue-100 rounded-full p-2 sm:p-3 flex-shrink-0">
                        <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                          {objective.title}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600">
                          {objective.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Strategic Pillars Section */}
<section className="py-12 sm:py-20 bg-black relative overflow-hidden">
  
  {/* Animated Water Drop Ripple Waves */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
    {/* Wave Ring 1 */}
    <div className="absolute w-4 h-4 border-2 border-gray-400/40 rounded-full" style={{
      animation: 'ripple1 10s linear infinite'
    }}></div>
    
    {/* Wave Ring 2 */}
    <div className="absolute w-4 h-4 border-2 border-gray-500/35 rounded-full" style={{
      animation: 'ripple2 10s linear infinite 2s'
    }}></div>
    
    {/* Wave Ring 3 */}
    <div className="absolute w-4 h-4 border-2 border-gray-600/30 rounded-full" style={{
      animation: 'ripple3 10s linear infinite 4s'
    }}></div>
    
    {/* Wave Ring 4 */}
    <div className="absolute w-4 h-4 border-2 border-gray-700/25 rounded-full" style={{
      animation: 'ripple4 10s linear infinite 6s'
    }}></div>
    
    {/* Wave Ring 5 */}
    <div className="absolute w-4 h-4 border-2 border-gray-800/20 rounded-full" style={{
      animation: 'ripple5 10s linear infinite 8s'
    }}></div>
  </div>

  {/* CSS Keyframes for realistic water ripples */}
  <style >{`
    @keyframes ripple1 {
      0% {
        transform: scale(0);
        opacity: 1;
        border-width: 3px;
      }
      50% {
        opacity: 0.6;
        border-width: 2px;
      }
      100% {
        transform: scale(60);
        opacity: 0;
        border-width: 1px;
      }
    }
    
    @keyframes ripple2 {
      0% {
        transform: scale(0);
        opacity: 0.8;
        border-width: 3px;
      }
      50% {
        opacity: 0.5;
        border-width: 2px;
      }
      100% {
        transform: scale(70);
        opacity: 0;
        border-width: 1px;
      }
    }
    
    @keyframes ripple3 {
      0% {
        transform: scale(0);
        opacity: 0.6;
        border-width: 2px;
      }
      50% {
        opacity: 0.4;
        border-width: 1px;
      }
      100% {
        transform: scale(80);
        opacity: 0;
        border-width: 1px;
      }
    }
    
    @keyframes ripple4 {
      0% {
        transform: scale(0);
        opacity: 0.4;
        border-width: 2px;
      }
      50% {
        opacity: 0.2;
        border-width: 1px;
      }
      100% {
        transform: scale(90);
        opacity: 0;
        border-width: 1px;
      }
    }
    
    @keyframes ripple5 {
      0% {
        transform: scale(0);
        opacity: 0.3;
        border-width: 1px;
      }
      50% {
        opacity: 0.15;
      }
      100% {
        transform: scale(100);
        opacity: 0;
        border-width: 1px;
      }
    }
  `}</style>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

    {/* Mobile-first layout */}
    <div className="block lg:hidden">
      {/* Central Title for Mobile */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Strategic Pillars
        </h2>
      </div>

      {/* Grid layout for mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {strategicPillars.map((pillar, index) => (
          <div key={index} className="bg-black rounded-xl p-4 hover:bg-gray-800 transition-all duration-300 border border-gray-700">
            <h3 className="text-base font-bold text-white mb-2">
              {pillar.title}
            </h3>
            <p className="text-gray-300 text-sm">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Desktop circular layout */}
    <div className="hidden lg:block">
      {/* Connection Lines - SVG overlay */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-0" 
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid meet"
      >
        <g stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none">
          {/* Lines connecting center to each pillar */}
          <line x1="600" y1="350" x2="300" y2="180" /> {/* Top Left */}
          <line x1="600" y1="350" x2="900" y2="180" /> {/* Top Right */}
          <line x1="600" y1="350" x2="120" y2="350" /> {/* Middle Left */}
          <line x1="600" y1="350" x2="1080" y2="350" /> {/* Middle Right */}
          <line x1="600" y1="350" x2="300" y2="520" /> {/* Bottom Left */}
          <line x1="600" y1="350" x2="900" y2="520" /> {/* Bottom Right */}
        </g>
      </svg>

      {/* Central Title */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center bg-black px-8 py-4 rounded-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Strategic Pillars
        </h2>
      </div>

      {/* Pillars arranged in a circular pattern */}
      <div className="relative z-20 min-h-[700px]">
        
        {/* Top Row Pillars */}
        <div className="absolute top-8 left-1/4 transform -translate-x-1/2">
          <div className="group bg-black rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-700 w-72">
            <h3 className="text-xl font-bold text-white mb-3">
              Knowledge Dissemination
            </h3>
            <p className="text-gray-300">
              Webinars, panels, thought leaders
            </p>
          </div>
        </div>

        <div className="absolute top-8 right-1/4 transform translate-x-1/2">
          <div className="group bg-black rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-700 w-72">
            <h3 className="text-xl font-bold text-white mb-3">
              Competency Building
            </h3>
            <p className="text-gray-300">
              Advanced training, workshops, certifications
            </p>
          </div>
        </div>

        {/* Middle Row Pillars */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <div className="group bg-black rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-700 w-72">
            <h3 className="text-xl font-bold text-white mb-3">
              Innovation Incubation
            </h3>
            <p className="text-gray-300">
              Hackathons, accelerators, prototypes
            </p>
          </div>
        </div>

        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <div className="group bg-black rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-700 w-72">
            <h3 className="text-xl font-bold text-white mb-3">
              Career Propulsion
            </h3>
            <p className="text-gray-300">
              Mentorship, career expos, partnerships
            </p>
          </div>
        </div>

        {/* Bottom Row Pillars */}
        <div className="absolute bottom-8 left-1/4 transform -translate-x-1/2">
          <div className="group bg-black rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-700 w-72">
            <h3 className="text-xl font-bold text-white mb-3">
              Leadership Cultivation
            </h3>
            <p className="text-gray-300">
              Councils, regional hubs, forums
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 right-1/4 transform translate-x-1/2">
          <div className="group bg-black rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-700 w-72">
            <h3 className="text-xl font-bold text-white mb-3">
              Policy Influence
            </h3>
            <p className="text-gray-300">
              Whitepapers, advocacy, reforms
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Split Scrolling Features Section - Integrated Here */}
      <SplitScrollingFeatures />


      {/* Membership Tiers Section */}
<section className="py-12 sm:py-20 bg-gradient-to-br from-black via-blue-950 to-blue-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
        Membership Tiers
      </h2>
      <p className="text-base sm:text-xl text-white max-w-4xl mx-auto">
        SPARC's tiered structure ensures accessibility while rewarding commitment, with scalable benefits aligned to career stages.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
      {/* SPARC Genesis */}
      <Card className="bg-white bg-opacity-0 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow duration-300 relative border border-blue-800 rounded-lg">
        <CardHeader className="text-center pb-3 sm:pb-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 bg-opacity-0 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
          </div>
          <CardTitle>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              SPARC Genesis
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 font-normal mb-2">Students & Early-Career</p>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">FREE</div>
            <span className="bg-green-100 bg-opacity-80 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              Complimentary
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm text-gray-200 mb-3 sm:mb-4">
              <strong>Eligibility:</strong> Undergraduates, postgraduates, and professionals with 0–1 years of experience.
            </p>
            <h4 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">Core Benefits:</h4>
            <ul className="space-y-2 mb-4 sm:mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200">Full participation in student-centric activities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200">Career bootcamps and skill-building sessions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200">Networking cohorts and research presentations</span>
              </li>
            </ul>
            <div className="bg-green-50 bg-opacity-80 p-2 sm:p-3 rounded-lg text-center border border-green-200">
              <p className="text-green-700 text-xs sm:text-sm font-medium">
                Build foundational skills and network
              </p>
            </div>
          </div>
          {!user && (
            <Link to="/sparcform" state={{ selectedTier: 'genesis' }}>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold text-sm sm:text-base">
                Get Started Free
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>

      {/* SPARC Professional */}
      <Card className="bg-white bg-opacity-30 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow duration-300 relative border border-blue-800 rounded-lg">
        <div className="absolute top-4 right-4 bg-gray-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          Coming Soon
        </div>
        {/* Centered Lock Icon */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-white bg-opacity-80 rounded-full p-4 shadow-lg">
            <Lock className="w-8 h-8 sm:w-12 sm:h-12 text-gray-600" />
          </div>
        </div>
        <CardHeader className="text-center pb-3 sm:pb-4 relative z-30">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
          </div>
          <CardTitle>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              SPARC Professional
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 font-normal mb-2">Mid-to-Senior Level</p>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">$199</div>
            <span className="bg-blue-100 bg-opacity-80 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              Annual Subscription
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-30">
          <div className="mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm text-gray-200 mb-3 sm:mb-4">
              <strong>Eligibility:</strong> Mid-to-senior level pharmaceutical professionals.
            </p>
            <h4 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">Core Benefits:</h4>
            <ul className="space-y-2 mb-4 sm:mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200">Executive masterclasses by industry pioneers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200">Premium networking and international symposia</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200">Collaborative research and ZANE publications</span>
              </li>
            </ul>
            <div className="bg-blue-50 bg-opacity-80 p-2 sm:p-3 rounded-lg text-center border border-blue-200">
              <p className="text-blue-700 text-xs sm:text-sm font-medium">
                Advance your career with premium access
              </p>
            </div>
          </div>
          <Button className="w-full bg-gray-400 text-gray-700 py-2 rounded-lg font-semibold cursor-not-allowed text-sm sm:text-base" disabled>
            Coming Soon
          </Button>
        </CardContent>
      </Card>

      {/* SPARC Fellows */}
      <Card className="bg-white bg-opacity-30 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow duration-300 relative border border-blue-800 rounded-lg">
        <div className="absolute top-4 right-4 bg-gray-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          Coming Soon
        </div>
        {/* Centered Lock Icon */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-white bg-opacity-80 rounded-full p-4 shadow-lg">
            <Lock className="w-8 h-8 sm:w-12 sm:h-12 text-gray-600" />
          </div>
        </div>
        <CardHeader className="text-center pb-3 sm:pb-4 relative z-30">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
          </div>
          <CardTitle>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              SPARC Fellows
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 font-normal mb-2">Elite Leadership</p>
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Exclusive</div>
            <span className="bg-purple-100 bg-opacity-80 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              Invitation-Only
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-30">
          <div className="mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm text-gray-200 mb-3 sm:mb-4">
              <strong>Eligibility:</strong> C-suite executives, renowned researchers, and influential academics.
            </p>
            <h4 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">Premium Privileges:</h4>
            <ul className="space-y-2 mb-4 sm:mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200">Advisory board seats for strategic influence</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200">SPARC Fellow designation with visibility</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200">Thought leadership and high-level discourse</span>
              </li>
            </ul>
            <div className="bg-purple-50 bg-opacity-80 p-2 sm:p-3 rounded-lg text-center border border-purple-200">
              <p className="text-purple-700 text-xs sm:text-sm font-medium">
                Shape the future of pharmaceutical innovation
              </p>
            </div>
          </div>
          <Button className="w-full bg-gray-400 text-gray-700 py-2 rounded-lg font-semibold cursor-not-allowed text-sm sm:text-base" disabled>
            Coming Soon
          </Button>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      {/* Upcoming Events Section - Simplified */}
      <section className="py-12 sm:py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Upcoming Events
              </h2>
              <p className="text-base sm:text-xl text-gray-600">
                Join our community for exclusive events and learning opportunities
              </p>
            </div>
            <Link to="/events">
              <Button variant="outline" className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-105 transition-all duration-300 text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2">
                View All Events
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.id} 
                className="bg-white shadow-md"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium text-white bg-blue-500 px-2 sm:px-3 py-1 rounded-full">
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-base sm:text-lg text-gray-900">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">
                    {event.description}
                  </p>
                  <div className="text-xs sm:text-sm text-gray-500 mb-2">
                    <strong>Speaker:</strong> {event.speaker}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-500">
                      {event.registered}/{event.capacity} registered
                    </span>
                    <Link to={`/events/${event.id}`}>
                      <Button 
                        size="sm" 
                        className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:scale-110 transition-all duration-300 group-hover:shadow-lg text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Auto Scrolling with Dark Theme */}
<section className="py-12 sm:py-20 bg-gradient-to-br from-black via-blue-950 to-blue-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
        What Our Members Say
      </h2>
      <p className="text-base sm:text-xl text-gray-200">
        Hear from professionals who have transformed their careers with SPARC
      </p>
    </div>
    
    {/* Auto-scrolling container */}
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll space-x-4 sm:space-x-6">
        {/* Duplicate testimonials for seamless loop */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-72 sm:w-80 sm:h-80 bg-transparent rounded-lg p-4 sm:p-6 flex flex-col justify-between border border-gray-200 opacity-90"
          >
            {/* Quote Icon */}
            <div className="mb-3 sm:mb-4">
              <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-gray-300" />
            </div>
            
            {/* Testimonial Content */}
            <p className="text-white text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow text-center">
              "{testimonial.content}"
            </p>
            
            {/* Author Info */}
            <div className="flex items-center">
              <div className="h-8 w-8 sm:h-10 sm:w-10 bg-gray-600 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                <span className="text-xs sm:text-sm font-medium text-white">
                  {testimonial.avatar}
                </span>
              </div>
              <div>
                <div className="font-medium text-white text-sm sm:text-base">
                  {testimonial.name}
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  {testimonial.role}
                </div>
                <div className="text-xs text-gray-300">
                  {testimonial.tier} Member
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<style>{`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-scroll {
    animation: scroll 20s linear infinite;
  }
  
  .animate-scroll:hover {
    animation-play-state: paused;
  }
`}</style>

    
    </div>
  );
}