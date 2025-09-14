import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { membershipTiers } from '../data/mockData';
import { CheckCircle, Star, Users, Trophy, Crown, TrendingUp, Zap, Award } from 'lucide-react';

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

  // TODO: Replace with actual authentication logic or context
  const user = null;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
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
        {/* Membership Tiers Section - Comparison Cards */}
<section className="py-20 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Membership Tiers
      </h2>
      <p className="text-xl text-white max-w-4xl mx-auto">
        SPARC's tiered structure ensures accessibility while rewarding commitment, with scalable benefits aligned to career stages.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* SPARC Genesis */}
      <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative border border-gray-300">
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle>
            <h3 className="text-2xl font-bold text-black mb-2">
              SPARC Genesis
            </h3>
            <p className="text-sm text-gray-600 font-normal mb-2">Students & Early-Career</p>
            <div className="text-3xl font-bold text-black mb-1">FREE</div>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              Complimentary
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <p className="text-sm text-gray-700 mb-4">
              <strong>Eligibility:</strong> Undergraduates, postgraduates, and professionals with 0–1 years of experience.
            </p>
            <h4 className="font-semibold text-black mb-3">Core Benefits:</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">Full participation in student-centric activities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">Career bootcamps and skill-building sessions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">Networking cohorts and research presentations</span>
              </li>
            </ul>
            <div className="bg-green-50 p-3 rounded-lg text-center border border-green-200">
              <p className="text-green-700 text-sm font-medium">
                Build foundational skills and network
              </p>
            </div>
          </div>
          {!user && (
            <Link to="/sparcform" state={{ selectedTier: 'genesis' }}>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold">
                Get Started Free
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>

      {/* SPARC Professional */}
      <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative opacity-60 border border-gray-300">
        <div className="absolute inset-0 bg-gray-100 opacity-50 rounded-lg"></div>
        <div className="absolute top-4 right-4 bg-gray-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          Coming Soon
        </div>
        <CardHeader className="text-center pb-4 relative z-10">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-8 h-8 text-blue-600" />
          </div>
          <CardTitle>
            <h3 className="text-2xl font-bold text-black mb-2">
              SPARC Professional
            </h3>
            <p className="text-sm text-gray-600 font-normal mb-2">Mid-to-Senior Level</p>
            <div className="text-3xl font-bold text-black mb-1">$199</div>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              Annual Subscription
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="mb-6">
            <p className="text-sm text-gray-700 mb-4">
              <strong>Eligibility:</strong> Mid-to-senior level pharmaceutical professionals.
            </p>
            <h4 className="font-semibold text-black mb-3">Core Benefits:</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">Executive masterclasses by industry pioneers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">Premium networking and international symposia</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">Collaborative research and ZANE publications</span>
              </li>
            </ul>
            <div className="bg-blue-50 p-3 rounded-lg text-center border border-blue-200">
              <p className="text-blue-700 text-sm font-medium">
                Advance your career with premium access
              </p>
            </div>
          </div>
          <Button className="w-full bg-gray-400 text-gray-700 py-2 rounded-lg font-semibold cursor-not-allowed" disabled>
            Coming Soon
          </Button>
        </CardContent>
      </Card>

      {/* SPARC Fellows */}
      <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative opacity-60 border border-gray-300">
        <div className="absolute inset-0 bg-gray-100 opacity-50 rounded-lg"></div>
        <div className="absolute top-4 right-4 bg-gray-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          Coming Soon
        </div>
        <CardHeader className="text-center pb-4 relative z-10">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-purple-600" />
          </div>
          <CardTitle>
            <h3 className="text-2xl font-bold text-black mb-2">
              SPARC Fellows
            </h3>
            <p className="text-sm text-gray-600 font-normal mb-2">Elite Leadership</p>
            <div className="text-3xl font-bold text-black mb-1">Exclusive</div>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
              Invitation-Only
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="mb-6">
            <p className="text-sm text-gray-700 mb-4">
              <strong>Eligibility:</strong> C-suite executives, renowned researchers, and influential academics.
            </p>
            <h4 className="font-semibold text-black mb-3">Premium Privileges:</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">Advisory board seats for strategic influence</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">SPARC Fellow designation with visibility</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">Thought leadership and high-level discourse</span>
              </li>
            </ul>
            <div className="bg-purple-50 p-3 rounded-lg text-center border border-purple-200">
              <p className="text-purple-700 text-sm font-medium">
                Shape the future of pharmaceutical innovation
              </p>
            </div>
          </div>
          <div className="relative">
            <Button className="w-full bg-gray-400 text-gray-700 py-2 rounded-lg font-semibold cursor-not-allowed" disabled>
              Coming Soon
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

        {/* Feature Comparison */}
<section className="mb-16">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-white mb-4">Compare Membership Benefits</h2>
    <p className="text-lg text-gray-300">
      See exactly what each membership tier offers
    </p>
  </div>
                 
  <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-black">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-medium text-white">Features</th>
            <th className="px-6 py-4 text-center text-sm font-medium text-green-400">Genesis</th>
            <th className="px-6 py-4 text-center text-sm font-medium text-blue-400">Professional</th>
            <th className="px-6 py-4 text-center text-sm font-medium text-purple-400">Fellows</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          <tr className="hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700">Global Prestige & Local Impact</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">Regional Community Access</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">National Network</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center">Global Community + Leadership Voice</td>
          </tr>
          <tr className="hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700">Career Acceleration Programs</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">Basic Career Guidance</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">Bootcamps + Job Matching</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center">Executive Career Fast-Track</td>
          </tr>
          <tr className="hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700">Industry Leader Access</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">Webinar Access</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">Masterclasses + Panels</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center">VIP Summit Access + 1-on-1s</td>
          </tr>
          <tr className="hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700">Innovation Labs & Hackathons</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">Observer Access</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">Full Participation</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center">Lab Leadership + Prototype Funding</td>
          </tr>
          <tr className="hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700">Mentorship Program</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">Peer Mentoring</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">Senior Professional Mentors</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center">C-Suite Executive Mentors</td>
          </tr>
          <tr className="hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700">Premium Knowledge Vault</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">Basic Resources</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">Curated Journals + Case Studies</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center">Exclusive Whitepapers + Early Access</td>
          </tr>
          <tr className="hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700">Recognition & Awards</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">Participation Certificates</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">SPARC Honors Eligibility</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center">Global Visibility + Premium Awards</td>
          </tr>
          <tr className="hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700">R&D Collaboration Opportunities</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">Project Awareness</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">Funded Project Participation</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center">Lead Funded Projects + Incubator Access</td>
          </tr>
          <tr className="hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700">Leadership Development</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">Student Council Participation</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700">Regional Hub Leadership</td>
            <td className="px-6 py-4 text-sm text-gray-300 text-center">Advisory Board Positions</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

       

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-400 mb-4">Frequently Asked Questions</h2>
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

       
      </div>
    </div>
  );
}