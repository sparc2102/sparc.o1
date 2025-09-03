import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const SupportPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Support Center</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">How do I update my membership?</h3>
              <p className="text-gray-600">Visit the Billing page to manage your membership and subscription options.</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">How do I access my certificates?</h3>
              <p className="text-gray-600">All your certificates can be found in the Certifications page in your profile.</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Need Additional Help?</h2>
          <p className="mb-4">Our support team is available Monday through Friday, 9 AM - 5 PM EST.</p>
          <Button
            onClick={() => window.location.href = '/contact'}
            className="w-full"
          >
            Contact Support
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default SupportPage;
