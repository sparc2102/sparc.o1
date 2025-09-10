import React, { useEffect, useState } from 'react';
import { fetchForumTopics, fetchUsers } from '../lib/api';

const CommunityActivity = () => {
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchActivities() {
      try {
        // Fetch recent forum topics and author names from Supabase
        const { data, error } = await require('../lib/supabase').supabase
          .from('forum_topics')
          .select('id, title, author_id, created_at')
          .order('created_at', { ascending: false });
        if (!error && data) {
          // Fetch author names for each topic
          const authorIds = [...new Set(data.map((topic: any) => topic.author_id))];
          const { data: authors, error: authorError } = await require('../lib/supabase').supabase
            .from('users')
            .select('id, name')
            .in('id', authorIds);
          const enrichedActivities = data.map((topic: any) => {
            const author = authors?.find((user: any) => user.id === topic.author_id);
            return {
              ...topic,
              authorName: author?.name || 'Unknown',
            };
          });
          setActivities(enrichedActivities.slice(0, 5));
        } else {
          setActivities([]);
        }
      } catch (error) {
        console.error('Error fetching community activities:', error);
        setActivities([]);
      } finally {
        setLoading(false);
      }
    }
    fetchActivities();
  }, []);

  if (loading) return <div>Loading community activity...</div>;

  return (
    <div className="community-activity">
      <h3>Community Activity</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <strong>{activity.title}</strong> by {activity.authorName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityActivity;
