import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  User,
  CheckCircle,
  Share2,
  Download,
  BookOpen,
  ArrowLeft,
  AlertCircle
} from 'lucide-react';
import { format } from 'date-fns';
import { mockEvents } from '../data/mockData';
import { Event as EventType } from '../types'; // Make sure this is the interface you shared

export function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();

  const [event, setEvent] = useState<EventType | null>(null);
  const [relatedEvents, setRelatedEvents] = useState<EventType[]>([]);
  const [registrationCount, setRegistrationCount] = useState(0);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const now = new Date();
  const isEventUpcoming = event && new Date(event.date) >= now;

  useEffect(() => {
    if (!id) return;

    const ev = mockEvents.find(e => e.id === id) || null;
    setEvent(ev);

    if (ev) {
      const related = mockEvents.filter(e => e.category === ev.category && e.id !== ev.id).slice(0, 3);
      setRelatedEvents(related);
      setRegistrationCount(ev.registered ?? 0); // Handle optional registered
    }

    if (user && ev) {
      setIsRegistered(false); // or implement your own mock logic
    }

    setLoading(false);
  }, [id, user]);

  const handleRegistration = () => {
    if (!user || !event) return;
    setIsRegistered(true);
    setRegistrationCount(prev => prev + 1);
    setShowRegistrationForm(false);
  };
 const [showShareModal, setShowShareModal] = useState(false);

const handleShare = () => setShowShareModal(true);
const handleCloseShare = () => setShowShareModal(false);

const generateCalendarLink = () => {
  if (!event) return '#';
  const start = new Date(event.date).toISOString().replace(/-|:|\.\d+/g, '');
  const endDate = new Date(new Date(event.date).getTime() + 60*60*1000); // 1 hour
  const end = endDate.toISOString().replace(/-|:|\.\d+/g, '');
  const title = encodeURIComponent(event.title);
  const description = encodeURIComponent(event.description);
  const location = encodeURIComponent(event.location ?? 'Virtual');

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${description}&location=${location}`;
};

  const hasAccess = user && event && event.accessTiers.includes(user.membershipTier);
  const isFull = event && registrationCount >= (event.capacity ?? 0);

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      webinar: 'bg-blue-100 text-blue-800',
      workshop: 'bg-green-100 text-green-800',
      networking: 'bg-purple-100 text-purple-800',
      bootcamp: 'bg-orange-100 text-orange-800',
      masterclass: 'bg-red-100 text-red-800',
      forum: 'bg-gray-100 text-gray-800',
      competition: 'bg-yellow-100 text-yellow-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!event)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-lg font-semibold">Event Not Found</h2>
            <Link to="/events">
              <Button>Back to Events</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link to="/events" className="inline-flex items-center text-blue-600 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center flex-wrap gap-2">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                      <span className="text-sm text-gray-500">{event.category.replace('-', ' ')}</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2"><Calendar className="h-4 w-4" />{format(new Date(event.date), 'EEEE, MMMM dd, yyyy')}</div>
                      <div className="flex items-center gap-2"><Clock className="h-4 w-4" />{format(new Date(event.date), 'h:mm a')} ({event.duration ?? 'N/A'})</div>
                      <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />{event.location ?? 'Virtual'}</div>
                      <div className="flex items-center gap-2"><Users className="h-4 w-4" />{registrationCount}/{event.capacity ?? 0} registered</div>
                    </div>
                  </div>
                 <div className="flex flex-col gap-2 relative">
  <Button
  variant="outline"
  size="sm"
  className="w-full justify-center"
  onClick={handleShare}
>
  <Share2 className="h-4 w-4 mr-1" /> Share
</Button>

 {showShareModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
    <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg relative">
      <button
        onClick={handleCloseShare}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
      <h3 className="text-lg font-semibold mb-4">Share Event</h3>
      <p className="text-sm text-gray-700 mb-2">Copy the event URL:</p>
      <input
        type="text"
        value={window.location.href}
        readOnly
        className="w-full border px-2 py-1 text-sm rounded mb-2"
        onClick={e => (e.target as HTMLInputElement).select()}
      />
      <button
        className="w-full px-3 py-2 bg-blue-600 text-white rounded text-sm"
        onClick={() => navigator.clipboard.writeText(window.location.href)}
      >
        Copy URL
      </button>
    </div></div>
  )}

  <a
    href={generateCalendarLink()}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline" size="sm" className="w-full justify-center">
      <Calendar className="h-4 w-4 mr-1" /> Add to Calendar
    </Button>
  </a>
</div>
                </div>

                <div>
                  {!user ? (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                      <p className="text-blue-800">
                        <Link to="/login" className="font-medium underline">Sign in</Link> to register
                      </p>
                    </div>
                  ) : !hasAccess ? (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                      <p className="text-orange-800">
                        Upgrade <Link to="/membership" className="font-medium underline ml-1">membership</Link> to access.
                      </p>
                    </div>
                  ) : !isEventUpcoming ? (
                    <Button size="lg" variant="outline" className="w-full cursor-not-allowed" disabled>Event Ended</Button>
                  ) : isFull ? (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                      <p className="text-red-800">Event is fully booked.</p>
                    </div>
                  ) : isRegistered ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-green-800 font-medium">You're registered!</span>
                    </div>
                  ) : (
                    <Button onClick={() => setShowRegistrationForm(true)} size="lg" className="w-full">Register for Event</Button>
                  )}
                </div>

                <div className="prose max-w-none"><p>{event.description}</p></div>

             {event.tags?.length ? (
  <div className="mt-6 flex flex-wrap gap-2">
    {event.tags.map(tag => (
      <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
        #{tag}
      </span>
    ))}
  </div>
) : null}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader><CardTitle>Event Information</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between"><span>Date & Time</span><span>{format(new Date(event.date), 'MMM dd, h:mm a')}</span></div>
                <div className="flex justify-between"><span>Duration</span><span>{event.duration ?? 'N/A'}</span></div>
                <div className="flex justify-between"><span>Location</span><span>{event.location ?? 'Virtual'}</span></div>
                <div className="flex justify-between"><span>Capacity</span><span>{event.capacity ?? 0}</span></div>
              </CardContent>
            </Card>

            {relatedEvents.length > 0 && (
              <Card>
                <CardHeader><CardTitle>Related Events</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {relatedEvents.map(re => (
                    <Link key={re.id} to={`/events/${re.id}`} className="block hover:bg-gray-50 p-2 rounded-lg">
                      <h4 className="font-medium">{re.title}</h4>
                      <p className="text-sm text-gray-600">{format(new Date(re.date), 'MMM dd, yyyy')}</p>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {showRegistrationForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full space-y-4">
              <h3 className="text-xl font-semibold">Confirm Registration</h3>
              <p>Are you sure you want to register for <span className="font-medium">{event.title}</span>?</p>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" onClick={() => setShowRegistrationForm(false)}>Cancel</Button>
                <Button onClick={handleRegistration}>Confirm</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function setShowShare(arg0: (prev: any) => boolean) {
  throw new Error('Function not implemented.');
}
