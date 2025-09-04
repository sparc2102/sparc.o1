import React, { useEffect, useState } from 'react';
import { fetchForumTopics, fetchUsers } from '../lib/api';

const CommunityActivity = () => {
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const topics = await fetchForumTopics();
        const users = await fetchUsers();

        const enrichedActivities = topics.map((topic: any) => {
          const author = users.find((user: any) => user.id === topic.author_id);
          return {
            ...topic,
            authorName: author?.name || 'Unknown',
          };
        });

        setActivities(enrichedActivities);
      } catch (error) {
        console.error('Error fetching community activities:', error);
      } finally {
        setLoading(false);
      }
    };

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
