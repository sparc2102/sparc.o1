import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { membershipTiers } from '../data/mockData';
import { CheckCircle, Star, Users, Trophy, Crown, ArrowRight, Zap } from 'lucide-react';

export function MembershipPage() {
  const getIcon = (tierId: string) => {
    switch (tierId) {
      case 'genesis': return <Users className="h-8 w-8" />;
      case 'professional': return <Trophy className="h-8 w-8" />;
      case 'fellows': return <Crown className="h-8 w-8" />;
      default: return <Star className="h-8 w-8" />;
    }
  };

  const comparisonFeatures = [
    { 
      feature: 'Event Access', 
      genesis: 'Student-focused events', 
      professional: 'All events + executive masterclasses', 
      fellows: 'All events + exclusive forums' 
    },
    { 
      feature: 'Resource Library', 
      genesis: 'Basic resources', 
      professional: 'Advanced resources', 
      fellows: 'Full library + early access' 
    },
    { 
      feature: 'Networking', 
      genesis: 'Peer networking', 
      professional: 'Industry connections', 
      fellows: 'C-suite network' 
    },
    { 
      feature: 'Career Support', 
      genesis: 'Career bootcamps', 
      professional: 'Placement services', 
      fellows: 'Advisory opportunities' 
    },
    { 
      feature: 'Mentorship', 
      genesis: 'Group mentoring', 
      professional: '1:1 mentor matching', 
      fellows: 'Advisory board roles' 
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      tier: 'Genesis',
      quote: 'SPARC Genesis gave me the foundation I needed as a student. The career bootcamps were game-changers.',
      company: 'Stanford University'
    },
    {
      name: 'Dr. Sarah Chen',
      tier: 'Professional',
      quote: 'The Professional membership opened doors I never knew existed. The industry connections are invaluable.',
      company: 'PharmaCorp'
    },
    {
      name: 'Dr. Michael Roberts',
      tier: 'Fellows',
      quote: 'Being a SPARC Fellow connects me with the most innovative minds in pharma. The strategic value is immense.',
      company: 'BioInnovate Inc.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Choose Your SPARC Journey</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Three membership tiers designed to support you at every stage of your pharmaceutical career
          </p>
          <div className="flex items-center justify-center space-x-2 text-blue-200">
            <Zap className="h-5 w-5" />
            <span>Over 10,000 professionals trust SPARC for their career advancement</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Membership Tiers */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier) => (
              <Card key={tier.id} className={`relative ${tier.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 text-sm font-medium rounded-full flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4" style={{ color: tier.color }}>
                    {getIcon(tier.id)}
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2" style={{ color: tier.color }}>
                    {tier.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-gray-900">{tier.price}</div>
                  <div className="text-sm text-gray-500">{tier.duration}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="text-sm font-medium text-gray-900 mb-1">Eligibility</div>
                    <div className="text-sm text-gray-600">{tier.eligibility}</div>
                  </div>

                  <Link to="/sparcform" state={{ selectedTier: tier.id }}>
                    <Button 
                      className="w-full" 
                      variant={tier.popular ? 'primary' : 'outline'}
                      size="lg"
                    >
                      {tier.id === 'fellows' ? 'Apply Now' : 'Get Started'}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare Membership Benefits</h2>
            <p className="text-lg text-gray-600">
              See exactly what each membership tier offers
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-green-700">Genesis</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-blue-700">Professional</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-purple-700">Fellows</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.feature}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{item.genesis}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{item.professional}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 text-center">{item.fellows}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
            <p className="text-lg text-gray-600">
              Real experiences from SPARC members across all tiers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="text-4xl text-gray-300 mb-2">"</div>
                    <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                    <div className={`inline-block px-2 py-1 mt-2 text-xs rounded-full ${
                      testimonial.tier === 'Genesis' ? 'bg-green-100 text-green-700' :
                      testimonial.tier === 'Professional' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {testimonial.tier} Member
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Can I upgrade my membership?</h3>
                <p className="text-gray-600">Yes! You can upgrade to a higher tier at any time. We'll prorate the difference and you'll gain immediate access to the enhanced benefits.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">How do I qualify for Fellows membership?</h3>
                <p className="text-gray-600">Fellows membership is invitation-only for C-suite executives and renowned researchers. Current Fellows can nominate qualified candidates.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Is Genesis really lifetime access for students?</h3>
                <p className="text-gray-600">Yes! Once verified as a student, you maintain Genesis access for life, even after graduation. You can always upgrade to Professional or Fellows later.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, PayPal, and offer institutional billing for corporate memberships. Annual and monthly payment options available.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Start Your SPARC Journey Today</h2>
              <p className="text-xl text-blue-100 mb-6">
                Join thousands of pharmaceutical professionals advancing their careers with SPARC
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/sparcform">
                  <Button size="lg" className="bg-blue text-blue-600 hover:bg-blue-50">
                    Join Now - Free Genesis
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-blue text-blue hover:bg-blue hover:text-blue-600">
                    Questions? Contact Us
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