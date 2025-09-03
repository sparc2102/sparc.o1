import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const AdminPortalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('users');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'users':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">User Management</h2>
            <div className="bg-white p-4 rounded-md shadow">
              <p className="text-gray-600">User management features coming soon...</p>
            </div>
          </div>
        );
      case 'events':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Event Management</h2>
            <div className="bg-white p-4 rounded-md shadow">
              <p className="text-gray-600">Event management features coming soon...</p>
            </div>
          </div>
        );
      case 'resources':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Resource Management</h2>
            <div className="bg-white p-4 rounded-md shadow">
              <p className="text-gray-600">Resource management features coming soon...</p>
            </div>
          </div>
        );
      case 'forum':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Forum Management</h2>
            <div className="bg-white p-4 rounded-md shadow">
              <p className="text-gray-600">Forum management features coming soon...</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Portal</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="md:w-64 p-4">
          <nav className="space-y-2">
            <Button
              onClick={() => setActiveTab('users')}
              className={`w-full justify-start ${
                activeTab === 'users' ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              Users
            </Button>
            <Button
              onClick={() => setActiveTab('events')}
              className={`w-full justify-start ${
                activeTab === 'events' ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              Events
            </Button>
            <Button
              onClick={() => setActiveTab('resources')}
              className={`w-full justify-start ${
                activeTab === 'resources' ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              Resources
            </Button>
            <Button
              onClick={() => setActiveTab('forum')}
              className={`w-full justify-start ${
                activeTab === 'forum' ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              Forum
            </Button>
          </nav>
        </Card>

        <Card className="flex-1 p-6">
          {renderTabContent()}
        </Card>
      </div>
    </div>
  );
};

export default AdminPortalPage;
