import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { mockResources } from '../data/mockData';
import { 
  BookOpen, 
  Download, 
  Search, 
  Filter,
  FileText,
  Video,
  BookOpenCheck,
  File,
  Star,
  Eye,
  Calendar
} from 'lucide-react';
import { format } from 'date-fns';

export function ResourcesPage() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = ['all', 'drug-development', 'technology', 'career-development', 'research', 'entrepreneurship'];
  const types = ['all', 'research-paper', 'case-study', 'whitepaper', 'video', 'guide', 'template'];

  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const hasAccess = user ? resource.accessTiers.includes(user.membershipTier) : false;
    
    return matchesSearch && matchesCategory && matchesType && hasAccess;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'research-paper': return <FileText className="h-4 w-4" />;
      case 'case-study': return <BookOpenCheck className="h-4 w-4" />;
      case 'whitepaper': return <File className="h-4 w-4" />;
      case 'guide': return <BookOpen className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      video: 'bg-red-100 text-red-800',
      'research-paper': 'bg-blue-100 text-blue-800',
      'case-study': 'bg-green-100 text-green-800',
      whitepaper: 'bg-purple-100 text-purple-800',
      guide: 'bg-orange-100 text-orange-800',
      template: 'bg-gray-100 text-gray-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Resource Library</h1>
          <p className="text-lg text-gray-600">
            Access our curated collection of research papers, case studies, and industry insights.
          </p>
          {!user && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <p className="text-blue-800">
                <strong>Sign in to access exclusive resources.</strong> Join SPARC to unlock our comprehensive library of pharmaceutical research and industry insights.
              </p>
            </div>
          )}
        </div>

        {user && (
          <>
            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search resources..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </option>
                    ))}
                  </select>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {types.map(type => (
                      <option key={type} value={type}>
                        {type === 'all' ? 'All Types' : type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                        {getTypeIcon(resource.type)}
                        <span className="ml-1">{resource.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                      </span>
                      <div className="flex items-center text-xs text-gray-500">
                        <Star className="h-3 w-3 mr-1" />
                        4.8
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">{resource.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Download className="h-4 w-4 mr-2" />
                        {resource.downloadCount} downloads
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {format(new Date(resource.uploadDate), 'MMM dd, yyyy')}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Eye className="h-4 w-4 mr-2" />
                        {resource.fileSize}
                      </div>
                      {resource.author && (
                        <div className="flex items-center text-sm text-gray-500">
                          <BookOpen className="h-4 w-4 mr-2" />
                          {resource.author}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {resource.accessTiers.map(tier => (
                          <span key={tier} className={`px-2 py-1 text-xs rounded-full ${
                            tier === 'genesis' ? 'bg-green-100 text-green-700' :
                            tier === 'professional' ? 'bg-blue-100 text-blue-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {tier.charAt(0).toUpperCase() + tier.slice(1)}
                          </span>
                        ))}
                      </div>
                      <Button size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
                <p className="text-gray-500">
                  Try adjusting your filters or check back later for new resources.
                </p>
              </div>
            )}
          </>
        )}

        {!user && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockResources.slice(0, 6).map((resource) => (
              <Card key={resource.id} className="relative">
                <div className="absolute inset-0 bg-gray-100 bg-opacity-90 flex items-center justify-center z-10 rounded-lg">
                  <div className="text-center">
                    <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 font-medium">Sign in to access</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2 text-gray-400">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4 line-clamp-3">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-500`}>
                      {resource.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                    <Button size="sm" disabled>
                      <Download className="h-4 w-4 mr-1" />
                      <Link to={`/resources/${resource.id}`}>Download</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}