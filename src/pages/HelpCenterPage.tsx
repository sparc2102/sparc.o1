import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const HelpCenterPage: React.FC = () => {
  const categories = [
    {
      title: 'Getting Started',
      items: [
        'Creating an account',
        'Membership tiers',
        'Accessing resources',
        'Event registration'
      ]
    },
    {
      title: 'Account Management',
      items: [
        'Profile settings',
        'Password reset',
        'Subscription management',
        'Billing information'
      ]
    },
    {
      title: 'Technical Support',
      items: [
        'Browser compatibility',
        'Download issues',
        'Video playback',
        'Mobile access'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Help Center</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Card key={index} className="p-6">
            <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="mb-4">Can't find what you're looking for?</p>
        <Button
          onClick={() => window.location.href = '/contact'}
          className="inline-block"
        >
          Contact Support
        </Button>
      </div>
    </div>
  );
};

export default HelpCenterPage;
