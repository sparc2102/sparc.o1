import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Target, 
  Users, 
  Award,
  TrendingUp,
  Globe,
  BookOpen,
  Lightbulb,
  Heart,
  Star,
  CheckCircle
} from 'lucide-react';

// Mission & Vision Component
const MissionVisionSection = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
       {/* Main Mission & Vision Cards */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
  <Card className="!bg-gray-900 border border-black shadow-lg">
    <CardHeader>
      <div className="flex items-center mb-4">
        <CardTitle className="text-8xl text-gray-200">Mission</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-200 text-lg leading-relaxed">
        To empower the next generation of pharmaceutical scientists through
        community-driven advancement, professional development, and collaborative
        research opportunities that accelerate innovation in healthcare.
      </p>
    </CardContent>
  </Card>

  <Card className="!bg-gray-900 border border-black shadow-lg">
    <CardHeader>
      <div className="flex items-center mb-4">
        <CardTitle className="text-8xl text-gray-200">Vision</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-200 text-lg leading-relaxed">
        To stand as <span className="text-blue-400 font-semibold">the global force</span> that unites pharmaceutical education, cutting-edge research, and real-world industry application — creating a <span className="text-blue-400 font-semibold">future-ready, innovation-driven workforce</span> that redefines healthcare for generations to come.
      </p>
    </CardContent>
  </Card>
</div>
       {/* Mission Objectives Section */}
<div className="mb-16">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-white mb-4">Our Mission Objectives</h2>
    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
      At <span className="text-white font-semibold">SPARC</span>, we're not just here to "exist" as another professional society – we're here to <em className="text-blue-400">drive change</em>. Our mission is laser-focused on empowering people, building bridges, and fueling growth that resonates across the global pharma and healthcare ecosystem.
    </p>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
    {/* Empower Talent */}
<Card className="!bg-gray-900 border border-black shadow-lg">
  <CardHeader>
    <div className="flex items-center mb-4">
      <h3 className="text-3xl font-bold text-gray-300">Empower Talent</h3>
    </div>
    <p className="text-blue-400 font-medium mb-4">
      Talent is the fuel of innovation – and we're here to supercharge it.
    </p>
  </CardHeader>
  <CardContent>
    <p className="text-gray-400 mb-4">
      Through <span className="text-gray-300 font-semibold">premium resources, immersive events, and targeted mentorship programs</span>, SPARC ensures that students, researchers, and professionals get the right push at the right time.
    </p>
        <div className="space-y-2">
          <div className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span className="text-gray-400"><span className="text-gray-300 font-semibold">World-class webinars</span> featuring global thought leaders</span>
          </div>
          <div className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span className="text-gray-400"><span className="text-gray-300 font-semibold">Hands-on workshops</span> with industry-grade tools</span>
          </div>
          <div className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span className="text-gray-400"><span className="text-gray-300 font-semibold">Career bootcamps & mentorship tracks</span> to help you crack internships, land jobs, and build future-ready skills</span>
          </div>
        </div>
        <p className="text-gray-400 mt-4">
          Our goal is simple – unlock your full potential so you're not just participating in the pharma space but <span className="text-gray-200 font-semibold">leading it</span>.
        </p>
      </CardContent>
    </Card>

    {/* Build Collaborations */}
    <Card className="!bg-gray-900 border border-black shadow-lg">
  <CardHeader>
    <div className="flex items-center mb-4">
      <h3 className="text-3xl font-bold text-gray-300">Build Collaborations</h3>
        </div>
        <p className="text-purple-400 font-medium mb-4">
          Innovation doesn't happen in silos – it thrives in ecosystems.
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 mb-4">
          SPARC creates <span className="text-gray-300 font-semibold">real, actionable partnerships</span> between academia, industry, and regulatory bodies. We bring together:
        </p>
        <div className="space-y-2">
          <div className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-400"><span className="text-gray-300 font-semibold">Universities</span> seeking stronger research output and accreditation scores</span>
          </div>
          <div className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-400"><span className="text-gray-300 font-semibold">Pharma & biotech companies</span> looking for talent pipelines and co-innovation opportunities</span>
          </div>
          <div className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span className="text-gray-400"><span className="text-gray-300 font-semibold">Regulatory experts</span> to keep the conversation aligned with compliance and global standards</span>
          </div>
        </div>
        <p className="text-gray-400 mt-4">
          This interconnected network isn't just a collaboration—it's a <span className="text-gray-300 font-semibold">catalyst for breakthrough research, policy influence, and better healthcare outcomes worldwide</span>.
        </p>
      </CardContent>
    </Card>

    {/* Fuel Growth */}
    <Card className="!bg-gray-900 border border-black shadow-lg">
  <CardHeader>
    <div className="flex items-center mb-4">
      <h3 className="text-3xl font-bold text-gray-300">Fuel Growth</h3>
        </div>
        <p className="text-orange-400 font-medium mb-4">
          Growth is more than just climbing the career ladder; it's about elevating the entire ecosystem.
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 mb-4">
          SPARC fuels this growth by:
        </p>
        <div className="space-y-2">
          <div className="flex items-start">
            <span className="text-orange-400 mr-2">•</span>
            <span className="text-gray-400"><span className="text-gray-300 font-semibold">Accelerating R&D pipelines</span> through Innovation Labs and project accelerators</span>
          </div>
          <div className="flex items-start">
            <span className="text-orange-400 mr-2">•</span>
            <span className="text-gray-400"><span className="text-gray-300 font-semibold">Shaping future leaders</span> via student councils, fellowships, and leadership forums</span>
          </div>
          <div className="flex items-start">
            <span className="text-orange-400 mr-2">•</span>
            <span className="text-gray-400"><span className="text-gray-300 font-semibold">Recognizing excellence</span> with prestigious SPARC Awards for research, innovation, and professional achievement</span>
          </div>
        </div>
        <p className="text-gray-400 mt-4">
          Whether you're a student, researcher, or industry veteran, SPARC positions you to <span className="text-gray-300 font-semibold">grow faster, think bigger, and impact healthcare at a global scale</span>.
        </p>
      </CardContent>
    </Card>
  </div>
</div>

        {/* Vision Details */}
<Card className="!bg-gray-900 border border-black shadow-lg">
  <CardHeader>
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-200 mb-6">
        We Envision a World Where:
      </h2>
    </div>
  </CardHeader>
  <CardContent>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-yellow-400 mb-3">
          Learning is Limitless
        </h3>
        <p className="text-gray-300">
          Every learner has access to world-class knowledge and mentorship
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold text-blue-400 mb-3">
          Innovation is Collaborative
        </h3>
        <p className="text-gray-300">
          Academia, industry, and regulators work as one
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold text-green-400 mb-3">
          Healthcare is Transformed
        </h3>
        <p className="text-gray-300">
          Scientific breakthroughs reach patients faster, safer, and more equitably
        </p>
      </div>
    </div>
  </CardContent>
</Card>

      </div>
    </div>
  );
};

