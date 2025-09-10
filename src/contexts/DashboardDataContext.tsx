import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

interface DashboardData {
  profile: any;
  progressStats: any;
  events: any[];
  resources: any[];
  activities: any[];
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

const DashboardDataContext = createContext<DashboardData | undefined>(undefined);

export const DashboardDataProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [progressStats, setProgressStats] = useState<any>(null);
  const [events, setEvents] = useState<any[]>([]);
  const [resources, setResources] = useState<any[]>([]);
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = async () => {
    if (!user || !user.id || !supabase) return;
    setLoading(true);
    setError(null);
    try {
      // Profile
      const { data: profileData } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single();
      setProfile(profileData || null);
      // Progress
      const { data: progressData } = await supabase
        .from('dashboard_progress')
        .select('events_attended, resources_downloaded, forum_posts, connections, last_updated')
        .eq('user_id', user.id)
        .single();
      setProgressStats(progressData || null);
      // Events
      const { data: eventsData } = await supabase
        .from('events')
        .select('*')
        .contains('accessTiers', [profileData?.membershipTier || user.membershipTier])
        .order('date', { ascending: true });
      setEvents(eventsData || []);
      // Resources
      const { data: resourcesData } = await supabase
        .from('resources')
        .select('*')
        .contains('accessTiers', [profileData?.membershipTier || user.membershipTier])
        .order('created_at', { ascending: false });
      setResources(resourcesData || []);
      // Activities
      const { data: activitiesData } = await supabase
        .from('user_activity')
        .select('id, type, title, time, icon')
        .eq('user_id', user.id)
        .order('time', { ascending: false });
      setActivities(activitiesData || []);
    } catch (err: any) {
      setError(err.message || 'Error fetching dashboard data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
    // eslint-disable-next-line
  }, [user]);

  const value: DashboardData = {
    profile,
    progressStats,
    events,
    resources,
    activities,
    loading,
    error,
    refresh: fetchAll,
  };

  return (
    <DashboardDataContext.Provider value={value}>
      {children}
    </DashboardDataContext.Provider>
  );
};

export const useDashboardData = () => {
  const ctx = useContext(DashboardDataContext);
  if (!ctx) throw new Error('useDashboardData must be used within DashboardDataProvider');
  return ctx;
}
