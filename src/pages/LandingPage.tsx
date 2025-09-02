import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { membershipTiers, mockEvents } from '../data/mockData';
import { 
  Shield, 
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
  Target
} from 'lucide-react';

export function LandingPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const stats = [
    { label: 'Active Members', value: '10K+', icon: Users },
    { label: 'Events Hosted', value: '500+', icon: Calendar },
    { label: 'Resources Available', value: '1K+', icon: BookOpen },
    { label: 'Career Placements', value: '2K+', icon: Award }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Senior Research Scientist, PharmaCorp',
      tier: 'Professional',
      content: 'SPARC has been instrumental in my career growth. The networking opportunities and exclusive content have opened doors I never knew existed.',
      avatar: 'SC'
    },
    {
      name: 'Alex Johnson',
      role: 'PhD Student, Stanford University',
      tier: 'Genesis',
      content: 'As a student, the Genesis membership gave me access to incredible mentorship and career guidance that shaped my research direction.',
      avatar: 'AJ'
    },
    {
      name: 'Dr. Michael Roberts',
      role: 'Chief Scientific Officer, BioInnovate',
      tier: 'Fellows',
      content: 'The Fellows program connects me with the most innovative minds in pharma. The strategic insights and collaboration opportunities are unmatched.',
      avatar: 'MR'
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

  const upcomingEvents = mockEvents.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-20 w-20 text-blue-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-blue-200">SPARC</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4">
              Society for Pharma Advancement & Research Collaboration
            </p>
            <p className="text-lg text-blue-200 mb-8 max-w-3xl mx-auto">
              The gold standard for community-driven advancement in pharmaceutical sciences. 
              Join thousands of students, researchers, and industry leaders shaping the future of healthcare.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Button 
                  size="lg" 
                  className="bg-white text-blue-700 hover:bg-blue-50"
                  onClick={() => navigate('/dashboard')}
                >
                  Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              ) : (
                <>
                  <Link to="/register">
                    <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                      Join SPARC Today <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                      Learn More
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SPARC?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering pharmaceutical sciences professionals with the resources, connections, 
              and opportunities needed to drive innovation and advance careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600">
              Three membership tiers designed for every stage of your pharmaceutical career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier) => (
              <Card key={tier.id} className={`relative ${tier.popular ? 'ring-2 ring-blue-500 shadow-xl' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-center">
                    <div className="text-2xl font-bold mb-2" style={{ color: tier.color }}>
                      {tier.name}
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{tier.price}</div>
                    <div className="text-sm text-gray-500">{tier.duration}</div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-gray-500 mb-6">
                    <strong>Eligibility:</strong> {tier.eligibility}
                  </div>
                  {!user && (
                    <Link to="/register" state={{ selectedTier: tier.id }}>
                      <Button 
                        className="w-full" 
                        variant={tier.popular ? 'primary' : 'outline'}
                      >
                        {tier.id === 'fellows' ? 'Apply Now' : 'Get Started'}
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600">
                Join our community for exclusive events and learning opportunities
              </p>
            </div>
            <Link to="/events">
              <Button variant="outline">View All Events</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  <div className="text-sm text-gray-500 mb-2">
                    <strong>Speaker:</strong> {event.speaker}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {event.registered}/{event.capacity} registered
                    </span>
                    <Link to={`/events/${event.id}`}>
                      <Button size="sm">Learn More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Members Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from professionals who have transformed their careers with SPARC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-blue-200 mb-4" />
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-medium text-blue-600">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                      <div className="text-xs text-blue-600">{testimonial.tier} Member</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of pharmaceutical professionals who trust SPARC for their career development
          </p>
          {!user && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Start Free with Genesis
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}