export function AboutPage() {
  const values = [
    { title: 'Excellence', description: 'We strive for the highest standards in pharmaceutical sciences education and professional development.' },
    { title: 'Community', description: 'Building strong connections between students, researchers, and industry professionals worldwide.' },
    { title: 'Innovation', description: 'Fostering cutting-edge research and breakthrough thinking in pharmaceutical advancement.' },
    { title: 'Impact', description: 'Driving positive change in healthcare through collaborative pharmaceutical research and development.' }
  ];

  const milestones = [
    { year: '2025', title: 'SPARC Founded', description: 'Launched by ZANE ProEd with 18 founding members' },
  ];

  const leadership = [
     { 
    name: 'Samyuktha Hariraman Indumathy', 
    title: "President's Office Intern", 
    bio: 'Supports the president’s office with project coordination, content creation, and strategic planning.', 
    avatar: 'SHI' 
  },
  { 
    name: 'Jersha SJ', 
    title: 'Events Coordinator', 
    bio: 'Organizes and manages events while ensuring smooth execution and participant engagement.', 
    avatar: 'JSJ' 
  },
  { 
    name: 'Sujitha M', 
    title: 'Research Insights Coordinator', 
    bio: 'Analyzes data and research findings to provide actionable insights for projects and initiatives.', 
    avatar: 'SM' 
  },
  { 
    name: 'Naveen N', 
    title: 'Media & Design Intern', 
    bio: 'Creates visual content and manages media assets for events and online platforms.', 
    avatar: 'https://media.licdn.com/dms/image/v2/D5603AQFAy-sff91S0Q/profile-displayphoto-shrink_400_400/B56Zkoc6YrJoAg-/0/1757320293884?e=1760572800&v=beta&t=BSPgvpU26AuIiWB6aDzvItI0yf4QX0kyzpuQF3IzXO4' 
  },
  { 
    name: 'Mohitha K', 
    title: 'Events Coordinator', 
    bio: 'Assists in planning and executing events while ensuring alignment with organizational goals.', 
    avatar: 'MK' 
  },
  { 
    name: 'Arudhra', 
    title: 'Research Insights Coordinator', 
    bio: 'Supports research initiatives and creates engaging content for projects and campaigns.', 
    avatar: 'AR' 
  },
  { 
    name: 'Praveen P', 
    title: 'Innovation Lab Intern', 
    bio: 'Contributes to creative projects and supports innovation-focused initiatives.', 
    avatar: 'PP' 
  },
  { 
    name: 'Sowjanya R', 
    title: 'Content Strategist', 
    bio: 'Develops and curates content to support organizational communication and engagement.', 
    avatar: 'SR' 
  },
  { 
    name: 'Sreenidhi V', 
    title: 'Content Strategist', 
    bio: 'Plans and executes content strategies to enhance visibility and engagement.', 
    avatar: 'SV' 
  },
  { 
    name: 'S Nanthitha', 
    title: 'Content Strategist', 
    bio: 'Creates research-driven content and strategies for effective communication.', 
    avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQEdbG3EXDD1cw/profile-displayphoto-scale_400_400/B4EZkpsUh3HEAg-/0/1757341111247?e=1760572800&v=beta&t=gjJKjquqH8qSRpWSRiLOO34xhOPJW7uqUX_E1uTVZ7s' 
  },
  { 
    name: 'G. Jayanthi', 
    title: 'Innovation Lab Intern', 
    bio: 'Assists in innovative projects and develops content to support lab initiatives.', 
    avatar: 'GJ' 
  },
  { 
    name: 'Mithuna S', 
    title: 'Community Outreach Lead', 
    bio: 'Leads community engagement efforts and builds partnerships through strategic outreach.', 
    avatar: 'MS' 
  },
  { 
    name: 'Srirammalipriyan sivakumar', 
    title: 'Member Engagement Manager', 
    bio: 'Ensures active member participation and engagement across events and programs.', 
    avatar: 'SP' 
  },
  { 
    name: 'G. Siva Priyan', 
    title: 'Research Insights Coordinator', 
    bio: 'Conducts research and delivers insights to support projects and strategic decisions.', 
    avatar: 'GSP' 
  },
  { 
    name: 'Neena Roshini', 
    title: 'Research Insights Coordinator', 
    bio: 'Focuses on research and analysis to inform organizational initiatives.', 
    avatar: 'NR' 
  },
  { 
    name: 'Rohith S', 
    title: 'Member Engagement Manager', 
    bio: 'Coordinates member activities and manages programs to maximize participation.', 
    avatar: 'RS' 
  },
  { 
    name: 'K. Merrin', 
    title: 'Community Outreach Lead', 
    bio: 'Drives outreach campaigns and builds connections with community and industry stakeholders.', 
    avatar: 'KM' 
  }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SPARC</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The Society for Pharma Advancement & Research Collaboration is the gold standard 
              for community-driven advancement in pharmaceutical sciences, powered by 
              <span className="text-red-500 font-semibold"> ZANE ProEd</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <MissionVisionSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Core Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              These values are the heartbeat of SPARC — guiding every step we take.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-zinc-900 rounded-2xl p-6 text-center transition-transform transform hover:-translate-y-2 hover:bg-zinc-800 shadow-md hover:shadow-xl"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-gray-400">
              Key milestones in SPARC's growth and impact
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-24">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium text-center">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow ml-8">
                  <h3 className="text-lg font-semibold">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
{/* Leadership Team - Two Rows Infinite Scroll */}
<section className="mb-16">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
    <p className="text-lg text-gray-400">
      Meet the visionaries behind SPARC's success
    </p>
  </div>

  {/* Row 1 - 9 cards, scroll left */}
  <div className="overflow-hidden relative mb-6 group">
    <div className="flex animate-scroll-left gap-6 group-hover:pause-scroll">
      {leadership.slice(0, 9).concat(leadership.slice(0, 9)).map((leader, index) => (
        <div
          key={index}
          className="bg-zinc-900 w-52 h-52 rounded-xl flex-none p-4 text-center shadow-md hover:bg-zinc-700 transition-all duration-300"
        >
          <div className="h-24 w-24 rounded-full overflow-hidden mx-auto mb-3">
            <img
              src={leader.avatar}
              alt={leader.name}
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="text-sm font-semibold">{leader.name}</h3>
          <p className="text-blue-400 text-xs font-medium">{leader.title}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Row 2 - 8 cards, scroll right */}
  <div className="overflow-hidden relative group">
    <div className="flex animate-scroll-right gap-6 group-hover:pause-scroll">
      {leadership.slice(9).concat(leadership.slice(9)).map((leader, index) => (
        <div
          key={index}
          className="bg-zinc-900 w-52 h-52 rounded-xl flex-none p-4 text-center shadow-md hover:bg-zinc-700 transition-all duration-300"
        >
          <div className="h-24 w-24 rounded-full overflow-hidden mx-auto mb-3">
            <img
              src={leader.avatar}
              alt={leader.name}
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="text-sm font-semibold">{leader.name}</h3>
          <p className="text-blue-400 text-xs font-medium">{leader.title}</p>
        </div>
      ))}
    </div>
  </div>

  {/* CSS for smooth infinite scroll */}
  <style >{`
    @keyframes scroll-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); } /* seamless loop with duplicated array */
    }
    @keyframes scroll-right {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }

    .animate-scroll-left {
      display: flex;
      gap: 1.5rem;
      animation: scroll-left 50s linear infinite; /* adjust speed if needed */
    }

    .animate-scroll-right {
      display: flex;
      gap: 1.5rem;
      animation: scroll-right 50s linear infinite;
    }

    .pause-scroll:hover {
      animation-play-state: paused !important;
    }
  `}</style>
</section>
        {/* What Makes Us Different */}
        <section className="mb-16">
          <div className="bg-zinc-900 rounded-2xl p-8 shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">What Makes SPARC Different?</h2>
              <p className="text-lg text-gray-400">
                We're not just another professional society - we're a transformative force in pharmaceutical sciences
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                <FeatureItem title="Community-Driven Approach" text="Our programs are shaped by member feedback and industry needs" />
                <FeatureItem title="Tiered Membership Model" text="Tailored benefits for students, professionals, and industry leaders" />
                <FeatureItem title="Global Reach" text="Connecting pharmaceutical professionals across continents" />
              </div>
              {/* Right Column */}
              <div className="space-y-4">
                <FeatureItem title="Industry Integration" text="Direct partnerships with leading pharmaceutical companies" />
                <FeatureItem title="Evidence-Based Programs" text="All initiatives backed by rigorous research and proven outcomes" />
                <FeatureItem title="Lifetime Value" text="Resources and connections that grow with your career" />
              </div>
            </div>
          </div>
        </section>

       
      </div>
    </div>
  );
}
type FeatureItemProps = {
  title: string;
  text: string;
};

function FeatureItem({ title, text }: FeatureItemProps) {
  return (
    <div className="flex items-start">
      <span className="text-green-400 mr-3 mt-1">✔</span>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  );
}