import React, { useEffect, useState } from 'react';
import { fetchUserById } from '../lib/api';

const ProgressTracker = ({ userId }: { userId: string }) => {
  const [progress, setProgress] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProgress() {
      try {
        // Fetch progress from dashboard_progress table
        const { data, error } = await require('../lib/supabase').supabase
          .from('dashboard_progress')
          .select('events_attended, resources_downloaded, forum_posts, connections')
          .eq('user_id', userId)
          .single();
        if (!error && data) {
          // Example: calculate completion percentage based on filled stats
          const total = 4;
          let completed = 0;
          if (data.events_attended > 0) completed++;
          if (data.resources_downloaded > 0) completed++;
          if (data.forum_posts > 0) completed++;
          if (data.connections > 0) completed++;
          setProgress(Math.round((completed / total) * 100));
        } else {
          setProgress(0);
        }
      } catch (error) {
        console.error('Error fetching user progress:', error);
        setProgress(0);
      } finally {
        setLoading(false);
      }
    }
    fetchProgress();
  }, [userId]);

  if (loading) return <div>Loading progress...</div>;

  return (
    <div className="progress-tracker">
      <h3>Progress Tracker</h3>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%`, backgroundColor: 'green' }}
        ></div>
      </div>
      <p>{progress}% Complete</p>
    </div>
  );
};

export default ProgressTracker;
