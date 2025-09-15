import React from 'react';
import { Card } from '../components/ui/Card';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <Card className="p-6 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy for SPARC</h2>
          <p className="text-gray-600">
            <strong>Last Updated: September 15, 2025</strong><br /><br />
            SPARC, an initiative of ZANE ProEd, is committed to protecting the privacy and security of our members, including students, researchers, professionals, and industry leaders participating in our programs, events, and platforms. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information in connection with our services, including SPARC Genesis, SPARC Professional, SPARC Fellows, and related initiatives such as the SPARC Insight Series, SPARC Global Summit, and SPARC Knowledge Vault. We aim to be transparent about our data practices and ensure compliance with applicable data protection laws, including but not limited to the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other relevant regulations.<br /><br />
            By engaging with SPARC, including accessing our websites, registering for events, participating in forums, or utilizing our services, you acknowledge and agree to the practices described in this Privacy Policy. If you have any questions, please contact us at <a href="mailto:privacy@sparc.org" className="text-blue-600 hover:underline">privacy@sparc.org</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-gray-600">
            We collect information to provide, improve, and personalize our services, foster networking opportunities, and support the mission of SPARC to advance pharmaceutical education, research, and collaboration. The types of information we collect include:
          </p>

          <h3 className="text-xl font-medium mt-4 mb-2">1.1 Information You Provide Directly</h3>
          <p className="text-gray-600">
            We collect information you voluntarily provide when interacting with our services, such as:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>Account Creation</strong>: When you sign up for a SPARC membership (e.g., SPARC Genesis, SPARC Professional, or SPARC Fellows), we collect personal details such as your full name, email address, phone number, institutional or organizational affiliation, professional title, and country of residence. For SPARC Genesis members, we may also collect academic details, such as your field of study, degree program, and expected graduation date.</li>
            <li><strong>Event Registration</strong>: When you register for SPARC events (e.g., SPARC Global Summit, webinars, or workshops), we collect information such as your name, contact details, payment information (if applicable), and preferences for event participation (e.g., virtual or in-person attendance).</li>
            <li><strong>Resource Downloads</strong>: When you download resources from the SPARC Knowledge Vault, such as whitepapers, case studies, or journals, we may collect your name, email address, and details about the resource accessed.</li>
            <li><strong>Forum Participation</strong>: When you engage in SPARC forums, regional hubs, or collaborative platforms (e.g., SPARC Innovation Labs), we collect information you share, such as posts, comments, project submissions, or research contributions.</li>
            <li><strong>Surveys and Feedback</strong>: When you participate in surveys, polls, or feedback forms, we collect your responses, which may include personal opinions, professional experiences, or demographic information.</li>
            <li><strong>Contacting Support</strong>: When you reach out to our Operations & Engagement Team for support, we collect your name, contact details, and details about your inquiry or issue.</li>
            <li><strong>SPARC Awards and Recognition</strong>: If you nominate yourself or others for SPARC Honors Program awards, we collect information such as nominee names, achievements, and supporting documentation.</li>
            <li><strong>Career Services</strong>: When you participate in SPARC Talent Accelerator programs, such as resume optimization or job matching, we collect professional details, including your resume, work experience, skills, and career preferences.</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">1.2 Information Collected Automatically</h3>
          <p className="text-gray-600">
            We use technologies such as cookies, web beacons, and analytics tools to collect information automatically when you interact with our websites, platforms, or digital services:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>Usage Data</strong>: We collect data about your interactions with our websites and platforms, including pages visited, time spent, links clicked, and features used.</li>
            <li><strong>Device and Technical Information</strong>: We collect details about your device, such as IP address, browser type, operating system, device identifiers, and network information.</li>
            <li><strong>Cookies and Similar Technologies</strong>: We use cookies to enhance your experience, track usage patterns, and deliver personalized content. You can manage cookie preferences through your browser settings.</li>
            <li><strong>Event Analytics</strong>: For virtual events, we collect data on attendance, session participation, and engagement metrics to improve our programs.</li>
            <li><strong>Geolocation Data</strong>: We may collect general location information (e.g., city or country) based on your IP address to tailor content and events to your region.</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">1.3 Information from Third Parties</h3>
          <p className="text-gray-600">
            We may receive information about you from third-party sources, such as:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>Academic Institutions</strong>: If you are a SPARC Genesis member, we may receive information from your university or academic institution, such as enrollment status or academic achievements, to verify eligibility.</li>
            <li><strong>Corporate Partners</strong>: If you participate in SPARC programs through a corporate partner, we may receive information about your role, department, or project involvement.</li>
            <li><strong>Social Media and Public Platforms</strong>: If you interact with SPARC on social media (e.g., X.com) or public platforms, we may collect publicly available information, such as your username, posts, or profile details.</li>
            <li><strong>Payment Processors</strong>: When you make payments for SPARC Professional subscriptions or event registrations, our third-party payment processors collect and share payment-related information, such as transaction status, with us.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600">
            We use the information we collect to deliver, improve, and personalize SPARC’s services, support our mission, and ensure a secure and engaging experience. Specific purposes include:
          </p>

          <h3 className="text-xl font-medium mt-4 mb-2">2.1 Providing and Improving Services</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>Membership Management</strong>: To create and manage your SPARC account, verify eligibility for membership tiers (e.g., SPARC Genesis, SPARC Professional, SPARC Fellows), and provide access to member benefits.</li>
            <li><strong>Event Delivery</strong>: To organize, host, and facilitate events such as the SPARC Global Summit, SPARC Insight Series, and regional hub activities, including sending confirmations, reminders, and post-event materials.</li>
            <li><strong>Content Delivery</strong>: To provide access to the SPARC Knowledge Vault, including journals, whitepapers, and case studies, and to recommend resources based on your interests.</li>
            <li><strong>Program Support</strong>: To enable participation in SPARC Innovation Labs, Talent Accelerator, and other initiatives, including matching you with mentors, projects, or career opportunities.</li>
            <li><strong>Platform Enhancements</strong>: To analyze usage data and feedback to improve our websites, platforms, and services, ensuring they meet the needs of our diverse membership base.</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">2.2 Processing Transactions</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li>To process payments for SPARC Professional subscriptions, event registrations, or other fee-based services, and to issue refunds or resolve billing disputes.</li>
            <li>To maintain records of transactions for accounting, auditing, and compliance purposes.</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">2.3 Communications</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>Updates and Newsletters</strong>: To send you updates about SPARC programs, events, and initiatives, such as new webinars, award announcements, or partnership opportunities.</li>
            <li><strong>Personalized Recommendations</strong>: To tailor communications based on your membership tier, interests, and engagement history (e.g., suggesting relevant workshops or networking events).</li>
            <li><strong>Support Responses</strong>: To respond to your inquiries, provide technical support, or address feedback submitted through our platforms or <a href="mailto:privacy@sparc.org" className="text-blue-600 hover:underline">privacy@sparc.org</a>.</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">2.4 Networking and Collaboration</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li>To facilitate networking opportunities by sharing limited profile information (e.g., name, institution, or professional title) with other members in forums, events, or collaborative projects, with your consent.</li>
            <li>To connect you with mentors, industry leaders, or peers through SPARC Talent Accelerator or regional hubs.</li>
            <li>To promote your achievements, such as SPARC Awards or research publications, with your permission, to enhance your visibility within the SPARC community.</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">2.5 Security and Compliance</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li>To maintain the security of our platforms by detecting and preventing fraud, unauthorized access, or other malicious activities.</li>
            <li>To comply with legal obligations, such as responding to lawful requests from regulatory authorities or maintaining records for tax purposes.</li>
            <li>To enforce our terms of service and protect the rights, safety, and property of SPARC, ZANE ProEd, our members, and partners.</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">2.6 Research and Advocacy</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li>To aggregate and anonymize data for research purposes, such as developing whitepapers, advocacy reports, or thought leadership initiatives that advance pharmaceutical sciences.</li>
            <li>To analyze trends in member engagement, event participation, or resource usage to inform SPARC’s strategic direction and policy advocacy efforts.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Share Your Information</h2>
          <p className="text-gray-600">
            We do not sell your personal information. However, we may share your information with trusted parties under specific circumstances to deliver our services or comply with legal requirements:
          </p>

          <h3 className="text-xl font-medium mt-4 mb-2">3.1 Within SPARC and ZANE ProEd</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li>Your information may be shared internally among SPARC councils (e.g., Genesis Council, Professional Council, Fellows Advisory Council) and ZANE ProEd teams to coordinate programs, events, and member support.</li>
            <li>For example, the Operations & Engagement Team may access your contact details to manage event logistics, while the Content & Publications Team may use your contributions to curate materials.</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">3.2 With Service Providers</h3>
          <p className="text-gray-600">
            We engage third-party service providers to perform functions on our behalf, such as:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>Event Platforms</strong>: To host virtual events, webinars, or the SPARC Global Summit.</li>
            <li><strong>Payment Processors</strong>: To process payments securely for subscriptions or event registrations.</li>
            <li><strong>Analytics Providers</strong>: To analyze usage data and improve our platforms.</li>
            <li><strong>Cloud Storage Providers</strong>: To store and manage member data securely.</li>
          </ul>
          <p className="text-gray-600">
            These providers are contractually obligated to protect your information and use it only for the purposes we specify.
          </p>

          <h3 className="text-xl font-medium mt-4 mb-2">3.3 With Partners</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>Academic Institutions</strong>: We may share limited information (e.g., membership status or event participation) with your institution to verify eligibility or support accreditation metrics.</li>
            <li><strong>Corporate Partners</strong>: If you participate in collaborative projects or career programs, we may share relevant professional details (e.g., resume or skills) with corporate partners, with your consent.</li>
            <li><strong>SPARC Fellows and Thought Leaders</strong>: For mentorship or advisory programs, we may share your profile with SPARC Fellows to facilitate high-level networking, with your permission.</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">3.4 For Legal and Safety Purposes</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li>To comply with applicable laws, regulations, or legal processes, such as responding to subpoenas or government requests.</li>
            <li>To protect the rights, property, or safety of SPARC, ZANE ProEd, our members, or the public, such as in cases of suspected fraud or abuse.</li>
            <li>In connection with a merger, acquisition, or sale of assets, where your information may be transferred to a successor entity, subject to equivalent privacy protections.</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">3.5 With Your Consent</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li>We may share your information for other purposes if you provide explicit consent, such as showcasing your research in SPARC publications or featuring your profile in SPARC Honors Program announcements.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-gray-600">
            We implement robust technical and organizational measures to protect your personal information from unauthorized access, loss, misuse, or alteration. These measures include:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>Encryption</strong>: We use encryption protocols (e.g., TLS/SSL) to secure data transmission and storage.</li>
            <li><strong>Access Controls</strong>: Only authorized personnel and trusted service providers can access your information, subject to strict confidentiality agreements.</li>
            <li><strong>Regular Audits</strong>: We conduct periodic security assessments to identify and address vulnerabilities in our systems.</li>
            <li><strong>Secure Payment Processing</strong>: Payments are handled by PCI-compliant third-party processors to ensure financial data security.</li>
          </ul>
          <p className="text-gray-600">
            Despite these measures, no system is completely secure. We cannot guarantee absolute protection against cyber threats, such as hacking or data breaches. In the event of a data breach, we will notify affected individuals and authorities as required by applicable laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p className="text-gray-600">
            Depending on your location and applicable laws (e.g., GDPR, CCPA), you have certain rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>Access</strong>: Request a copy of the personal information we hold about you.</li>
            <li><strong>Correction</strong>: Request corrections to inaccurate or incomplete data.</li>
            <li><strong>Deletion</strong>: Request deletion of your data, subject to legal or contractual obligations (e.g., retaining transaction records for auditing).</li>
            <li><strong>Restriction</strong>: Request that we limit the processing of your data in certain circumstances.</li>
            <li><strong>Objection</strong>: Object to the processing of your data for specific purposes, such as marketing communications.</li>
            <li><strong>Data Portability</strong>: Request a transferable copy of your data in a structured, machine-readable format.</li>
            <li><strong>Withdraw Consent</strong>: If we process your data based on consent, you can withdraw consent at any time, without affecting prior processing.</li>
          </ul>
          <p className="text-gray-600">
            To exercise these rights, contact us at <a href="mailto:privacy@sparc.org" className="text-blue-600 hover:underline">privacy@sparc.org</a>. We will respond within the timeframes required by law (e.g., 30 days under GDPR). We may ask you to verify your identity to protect your privacy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. International Data Transfers</h2>
          <p className="text-gray-600">
            SPARC operates globally, with members and partners in regions such as North America, Europe, and Asia. Your personal information may be transferred to and processed in countries other than your own, including the United States, where ZANE ProEd is headquartered. These countries may have different data protection laws.<br /><br />
            We ensure that international data transfers comply with applicable regulations, such as:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>Standard Contractual Clauses (SCCs)</strong>: For transfers to countries without an adequacy decision from the European Commission (e.g., GDPR-compliant transfers).</li>
            <li><strong>Data Protection Agreements</strong>: With service providers and partners to ensure equivalent safeguards for your information.</li>
          </ul>
          <p className="text-gray-600">
            By using our services, you consent to the transfer of your data to these jurisdictions for the purposes outlined in this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
          <p className="text-gray-600">
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>Membership Data</strong>: Retained for the duration of your membership and up to 2 years after membership ends, unless you request deletion sooner.</li>
            <li><strong>Event Data</strong>: Retained for 3 years after an event to support follow-up activities and analytics, unless otherwise required by law.</li>
            <li><strong>Financial Data</strong>: Retained for 7 years to comply with tax and auditing requirements.</li>
            <li><strong>Anonymized Data</strong>: May be retained indefinitely for research, analytics, or advocacy purposes, provided it cannot be linked to you.</li>
          </ul>
          <p className="text-gray-600">
            You can request deletion of your data at any time, subject to legal obligations, by contacting <a href="mailto:privacy@sparc.org" className="text-blue-600 hover:underline">privacy@sparc.org</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking Technologies</h2>
          <p className="text-gray-600">
            We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. Types of cookies include:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>Essential Cookies</strong>: Necessary for the operation of our websites and platforms (e.g., authentication, session management).</li>
            <li><strong>Analytics Cookies</strong>: Track usage patterns to improve our services (e.g., Google Analytics).</li>
            <li><strong>Preference Cookies</strong>: Remember your settings, such as language or region preferences.</li>
            <li><strong>Marketing Cookies</strong>: Deliver tailored advertisements or event promotions, with your consent.</li>
          </ul>
          <p className="text-gray-600">
            You can manage cookies through your browser settings or opt out of non-essential cookies via our cookie consent tool. Note that disabling cookies may affect the functionality of our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Children’s Privacy</h2>
          <p className="text-gray-600">
            SPARC’s services are not intended for individuals under 16 years of age. We do not knowingly collect personal information from children. If we learn that we have collected such information, we will take steps to delete it promptly. If you believe a child has provided us with their information, please contact us at <a href="mailto:privacy@sparc.org" className="text-blue-600 hover:underline">privacy@sparc.org</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Third-Party Links and Services</h2>
          <p className="text-gray-600">
            Our websites and platforms may contain links to third-party websites, such as partner institutions, event platforms, or social media (e.g., X.com). We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before sharing personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy to reflect changes in our services, legal requirements, or operational practices. We will notify you of significant changes via email, our website, or other communication channels. The updated policy will be effective upon posting, with the “Last Updated” date revised accordingly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
          <p className="text-gray-600">
            If you have questions, concerns, or requests related to this Privacy Policy or our data practices, please contact us at:<br />
            <strong>Email</strong>: <a href="mailto:privacy@sparc.org" className="text-blue-600 hover:underline">privacy@sparc.org</a><br />
            <strong>Mailing Address</strong>:<br />
            SPARC<br />
            123 Pharma Innovation Way<br />
            Boston, MA 02108, USA<br /><br />
            For complaints, you may also contact your local data protection authority (e.g., Information Commissioner’s Office in the UK or a supervisory authority in the EU).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">13. Additional Information for Specific Jurisdictions</h2>

          <h3 className="text-xl font-medium mt-4 mb-2">13.1 GDPR (European Union)</h3>
          <p className="text-gray-600">
            If you are located in the European Economic Area (EEA), you have additional rights under GDPR, including the right to lodge a complaint with a supervisory authority. Our legal basis for processing your data includes:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>Consent</strong>: For marketing communications or sharing your profile with partners.</li>
            <li><strong>Contract</strong>: To fulfill membership agreements or event registrations.</li>
            <li><strong>Legitimate Interests</strong>: For improving services, ensuring security, or conducting research, balanced against your rights.</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">13.2 CCPA (California, USA)</h3>
          <p className="text-gray-600">
            If you are a California resident, you have rights under the CCPA, including the right to know what personal information we collect, sell, or share, and the right to opt out of sales (note: we do not sell your data). To exercise these rights, contact <a href="mailto:privacy@sparc.org" className="text-blue-600 hover:underline">privacy@sparc.org</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">14. SPARC-Specific Data Practices</h2>

          <h3 className="text-xl font-medium mt-4 mb-2">14.1 SPARC Genesis</h3>
          <p className="text-gray-600">
            For student and early-career members, we collect academic and professional details to tailor career bootcamps, networking cohorts, and research opportunities. We may share aggregated, anonymized data with academic partners to support accreditation or program evaluation.
          </p>

          <h3 className="text-xl font-medium mt-4 mb-2">14.2 SPARC Professional and Fellows</h3>
          <p className="text-gray-600">
            For mid-to-senior professionals and SPARC Fellows, we may share limited profile information (e.g., name, title) with event attendees or collaborators to facilitate networking, with your consent. We also use your data to provide access to premium masterclasses, symposia, and advisory boards.
          </p>

          <h3 className="text-xl font-medium mt-4 mb-2">14.3 SPARC Innovation Labs</h3>
          <p className="text-gray-600">
            If you participate in SPARC Innovation Labs, we collect project-related data, such as prototypes or research submissions, which may be shared with collaborators or published in SPARC Knowledge Vault, with your permission.
          </p>

          <h3 className="text-xl font-medium mt-4 mb-2">14.4 SPARC Awards</h3>
          <p className="text-gray-600">
            If you are nominated for or receive a SPARC Award, we may publicize your name, institution, and achievements in our communications, with your consent.
          </p>
        </section>

        <section>
          <p className="text-gray-600">
            By engaging with SPARC, an initiative of ZANE ProEd, you help us build a global community dedicated to advancing pharmaceutical sciences and healthcare innovation. We are committed to protecting your privacy while delivering exceptional value through our programs and services. Thank you for being part of the SPARC movement.
          </p>
        </section>
      </Card>
    </div>
  );
};

export default PrivacyPolicyPage;