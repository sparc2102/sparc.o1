import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Search,
  Play,
  UserCheck,
  Link as LinkIcon
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

  const now = new Date();

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
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-300" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-gray-800 text-white placeholder-gray-400"
              />
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
          {filteredEvents.map((event) => {
            const eventDate = new Date(event.date);
            const isUpcoming = eventDate >= now;

            return (
              <Card
  key={event.id}
  className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-white/10 flex flex-col justify-between"
>
  <CardHeader>
    <div className="flex items-center justify-between mb-2">
      <span
        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}
      >
        {getTypeIcon(event.type)}
        <span className="ml-1">{event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
      </span>
      <span className="text-sm text-gray-300">
        {format(eventDate, 'MMM dd')}
      </span>
    </div>
    <CardTitle className="text-lg font-semibold line-clamp-2">{event.title}</CardTitle>
  </CardHeader>

  <CardContent className="flex-1 flex flex-col justify-between">
    {/* Event Info */}
    <div className="space-y-2 mb-4 text-sm text-gray-300">
      <div className="flex items-center">
        <Clock className="h-4 w-4 mr-2" /> {format(eventDate, 'PPp')}
      </div>
      <div className="flex items-center">
        <MapPin className="h-4 w-4 mr-2" /> {event.location || 'Virtual Event'}
      </div>
      <div className="flex items-center">
        <UserCheck className="h-4 w-4 mr-2" /> {event.speaker}
      </div>
      <div className="flex items-center">
        <Users className="h-4 w-4 mr-2" /> {event.registered}/{event.capacity} registered
      </div>
    </div>

    {/* Access Tiers */}
    <div className="flex flex-wrap gap-1 mb-4">
      {event.accessTiers.map((tier) => (
        <span
          key={tier}
          className={`px-2 py-1 text-xs rounded-full ${
            tier === 'genesis'
              ? 'bg-green-100 text-green-700'
              : tier === 'professional'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-purple-100 text-purple-700'
          }`}
        >
          {tier.charAt(0).toUpperCase() + tier.slice(1)}
        </span>
      ))}
    </div>

    {/* CTA Buttons */}
    <div className="mt-auto flex flex-col sm:flex-row gap-2 w-full">
      {isUpcoming ? (
        <>
          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="sm"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-1"
              >
                <LinkIcon className="h-4 w-4" /> Go to Event
              </Button>
            </a>
          )}
          <Link to={`/events/${event.id}`} className="w-full sm:w-auto">
           <Button
  size="sm"
  variant="outline"
  className="w-full sm:w-auto border-gray-600 text-black hover:!bg-blue-900 hover:!text-white flex items-center justify-center gap-1"
>
  <LinkIcon className="h-4 w-4" /> View Details
</Button>
          </Link>
        </>
      ) : (
        <Button
          size="sm"
          variant="outline"
          className="w-full border-gray-600 text-gray-400 cursor-not-allowed"
          disabled
        >
          Event Ended
        </Button>
      )}
    </div>
  </CardContent>
</Card>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-2xl font-medium mb-2">Nothing’s cooking right now — check back later!</h3>
          </div>
        )}
      </div>
    </div>
  );
}