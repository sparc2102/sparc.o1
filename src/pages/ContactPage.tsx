import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  HelpCircle,
  Globe,
  Users,
  Building,
  ExternalLink
} from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 3000);
  };

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'membership', label: 'Membership Question' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'events', label: 'Event Information' },
    { value: 'careers', label: 'Career Services' }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@sparc-pharma.org',
      description: 'General inquiries and support',
      action: 'mailto:info@sparc-pharma.org'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (555) 123-SPARC',
      description: 'Monday - Friday, 9 AM - 6 PM EST',
      action: 'tel:+15551237727'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      value: 'Available 24/7',
      description: 'Instant support for members',
      action: '#'
    }
  ];

  const regionalChapters = [
    {
      region: 'Northeast',
      coordinator: 'Dr. Jennifer Walsh',
      email: 'northeast@sparc-pharma.org',
      phone: '+1 (617) 555-0123',
      cities: ['Boston', 'New York', 'Philadelphia', 'Washington DC']
    },
    {
      region: 'West Coast',
      coordinator: 'Dr. Michael Chen',
      email: 'westcoast@sparc-pharma.org',
      phone: '+1 (415) 555-0456',
      cities: ['San Francisco', 'Los Angeles', 'San Diego', 'Seattle']
    },
    {
      region: 'Midwest',
      coordinator: 'Dr. Sarah Johnson',
      email: 'midwest@sparc-pharma.org',
      phone: '+1 (312) 555-0789',
      cities: ['Chicago', 'Minneapolis', 'Detroit', 'Cleveland']
    },
    {
      region: 'International',
      coordinator: 'Dr. Elena Rodriguez',
      email: 'international@sparc-pharma.org',
      phone: '+44 20 7946 0958',
      cities: ['London', 'Toronto', 'Sydney', 'Tokyo']
    }
  ];

  const faqs = [
    {
      question: 'How do I become a SPARC member?',
      answer: 'You can join SPARC by visiting our membership page and selecting the tier that best fits your career stage. Genesis membership is free for students, while Professional and Fellows memberships require annual fees or invitation.'
    },
    {
      question: 'What are the benefits of each membership tier?',
      answer: 'Genesis members get access to student-focused events and basic resources. Professional members enjoy executive masterclasses, premium networking, and career placement services. Fellows receive exclusive advisory opportunities and thought leadership platforms.'
    },
    {
      question: 'Can I upgrade my membership tier?',
      answer: 'Yes! You can upgrade your membership at any time through your dashboard. We\'ll prorate the difference and you\'ll gain immediate access to enhanced benefits.'
    },
    {
      question: 'Are events recorded for later viewing?',
      answer: 'Most webinars and masterclasses are recorded and made available to members within 24 hours. Access to recordings depends on your membership tier and the specific event type.'
    },
    {
      question: 'How do I access the resource library?',
      answer: 'Once you\'re logged in, visit the Resources page to browse our curated collection. Your membership tier determines which resources you can access and download.'
    },
    {
      question: 'Is there a mobile app for SPARC?',
      answer: 'Currently, SPARC is available as a responsive web application that works great on mobile devices. We\'re exploring a dedicated mobile app for future release.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact SPARC</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're here to help you advance your pharmaceutical career. Get in touch with our team 
            for support, questions, or partnership opportunities.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for contacting SPARC. We'll respond to your inquiry within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {inquiryTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    <Button type="submit" className="w-full" isLoading={isSubmitting}>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <div key={index}>
                        <a 
                          href={method.action}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="bg-blue-100 rounded-lg p-2">
                            <Icon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{method.title}</h3>
                            <p className="text-blue-600 font-medium">{method.value}</p>
                            <p className="text-sm text-gray-500">{method.description}</p>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Headquarters Information */}
            <Card>
              <CardHeader>
                <CardTitle>SPARC Headquarters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Building className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">ZANE ProEd</p>
                      <p className="text-gray-600">SPARC Division</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-gray-600">
                        100 Innovation Drive<br />
                        Suite 200<br />
                        Boston, MA 02115<br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Business Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday: 10:00 AM - 2:00 PM EST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-blue-900">Response Times</h3>
                </div>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• General inquiries: Within 24 hours</li>
                  <li>• Membership questions: Within 4 hours</li>
                  <li>• Technical support: Within 2 hours</li>
                  <li>• Partnership inquiries: Within 48 hours</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Regional Chapters */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional Chapters</h2>
            <p className="text-lg text-gray-600">
              Connect with SPARC members in your area through our regional chapters
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalChapters.map((chapter, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{chapter.region}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-900">{chapter.coordinator}</p>
                      <p className="text-sm text-gray-600">Regional Coordinator</p>
                    </div>
                    <div className="space-y-2">
                      <a 
                        href={`mailto:${chapter.email}`}
                        className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        {chapter.email}
                      </a>
                      <a 
                        href={`tel:${chapter.phone}`}
                        className="flex items-center text-sm text-gray-600 hover:text-gray-800"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        {chapter.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Major Cities:</p>
                      <div className="flex flex-wrap gap-1">
                        {chapter.cities.map(city => (
                          <span key={city} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Find Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 font-medium">Interactive Map</p>
                  <p className="text-sm text-gray-500">
                    SPARC Headquarters - Mumbai, India.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about SPARC membership and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Social Media and Additional Resources */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
              <p className="text-blue-100 mb-6">
                Follow SPARC on social media for the latest updates, events, and pharmaceutical industry insights
              </p>
              
              <div className="flex justify-center space-x-6 mb-6">
                <a 
                  href="https://linkedin.com/company/sparc-pharma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/sparc_pharma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/c/sparc-pharma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-colors"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" className="border-white text-blue hover:bg-white hover:text-blue-600">
                  <Globe className="h-4 w-4 mr-2" />
                  Visit Help Center
                </Button>
                <Button variant="outline" className="border-white text-blue hover:bg-white hover:text-blue-600">
                  <Users className="h-4 w-4 mr-2" />
                  Join Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Regional Chapters */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional Chapters</h2>
            <p className="text-lg text-gray-600">
              Connect with SPARC members in your area through our regional chapters
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalChapters.map((chapter, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{chapter.region}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-900">{chapter.coordinator}</p>
                      <p className="text-sm text-gray-600">Regional Coordinator</p>
                    </div>
                    <div className="space-y-2">
                      <a 
                        href={`mailto:${chapter.email}`}
                        className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        {chapter.email}
                      </a>
                      <a 
                        href={`tel:${chapter.phone}`}
                        className="flex items-center text-sm text-gray-600 hover:text-gray-800"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        {chapter.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Major Cities:</p>
                      <div className="flex flex-wrap gap-1">
                        {chapter.cities.map(city => (
                          <span key={city} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about SPARC membership and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="mt-16">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">Emergency Support</h3>
                  <p className="text-red-700 text-sm">
                    For urgent technical issues during events or critical membership matters
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-red-900">+1 (555) 911-SPARC</p>
                  <p className="text-sm text-red-700">Available 24/7</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}