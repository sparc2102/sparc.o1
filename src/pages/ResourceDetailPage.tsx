import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { supabase } from '../lib/supabase';
import { 
  Download, 
  Eye, 
  Star, 
  User,
  Calendar,
  Tag,
  Share2,
  BookOpen,
  ArrowLeft,
  AlertCircle,
  FileText,
  Video,
  File,
  Lock,
  CheckCircle
} from 'lucide-react';
import { format } from 'date-fns';

interface Resource {
  id: string;
  title: string;
  description: string;
  content_type: string;
  access_level: string;
  category: string;
  tags: string[];
  file_url?: string;
  download_count: number;
  author_name: string;
  publication_date: string;
  created_at: string;
  file_size: string;
}

export function ResourceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [resource, setResource] = useState<Resource | null>(null);
  const [relatedResources, setRelatedResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState('');
  const [rating, setRating] = useState(0);
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    if (id) {
      fetchResourceDetails();
    }
  }, [id]);

  const fetchResourceDetails = async () => {
    try {
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setResource(data);

      // Fetch related resources
      if (data) {
        const { data: related } = await supabase
          .from('resources')
          .select('*')
          .eq('category', data.category)
          .neq('id', id)
          .limit(4);
        
        setRelatedResources(related || []);
      }
    } catch (error) {
      setError('Failed to load resource details');
      console.error('Error fetching resource:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!resource || !user) return;

    setDownloading(true);
    try {
      // Check access permissions
      const tierHierarchy = { genesis: 1, professional: 2, fellows: 3 };
      const requiredLevel = tierHierarchy[resource.access_level as keyof typeof tierHierarchy] || 1;
      const userLevel = tierHierarchy[user.membershipTier as keyof typeof tierHierarchy] || 1;

      if (userLevel < requiredLevel) {
        setError('Your membership tier does not have access to this resource');
        return;
      }

      // Increment download count
      const { error } = await supabase
        .from('resources')
        .update({ download_count: resource.download_count + 1 })
        .eq('id', resource.id);

      if (error) throw error;

      // Simulate download
      setResource(prev => prev ? { ...prev, download_count: prev.download_count + 1 } : null);
      
      // In a real implementation, you would trigger the actual file download here
      alert('Download started! (This is a demo - no actual file will be downloaded)');
    } catch (error) {
      setError('Failed to download resource');
      console.error('Download error:', error);
    } finally {
      setDownloading(false);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-5 w-5" />;
      case 'research-paper': return <FileText className="h-5 w-5" />;
      case 'case-study': return <BookOpen className="h-5 w-5" />;
      case 'whitepaper': return <File className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
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

  const hasAccess = () => {
    if (!user || !resource) return false;
    const tierHierarchy = { genesis: 1, professional: 2, fellows: 3 };
    const requiredLevel = tierHierarchy[resource.access_level as keyof typeof tierHierarchy] || 1;
    const userLevel = tierHierarchy[user.membershipTier as keyof typeof tierHierarchy] || 1;
    return userLevel >= requiredLevel;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !resource) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Resource Not Found</h2>
            <p className="text-gray-600 mb-4">The resource you're looking for doesn't exist or has been removed.</p>
            <Link to="/resources">
              <Button>Back to Resources</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/resources" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Resources
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Resource Header */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(resource.content_type)}`}>
                        {getTypeIcon(resource.content_type)}
                        <span className="ml-1">{resource.content_type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                      </span>
                      <span className="ml-3 text-sm text-gray-500">
                        {resource.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{resource.title}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {resource.author_name}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {format(new Date(resource.publication_date), 'MMM dd, yyyy')}
                      </div>
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-2" />
                        {resource.download_count} downloads
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-2" />
                        {resource.file_size}
                      </div>
                    </div>
                  </div>
                  <div className="ml-6 flex flex-col space-y-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <BookOpen className="h-4 w-4 mr-1" />
                      Bookmark
                    </Button>
                  </div>
                </div>

                {/* Access Control */}
                <div className="mb-6">
                  {!user ? (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800">
                        <Link to="/login" className="font-medium underline">Sign in</Link> to access this resource.
                      </p>
                    </div>
                  ) : !hasAccess() ? (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center">
                      <Lock className="h-5 w-5 text-orange-600 mr-3" />
                      <div>
                        <p className="text-orange-800 font-medium">Premium Resource</p>
                        <p className="text-orange-700 text-sm">
                          This resource requires {resource.access_level} membership or higher. 
                          <Link to="/membership" className="font-medium underline ml-1">Upgrade your membership</Link> to access.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <Button 
                      onClick={handleDownload}
                      isLoading={downloading}
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Resource
                    </Button>
                  )}
                </div>

                {/* Resource Description */}
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">About This Resource</h3>
                  <p className="text-gray-700 leading-relaxed">{resource.description}</p>
                </div>

                {/* Tags */}
                {resource.tags && resource.tags.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Topics:</h3>
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          <Tag className="h-3 w-3 mr-1 inline" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Author Information */}
            <Card>
              <CardHeader>
                <CardTitle>Author Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{resource.author_name}</h3>
                    <p className="text-gray-600 mb-3">
                      Pharmaceutical researcher and industry expert with extensive experience in {resource.category.replace('-', ' ')}.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>15+ publications</span>
                      <span>•</span>
                      <span>8 years experience</span>
                      <span>•</span>
                      <span>SPARC Professional Member</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Citation Information */}
            <Card>
              <CardHeader>
                <CardTitle>Citation Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">APA Citation:</h4>
                  <p className="text-sm text-gray-700 font-mono">
                    {resource.author_name}. ({format(new Date(resource.publication_date), 'yyyy')}). 
                    <em> {resource.title}</em>. SPARC Resource Library. 
                    Retrieved from https://sparc-pharma.org/resources/{resource.id}
                  </p>
                  <Button variant="outline" size="sm" className="mt-3">
                    Copy Citation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Resources */}
            {relatedResources.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Related Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {relatedResources.map((relatedResource) => (
                      <Link key={relatedResource.id} to={`/resources/${relatedResource.id}`}>
                        <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                          <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">{relatedResource.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{relatedResource.author_name}</p>
                          <div className="flex items-center justify-between">
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${getTypeColor(relatedResource.content_type)}`}>
                              {relatedResource.content_type.replace('-', ' ')}
                            </span>
                            <span className="text-xs text-gray-500">
                              {relatedResource.download_count} downloads
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Resource Info */}
            <Card>
              <CardHeader>
                <CardTitle>Resource Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type</span>
                    <span className="font-medium">{resource.content_type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category</span>
                    <span className="font-medium">{resource.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">File Size</span>
                    <span className="font-medium">{resource.file_size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Downloads</span>
                    <span className="font-medium">{resource.download_count}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Published</span>
                    <span className="font-medium">{format(new Date(resource.publication_date), 'MMM yyyy')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Access Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Access Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600 mb-3">Required membership level:</p>
                  <div className="flex items-center">
                    {hasAccess() ? (
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ) : (
                      <Lock className="h-4 w-4 text-orange-500 mr-2" />
                    )}
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      resource.access_level === 'genesis' ? 'bg-green-100 text-green-700' :
                      resource.access_level === 'professional' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {resource.access_level.charAt(0).toUpperCase() + resource.access_level.slice(1)} or Higher
                    </span>
                  </div>
                  {!hasAccess() && user && (
                    <div className="mt-3">
                      <Link to="/membership">
                        <Button size="sm" className="w-full">
                          Upgrade Membership
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Rating & Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Rating & Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        className={`h-5 w-5 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-gray-900">4.8</p>
                  <p className="text-sm text-gray-600">Based on 24 reviews</p>
                </div>
                
                {user && hasAccess() && (
                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Rate this resource:</h4>
                    <div className="flex items-center justify-center space-x-1 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setUserRating(star)}
                          className="p-1"
                        >
                          <Star 
                            className={`h-5 w-5 ${star <= userRating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        </button>
                      ))}
                    </div>
                    <Button size="sm" className="w-full">
                      Submit Rating
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    as="a"
                    href="https://www.linkedin.com/company/sparcglobal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share on LinkedIn
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Citation
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Add to Reading List
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    Report Issue
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}