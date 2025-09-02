import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { mockForumPosts } from '../data/mockData';
import { 
  MessageSquare, 
  Users, 
  Search, 
  Plus,
  Eye,
  ThumbsUp,
  Reply,
  Filter,
  TrendingUp,
  Clock,
  User,
  Badge
} from 'lucide-react';
import { format } from 'date-fns';

export function CommunityPage() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Clinical Research', 'Career Development', 'Regulatory Affairs', 'Drug Discovery', 'Networking'];

  const filteredPosts = mockForumPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'genesis': return 'bg-green-100 text-green-700 border-green-200';
      case 'professional': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'fellows': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const forumStats = [
    { label: 'Active Members', value: '2,847', icon: Users, change: '+127 this month' },
    { label: 'Discussions', value: '1,234', icon: MessageSquare, change: '+45 this week' },
    { label: 'Replies', value: '5,678', icon: Reply, change: '+189 today' },
    { label: 'Trending Topics', value: '23', icon: TrendingUp, change: '+8 this week' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Community Forums</h1>
          <p className="text-lg text-gray-600">
            Connect with fellow pharmaceutical professionals, share insights, and learn from industry experts.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {forumStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600">{stat.change}</p>
                    </div>
                    <Icon className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search discussions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
                {user && (
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Post
                  </Button>
                )}
              </div>
            </div>

            {/* Forum Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2 mb-3">
                          {post.content}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            <span className="font-medium">{post.author}</span>
                            <span className={`ml-2 px-2 py-0.5 text-xs rounded-full border ${getTierColor(post.authorTier)}`}>
                              {post.authorTier.charAt(0).toUpperCase() + post.authorTier.slice(1)}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {format(new Date(post.date), 'MMM dd, yyyy')}
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">
                        <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Reply className="h-4 w-4 mr-1" />
                          {post.replies} replies
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {post.views} views
                        </div>
                        {post.tags && (
                          <div className="flex space-x-1">
                            {post.tags.slice(0, 2).map(tag => (
                              <span key={tag} className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          12
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Reply className="h-4 w-4 mr-1" />
                          Reply
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <MessageSquare className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No discussions found</h3>
                <p className="text-gray-500">
                  Be the first to start a conversation in this category.
                </p>
                {user && (
                  <Button className="mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    Start Discussion
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Badge className="h-4 w-4 mr-2 mt-0.5 text-green-600" />
                    Be respectful and professional
                  </li>
                  <li className="flex items-start">
                    <Badge className="h-4 w-4 mr-2 mt-0.5 text-green-600" />
                    Share accurate information
                  </li>
                  <li className="flex items-start">
                    <Badge className="h-4 w-4 mr-2 mt-0.5 text-green-600" />
                    Help others learn and grow
                  </li>
                  <li className="flex items-start">
                    <Badge className="h-4 w-4 mr-2 mt-0.5 text-green-600" />
                    Keep discussions on-topic
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Top Contributors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-medium text-purple-600">DR</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">Dr. Sarah Chen</div>
                        <div className="text-xs text-gray-500">245 posts</div>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
                      Professional
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-medium text-green-600">AJ</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">Alex Johnson</div>
                        <div className="text-xs text-gray-500">189 posts</div>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                      Genesis
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-medium text-blue-600">MR</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">Dr. Michael Roberts</div>
                        <div className="text-xs text-gray-500">156 posts</div>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                      Fellows
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}