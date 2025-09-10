import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { supabase } from '../lib/supabase';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  User,
  Award,
  CheckCircle,
  ExternalLink,
  Share2,
  Download,
  Play,
  BookOpen,
  ArrowLeft,
  AlertCircle,
  Star
} from 'lucide-react';
import { format } from 'date-fns';

interface Event {
  id: string;
  title: string;
  description: string;
  date_time: string;
  event_type: string;
  capacity: number;
  access_tiers: string[];
  speaker_name: string;
  speaker_bio: string;
  category: string;
  location: string;
  registration_fee?: number;
  cpe_credits?: number;
  duration: string;
  tags: string[];
  created_at: string;
}

interface Registration {
  id: string;
  user_id: string;
  event_id: string;
  registration_date: string;
  attendance_status: string;
}

export function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [event, setEvent] = useState<Event | null>(null);
  const [relatedEvents, setRelatedEvents] = useState<Event[]>([]);
  const [registrationCount, setRegistrationCount] = useState(0);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      fetchEventDetails();
      fetchRegistrationCount();
      if (user) {
        checkRegistrationStatus();
      }
    }
  }, [id, user]);

  const fetchEventDetails = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setEvent(data);

      // Fetch related events
      if (data) {
        const { data: related } = await supabase
          .from('events')
          .select('*')
          .eq('category', data.category)
          .neq('id', id)
          .limit(3);
        
        setRelatedEvents(related || []);
      }
    } catch (error) {
      setError('Failed to load event details');
      console.error('Error fetching event:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRegistrationCount = async () => {
    try {
      const { count } = await supabase
        .from('event_registrations')
        .select('*', { count: 'exact', head: true })
        .eq('event_id', id);
      
      setRegistrationCount(count || 0);
    } catch (error) {
      console.error('Error fetching registration count:', error);
    }
  };

  const checkRegistrationStatus = async () => {
    if (!user) return;
    
    try {
      const { data } = await supabase
        .from('event_registrations')
        .select('*')
        .eq('event_id', id)
        .eq('user_id', user.id)
        .single();
      
      setIsRegistered(!!data);
    } catch (error) {
      // User not registered
      setIsRegistered(false);
    }
  };

  const handleRegistration = async () => {
    if (!user || !event) return;

    setIsRegistering(true);
    try {
      const { error } = await supabase
        .from('event_registrations')
        .insert({
          user_id: user.id,
          event_id: event.id,
          attendance_status: 'registered'
        });

      if (error) throw error;

      setIsRegistered(true);
      setRegistrationCount(prev => prev + 1);
      setShowRegistrationForm(false);
    } catch (error) {
      setError('Failed to register for event');
      console.error('Registration error:', error);
    } finally {
      setIsRegistering(false);
    }
  };

  const hasAccess = user && event && event.access_tiers.includes(user.membershipTier);
  const isFull = event && registrationCount >= event.capacity;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Event Not Found</h2>
            <p className="text-gray-600 mb-4">The event you're looking for doesn't exist or has been removed.</p>
            <Link to="/events">
              <Button>Back to Events</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/events" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Header */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.event_type)}`}>
                        <Play className="h-4 w-4 mr-1" />
                        {event.event_type.charAt(0).toUpperCase() + event.event_type.slice(1)}
                      </span>
                      <span className="ml-3 text-sm text-gray-500">
                        {event.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {format(new Date(event.date_time), 'EEEE, MMMM dd, yyyy')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {format(new Date(event.date_time), 'h:mm a')} ({event.duration})
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location || 'Virtual Event'}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {registrationCount}/{event.capacity} registered
                      </div>
                    </div>
                  </div>
                  <div className="ml-6 flex flex-col space-y-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      Add to Calendar
                    </Button>
                  </div>
                </div>

                {/* Registration Status */}
                <div className="mb-6">
                  {!user ? (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800">
                        <Link to="/login" className="font-medium underline">Sign in</Link> to register for this event.
                      </p>
                    </div>
                  ) : !hasAccess ? (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <p className="text-orange-800">
                        This event requires a higher membership tier. 
                        <Link to="/membership" className="font-medium underline ml-1">Upgrade your membership</Link> to access.
                      </p>
                    </div>
                  ) : isFull ? (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800">This event is fully booked. Join the waitlist to be notified if spots become available.</p>
                    </div>
                  ) : isRegistered ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <p className="text-green-800 font-medium">You're registered for this event!</p>
                      </div>
                    </div>
                  ) : (
                    <Button 
                      onClick={() => setShowRegistrationForm(true)}
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      Register for Event
                    </Button>
                  )}
                </div>

                {/* Event Description */}
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                </div>

                {/* Tags */}
                {event.tags && event.tags.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Topics:</h3>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Speaker Information */}
            {event.speaker_name && (
              <Card>
                <CardHeader>
                  <CardTitle>Featured Speaker</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{event.speaker_name}</h3>
                      <p className="text-gray-600 leading-relaxed">{event.speaker_bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Event Materials */}
            <Card>
              <CardHeader>
                <CardTitle>Event Materials & Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">Event Agenda</h4>
                        <p className="text-sm text-gray-600">Detailed schedule and topics</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <h4 className="font-medium text-gray-900">Presentation Slides</h4>
                        <p className="text-sm text-gray-600">Available after the event</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" disabled>
                      <Download className="h-4 w-4 mr-1" />
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Events */}
            {relatedEvents.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Related Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {relatedEvents.map((relatedEvent) => (
                      <Link key={relatedEvent.id} to={`/events/${relatedEvent.id}`}>
                        <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                          <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">{relatedEvent.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">
                            {format(new Date(relatedEvent.date_time), 'MMM dd, yyyy')}
                          </p>
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${getTypeColor(relatedEvent.event_type)}`}>
                            {relatedEvent.event_type}
                          </span>
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
            {/* Event Info Card */}
            <Card>
              <CardHeader>
                <CardTitle>Event Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date & Time</span>
                    <span className="font-medium">{format(new Date(event.date_time), 'MMM dd, h:mm a')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{event.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location</span>
                    <span className="font-medium">{event.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacity</span>
                    <span className="font-medium">{registrationCount}/{event.capacity}</span>
                  </div>
                  {event.cpe_credits && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">CPE Credits</span>
                      <span className="font-medium">{event.cpe_credits}</span>
                    </div>
                  )}
                  {event.registration_fee && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fee</span>
                      <span className="font-medium">${event.registration_fee}</span>
                    </div>
                  )}
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
                  <p className="text-sm text-gray-600 mb-3">This event is available to:</p>
                  {event.access_tiers.map(tier => (
                    <div key={tier} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        tier === 'genesis' ? 'bg-green-100 text-green-700' :
                        tier === 'professional' ? 'bg-blue-100 text-blue-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {tier.charAt(0).toUpperCase() + tier.slice(1)} Members
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Add to Google Calendar
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Add to Outlook
                  </Button>
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
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Event Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Registration Modal */}
        {showRegistrationForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-md w-full">
              <CardHeader>
                <CardTitle>Register for Event</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Confirm your registration for "{event.title}"
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Event Details</h4>
                    <p className="text-sm text-blue-800">
                      {format(new Date(event.date_time), 'PPP')} at {format(new Date(event.date_time), 'p')}
                    </p>
                    <p className="text-sm text-blue-800">{event.location}</p>
                  </div>
                  <div className="flex space-x-3">
                    <Button 
                      onClick={handleRegistration}
                      isLoading={isRegistering}
                      className="flex-1"
                    >
                      Confirm Registration
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowRegistrationForm(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
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