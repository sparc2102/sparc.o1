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
  Share2,
  ArrowLeft,
  AlertCircle,
  Star,
  Award,
  Users as UsersIcon
} from 'lucide-react';
import { format } from 'date-fns';
import { mockEvents } from '../data/mockData';
import { Event as EventType } from '../types';

export function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();

  const [event, setEvent] = useState<EventType | null>(null);
  const [relatedEvents, setRelatedEvents] = useState<EventType[]>([]);
  const [registrationCount, setRegistrationCount] = useState(0);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showShareModal, setShowShareModal] = useState(false);
const [copied, setCopied] = useState(false);
  const now = new Date();
  const isEventUpcoming = event && new Date(event.date) >= now;

  useEffect(() => {
    if (!id) return;
    const ev = mockEvents.find(e => e.id === id) || null;
    setEvent(ev);

    if (ev) {
      const related = mockEvents.filter(e => e.category === ev.category && e.id !== ev.id).slice(0, 3);
      setRelatedEvents(related);
      setRegistrationCount(ev.registered ?? 0);
    }

    if (user && ev) {
      setIsRegistered(false);
    }
    setLoading(false);
  }, [id, user]);

  const handleRegistration = () => {
    if (!user || !event) return;
    setIsRegistered(true);
    setRegistrationCount(prev => prev + 1);
    setShowRegistrationForm(false);
  };

  const handleShare = () => setShowShareModal(true);
  const handleCloseShare = () => setShowShareModal(false);

  const generateCalendarLink = () => {
    if (!event) return '#';
    const start = new Date(event.date).toISOString().replace(/-|:|\.\d+/g, '');
    const endDate = new Date(new Date(event.date).getTime() + 60 * 60 * 1000);
    const end = endDate.toISOString().replace(/-|:|\.\d+/g, '');
    const title = encodeURIComponent(event.title);
    const description = encodeURIComponent(event.description);
    const location = encodeURIComponent(event.location ?? 'Virtual');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${description}&location=${location}`;
  };

  const isFull = event && registrationCount >= (event.capacity ?? 0);

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      webinar: 'bg-blue-100 text-blue-800 border-blue-200',
      workshop: 'bg-green-100 text-green-800 border-green-200',
      networking: 'bg-purple-100 text-purple-800 border-purple-200',
      bootcamp: 'bg-orange-100 text-orange-800 border-orange-200',
      masterclass: 'bg-red-100 text-red-800 border-red-200',
      forum: 'bg-gray-100 text-gray-800 border-gray-200',
      competition: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    return colors[type] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  // Placeholder for event image - assume EventType has an optional 'image' field
  const eventImage = event?.image || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'; // Fallback to a generic event image

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <Link to="/events" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors z-10 relative">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Events
        </Link>

        {/* Hero Banner Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-600 to-purple-700 z-10 relative">
          <img 
            src={eventImage} 
            alt={event.title}
            className="w-full h-64 object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(event.type).replace('bg-', 'border-').replace('text-', '')}`}>
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-white/20 backdrop-blur-sm">{event.category.replace('-', ' ')}</span>
            </div>
            <h1 className="text-3xl font-bold mb-2 drop-shadow-lg">{event.title}</h1>
            <div className="flex items-center gap-4 text-sm opacity-90">
              <div className="flex items-center gap-1"><Calendar className="h-4 w-4" />{format(new Date(event.date), 'EEE, MMM dd, yyyy')}</div>
              <div className="flex items-center gap-1"><Clock className="h-4 w-4" />{format(new Date(event.date), 'h:mm a')}</div>
              <div className="flex items-center gap-1"><MapPin className="h-4 w-4" />{event.location ?? 'Virtual'}</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 z-10 relative">
          <div className="lg:col-span-2 space-y-6">

            {/* Main Info Card - Enhanced with gradient accents */}
            <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 mt-2">
                    <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span>{format(new Date(event.date), 'EEE, MMM dd, yyyy')}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                      <Clock className="h-4 w-4 text-green-600" />
                      <span>{format(new Date(event.date), 'h:mm a')}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg">
                      <MapPin className="h-4 w-4 text-purple-600" />
                      <span>{event.location ?? 'Virtual'}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg">
                      <Users className="h-4 w-4 text-orange-600" />
                      <span className="font-semibold">{registrationCount}/{event.capacity ?? 0} spots</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full sm:w-40">
                  <Button variant="default" size="sm" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg" onClick={handleShare}>
                    <Share2 className="h-4 w-4 mr-1" /> Share
                  </Button>
                  <a href={generateCalendarLink()} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full border-gray-300 hover:border-gray-400 shadow-md">
                      <Calendar className="h-4 w-4 mr-1" /> Add to Calendar
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            {/* Description - Enhanced with prose styling */}
            <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-800">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                  About the Event
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-600">
                <p className="text-lg leading-relaxed">{event.description}</p>
              </CardContent>
            </Card>

            {/* Extended Info Grid - Without Rewards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {event.eligibility?.length && (
                <Card className="p-5 border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl h-full">
                  <CardHeader className="pb-2 flex items-center gap-2">
                    <UsersIcon className="h-5 w-5 text-emerald-600" />
                    <CardTitle className="text-base font-semibold text-emerald-800">Eligibility</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-700">
                    <ul className="space-y-1">
                      {event.eligibility.map((e, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
              {event.evaluationCriteria?.length && (
                <Card className="p-5 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl h-full">
                  <CardHeader className="pb-2 flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-base font-semibold text-blue-800">Evaluation Criteria</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-700">
                    <ul className="space-y-1">
                      {event.evaluationCriteria.map((e, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
              {event.importantDates && (
                <Card className="p-5 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl h-full sm:col-span-2">
                  <CardHeader className="pb-2 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <CardTitle className="text-base font-semibold text-purple-800">Important Dates</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    {event.importantDates.abstractSubmission && (
                      <div className="flex justify-between items-center p-2 bg-white/50 rounded-lg">
                        <span className="text-gray-600">Abstract Submission</span>
                        <span className="font-medium text-purple-700">{event.importantDates.abstractSubmission}</span>
                      </div>
                    )}
                    {event.importantDates.posterSubmission && (
                      <div className="flex justify-between items-center p-2 bg-white/50 rounded-lg">
                        <span className="text-gray-600">Poster Submission</span>
                        <span className="font-medium text-purple-700">{event.importantDates.posterSubmission}</span>
                      </div>
                    )}
                    {event.importantDates.presentationDate && (
                      <div className="flex justify-between items-center p-2 bg-white/50 rounded-lg">
                        <span className="text-gray-600">Presentation Date</span>
                        <span className="font-medium text-purple-700">{event.importantDates.presentationDate}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Right Sidebar - Enhanced with Rewards below Quick Info */}
          <div className="space-y-6 z-10">
            <Card className="p-5 border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl sticky top-8">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-800">
                  <div className="w-2 h-6 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></div>
                  Quick Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <span className="text-gray-600">Date & Time</span>
                  <span className="font-medium">{format(new Date(event.date), 'MMM dd, h:mm a')}</span>
                </div>
                <div className="flex justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{event.duration ?? 'N/A'}</span>
                </div>
                <div className="flex justify-between p-3 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium">{event.location ?? 'Virtual'}</span>
                </div>
                <div className="flex justify-between p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg">
                  <span className="text-gray-600">Capacity</span>
                  <span className="font-medium">{event.capacity ?? 0}</span>
                </div>
              </CardContent>
            </Card>

            {event.rewards && (event.rewards.top?.length || event.rewards.participants?.length) && (
              <Card className="p-5 border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
                <CardHeader className="pb-2 flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-600" />
                  <CardTitle className="text-base font-semibold text-amber-800">Rewards & Prizes</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  {event.rewards.top?.length && (
                    <div className="space-y-1">
                      <h4 className="font-semibold text-xs uppercase tracking-wide text-amber-700 flex items-center gap-1">
                        <div className="w-4 h-4 bg-amber-500 rounded-full"></div> Top Winners
                      </h4>
                      <ul className="space-y-1 pl-4">
                        {event.rewards.top.map((r, i) => (
                          <li key={i} className="list-disc text-gray-700">{r}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {event.rewards.participants?.length && (
                    <div className="space-y-1">
                      <h4 className="font-semibold text-xs uppercase tracking-wide text-amber-700 flex items-center gap-1">
                        <div className="w-4 h-4 bg-amber-400 rounded-full"></div> All Participants
                      </h4>
                      <ul className="space-y-1 pl-4">
                        {event.rewards.participants.map((r, i) => (
                          <li key={i} className="list-disc text-gray-700">{r}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {relatedEvents.length > 0 && (
              <Card className="p-5 border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-800">
                    <div className="w-2 h-6 bg-gradient-to-b from-purple-500 to-violet-600 rounded-full"></div>
                    Related Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {relatedEvents.map(re => (
                    <Link 
                      key={re.id} 
                      to={`/events/${re.id}`} 
                      className="block p-3 hover:bg-gradient-to-r hover:from-gray-50 to-white rounded-xl transition-all duration-200 border border-gray-100 hover:border-gray-200 hover:shadow-md"
                    >
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">{re.title}</h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {format(new Date(re.date), 'MMM dd, yyyy')}
                      </p>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Registration Button - Enhanced with animations */}
        <div className="z-10 relative">
          {isEventUpcoming && !isFull ? (
            <a href={event.link ?? '#'} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 px-8 py-4 text-lg font-semibold rounded-2xl"
              >
                <UsersIcon className="h-5 w-5 mr-2" />
                Register Now 
              </Button>
            </a>
          ) : !isEventUpcoming ? (
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-500 cursor-not-allowed border-gray-300 rounded-2xl px-8 py-4 text-lg font-semibold" 
              disabled
            >
              <Clock className="h-5 w-5 mr-2" />
              Event Ended
            </Button>
          ) : (
            <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl p-6 text-center shadow-lg">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-3 animate-pulse" />
              <h3 className="text-lg font-semibold text-red-800 mb-2">Event is Fully Booked</h3>
              <p className="text-red-600">All spots have been filled. Join the waitlist or check back for similar events!</p>
            </div>
          )}
        </div>

        {/* Share Modal - Enhanced */}
        {showShareModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white/95 rounded-2xl p-6 max-w-md w-full shadow-2xl relative backdrop-blur-sm border border-white/20">
              <button onClick={handleCloseShare} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors rounded-full p-1 hover:bg-gray-100">
                ✕
              </button>
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2 justify-center">
                <Share2 className="h-5 w-5 text-blue-600" />
                Share This Event
              </h3>
              <p className="text-sm text-gray-600 mb-3 text-center">Spread the word!</p>
              <input
                type="text"
                value={window.location.href}
                readOnly
                className="w-full border-2 border-gray-200 px-3 py-2 text-sm rounded-xl mb-3 focus:border-blue-500 focus:outline-none transition-colors"
                onClick={e => (e.target as HTMLInputElement).select()}
              />
              <Button 
  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-md"
  onClick={() => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // hide after 2 seconds
  }}
>
  {copied ? 'Link Copied!' : 'Copy Link'}
</Button>
            </div>
          </div>
        )}

        {/* Confirm Registration Modal - Enhanced */}
        {showRegistrationForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white/95 rounded-2xl p-6 max-w-md w-full space-y-4 shadow-2xl backdrop-blur-sm border border-white/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <UsersIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Confirm Your Spot</h3>
                <p className="text-gray-600">Ready to join <span className="font-semibold text-gray-900">{event.title}</span>?</p>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <Button 
                  variant="outline" 
                  onClick={() => setShowRegistrationForm(false)}
                  className="border-gray-300 hover:border-gray-400 rounded-xl"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleRegistration}
                  className="bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white rounded-xl shadow-md"
                >
                  Confirm Registration
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Add these styles to your global CSS for animations */}
        <style >{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}</style>
      </div>
    </div>
  );
}