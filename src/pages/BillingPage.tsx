import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { membershipTiers } from '../data/mockData';
import { 
  CreditCard, 
  Download, 
  Calendar, 
  DollarSign,
  CheckCircle,
  AlertCircle,
  Edit,
  Trash2,
  Plus,
  Receipt,
  Flame,
  TrendingUp,
  Clock
} from 'lucide-react';
import { format } from 'date-fns';

export function BillingPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <Flame className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Access Restricted</h2>
            <p className="text-gray-600 mb-4">Please sign in to view your billing information.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentTier = membershipTiers.find(tier => tier.id === user.membershipTier);
  
  const paymentHistory = [
    {
      id: '1',
      date: '2024-01-15',
      description: 'SPARC Professional Annual Membership',
      amount: '$199.00',
      status: 'Paid',
      invoice: 'INV-2024-001'
    },
    {
      id: '2',
      date: '2023-01-15',
      description: 'SPARC Professional Annual Membership',
      amount: '$199.00',
      status: 'Paid',
      invoice: 'INV-2023-001'
    },
    {
      id: '3',
      date: '2022-06-15',
      description: 'SPARC Genesis to Professional Upgrade',
      amount: '$149.00',
      status: 'Paid',
      invoice: 'INV-2022-045'
    }
  ];

  const paymentMethods = [
    {
      id: '1',
      type: 'Visa',
      last4: '4242',
      expiry: '12/26',
      isDefault: true
    },
    {
      id: '2',
      type: 'Mastercard',
      last4: '8888',
      expiry: '08/25',
      isDefault: false
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: DollarSign },
    { id: 'payment-methods', name: 'Payment Methods', icon: CreditCard },
    { id: 'history', name: 'Payment History', icon: Receipt },
    { id: 'subscription', name: 'Subscription', icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Billing & Subscription</h1>
          <p className="text-gray-600">Manage your SPARC membership and billing information</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Current Subscription */}
              <Card>
                <CardHeader>
                  <CardTitle>Current Subscription</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold" style={{ color: currentTier?.color }}>
                        {currentTier?.name}
                      </h3>
                      <p className="text-gray-600">{currentTier?.price}</p>
                      <p className="text-sm text-gray-500">Next billing: January 15, 2025</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-green-600 mb-2">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">Active</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Manage
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Upgrade Available</h4>
                    <p className="text-blue-800 text-sm mb-3">
                      Unlock more benefits with SPARC Fellows membership
                    </p>
                    <Button size="sm">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      View Upgrade Options
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Transactions</CardTitle>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {paymentHistory.slice(0, 3).map((payment) => (
                      <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{payment.description}</h4>
                          <p className="text-sm text-gray-600">{format(new Date(payment.date), 'MMM dd, yyyy')}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{payment.amount}</p>
                          <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                            {payment.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Account Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Member Since</span>
                      <span className="font-medium">{format(new Date(user.joinDate), 'MMM yyyy')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Paid</span>
                      <span className="font-medium">$547.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Next Payment</span>
                      <span className="font-medium">Jan 15, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status</span>
                      <span className="text-green-600 font-medium">Active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Have questions about your billing or subscription?
                    </p>
                    <Button variant="outline" className="w-full">
                      Contact Support
                    </Button>
                    <Button variant="outline" className="w-full">
                      View FAQ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Payment Methods Tab */}
        {activeTab === 'payment-methods' && (
          <div className="max-w-4xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Payment Methods</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Payment Method
              </Button>
            </div>

            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <Card key={method.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <CreditCard className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {method.type} ending in {method.last4}
                          </h3>
                          <p className="text-sm text-gray-600">Expires {method.expiry}</p>
                          {method.isDefault && (
                            <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full mt-1">
                              Default
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Payment History Tab */}
        {activeTab === 'history' && (
          <div className="max-w-6xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Payment History</h2>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Invoice
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {paymentHistory.map((payment) => (
                        <tr key={payment.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {format(new Date(payment.date), 'MMM dd, yyyy')}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {payment.description}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {payment.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              {payment.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              {payment.invoice}
                            </Button>
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

        {/* Subscription Tab */}
        {activeTab === 'subscription' && (
          <div className="max-w-4xl space-y-8">
            {/* Current Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Subscription Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {membershipTiers.map((tier) => (
                    <div 
                      key={tier.id}
                      className={`p-6 border-2 rounded-lg ${
                        tier.id === user.membershipTier 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-center">
                        <h3 className="text-lg font-semibold mb-2" style={{ color: tier.color }}>
                          {tier.name}
                        </h3>
                        <p className="text-2xl font-bold text-gray-900 mb-2">{tier.price}</p>
                        <p className="text-sm text-gray-600 mb-4">{tier.duration}</p>
                        
                        {tier.id === user.membershipTier ? (
                          <div className="flex items-center justify-center text-blue-600 mb-4">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            <span className="text-sm font-medium">Current Plan</span>
                          </div>
                        ) : (
                          <Button 
                            className="w-full mb-4"
                            variant={tier.id === 'fellows' ? 'outline' : 'primary'}
                            disabled={tier.id === 'fellows'}
                          >
                            {tier.id === 'fellows' ? 'Invitation Only' : 'Upgrade'}
                          </Button>
                        )}

                        <ul className="text-left space-y-1">
                          {tier.benefits.slice(0, 3).map((benefit, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start">
                              <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                          {tier.benefits.length > 3 && (
                            <li className="text-sm text-gray-500">
                              +{tier.benefits.length - 3} more benefits
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Subscription Details */}
            <Card>
              <CardHeader>
                <CardTitle>Subscription Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Billing Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Plan</span>
                        <span className="font-medium">{currentTier?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Billing Cycle</span>
                        <span className="font-medium">Annual</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Next Payment</span>
                        <span className="font-medium">$199.00 on Jan 15, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Auto-renewal</span>
                        <span className="text-green-600 font-medium">Enabled</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Usage This Month</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Events Attended</span>
                        <span className="font-medium">3</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Resources Downloaded</span>
                        <span className="font-medium">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Forum Posts</span>
                        <span className="font-medium">8</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mentorship Sessions</span>
                        <span className="font-medium">2</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex space-x-4">
                    <Button variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Change Billing Date
                    </Button>
                    <Button variant="outline">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      Cancel Subscription
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}