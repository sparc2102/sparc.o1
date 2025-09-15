import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Filter,
  Search,
  Play,
  UserCheck,
  Globe,
  Link
} from 'lucide-react';
import { format } from 'date-fns';
import { mockEvents } from '../data/mockData';

export function EventsPage() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = ['all', 'insight-series', 'networking', 'career-development', 'leadership', 'research'];
  const types = ['all', 'webinar', 'workshop', 'networking', 'bootcamp', 'masterclass', 'forum'];

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const hasAccess = user ? event.accessTiers.includes(user.membershipTier) : true;
    
    return matchesSearch && matchesCategory && matchesType && hasAccess;
  });

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      webinar: 'bg-blue-100 text-blue-800',
      workshop: 'bg-green-100 text-green-800',
      networking: 'bg-purple-100 text-purple-800',
      bootcamp: 'bg-orange-100 text-orange-800',
      masterclass: 'bg-red-100 text-red-800',
      forum: 'bg-gray-100 text-gray-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'webinar': return <Play className="h-4 w-4" />;
      case 'networking': return <Users className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-blue-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Events & Programs</h1>
          <p className="text-lg text-gray-200">
            Join our community of pharmaceutical professionals for exclusive events, workshops, and networking opportunities.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-300" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-gray-800 text-white placeholder-gray-400"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-gray-800 text-white"
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
                className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-gray-800 text-white"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card 
              key={event.id} 
              className="hover:shadow-lg transition-all duration-300 bg-transparent border border-gray-600 hover:bg-gradient-to-br hover:from-zinc-700/30 hover:to-zinc-900/30"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}>
                    {getTypeIcon(event.type)}
                    <span className="ml-1">{event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
                  </span>
                  <span className="text-sm text-gray-300">
                    {format(new Date(event.date), 'MMM dd')}
                  </span>
                </div>
                <CardTitle className="text-lg line-clamp-2 hover:text-blue-400 transition-colors duration-300">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 line-clamp-3">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    {format(new Date(event.date), 'PPp')}
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location || 'Virtual Event'}
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <UserCheck className="h-4 w-4 mr-2" />
                    {event.speaker}
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Users className="h-4 w-4 mr-2" />
                    {event.registered}/{event.capacity} registered
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {event.accessTiers.map(tier => (
                      <span key={tier} className={`px-2 py-1 text-xs rounded-full ${
                        tier === 'genesis' ? 'bg-green-100 text-green-700' :
                        tier === 'professional' ? 'bg-blue-100 text-blue-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {tier.charAt(0).toUpperCase() + tier.slice(1)}
                      </span>
                    ))}
                  </div>
                  {user ? (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Register</Button>
                  ) : (
                    <Link to={`/events/${event.id}`}>
                      <Button size="sm" variant="outline" className="border-gray-600 text-white hover:bg-blue-600 hover:border-blue-600">View Details</Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-2xl font-medium mb-2">Nothing’s cooking right now — check back later!</h3>
          </div>
        )}

        {/* CSS for gradient hover effect */}
        <style>{`
          .hover\\:bg-gradient-to-br:hover {
            background-image: linear-gradient(to bottom right, rgba(39, 39, 42, 0.3), rgba(24, 24, 27, 0.3));
          }
        `}
        </style>
      </div>
    </div>
  );
}