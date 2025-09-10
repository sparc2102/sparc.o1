import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

const NotificationsCenter = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotifications() {
      if (!user || !user.id) {
        setNotifications([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      const { data, error } = await supabase
        .from('notifications')
        .select('id, message, timestamp')
        .eq('user_id', user.id)
        .order('timestamp', { ascending: false });
      if (!error && data) {
        setNotifications(data);
      } else {
        setNotifications([]);
      }
      setLoading(false);
    }
    fetchNotifications();
  }, [user]);

  if (loading) return <div>Loading notifications...</div>;

  return (
    <div className="notifications-center">
      <h3>Notifications Center</h3>
      <ul>
        {notifications.length === 0 ? (
          <li className="text-gray-500">No notifications found.</li>
        ) : (
          notifications.map((notification) => (
            <li key={notification.id}>
              <p>{notification.message}</p>
              <small>{notification.timestamp}</small>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default NotificationsCenter;
