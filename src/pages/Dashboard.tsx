import { useAuth } from '../contexts/AuthContext';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp, 
  Clock,
  ArrowRight,
  Star,
  Download,
  MessageSquare,
  Briefcase
} from 'lucide-react';
import { mockEvents, mockResources, membershipTiers } from '../data/mockData';
import { format } from 'date-fns';
import ProgressTracker from '../components/ProgressTracker';
import CommunityActivity from '../components/CommunityActivity';
import NotificationsCenter from '../components/NotificationsCenter';

export function Dashboard() {
  const { user, isLoading } = useAuth();
  const [profileName, setProfileName] = useState(user?.name || '');

  useEffect(() => {
    async function fetchProfileName() {
      if (user && user.id && supabase) {
        const { data } = await supabase
          .from('users')
          .select('name')
          .eq('id', user.id)
          .single();
        if (data && data.name) setProfileName(data.name);
        else setProfileName(user.name || '');
      }
    }
    fetchProfileName();
  }, [user]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin h-10 w-10 text-blue-600" />
      </div>
    );
  }

  if (!user) return null;

  const [userMembership, setUserMembership] = useState<any>(null);

  useEffect(() => {
    async function fetchMembershipTier() {
      if (user && user.id && supabase) {
        const { data } = await supabase
          .from('users')
          .select('membershipTier')
          .eq('id', user.id)
          .single();
        if (data && data.membershipTier) {
          const tier = membershipTiers.find(t => t.id === data.membershipTier);
          setUserMembership(tier);
        } else {
          setUserMembership(null);
        }
      }
    }
    fetchMembershipTier();
  }, [user]);
  
  const [accessibleEvents, setAccessibleEvents] = useState<any[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      if (user && user.membershipTier && supabase) {
        setEventsLoading(true);
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .contains('accessTiers', [user.membershipTier])
          .order('date', { ascending: true });
        if (!error && data) {
          setAccessibleEvents(data.slice(0, 3));
        } else {
          setAccessibleEvents([]);
        }
        setEventsLoading(false);
      }
    }
    fetchEvents();
  }, [user]);
  
  const [accessibleResources, setAccessibleResources] = useState<any[]>([]);
  const [resourcesLoading, setResourcesLoading] = useState(true);

  useEffect(() => {
    async function fetchResources() {
      if (user && user.membershipTier && supabase) {
        setResourcesLoading(true);
        const { data, error } = await supabase
          .from('resources')
          .select('*')
          .contains('accessTiers', [user.membershipTier])
          .order('created_at', { ascending: false });
        if (!error && data) {
          setAccessibleResources(data.slice(0, 4));
        } else {
          setAccessibleResources([]);
        }
        setResourcesLoading(false);
      }
    }
    fetchResources();
  }, [user]);

  const [progressStats, setProgressStats] = useState<any>(null);
  const [statsLoading, setStatsLoading] = useState(true);

  useEffect(() => {
    async function fetchProgressStats() {
      if (user && user.id && supabase) {
        setStatsLoading(true);
        const { data, error } = await supabase
          .from('dashboard_progress')
          .select('events_attended, resources_downloaded, forum_posts, connections, last_updated')
          .eq('user_id', user.id)
          .single();
        if (!error && data) {
          setProgressStats(data);
        } else {
          setProgressStats(null);
        }
        setStatsLoading(false);
      }
    }
    fetchProgressStats();
  }, [user]);

  const stats = [
    { label: 'Events Attended', value: progressStats?.events_attended ?? '-', icon: Calendar, change: '' },
    { label: 'Resources Downloaded', value: progressStats?.resources_downloaded ?? '-', icon: Download, change: '' },
    { label: 'Forum Posts', value: progressStats?.forum_posts ?? '-', icon: MessageSquare, change: '' },
    { label: 'Connections', value: progressStats?.connections ?? '-', icon: Users, change: '' }
  ];

  const quickActions = [
    { 
      title: 'Browse Events', 
      description: 'Find and register for upcoming events',
      icon: Calendar, 
      href: '/events',
      color: 'bg-blue-500'
    },
    { 
      title: 'Resource Library', 
      description: 'Access exclusive research and materials',
      icon: BookOpen, 
      href: '/resources',
      color: 'bg-green-500'
    },
    { 
      title: 'Community Forums', 
      description: 'Connect with fellow members',
      icon: Users, 
      href: '/community',
      color: 'bg-purple-500'
    },
    { 
      title: 'Career Center', 
      description: 'Explore job opportunities',
      icon: Briefcase, 
      href: '/careers',
      color: 'bg-orange-500'
    }
  ];

  const [recentActivities, setRecentActivities] = useState<any[]>([]);
  const [activitiesLoading, setActivitiesLoading] = useState(true);

  useEffect(() => {
    async function fetchRecentActivities() {
      if (!user || !user.id || !supabase) {
        setRecentActivities([]);
        setActivitiesLoading(false);
        return;
      }
      setActivitiesLoading(true);
      // Example: fetch from a 'user_activity' table, or aggregate from events/resources/forum/connections
      const { data, error } = await supabase
        .from('user_activity')
        .select('id, type, title, time, icon')
        .eq('user_id', user.id)
        .order('time', { ascending: false });
      if (!error && data) {
        setRecentActivities(data.slice(0, 4));
      } else {
        setRecentActivities([]);
      }
      setActivitiesLoading(false);
    }
    fetchRecentActivities();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  Welcome back, {profileName}!
                </h1>
                <p className="text-blue-100 mb-4">
                  Ready to advance your pharmaceutical career today?
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    <span className="font-medium">{userMembership?.name} Member</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                   <span>
  Member since {
    user.joinDate && !isNaN(new Date(user.joinDate).getTime())
      ? format(new Date(user.joinDate), 'MMM yyyy')
      : 'N/A'
  }
</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                  <div className="h-20 w-20 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <span className="text-lg font-semibold text-gray-900">{profileName}</span>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsLoading ? (
            <div className="col-span-4 flex items-center justify-center py-8">
              <Loader2 className="animate-spin h-8 w-8 text-blue-600" />
              <span className="ml-3 text-gray-600">Loading stats...</span>
            </div>
          ) : (
            stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        {/* Optionally show last_updated or change info if available */}
                        {progressStats?.last_updated && (
                          <p className="text-xs text-gray-500">Updated {format(new Date(progressStats.last_updated), 'MMM dd, yyyy')}</p>
                        )}
                      </div>
                      <Icon className="h-8 w-8 text-blue-500" />
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <Link key={index} to={action.href}>
                        <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                          <div className={`h-8 w-8 ${action.color} rounded-lg flex items-center justify-center mb-3`}>
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <h3 className="font-medium text-gray-900 mb-1">{action.title}</h3>
                          <p className="text-sm text-gray-600">{action.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Upcoming Events</CardTitle>
                  <Link to="/events">
                    <Button variant="outline" size="sm">
                      View All <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {accessibleEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900">{event.title}</h3>
                        <p className="text-sm text-gray-600">
                          {format(new Date(event.date), 'MMM dd, yyyy • h:mm a')}
                        </p>
                        <p className="text-sm text-gray-500">{event.speaker}</p>
                      </div>
                      <Link to={`/events/${event.id}`}>
                        <Button size="sm">Register</Button>
                      </Link>
                    </div>
                  ))}
                  {accessibleEvents.length === 0 && (
                    <p className="text-gray-500 text-center py-8">
                      No upcoming events available for your membership tier.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Recent Resources */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>New Resources</CardTitle>
                  <Link to="/resources">
                    <Button variant="outline" size="sm">
                      Browse All <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {accessibleResources.map((resource) => (
                    <div key={resource.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900">{resource.title}</h3>
                        <p className="text-sm text-gray-600">{resource.type.replace('-', ' ').toUpperCase()}</p>
                        <p className="text-sm text-gray-500">
                          {resource.downloadCount} downloads • {resource.fileSize}
                        </p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Progress Tracker */}
            <Card>
              <CardHeader>
                <CardTitle>Progress Tracker</CardTitle>
              </CardHeader>
              <CardContent>
                <ProgressTracker userId={user.id} />
              </CardContent>
            </Card>

            {/* Community Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Community Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <CommunityActivity />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notifications Center */}
            <Card>
              <CardHeader>
                <CardTitle>Notifications Center</CardTitle>
              </CardHeader>
              <CardContent>
                <NotificationsCenter />
              </CardContent>
            </Card>

            {/* Membership Status */}
            <Card>
              <CardHeader>
                <CardTitle>Membership Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div 
                    className="h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: userMembership?.color + '20', color: userMembership?.color }}
                  >
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg">{userMembership?.name}</h3>
                  <p className="text-gray-600 mb-4">{userMembership?.price}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Profile Complete</span>
                      <span className={user.profileComplete ? 'text-green-600' : 'text-orange-600'}>
                        {user.profileComplete ? '100%' : '75%'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${user.profileComplete ? 'bg-green-500' : 'bg-orange-500'}`}
                        style={{ width: user.profileComplete ? '100%' : '75%' }}
                      ></div>
                    </div>
                  </div>
                  {!user.profileComplete && (
                    <Link to="/profile">
                      <Button size="sm" className="mt-4 w-full">
                        Complete Profile
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                          <Icon className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {activity.title}
                          </p>
                          <p className="text-sm text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Upgrade Membership */}
            {user.membershipTier !== 'fellows' && (
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Unlock More Benefits
                  </h3>
                  <p className="text-sm text-blue-700 mb-4">
                    Upgrade your membership to access premium content and exclusive networking opportunities.
                  </p>
                  <Link to="/membership">
                    <Button size="sm" className="w-full">
                      Upgrade Membership
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}