import React, { useEffect, useState } from 'react';

const NotificationsCenter = () => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // Replace with actual Supabase query when notifications table is available
        const mockNotifications = [
          { id: 1, message: 'Your event registration is confirmed.', timestamp: '2025-09-01' },
          { id: 2, message: 'New forum reply on your topic.', timestamp: '2025-09-02' },
        ];
        setNotifications(mockNotifications);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  if (loading) return <div>Loading notifications...</div>;

  return (
    <div className="notifications-center">
      <h3>Notifications Center</h3>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            <p>{notification.message}</p>
            <small>{notification.timestamp}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsCenter;
