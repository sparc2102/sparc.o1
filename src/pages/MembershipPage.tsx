import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, TrendingUp, Award, Lock, Zap } from 'lucide-react';

export function MembershipPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I upgrade my membership?",
      answer:
        "Yes! You can upgrade to a higher tier at any time. We'll prorate the difference and you'll gain immediate access to the enhanced benefits.",
    },
    {
      question: "How do I qualify for Fellows membership?",
      answer:
        "Fellows membership is invitation-only for C-suite executives and renowned researchers. Current Fellows can nominate qualified candidates.",
    },
    {
      question: "Is Genesis really lifetime access for students?",
      answer:
        "Yes! Once verified as a student, you maintain Genesis access for life, even after graduation. You can always upgrade to Professional or Fellows later.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and offer institutional billing for corporate memberships. Annual and monthly payment options available.",
    },
  ];

  // TODO: Replace with actual authentication logic or context
  const user = null;

  return (
    <div className="min-h-screen bg-black">
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
          <Card className="bg-white bg-opacity-0 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-transform transition-shadow duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative border border-blue-800 rounded-lg">
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
           <Card className="bg-white bg-opacity-0 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-transform transition-shadow duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative border border-blue-800 rounded-lg">
             <div className="absolute top-4 right-4 bg-gray-600 text-white px-2 py-1 rounded-full text-xs font-medium">
               Coming Soon
             </div>
             {/* Centered Lock Icon */}
             <div className="absolute inset-0 flex items-center justify-center z-20">
               <div >
                
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
          <Card className="bg-white bg-opacity-0 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-transform transition-shadow duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative border border-blue-800 rounded-lg">
             <div className="absolute top-4 right-4 bg-gray-600 text-white px-2 py-1 rounded-full text-xs font-medium">
               Coming Soon
             </div>
             {/* Centered Lock Icon */}
             <div className="absolute inset-0 flex items-center justify-center z-20">
               <div>
                
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

       <section className="py-12 sm:py-20 bg-gradient-to-br from-black via-blue-950 to-blue-900">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-white mb-4">Compare Membership Benefits</h2>
    <p className="text-lg text-gray-300">
      See exactly what each membership tier offers
    </p>
  </div>
  <div className="max-w-5xl mx-auto">
    <div className="bg-gray-900 bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-gray-200 border-opacity-20">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-black bg-opacity-30">
            <tr>
              <th className="px-6 py-4 text-left text-lg font-medium text-white">Features</th>
              <th className="px-6 py-4 text-center text-lg font-medium text-green-400">Genesis</th>
              <th className="px-6 py-4 text-center text-lg font-medium text-blue-400">Professional</th>
              <th className="px-6 py-4 text-center text-lg font-medium text-purple-400">Fellows</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 divide-opacity-20">
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700 border-opacity-20">Global Prestige & Local Impact</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">Regional Community Access</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">National Network</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center">Global Community + Leadership Voice</td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700 border-opacity-20">Career Acceleration Programs</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">Basic Career Guidance</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">Bootcamps + Job Matching</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center">Executive Career Fast-Track</td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700 border-opacity-20">Industry Leader Access</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">Webinar Access</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">Masterclasses + Panels</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center">VIP Summit Access + 1-on-1s</td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700 border-opacity-20">Innovation Labs & Hackathons</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">Observer Access</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">Full Participation</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center">Lab Leadership + Prototype Funding</td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700 border-opacity-20">Mentorship Program</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">Peer Mentoring</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">Senior Professional Mentors</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center">C-Suite Executive Mentors</td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700 border-opacity-20">Premium Knowledge Vault</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">Basic Resources</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">Curated Journals + Case Studies</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center">Exclusive Whitepapers + Early Access</td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700 border-opacity-20">Recognition & Awards</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">Participation Certificates</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">SPARC Honors Eligibility</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center">Global Visibility + Premium Awards</td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700 border-opacity-20">R&D Collaboration Opportunities</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">Project Awareness</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">Funded Project Participation</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center">Lead Funded Projects + Incubator Access</td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700 border-opacity-20">Leadership Development</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">Student Council Participation</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center border-r border-gray-700 border-opacity-20">Regional Hub Leadership</td>
              <td className="px-6 py-4 text-sm text-gray-300 text-center">Advisory Board Positions</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-black via-blue-950 to-blue-900">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-400 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl shadow-sm bg-white p-4 transition-all duration-300"
              >
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleIndex(index)}
                >
                  <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
  );
}