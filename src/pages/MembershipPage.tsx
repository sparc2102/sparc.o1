import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, TrendingUp, Award } from 'lucide-react';
import GradientText from '../components/ui/GradientText';

// Remove framer-motion and react-intersection-observer imports
// import { motion, Variants } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

export function MembershipPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('INR');

  
 const currencyOptions = [
    { value: 'INR', label: 'INR' },
    { value: 'USD', label: 'USD' },
    { value: 'AED', label: 'AED' },
    { value: 'SAR', label: 'SAUDI RIYAL' },
    { value: 'OMR', label: 'OMAN RIYAL' },
    { value: 'EUR', label: 'EUROS' },
    { value: 'AUD', label: 'AUS DOLLARS' },
  ];

  const premiumPrices: { [key: string]: string } = {
    INR: '₹5000 /year',
    USD: '$199 /year',
    EUR: '€179 /year',
    AED: 'AED 599 /year',
    SAR: 'SAR 599 /year',
    OMR: 'OMR 59 /year',
    AUD: 'AUD 299 /year',
  };

  const vipPrices: { [key: string]: string } = {
    INR: '₹15,000 /year',
    USD: '$599 /year',
    EUR: '€539 /year',
    AED: 'AED 1,799 /year',
    SAR: 'SAR 1,799 /year',
    OMR: 'OMR 179 /year',
    AUD: 'AUD 899 /year',
  };


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
      question: "How do I qualify for VIP membership?",
      answer:
        "VIP membership is invitation-only for top professionals and researchers. Current VIP members can nominate qualified candidates.",
    },
    {
      question: "Is Genesis really free for students?",
      answer:
        "Yes! Once verified as a student, you maintain Genesis access for free, even after graduation. You can always upgrade to Premium or VIP later.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and offer institutional billing for corporate memberships. Annual payment options available.",
    },
  ];

  // TODO: Replace with actual authentication logic or context
  const user = null;

  // SEO Metadata - Add these to your main App component or use a helmet component
  // For now, these are comments that should be implemented in your head tags
  /*
  <title>SPARC Membership Tiers - Genesis, Premium & VIP Plans</title>
  <meta name="description" content="Join SPARC professional networking platform with Genesis (Free), Premium, and VIP membership tiers. Advance your career in pharmaceutical innovations and clinical research." />
  <meta name="keywords" content="SPARC membership, pharmaceutical networking, clinical research, professional development, healthcare innovation" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://sparc.zaneproed.com/membership" />
  */

  return (
    <div className="min-h-screen bg-black">
    {/* Membership Tiers Section */}
<section className="py-12 sm:py-20 bg-gradient-to-br from-black via-blue-950 to-blue-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* SEO-optimized heading with structured data potential */}
    <div className="text-center mb-16 sm:mb-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
        SPARC Membership Tiers
      </h1>
      <p className="text-base sm:text-xl text-white max-w-4xl mx-auto">
        SPARC is a professional networking platform dedicated to advancing pharmaceutical innovations, clinical research, and healthcare development. Choose from our Genesis (Free), Premium, and VIP membership plans designed for professionals at every career stage.
      </p>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
      {/* SPARC Genesis */}
      <div>
        <article itemScope itemType="https://schema.org/Service">
          <Card className="bg-gradient-to-br from-gray-900 via-blue-950 to-black backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-transform transition-shadow duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative border border-blue-800 rounded-lg">
            <CardHeader className="text-center pb-4 sm:pb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 bg-opacity-0 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <CardTitle>
                <h2 itemProp="name" className="text-xl sm:text-4xl font-bold text-green-600 mb-3">
                  SPARC Genesis
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 font-normal mb-3">Entry-Level Access</p>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">FREE</div>
                <span className="bg-green-100 bg-opacity-0 text-green-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Complimentary
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6 sm:mb-8">
                <p className="text-xs sm:text-sm text-gray-200 mb-4 sm:mb-6">
                  <strong>Eligibility:</strong> Open to all aspiring professionals and students.
                </p>
                <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Core Benefits:</h3>
                <ul className="space-y-3 mb-6 sm:mb-8" itemProp="features">
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200">Case Simulations for skill-building</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200">Workshops & Webinars for career growth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200">Entitle Program for article writing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200">Research Guidance from experts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200">Zane Omega Trials access</span>
                  </li>
                </ul>
                <div className="bg-green-50 bg-opacity-0 p-3 sm:p-4 rounded-lg text-center border border-green-200">
                  <p className="text-green-700 text-xs sm:text-lg font-medium">
                    Kickstart your career with exclusive opportunities
                  </p>
                </div>
              </div>
              {!user && (
                <Link to="/sparcform" state={{ selectedTier: 'genesis' }}>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-sm sm:text-base"
                    aria-label="Get started with SPARC Genesis membership for free"
                  >
                    Get Started Free
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        </article>
      </div>

      {/* SPARC Premium */}
      <div>
        <article itemScope itemType="https://schema.org/Service">
         <Card className="bg-gradient-to-br from-gray-900 via-blue-950 to-black backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-transform transition-shadow duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative border border-blue-800 rounded-lg">
            <CardHeader className="text-center pb-4 sm:pb-6 relative z-30">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 bg-opacity-0 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <CardTitle>
                <h2 itemProp="name" className="text-xl sm:text-4xl font-bold text-blue-600 mb-3">
                  SPARC Premium
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 font-normal mb-3">Advanced Professionals</p>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <span itemProp="price">{premiumPrices[selectedCurrency].replace('/year', '')}</span>
                 
                  <span itemProp="priceSpecification">/year</span>
                </div>
                <span className="bg-blue-100 bg-opacity-0 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Annual Subscription
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 relative z-30">
              <div className="mb-6 sm:mb-8">
                <p className="text-xs sm:text-sm text-gray-200 mb-4 sm:mb-6">
                  <strong>Eligibility:</strong> Professionals seeking advanced career and academic growth.
                </p>
                <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Core Benefits:</h3>
                <ul className="space-y-3 mb-6 sm:mb-8" itemProp="features">
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200">Hospital Internships for Clinical Experience Training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200">Premium Workshops & Networking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200">Dreamverse for pitching ideas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200">SPARC Publications for research</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200">Competitive Exam Resources</span>
                  </li>
                </ul>
                <div className="bg-blue-50 bg-opacity-0 p-3 sm:p-4 rounded-lg text-center border border-blue-200">
                  <p className="text-blue-700 text-xs sm:text-lg font-medium">
                    Unlock advanced opportunities for growth
                  </p>
                </div>
              </div>
              {!user && (
                <a
                  href="https://pages.razorpay.com/pl_RMEa6ViiASX7Zq/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to SPARC Premium membership"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-sm sm:text-base">
                    Subscribe
                  </Button>
                </a>
              )}
            </CardContent>
          </Card>
        </article>
      </div>

      {/* SPARC VIP */}
      <div>
        <article itemScope itemType="https://schema.org/Service">
          <Card className="bg-gradient-to-br from-gray-900 via-blue-950 to-black backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-transform transition-shadow duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative border border-blue-800 rounded-lg">
            <CardHeader className="text-center pb-4 sm:pb-6 relative z-30">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 bg-opacity-0 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
              </div>
              <CardTitle>
                <h2 itemProp="name" className="text-xl sm:text-4xl font-bold text-yellow-500 mb-3">
                  SPARC VIP
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 font-normal mb-3">Elite Professionals</p>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <span itemProp="price">{vipPrices[selectedCurrency].replace('/year', '')}</span>
                 
                  <span itemProp="priceSpecification">/year</span>
                </div>
                <span className="bg-purple-100 bg-opacity-0 text-yellow-500 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  Invitation-Only
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 relative z-30">
              <div className="mb-6 sm:mb-8">
                <p className="text-xs sm:text-sm text-gray-200 mb-4 sm:mb-6">
                  <strong>Eligibility:</strong> Invitation-only for top professionals and researchers.
                </p>
                <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Core Benefits:</h3>
                <ul className="space-y-3 mb-6 sm:mb-8" itemProp="features">
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200">All Genesis and Premium benefits</span>
                  </li>
                 
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200">Leadership programs and high-value collaborations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200">Global VIP Networking Access in Top Pharma Companies & Hospitals</span>
                
                </li>
                 <li className="flex items-start">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-200">SPARC Honors & Awards recognition</span>
                  </li>
                </ul>

                <div className="bg-purple-50 bg-opacity-0 p-3 sm:p-4 rounded-lg text-center border border-purple-200">
                  <p className="text-yellow-500 text-xs sm:text-lg font-medium">
                    Elite Access & Opportunities for Top-Tier Professionals
                  </p>
                </div>
              </div>
             <Button
  className="w-full bg-yellow-600 hover:bg-yellow-500 text-white py-3 rounded-lg font-semibold text-sm sm:text-base"
  onClick={() => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=support@zanepreod.com",
      "_blank"
    );
  }}
>
  Contact Us
</Button>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  </div>
</section>

 {/* Compare Membership Benefits Section */}
<section className="py-12 sm:py-20 bg-gradient-to-br from-black via-blue-950 to-blue-900">
  <div className="text-center mb-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
      Compare SPARC Membership Benefits
    </h2>
    <p className="text-base sm:text-xl text-gray-300">
      See exactly what each membership tier offers to help you choose the right plan for your career growth
    </p>
  </div>
  <div className="max-w-7xl mx-auto">
    <div className="bg-gray-900 bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-gray-200 border-opacity-20">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]" role="table" aria-label="SPARC membership comparison table">
          <thead>
            <tr>
              <th className="px-6 py-4 text-left text-2xl font-medium text-white w-1/2">Features</th>
              <th className="px-6 py-4 text-center text-2xl font-medium text-green-400 w-1/4">Genesis</th>
              <th className="px-6 py-4 text-center text-2xl font-medium text-blue-400 w-1/4">Premium</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 divide-opacity-20">
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-lg font-medium text-white border-r border-gray-700 border-opacity-20">
                Case Simulations
                <p className="text-sm text-gray-400 mt-1">Practice real-time clinical scenarios to enhance intervention skills.</p>
              </td>
              <td className="px-6 py-4 text-center border-r border-gray-700 border-opacity-20">
                <CheckCircle className="inline-block w-4 h-4 text-green-500" aria-label="Available" />
              </td>
              <td className="px-6 py-4 text-center">
                <CheckCircle className="inline-block w-4 h-4 text-blue-500" aria-label="Available" />
              </td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-lg font-medium text-white border-r border-gray-700 border-opacity-20">
                Hospital Internships
                <p className="text-sm text-gray-400 mt-1">Gain hands-on exposure to patient care and counseling in real hospital settings.</p>
              </td>
              <td className="px-6 py-4 text-center text-gray-400 border-r border-gray-700 border-opacity-20">—</td>
              <td className="px-6 py-4 text-center">
                <CheckCircle className="inline-block w-4 h-4 text-blue-500" aria-label="Available" />
              </td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-lg font-medium text-white border-r border-gray-700 border-opacity-20">
                Workshops
                <p className="text-sm text-gray-400 mt-1">Attend webinars, present work, and engage in intellectual career and research development.</p>
              </td>
              <td className="px-6 py-4 text-center border-r border-gray-700 border-opacity-20">
                <CheckCircle className="inline-block w-4 h-4 text-green-500" aria-label="Available" />
              </td>
              <td className="px-6 py-4 text-center text-gray-400">Premium Access</td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-lg font-medium text-white border-r border-gray-700 border-opacity-20">
                Scholarly contest
                <p className="text-sm text-gray-400 mt-1">Participate in article writing competitions and win exclusive rewards.</p>
              </td>
              
              <td className="px-6 py-4 text-center border-r border-gray-700 border-opacity-20">
                <CheckCircle className="inline-block w-4 h-4 text-green-500" aria-label="Available" />
              </td>
              <td className="px-6 py-4 text-center">
                <CheckCircle className="inline-block w-4 h-4 text-blue-500" aria-label="Available" />
              </td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-lg font-medium text-white border-r border-gray-700 border-opacity-20">
                Research Guidance
                <p className="text-sm text-gray-400 mt-1">Expert mentoring to guide your research projects and focus areas.</p>
              </td>
              <td className="px-6 py-4 text-center border-r border-gray-700 border-opacity-20">
                <CheckCircle className="inline-block w-4 h-4 text-green-500" aria-label="Available" />
              </td>
              <td className="px-6 py-4 text-center text-gray-400">Advanced</td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-lg font-medium text-white border-r border-gray-700 border-opacity-20">
                Free online courses
                <p className="text-sm text-gray-400 mt-1">Access real-time case simulations and free courses through Zane Pro Ed collaboration.</p>
              </td>
              <td className="px-6 py-4 text-center border-r border-gray-700 border-opacity-20">
                <CheckCircle className="inline-block w-4 h-4 text-green-500" aria-label="Available" />
              </td>
              <td className="px-6 py-4 text-center">
                <CheckCircle className="inline-block w-4 h-4 text-blue-500" aria-label="Available" />
              </td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-lg font-medium text-white border-r border-gray-700 border-opacity-20">
                Dreamverse
                <p className="text-sm text-gray-400 mt-1">Platform to pitch innovations to investors and receive technical support.</p>
              </td>
              <td className="px-6 py-4 text-center text-gray-400">—</td>
              <td className="px-6 py-4 text-center border-r border-gray-700 border-opacity-20">
                <CheckCircle className="inline-block w-4 h-4 text-blue-500" aria-label="Available" />
              </td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-lg font-medium text-white border-r border-gray-700 border-opacity-20">
                SPARC Publications
                <p className="text-sm text-gray-400 mt-1">Publish research papers, books, and posters on our platform.</p>
              </td>
              <td className="px-6 py-4 text-center text-gray-400">—</td>
              <td className="px-6 py-4 text-center border-r border-gray-700 border-opacity-20">
                <CheckCircle className="inline-block w-4 h-4 text-blue-500" aria-label="Available" />
              </td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-lg font-medium text-white border-r border-gray-700 border-opacity-20">
                Project Collaborations
                <p className="text-sm text-gray-400 mt-1">Connect with peers and collaborators to advance your projects.</p>
              </td>
              <td className="px-6 py-4 text-center text-gray-400">—</td>
              <td className="px-6 py-4 text-center border-r border-gray-700 border-opacity-20">
                <CheckCircle className="inline-block w-4 h-4 text-blue-500" aria-label="Available" />
              </td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-lg font-medium text-white border-r border-gray-700 border-opacity-20">
                SPARC Recommendation
                <p className="text-sm text-gray-400 mt-1">Boost your opportunities through endorsements from our network of institutions.</p>
              </td>
              <td className="px-6 py-4 text-center text-gray-400">—</td>
              <td className="px-6 py-4 text-center border-r border-gray-700 border-opacity-20">
                <CheckCircle className="inline-block w-4 h-4 text-blue-500" aria-label="Available" />
              </td>
            </tr>
            <tr className="hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
              <td className="px-6 py-4 text-lg font-medium text-white border-r border-gray-700 border-opacity-20">
                Competitive Exam Materials
                <p className="text-sm text-gray-400 mt-1">Access curated resources for international and competitive exams.</p>
              </td>
              <td className="px-6 py-4 text-center text-gray-400">—</td>
              <td className="px-6 py-4 text-center border-r border-gray-700 border-opacity-20">
                <CheckCircle className="inline-block w-4 h-4 text-blue-500" aria-label="Available" />
              </td>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Frequently Asked Questions About SPARC Membership
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <article key={index} className="border border-gray-200 rounded-xl shadow-sm bg-white bg-opacity-10 backdrop-blur-md p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleIndex(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <h3 className="font-semibold text-white text-sm sm:text-base">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-gray-300 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id={`faq-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300 text-xs sm:text-sm">{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}