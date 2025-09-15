import React from 'react';
import { Card } from '../components/ui/Card';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <Card className="p-6 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Terms of Service for SPARC</h2>
          <p className="text-gray-600">
            <strong>Last Updated: September 15, 2025</strong><br /><br />
            SPARC, an initiative of ZANE ProEd, provides a platform to advance pharmaceutical education, research, and collaboration through programs such as SPARC Genesis, SPARC Professional, SPARC Fellows, and initiatives like the SPARC Insight Series, SPARC Global Summit, SPARC Innovation Labs, and SPARC Knowledge Vault. These Terms of Service ("Terms") govern your access to and use of the SPARC platform, including our websites, mobile applications, events, forums, and other services (collectively, the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with these Terms, you are prohibited from using or accessing the Platform.<br /><br />
            For questions about these Terms, please contact us at <a href="mailto:legal@sparc.org" className="text-blue-600 hover:underline">legal@sparc.org</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing or using the SPARC Platform, you agree to comply with and be bound by these Terms, our <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>, and any additional guidelines, rules, or policies posted on the Platform or communicated to you (e.g., event-specific rules or membership agreements). These Terms apply to all users, including students, researchers, professionals, SPARC Fellows, and other participants in SPARC programs, whether accessing the Platform as a member, guest, or visitor. If you are using the Platform on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.<br /><br />
            SPARC reserves the right to update or modify these Terms at any time. We will notify you of significant changes via email, the Platform, or other communication channels. Your continued use of the Platform after such changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Membership and Access</h2>
          <p className="text-gray-600">
            Access to certain features, resources, and programs on the SPARC Platform, such as the SPARC Knowledge Vault, SPARC Innovation Labs, or premium events, requires an active membership (e.g., SPARC Genesis, SPARC Professional, or SPARC Fellows). To access and maintain membership, you agree to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>Maintain Accurate Registration Information</strong>: Provide true, accurate, current, and complete information during account creation or event registration, including your full name, email address, institutional or organizational affiliation, professional title, and, for SPARC Genesis members, academic details (e.g., field of study, degree program, expected graduation date). You must promptly update your information to keep it accurate.</li>
            <li><strong>Keep Login Credentials Secure</strong>: Safeguard your account credentials (e.g., username, password) and not share them with others. You are responsible for all activities conducted under your account. Notify us immediately at <a href="mailto:legal@sparc.org" className="text-blue-600 hover:underline">legal@sparc.org</a> if you suspect unauthorized use of your account.</li>
            <li><strong>Pay Applicable Membership Fees</strong>: For SPARC Professional or other fee-based memberships, pay all applicable fees as outlined during registration or subscription. Fees are non-refundable except as specified in our refund policy or required by law. Failure to pay fees may result in suspension or termination of your membership.</li>
            <li><strong>Comply with Usage Guidelines</strong>: Use the Platform in accordance with these Terms, applicable laws, and any specific guidelines for programs or events (e.g., SPARC Global Summit code of conduct, SPARC Innovation Labs submission rules).</li>
          </ul>
          <p className="text-gray-600">
            SPARC reserves the right to verify eligibility for membership tiers (e.g., confirming student status for SPARC Genesis or professional qualifications for SPARC Fellows) and may request additional documentation from you or third parties, such as academic institutions or employers. We may deny or revoke access to the Platform or specific features if you fail to meet eligibility requirements or violate these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Content and Conduct</h2>
          <p className="text-gray-600">
            The SPARC Platform is designed to foster professional networking, collaboration, and innovation in pharmaceutical sciences. To ensure a respectful and productive environment, you agree to the following rules regarding content and conduct:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>Post Appropriate and Relevant Content</strong>: Any content you submit, including posts, comments, project submissions, research contributions, or other materials in forums, SPARC Innovation Labs, or the SPARC Knowledge Vault, must be professional, relevant to SPARC’s mission, and compliant with applicable laws. Prohibited content includes, but is not limited to:<br />
              <ul className="list-circle pl-6 mt-1 space-y-1">
                <li>Offensive, defamatory, or discriminatory material.</li>
                <li>Content that promotes illegal activities or violates the rights of others.</li>
                <li>Spam, advertisements, or unsolicited promotional material.</li>
              </ul>
            </li>
            <li><strong>Respect Intellectual Property Rights</strong>: Do not post or share content that infringes on the intellectual property rights of others, including copyrights, trademarks, patents, or trade secrets. You represent that any content you submit is either your own or you have the necessary permissions to share it.</li>
            <li><strong>Do Not Engage in Disruptive Behavior</strong>: Refrain from actions that disrupt the Platform or interfere with other users’ experiences, such as trolling, harassment, or spamming. Respect the diversity of the SPARC community, including its members, staff, and partners.</li>
            <li><strong>Do Not Misuse Platform Resources</strong>: Do not use the Platform for unauthorized purposes, such as data scraping, hacking, or distributing malware. Do not attempt to gain unauthorized access to restricted areas of the Platform or other users’ accounts.</li>
          </ul>
          <p className="text-gray-600">
            You are solely responsible for the content you submit. SPARC reserves the right to review, moderate, or remove any content that violates these Terms or is deemed inappropriate, at our sole discretion. We may also suspend or terminate your access for violations of these conduct rules.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p className="text-gray-600">
            All content on the SPARC Platform, including but not limited to text, graphics, logos, images, videos, webinars, whitepapers, case studies, journals, and software (collectively, “SPARC Content”), is the property of SPARC, ZANE ProEd, or our content suppliers and is protected by United States and international intellectual property laws, including copyright, trademark, and patent laws.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>SPARC Content</strong>: You may access and use SPARC Content solely for personal, non-commercial purposes related to your participation in SPARC programs (e.g., reviewing resources in the SPARC Knowledge Vault, attending webinars, or participating in events). You may not reproduce, distribute, modify, create derivative works from, or publicly display SPARC Content without prior written permission from SPARC, except as permitted by law or specific licensing terms provided with the content (e.g., Creative Commons licenses for certain SPARC Knowledge Vault materials).</li>
            <li><strong>User-Generated Content</strong>: By submitting content to the Platform (e.g., posts, comments, research submissions, or SPARC Innovation Labs projects), you grant SPARC and ZANE ProEd a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, distribute, display, and modify your content for the purposes of operating and promoting the Platform and its programs (e.g., featuring your research in SPARC publications or showcasing award recipients). You retain ownership of your content but agree that SPARC may use it in accordance with these Terms.</li>
            <li><strong>Trademarks</strong>: The SPARC name, logo, and related marks (e.g., SPARC Genesis, SPARC Global Summit) are trademarks of SPARC or ZANE ProEd. You may not use these marks without prior written permission, except as part of authorized participation in SPARC programs (e.g., identifying yourself as a SPARC Fellow).</li>
          </ul>
          <p className="text-gray-600">
            If you believe any content on the Platform infringes your intellectual property rights, please contact us at <a href="mailto:legal@sparc.org" className="text-blue-600 hover:underline">legal@sparc.org</a> with details of the alleged infringement, including a description of the content and evidence of your rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
          <p className="text-gray-600">
            SPARC reserves the right to suspend or terminate your access to the Platform, or any part thereof, immediately and without prior notice or liability, for any reason, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li>Violation of these Terms, including failure to comply with membership requirements, content guidelines, or conduct rules.</li>
            <li>Non-payment of applicable membership or event fees.</li>
            <li>Suspected fraud, unauthorized access, or other misuse of the Platform.</li>
            <li>Conduct that harms SPARC, ZANE ProEd, our members, or partners, or that undermines the Platform’s purpose or integrity.</li>
          </ul>
          <p className="text-gray-600">
            Upon termination, your right to access the Platform and its resources (e.g., SPARC Knowledge Vault, event participation, or membership benefits) will cease immediately. You may also request termination of your account by contacting <a href="mailto:legal@sparc.org" className="text-blue-600 hover:underline">legal@sparc.org</a>. Termination does not relieve you of any obligations related to content you submitted or fees owed prior to termination. SPARC is not liable for any losses or damages resulting from termination of your access.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-600">
            To the fullest extent permitted by law, SPARC, ZANE ProEd, and our affiliates, officers, directors, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or opportunities, arising from or related to your use of the Platform. This includes damages resulting from:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li>Errors, interruptions, or unavailability of the Platform.</li>
            <li>Unauthorized access to or loss of your data.</li>
            <li>Actions or content of other users or third parties.</li>
            <li>Termination of your access to the Platform.</li>
          </ul>
          <p className="text-gray-600">
            SPARC provides the Platform on an “as is” and “as available” basis, without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that the Platform will be error-free, secure, or continuously available, or that it will meet your expectations.<br /><br />
            Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability. In such cases, our liability will be limited to the fullest extent permitted by applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Indemnification</h2>
          <p className="text-gray-600">
            You agree to indemnify, defend, and hold harmless SPARC, ZANE ProEd, and our affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses (including reasonable attorneys’ fees) arising from or related to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li>Your use of or access to the Platform.</li>
            <li>Your violation of these Terms or applicable laws.</li>
            <li>Your content, including infringement of intellectual property rights or harm caused to others.</li>
            <li>Your participation in SPARC programs, events, or collaborative projects.</li>
          </ul>
          <p className="text-gray-600">
            SPARC reserves the right to assume control of the defense of any claim for which we are entitled to indemnification, and you agree to cooperate with our defense efforts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Governing Law and Dispute Resolution</h2>
          <p className="text-gray-600">
            These Terms are governed by and construed in accordance with the laws of the Commonwealth of Massachusetts, United States, without regard to its conflict of law principles. Any disputes arising from or related to these Terms or your use of the Platform will be resolved through the following process:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>Informal Resolution</strong>: You agree to first attempt to resolve any dispute informally by contacting us at <a href="mailto:legal@sparc.org" className="text-blue-600 hover:underline">legal@sparc.org</a>. We will work in good faith to address your concerns within 30 days.</li>
            <li><strong>Binding Arbitration</strong>: If informal resolution is unsuccessful, any dispute will be resolved through binding arbitration in Boston, Massachusetts, under the rules of the American Arbitration Association (AAA). The arbitration will be conducted by a single arbitrator, and the decision will be final and binding. Each party will bear its own costs, except as otherwise required by law.</li>
            <li><strong>Exceptions</strong>: Disputes involving intellectual property rights, unauthorized access to the Platform, or claims for injunctive relief may be brought in a court of competent jurisdiction in Boston, Massachusetts.</li>
          </ul>
          <p className="text-gray-600">
            You waive any right to participate in a class action lawsuit or class-wide arbitration against SPARC or ZANE ProEd.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Third-Party Services and Links</h2>
          <p className="text-gray-600">
            The SPARC Platform may integrate third-party services (e.g., payment processors, event platforms, or analytics providers) or contain links to third-party websites, such as those of academic institutions, corporate partners, or social media platforms (e.g., X.com). SPARC is not responsible for the availability, content, or practices of these third-party services or websites. Your use of third-party services or websites is subject to their respective terms and privacy policies, and we encourage you to review them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. SPARC-Specific Policies</h2>
          <h3 className="text-xl font-medium mt-4 mb-2">10.1 Membership Tiers</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>SPARC Genesis</strong>: Available to undergraduates, postgraduates, and early-career professionals (0–1 years of experience). Access to student-centric activities, career bootcamps, and networking cohorts requires compliance with eligibility verification and these Terms.</li>
            <li><strong>SPARC Professional</strong>: Subscription-based membership for mid-to-senior professionals. Access to premium masterclasses, symposia, and collaborative research opportunities is contingent on timely payment of fees and adherence to usage guidelines.</li>
            <li><strong>SPARC Fellows</strong>: Invitation-only membership for C-suite executives, renowned researchers, and influential academics. Fellows must participate in advisory boards or thought leadership activities in good faith and in accordance with SPARC’s mission.</li>
          </ul>

          <h3 className="text-xl font-medium mt-4 mb-2">10.2 Event Participation</h3>
          <p className="text-gray-600">
            Participation in SPARC events (e.g., SPARC Global Summit, SPARC Insight Series, or regional hub activities) is subject to event-specific rules, such as codes of conduct or registration requirements. Failure to comply may result in removal from the event and/or suspension from the Platform.
          </p>

          <h3 className="text-xl font-medium mt-4 mb-2">10.3 SPARC Innovation Labs</h3>
          <p className="text-gray-600">
            Submissions to SPARC Innovation Labs (e.g., prototypes, research projects) must comply with intellectual property and content guidelines. You grant SPARC a license to use your submissions for program-related purposes, such as publication in the SPARC Knowledge Vault or promotion of collaborative outcomes, with your consent.
          </p>

          <h3 className="text-xl font-medium mt-4 mb-2">10.4 SPARC Awards</h3>
          <p className="text-gray-600">
            Nomination or receipt of SPARC Honors Program awards (e.g., Innovation Pioneer, Research Trailblazer) requires agreement to allow SPARC to publicize your name, institution, and achievements, with your consent. False or misleading nomination information may result in disqualification and suspension.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Modifications to the Platform</h2>
          <p className="text-gray-600">
            SPARC reserves the right to modify, suspend, or discontinue any part of the Platform, including features, programs, or content, at any time without prior notice or liability. We may also impose limits on certain features or restrict access to parts of the Platform to ensure operational stability or compliance with our mission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Force Majeure</h2>
          <p className="text-gray-600">
            SPARC will not be liable for any failure or delay in performing our obligations under these Terms due to circumstances beyond our reasonable control, including but not limited to natural disasters, pandemics, government actions, cyberattacks, or technical failures.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
          <p className="text-gray-600">
            If you have questions, concerns, or requests related to these Terms or the SPARC Platform, please contact us at:<br />
            <strong>Email</strong>: <a href="mailto:legal@sparc.org" className="text-blue-600 hover:underline">legal@sparc.org</a><br />
            <strong>Mailing Address</strong>:<br />
            SPARC<br />
            123 Pharma Innovation Way<br />
            Boston, MA 02108, USA
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">14. Miscellaneous</h2>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
            <li><strong>Entire Agreement</strong>: These Terms, along with our Privacy Policy and any additional guidelines or agreements, constitute the entire agreement between you and SPARC regarding your use of the Platform.</li>
            <li><strong>Severability</strong>: If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.</li>
            <li><strong>Waiver</strong>: Our failure to enforce any right or provision of these Terms does not constitute a waiver of that right or provision.</li>
            <li><strong>Assignment</strong>: You may not assign your rights or obligations under these Terms without our prior written consent. SPARC may assign these Terms in connection with a merger, acquisition, or sale of assets.</li>
          </ul>
          <p className="text-gray-600">
            By engaging with SPARC, you contribute to a global community dedicated to advancing pharmaceutical sciences and healthcare innovation. Thank you for being part of the SPARC movement.
          </p>
        </section>
      </Card>
    </div>
  );
};

export default TermsOfServicePage;