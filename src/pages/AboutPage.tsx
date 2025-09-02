import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { 
  Shield, 
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
    { year: '2020', title: 'SPARC Founded', description: 'Launched by ZANE ProEd with 50 founding members' },
    { year: '2021', title: '1,000 Members', description: 'Reached our first major membership milestone' },
    { year: '2022', title: 'Global Expansion', description: 'Extended programs to Europe and Asia-Pacific' },
    { year: '2023', title: '100+ Events', description: 'Hosted over 100 professional development events' },
    { year: '2024', title: '10,000+ Members', description: 'Became the leading pharmaceutical professional society' }
  ];

  const leadership = [
    {
      name: 'Dr. Elena Rodriguez',
      title: 'Founder & CEO, ZANE ProEd',
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
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SPARC</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The Society for Pharma Advancement & Research Collaboration is the gold standard 
              for community-driven advancement in pharmaceutical sciences, powered by ZANE ProEd.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower the next generation of pharmaceutical scientists through 
                community-driven advancement, professional development, and collaborative 
                research opportunities that accelerate innovation in healthcare.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-purple-600 mr-3" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the global leader in pharmaceutical professional development, 
                creating a world where every pharmaceutical scientist has access to 
                the resources, connections, and opportunities needed to drive 
                breakthrough innovations in medicine.
              </p>
            </CardContent>
          </Card>
        </div>

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

        {/* Our Impact */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">
              Transforming careers and advancing pharmaceutical sciences globally
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">Active Members</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Events Hosted</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">2,000+</div>
                <div className="text-gray-600">Career Placements</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-gray-600">Countries Reached</div>
              </CardContent>
            </Card>
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

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
              <p className="text-xl text-blue-100 mb-6">
                Become part of the leading network of pharmaceutical professionals worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    Join SPARC Today
                  </Button>
                </Link>
                <Link to="/membership">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Learn About Membership
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}