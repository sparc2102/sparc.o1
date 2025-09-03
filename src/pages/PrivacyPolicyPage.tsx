import React from 'react';
import { Card } from '../components/ui/Card';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <Card className="p-6 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-600">
            We collect information that you provide directly to us, including when you:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Create an account</li>
            <li>Register for events</li>
            <li>Download resources</li>
            <li>Participate in forums</li>
            <li>Contact us for support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-gray-600">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Provide and improve our services</li>
            <li>Process your transactions</li>
            <li>Send you updates and communications</li>
            <li>Maintain the security of our platform</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-gray-600">
            We implement appropriate technical and organizational measures to protect your personal information.
            However, no security system is impenetrable and we cannot guarantee the security of our systems 100%.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-gray-600">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <a href="mailto:privacy@sparc.org" className="text-blue-600 hover:underline">
              privacy@sparc.org
            </a>
          </p>
        </section>
      </Card>
    </div>
  );
};

export default PrivacyPolicyPage;
