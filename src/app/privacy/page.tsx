import { Metadata } from 'next';
import { Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Revival Care Solutions privacy policy - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Badge variant="primary" className="mb-4">Legal</Badge>
            <h1 className="mb-6">Privacy Policy</h1>
            <p className="text-neutral-600">Last updated: January 6, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>Introduction</h2>
            <p>
              Revival Care Solutions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed 
              to protecting your personal information. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul>
              <li>Name, email address, and phone number</li>
              <li>Mailing address</li>
              <li>Health information related to care needs</li>
              <li>Insurance and payment information</li>
              <li>Emergency contact information</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Cookies and similar technologies</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Provide and coordinate care services</li>
              <li>Respond to inquiries and schedule consultations</li>
              <li>Process payments and billing</li>
              <li>Send service updates and communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share information with:
            </p>
            <ul>
              <li>Caregivers assigned to provide your care</li>
              <li>Healthcare providers involved in your care</li>
              <li>Insurance companies for billing purposes</li>
              <li>Service providers who assist our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2>HIPAA Compliance</h2>
            <p>
              To the extent we handle Protected Health Information (PHI), we comply with the 
              Health Insurance Portability and Accountability Act (HIPAA). We maintain appropriate 
              safeguards to protect PHI and limit its use and disclosure as required by law.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your 
              personal information, including encryption, secure servers, and access controls. 
              However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of certain uses of your information</li>
              <li>Receive a copy of your information</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze usage, 
              and assist in our marketing efforts. You can control cookies through your browser settings.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under 18. We do not knowingly collect 
              personal information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of significant 
              changes by posting the new policy on our website with an updated effective date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our practices, please contact us:
            </p>
            <ul>
              <li>Email: privacy@revivalcare.com</li>
              <li>Phone: 1-800-555-CARE</li>
              <li>Address: Office 3 Marchmont Avenue, Polmont, Falkirk, FK2 0NZ</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

