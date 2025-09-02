import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Users, 
  Calendar, 
  BookOpen, 
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Download,
  BarChart3,
  PieChart,
  Activity,
  DollarSign
} from 'lucide-react';

export function AdminPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Members', value: '10,247', icon: Users, change: '+12.5%', color: 'text-blue-600' },
    { label: 'Active Events', value: '23', icon: Calendar, change: '+8.3%', color: 'text-green-600' },
    { label: 'Resources', value: '1,456', icon: BookOpen, change: '+15.2%', color: 'text-purple-600' },
    { label: 'Monthly Revenue', value: '$47,892', icon: DollarSign, change: '+23.1%', color: 'text-orange-600' }
  ];

  const recentMembers = [
    { name: 'Dr. Lisa Park', tier: 'Professional', joined: '2024-01-15', status: 'Active' },
    { name: 'Alex Johnson', tier: 'Genesis', joined: '2024-01-14', status: 'Active' },
    { name: 'Sarah Wilson', tier: 'Professional', joined: '2024-01-13', status: 'Pending' },
    { name: 'Michael Chen', tier: 'Fellows', joined: '2024-01-12', status: 'Active' },
    { name: 'Emily Davis', tier: 'Genesis', joined: '2024-01-11', status: 'Active' }
  ];

  const upcomingEvents = [
    { title: 'Drug Discovery Webinar', date: '2024-02-15', attendees: 234, status: 'Published' },
    { title: 'Networking Boston', date: '2024-02-20', attendees: 78, status: 'Published' },
    { title: 'Career Bootcamp', date: '2024-02-25', attendees: 156, status: 'Draft' },
    { title: 'Leadership Masterclass', date: '2024-03-01', attendees: 42, status: 'Published' }
  ];

  const membershipDistribution = [
    { tier: 'Genesis', count: 6245, percentage: 60.9, color: 'bg-green-500' },
    { tier: 'Professional', count: 3567, percentage: 34.8, color: 'bg-blue-500' },
    { tier: 'Fellows', count: 435, percentage: 4.2, color: 'bg-purple-500' }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'members', name: 'Members', icon: Users },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'resources', name: 'Resources', icon: BookOpen },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp }
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Genesis': return 'bg-green-100 text-green-700';
      case 'Professional': return 'bg-blue-100 text-blue-700';
      case 'Fellows': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage SPARC members, events, and platform analytics</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="inline h-4 w-4 mr-2" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                          <p className={`text-sm ${stat.color}`}>{stat.change} from last month</p>
                        </div>
                        <Icon className={`h-8 w-8 ${stat.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Members */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Members</CardTitle>
                    <Button size="sm" variant="outline">View All</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentMembers.map((member, index) => (
                      <div key={index} className="flex items-center justify-between py-2">
                        <div>
                          <div className="font-medium text-gray-900">{member.name}</div>
                          <div className="text-sm text-gray-500">{member.joined}</div>
                        </div>
                        <div className="text-right">
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${getTierColor(member.tier)}`}>
                            {member.tier}
                          </span>
                          <div className={`text-sm mt-1 ${
                            member.status === 'Active' ? 'text-green-600' : 'text-orange-600'
                          }`}>
                            {member.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Membership Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Membership Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {membershipDistribution.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">{item.tier}</span>
                          <span>{item.count} ({item.percentage}%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${item.color} h-2 rounded-full`}
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Members Tab */}
        {activeTab === 'members' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Member Management</h2>
              <div className="flex space-x-3">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Member
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search members..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>All Tiers</option>
                    <option>Genesis</option>
                    <option>Professional</option>
                    <option>Fellows</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Pending</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4">Name</th>
                        <th className="text-left py-3 px-4">Email</th>
                        <th className="text-left py-3 px-4">Tier</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Joined</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentMembers.map((member, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-3 px-4 font-medium">{member.name}</td>
                          <td className="py-3 px-4 text-gray-600">member{index}@email.com</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 text-xs rounded-full ${getTierColor(member.tier)}`}>
                              {member.tier}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              member.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                            }`}>
                              {member.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{member.joined}</td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Event Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Event
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900">{event.title}</h3>
                        <p className="text-sm text-gray-600">{event.date} • {event.attendees} registered</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          event.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {event.status}
                        </span>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Resource Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Upload Resource
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Resource Management</h3>
                  <p className="text-gray-500 mb-6">
                    Upload and manage documents, videos, and other resources for SPARC members.
                  </p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Upload First Resource
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Growth Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Monthly Growth Rate</span>
                      <span className="font-semibold text-green-600">+12.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Event Attendance Rate</span>
                      <span className="font-semibold">78%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Resource Downloads</span>
                      <span className="font-semibold">15,234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Active Engagement</span>
                      <span className="font-semibold text-blue-600">94%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Monthly Revenue</span>
                      <span className="font-semibold">$47,892</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Annual Recurring Revenue</span>
                      <span className="font-semibold">$574,704</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Conversion Rate</span>
                      <span className="font-semibold text-green-600">23.1%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Churn Rate</span>
                      <span className="font-semibold">2.1%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}