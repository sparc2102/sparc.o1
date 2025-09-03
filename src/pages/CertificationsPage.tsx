import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Award, 
  Download, 
  Calendar, 
  CheckCircle,
  Clock,
  Star,
  Trophy,
  Medal,
  BookOpen,
  Target,
  TrendingUp,
  ExternalLink,
  Share2,
  Eye,
  Users
} from 'lucide-react';
import { format } from 'date-fns';

export function CertificationsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('earned');

  const earnedCertifications = [
    {
      id: '1',
      title: 'Pharmaceutical Sciences Fundamentals',
      issueDate: '2024-01-15',
      expiryDate: '2027-01-15',
      credentialId: 'SPARC-PSF-2024-001',
      status: 'Active',
      category: 'Core Knowledge',
      cpeCredits: 15,
      verificationUrl: 'https://verify.sparc-pharma.org/cert/1'
    },
    {
      id: '2',
      title: 'Clinical Research Excellence',
      issueDate: '2023-11-20',
      expiryDate: '2026-11-20',
      credentialId: 'SPARC-CRE-2023-045',
      status: 'Active',
      category: 'Clinical Research',
      cpeCredits: 20,
      verificationUrl: 'https://verify.sparc-pharma.org/cert/2'
    },
    {
      id: '3',
      title: 'Regulatory Affairs Specialist',
      issueDate: '2023-08-10',
      expiryDate: '2026-08-10',
      credentialId: 'SPARC-RAS-2023-028',
      status: 'Active',
      category: 'Regulatory Affairs',
      cpeCredits: 25,
      verificationUrl: 'https://verify.sparc-pharma.org/cert/3'
    }
  ];

  const availableCertifications = [
    {
      id: '4',
      title: 'Drug Discovery & Development',
      description: 'Comprehensive program covering the entire drug development pipeline from discovery to market approval.',
      duration: '8 weeks',
      cpeCredits: 30,
      category: 'Drug Development',
      prerequisites: ['Pharmaceutical Sciences Fundamentals'],
      accessTier: 'professional',
      enrollmentDeadline: '2024-02-15',
      startDate: '2024-03-01'
    },
    {
      id: '5',
      title: 'Pharmacovigilance & Drug Safety',
      description: 'Advanced training in drug safety monitoring, adverse event reporting, and risk management.',
      duration: '6 weeks',
      cpeCredits: 25,
      category: 'Drug Safety',
      prerequisites: ['Clinical Research Excellence'],
      accessTier: 'professional',
      enrollmentDeadline: '2024-02-28',
      startDate: '2024-03-15'
    },
    {
      id: '6',
      title: 'Pharmaceutical Leadership',
      description: 'Executive leadership program for senior pharmaceutical professionals and aspiring leaders.',
      duration: '12 weeks',
      cpeCredits: 40,
      category: 'Leadership',
      prerequisites: ['5+ years industry experience'],
      accessTier: 'fellows',
      enrollmentDeadline: '2024-01-31',
      startDate: '2024-02-15'
    }
  ];

  const learningPaths = [
    {
      id: '1',
      title: 'Clinical Research Professional',
      description: 'Complete pathway from fundamentals to advanced clinical research expertise',
      certifications: ['Pharmaceutical Sciences Fundamentals', 'Clinical Research Excellence', 'Good Clinical Practice'],
      progress: 67,
      estimatedCompletion: '6 months',
      category: 'Clinical Research'
    },
    {
      id: '2',
      title: 'Regulatory Affairs Expert',
      description: 'Comprehensive regulatory knowledge for pharmaceutical professionals',
      certifications: ['Pharmaceutical Sciences Fundamentals', 'Regulatory Affairs Specialist', 'Global Regulatory Strategy'],
      progress: 33,
      estimatedCompletion: '8 months',
      category: 'Regulatory Affairs'
    },
    {
      id: '3',
      title: 'Pharmaceutical Executive',
      description: 'Leadership and strategic management for pharmaceutical industry leaders',
      certifications: ['Pharmaceutical Leadership', 'Strategic Planning', 'Business Development'],
      progress: 0,
      estimatedCompletion: '12 months',
      category: 'Leadership'
    }
  ];

  const achievements = [
    {
      id: '1',
      title: 'Early Adopter',
      description: 'Joined SPARC in the first year',
      icon: Star,
      earnedDate: '2024-01-15',
      rarity: 'Rare'
    },
    {
      id: '2',
      title: 'Knowledge Seeker',
      description: 'Downloaded 50+ resources',
      icon: BookOpen,
      earnedDate: '2024-03-20',
      rarity: 'Common'
    },
    {
      id: '3',
      title: 'Community Builder',
      description: 'Started 10+ forum discussions',
      icon: Users,
      earnedDate: '2024-05-10',
      rarity: 'Uncommon'
    },
    {
      id: '4',
      title: 'Event Enthusiast',
      description: 'Attended 25+ events',
      icon: Calendar,
      earnedDate: '2024-07-15',
      rarity: 'Rare'
    }
  ];

  const tabs = [
    { id: 'earned', name: 'My Certifications', icon: Award },
    { id: 'available', name: 'Available Programs', icon: BookOpen },
    { id: 'paths', name: 'Learning Paths', icon: Target },
    { id: 'achievements', name: 'Achievements', icon: Trophy }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Core Knowledge': 'bg-blue-100 text-blue-800',
      'Clinical Research': 'bg-green-100 text-green-800',
      'Regulatory Affairs': 'bg-purple-100 text-purple-800',
      'Drug Development': 'bg-orange-100 text-orange-800',
      'Drug Safety': 'bg-red-100 text-red-800',
      'Leadership': 'bg-yellow-100 text-yellow-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getRarityColor = (rarity: string) => {
    const colors: Record<string, string> = {
      'Common': 'bg-gray-100 text-gray-800',
      'Uncommon': 'bg-green-100 text-green-800',
      'Rare': 'bg-blue-100 text-blue-800',
      'Epic': 'bg-purple-100 text-purple-800',
      'Legendary': 'bg-yellow-100 text-yellow-800'
    };
    return colors[rarity] || 'bg-gray-100 text-gray-800';
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Access Restricted</h2>
            <p className="text-gray-600 mb-4">Please sign in to view your certifications and achievements.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Certifications & Achievements</h1>
          <p className="text-gray-600">Track your professional development and showcase your expertise</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-600">Certifications Earned</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">60</div>
              <div className="text-sm text-gray-600">CPE Credits</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">2</div>
              <div className="text-sm text-gray-600">Learning Paths</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">4</div>
              <div className="text-sm text-gray-600">Achievements</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="inline h-4 w-4 mr-2" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Earned Certifications Tab */}
        {activeTab === 'earned' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">My Certifications</h2>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download All
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {earnedCertifications.map((cert) => (
                <Card key={cert.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${getCategoryColor(cert.category)}`}>
                        {cert.category}
                      </span>
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Issued</span>
                        <span className="font-medium">{format(new Date(cert.issueDate), 'MMM dd, yyyy')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Expires</span>
                        <span className="font-medium">{format(new Date(cert.expiryDate), 'MMM dd, yyyy')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">CPE Credits</span>
                        <span className="font-medium">{cert.cpeCredits}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Status</span>
                        <span className="text-green-600 font-medium flex items-center">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {cert.status}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-3">
                        Credential ID: {cert.credentialId}
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Verify
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Available Programs Tab */}
        {activeTab === 'available' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Available Certification Programs</h2>
              <div className="flex space-x-3">
                <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Categories</option>
                  <option>Drug Development</option>
                  <option>Clinical Research</option>
                  <option>Regulatory Affairs</option>
                  <option>Drug Safety</option>
                  <option>Leadership</option>
                </select>
                <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Access Levels</option>
                  <option>Genesis</option>
                  <option>Professional</option>
                  <option>Fellows</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {availableCertifications.map((program) => (
                <Card key={program.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${getCategoryColor(program.category)}`}>
                        {program.category}
                      </span>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        program.accessTier === 'genesis' ? 'bg-green-100 text-green-700' :
                        program.accessTier === 'professional' ? 'bg-blue-100 text-blue-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {program.accessTier.charAt(0).toUpperCase() + program.accessTier.slice(1)}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-medium">{program.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">CPE Credits</span>
                        <span className="font-medium">{program.cpeCredits}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Starts</span>
                        <span className="font-medium">{format(new Date(program.startDate), 'MMM dd, yyyy')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Enrollment Deadline</span>
                        <span className="font-medium text-orange-600">{format(new Date(program.enrollmentDeadline), 'MMM dd, yyyy')}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Prerequisites:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.prerequisites.map((prereq, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {prereq}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full">
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Learning Paths Tab */}
        {activeTab === 'paths' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Learning Paths</h2>
              <Button variant="outline">
                <Target className="h-4 w-4 mr-2" />
                Create Custom Path
              </Button>
            </div>

            <div className="space-y-6">
              {learningPaths.map((path) => (
                <Card key={path.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{path.title}</h3>
                          <span className={`ml-3 px-2 py-1 text-xs rounded-full ${getCategoryColor(path.category)}`}>
                            {path.category}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{path.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-medium">{path.progress}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Est. Completion</span>
                            <span className="font-medium">{path.estimatedCompletion}</span>
                          </div>
                        </div>
                      </div>
                      <div className="ml-6">
                        <div className="text-right mb-4">
                          <div className="text-2xl font-bold text-blue-600">{path.progress}%</div>
                          <div className="text-sm text-gray-500">Complete</div>
                        </div>
                        <Button size="sm">
                          {path.progress > 0 ? 'Continue' : 'Start Path'}
                        </Button>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${path.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Certifications in this path:</h4>
                      <div className="flex flex-wrap gap-2">
                        {path.certifications.map((cert, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Achievements & Badges</h2>
              <div className="text-sm text-gray-600">
                {achievements.length} of 20 achievements unlocked
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <Card key={achievement.id} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                      <div className="space-y-2">
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${getRarityColor(achievement.rarity)}`}>
                          {achievement.rarity}
                        </span>
                        <div className="text-xs text-gray-500">
                          Earned {format(new Date(achievement.earnedDate), 'MMM dd, yyyy')}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Locked Achievements Preview */}
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle>Upcoming Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-gray-200 rounded-lg opacity-60">
                    <Medal className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-700">Mentor</h4>
                    <p className="text-sm text-gray-500">Help 5 members with career advice</p>
                    <div className="mt-2 text-xs text-gray-400">Progress: 2/5</div>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg opacity-60">
                    <Star className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-700">Expert Contributor</h4>
                    <p className="text-sm text-gray-500">Publish 3 resources</p>
                    <div className="mt-2 text-xs text-gray-400">Progress: 0/3</div>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg opacity-60">
                    <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <h4 className="font-medium text-gray-700">Thought Leader</h4>
                    <p className="text-sm text-gray-500">Speak at 3 SPARC events</p>
                    <div className="mt-2 text-xs text-gray-400">Progress: 0/3</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}