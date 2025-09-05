import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { membershipTiers, mockEvents } from '../data/mockData';
import { 
  Flame, 
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
      {/* Hero Section with Enhanced Gradients and Animation */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute top-40 right-20 w-60 h-60 bg-gradient-to-r from-blue-300 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full animate-bounce">
                
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Welcome to <span className="bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-200 bg-clip-text text-transparent animate-pulse">SPARC</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-4 animate-fade-in-up delay-200">
              Society for Pharma Advancement & Research Collaboration
            </p>
            <p className="text-lg text-blue-200 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-400">
              The gold standard for community-driven advancement in pharmaceutical sciences. 
              Join thousands of students, researchers, and industry leaders shaping the future of healthcare.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-600">
              {user ? (
                <Button
                  size="lg"
                  className="
                    bg-gradient-to-r from-blue-600 to-blue-700 
                    text-white font-semibold 
                    shadow-md 
                    hover:from-blue-700 hover:to-blue-800 
                    hover:shadow-xl hover:scale-105
                    transition-all duration-300 ease-in-out 
                    rounded-xl
                    group
                  "
                  onClick={() => navigate('/dashboard')}
                >
                  Go to Dashboard 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              ) : (
                <>
                 <Link to="/register">
  <Button
    size="lg"
    className="
      bg-gradient-to-r from-blue-500 to-blue-700 
      text-white font-semibold 
      shadow-md 
      hover:from-blue-600 hover:to-blue-800 
      hover:shadow-xl hover:scale-105
      transition-all duration-300 ease-in-out 
      rounded-xl
      group
    "
  >
    Join SPARC Today 
    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
  </Button>
</Link>

<Link to="/about">
  <Button
    size="lg"
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
    "
  >
    Learn More
    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
  </Button>
</Link>


                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced Hover Effects */}
      <section className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 rounded-xl p-4 hover:shadow-lg"
                >
                  <div className="relative">
                    <Icon className="h-8 w-8 text-blue-600 mx-auto mb-2 group-hover:text-purple-600 transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-12" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section with Enhanced Animations */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
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
                <div 
                  key={index} 
                  className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-500 hover:bg-white rounded-2xl p-6 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative mb-4">
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Tiers Section with Enhanced Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600">
              Three membership tiers designed for every stage of your pharmaceutical career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <Card 
                key={tier.id} 
                className={`relative transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group cursor-pointer bg-white/70 backdrop-blur-sm border-0 hover:bg-white ${tier.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 text-sm font-medium rounded-full animate-pulse shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-center">
                    <div className="text-2xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300" style={{ color: tier.color }}>
                      {tier.name}
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {tier.price}
                    </div>
                    <div className="text-sm text-gray-500">{tier.duration}</div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${benefitIndex * 100}ms` }}>
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0 group-hover:text-green-600 group-hover:scale-110 transition-all duration-300" />
                        <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-gray-500 mb-6 group-hover:text-gray-600 transition-colors duration-300">
                    <strong>Eligibility:</strong> {tier.eligibility}
                  </div>
                  {!user && (
                    <Link to="/register" state={{ selectedTier: tier.id }}>
                      <Button 
                        className={`w-full transform hover:scale-105 transition-all duration-300 group-hover:shadow-lg ${
                          tier.popular 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                            : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                        }`}
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

      {/* Upcoming Events Section with Enhanced Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600">
                Join our community for exclusive events and learning opportunities
              </p>
            </div>
            <Link to="/events">
              <Button variant="outline" className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-105 transition-all duration-300">
                View All Events
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.id} 
                className="group cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:bg-white border-0 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full group-hover:scale-110 transition-transform duration-300">
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-lg group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-gray-600 mb-4 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                    {event.description}
                  </p>
                  <div className="text-sm text-gray-500 mb-2 group-hover:text-gray-600 transition-colors duration-300">
                    <strong>Speaker:</strong> {event.speaker}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      {event.registered}/{event.capacity} registered
                    </span>
                    <Link to={`/events/${event.id}`}>
                      <Button 
                        size="sm" 
                        className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:scale-110 transition-all duration-300 group-hover:shadow-lg"
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

      {/* Testimonials Section with Enhanced Animations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
              What Our Members Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from professionals who have transformed their careers with SPARC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="relative group cursor-pointer transform hover:scale-105 hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:bg-white border-0 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="pt-6 relative">
                  <Quote className="h-8 w-8 text-blue-200 mb-4 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300" />
                  <p className="text-gray-600 mb-6 italic group-hover:text-gray-700 transition-colors duration-300">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mr-3 group-hover:from-blue-500 group-hover:to-purple-500 group-hover:scale-110 transition-all duration-300">
                      <span className="text-sm font-medium text-blue-600 group-hover:text-white transition-colors duration-300">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                        {testimonial.tier} Member
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Gradient */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-white to-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in-up delay-200">
            Join thousands of pharmaceutical professionals who trust SPARC for their career development
          </p>
          {!user && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
             <Link to="/register">
  <Button 
    size="lg" 
    className="
      bg-gradient-to-r from-blue-500 to-blue-700 
      text-white font-semibold 
      shadow-md 
      hover:from-blue-600 hover:to-blue-800 
      hover:shadow-xl hover:scale-110
      transition-all duration-300 ease-in-out 
      rounded-xl
      group
    "
  >
    Start Free with Genesis
    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
  </Button>
</Link>

<Link to="/contact">
  <Button 
    size="lg" 
    className="
      bg-blue-100 
      text-blue-700 font-semibold 
      border border-blue-700
      shadow-md
      hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 
      hover:text-white 
      hover:shadow-xl hover:scale-110
      transition-all duration-300 ease-in-out 
      rounded-xl
      group
    "
  >
    Contact Us
    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
  </Button>
</Link>

            </div>
          )}
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}