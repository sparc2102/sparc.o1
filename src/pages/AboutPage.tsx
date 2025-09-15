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
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest standards in pharmaceutical sciences education and professional development.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong connections between students, researchers, and industry professionals worldwide.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Fostering cutting-edge research and breakthrough thinking in pharmaceutical advancement.'
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'Driving positive change in healthcare through collaborative pharmaceutical research and development.'
    }
  ];

  const milestones = [
    { year: '2025', title: 'SPARC Founded', description: 'Launched by ZANE ProEd with 18 founding members' },
  ];

  const leadership = [
    {
      name: 'Dr. Elena Rodriguez',
      title: 'Founder & CEO, SPARC',
      bio: 'Former pharmaceutical executive with 20+ years experience at leading biotech companies.',
      avatar: 'ER'
    },
    {
      name: 'Dr. James Wilson',
      title: 'Scientific Advisory Board Chair',
      bio: 'Renowned researcher in drug discovery and development, published 150+ peer-reviewed papers.',
      avatar: 'JW'
    },
    {
      name: 'Maria Santos',
      title: 'Director of Membership',
      bio: 'Expert in professional development with background in pharmaceutical industry relations.',
      avatar: 'MS'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center">
<h1 className="text-4xl md:text-5xl font-bold mb-6">About SPARC</h1>
<p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
  The Society for Pharma Advancement & Research Collaboration is the gold standard 
  for community-driven advancement in pharmaceutical sciences, powered by 
  <span className="text-red-600 font-semibold"> ZANE ProEd</span>.
</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - NEW */}
      <MissionVisionSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Core Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at SPARC
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">
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
                  <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Meet the visionaries behind SPARC's success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-semibold text-blue-600">{leader.avatar}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{leader.title}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="mb-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes SPARC Different?</h2>
                <p className="text-lg text-gray-600">
                  We're not just another professional society - we're a transformative force in pharmaceutical sciences
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Community-Driven Approach</h3>
                      <p className="text-gray-600">Our programs are shaped by member feedback and industry needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Tiered Membership Model</h3>
                      <p className="text-gray-600">Tailored benefits for students, professionals, and industry leaders</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Global Reach</h3>
                      <p className="text-gray-600">Connecting pharmaceutical professionals across continents</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Industry Integration</h3>
                      <p className="text-gray-600">Direct partnerships with leading pharmaceutical companies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Evidence-Based Programs</h3>
                      <p className="text-gray-600">All initiatives backed by rigorous research and proven outcomes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Lifetime Value</h3>
                      <p className="text-gray-600">Resources and connections that grow with your career</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

       
      </div>
    </div>
  );
}