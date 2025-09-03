import React from 'react';
import { Card } from '../components/ui/Card';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <Card className="p-6 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing and using the SPARC platform, you agree to be bound by these Terms of Service
            and all applicable laws and regulations. If you do not agree with any of these terms, you
            are prohibited from using or accessing this site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Membership and Access</h2>
          <p className="text-gray-600">
            Access to certain resources and features requires active membership. Members must:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Maintain accurate registration information</li>
            <li>Keep login credentials secure</li>
            <li>Pay applicable membership fees</li>
            <li>Comply with usage guidelines</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Content and Conduct</h2>
          <p className="text-gray-600">
            Users agree to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Post appropriate and relevant content</li>
            <li>Respect intellectual property rights</li>
            <li>Not engage in disruptive behavior</li>
            <li>Not misuse platform resources</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p className="text-gray-600">
            All content on the SPARC platform, including text, graphics, logos, and images,
            is the property of SPARC or its content suppliers and protected by intellectual
            property laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
          <p className="text-gray-600">
            We reserve the right to terminate or suspend access to our platform immediately,
            without prior notice or liability, for any reason whatsoever, including without
            limitation if you breach the Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
          <p className="text-gray-600">
            Questions about the Terms of Service should be sent to:
            <br />
            <a href="mailto:legal@sparc.org" className="text-blue-600 hover:underline">
              legal@sparc.org
            </a>
          </p>
        </section>
      </Card>
    </div>
  );
};

export default TermsOfServicePage;
