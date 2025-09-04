import React, { useEffect, useState } from 'react';
import { fetchUserById } from '../lib/api';

const ProgressTracker = ({ userId }: { userId: string }) => {
  const [progress, setProgress] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const user = await fetchUserById(userId);
        setProgress(user?.profile_complete ? 100 : 50); // Example logic
      } catch (error) {
        console.error('Error fetching user progress:', error);
      } finally {
        setLoading(false);
      }
    };

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
