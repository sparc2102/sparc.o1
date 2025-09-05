import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { mockJobs } from '../data/mockData';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  Search,
  Filter,
  Users,
  Building,
  GraduationCap,
  Star,
  ExternalLink,
  BookOpen,
  UserCheck,
  FileText
} from 'lucide-react';
import { format } from 'date-fns';

export function CareersPage() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const jobTypes = ['all', 'full-time', 'part-time', 'internship', 'contract'];
  const locations = ['all', 'Boston, MA', 'San Diego, CA', 'New York, NY', 'Remote'];

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || job.type === selectedType;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const hasAccess = user ? job.accessTiers.includes(user.membershipTier) : false;
    
    return matchesSearch && matchesType && matchesLocation && hasAccess;
  });

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'full-time': 'bg-green-100 text-green-800',
      'part-time': 'bg-blue-100 text-blue-800',
      'internship': 'bg-orange-100 text-orange-800',
      'contract': 'bg-purple-100 text-purple-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const careerResources = [
    {
      title: 'Resume Builder',
      description: 'Create a professional pharmaceutical industry resume',
      icon: FileText,
      color: 'bg-blue-500'
    },
    {
      title: 'Interview Prep',
      description: 'Practice common pharmaceutical interview questions',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Salary Guide',
      description: 'Industry salary benchmarks and negotiation tips',
      icon: DollarSign,
      color: 'bg-orange-500'
    },
    {
      title: 'Mentorship',
      description: 'Connect with industry mentors',
      icon: UserCheck,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Career Center</h1>
          <p className="text-lg text-gray-600">
            Discover opportunities in pharmaceutical sciences and advance your career with exclusive job listings.
          </p>
          {!user && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4">
              <p className="text-orange-800">
                <strong>Join SPARC to access exclusive job opportunities.</strong> Our members get early access to positions at top pharmaceutical companies.
              </p>
            </div>
          )}
        </div>

        {/* Career Resources */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Career Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {careerResources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <button
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-left"
                  >
                    <div className={`h-10 w-10 ${resource.color} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">{resource.title}</h3>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {user && (
          <>
            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search jobs, companies, keywords..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {jobTypes.map(type => (
                      <option key={type} value={type}>
                        {type === 'all' ? 'All Types' : type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </option>
                    ))}
                  </select>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {locations.map(location => (
                      <option key={location} value={location}>
                        {location === 'all' ? 'All Locations' : location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <Building className="h-5 w-5 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600">{job.company}</span>
                          <span className={`ml-3 px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(job.type)}`}>
                            {job.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          {job.salary && (
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {job.salary}
                            </div>
                          )}
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            Posted {format(new Date(job.postedDate), 'MMM dd')}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
                      </div>
                      <div className="ml-4 text-right">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Star className="h-4 w-4 mr-1" />
                          4.6 rating
                        </div>
                      </div>
                    </div>

                    {/* Requirements Preview */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Key Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {req}
                          </span>
                        ))}
                        {job.requirements.length > 3 && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                            +{job.requirements.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Benefits Preview */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.benefits.slice(0, 4).map((benefit, index) => (
                          <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex space-x-1">
                        {job.accessTiers.map(tier => (
                          <span key={tier} className={`px-2 py-1 text-xs rounded-full ${
                            tier === 'genesis' ? 'bg-green-100 text-green-700' :
                            tier === 'professional' ? 'bg-blue-100 text-blue-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {tier.charAt(0).toUpperCase() + tier.slice(1)}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <BookOpen className="h-4 w-4 mr-1" />
                          Save
                        </Button>
                        <Button size="sm">
                          Apply Now
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-500">
                  Try adjusting your search criteria or check back later for new opportunities.
                </p>
              </div>
            )}
          </>
        )}

        {!user && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockJobs.slice(0, 4).map((job) => (
              <Card key={job.id} className="relative">
                <div className="absolute inset-0 bg-gray-100 bg-opacity-90 flex items-center justify-center z-10 rounded-lg">
                  <div className="text-center">
                    <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 font-medium">Sign in to view details</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-gray-400">{job.company}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-400 mb-2">{job.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <span className="px-2 py-1 text-xs bg-gray-200 text-gray-500 rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-gray-400 line-clamp-2">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}