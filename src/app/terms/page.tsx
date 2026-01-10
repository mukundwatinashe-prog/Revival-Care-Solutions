import { Metadata } from 'next';
import { Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Revival Care Solutions terms of service - Terms and conditions for using our website and services.',
};

export default function TermsPage() {
  return (
    <div>
      <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Badge variant="primary" className="mb-4">Legal</Badge>
            <h1 className="mb-6">Terms of Service</h1>
            <p className="text-neutral-600">Last updated: January 6, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the Revival Care Solutions website and services, you agree 
              to be bound by these Terms of Service. If you do not agree to these terms, 
              please do not use our services.
            </p>

            <h2>Description of Services</h2>
            <p>
              Revival Care Solutions provides non-medical home care services including personal 
              care, companionship, medication reminders, mobility assistance, meal preparation, 
              and light housekeeping. Services are provided by trained caregivers in the client&apos;s home.
            </p>

            <h2>Eligibility</h2>
            <p>
              Our services are available to adults who need assistance with daily living activities. 
              To use our website or request services, you must be at least 18 years old and have 
              the legal authority to enter into agreements.
            </p>

            <h2>Service Agreements</h2>
            <p>
              All care services are subject to a separate Service Agreement that outlines specific 
              terms, care plans, scheduling, and fees. This website Terms of Service governs your 
              use of our website and initial inquiries.
            </p>

            <h2>User Responsibilities</h2>
            <p>When using our website and services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us promptly of any changes to your information</li>
              <li>Use our services only for lawful purposes</li>
              <li>Treat our caregivers and staff with respect</li>
            </ul>

            <h2>Scheduling and Cancellations</h2>
            <p>
              We strive to accommodate your scheduling needs. We request 24-48 hours notice for 
              cancellations or schedule changes when possible. Specific cancellation policies 
              will be outlined in your Service Agreement.
            </p>

            <h2>Fees and Payment</h2>
            <p>
              Service fees are based on the type of care, hours of service, and other factors 
              discussed during your consultation. Payment terms, billing cycles, and accepted 
              payment methods are specified in your Service Agreement.
            </p>

            <h2>Limitation of Services</h2>
            <p>Our caregivers provide non-medical assistance. They cannot:</p>
            <ul>
              <li>Administer medications (only provide reminders)</li>
              <li>Provide medical diagnosis or treatment</li>
              <li>Perform skilled nursing procedures</li>
              <li>Make medical decisions on your behalf</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the 
              property of Revival Care Solutions and is protected by copyright and trademark laws. 
              You may not reproduce, distribute, or create derivative works without our permission.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided &quot;as is&quot; without warranties of any kind. 
              While we strive to provide excellent care, we do not guarantee specific outcomes 
              or that our services will meet all of your expectations.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Revival Care Solutions shall not be liable 
              for any indirect, incidental, special, consequential, or punitive damages arising 
              from your use of our website or services.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Revival Care Solutions, its officers, 
              employees, and agents from any claims, damages, or expenses arising from your 
              violation of these terms or misuse of our services.
            </p>

            <h2>Termination</h2>
            <p>
              Either party may terminate services with appropriate notice as specified in the 
              Service Agreement. We reserve the right to refuse or discontinue services if 
              terms are violated or if continuing care is not feasible.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of the state where Revival Care 
              Solutions is headquartered, without regard to conflict of law principles.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may modify these Terms of Service at any time. Continued use of our website 
              after changes are posted constitutes acceptance of the modified terms.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li>Email: legal@revivalcare.com</li>
              <li>Phone: 1-800-555-CARE</li>
              <li>Address: Office 3 Marchmont Avenue, Polmont, Falkirk, FK2 0NZ</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

