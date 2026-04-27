import { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { Button, Card, Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Revival Care Solutions. Call, email, or visit us in Polmont, Falkirk.',
};

const officeInfo = {
  address: 'Office 3 Marchmont Avenue\nPolmont, Falkirk, FK2 0NZ',
  phone: '01324868987',
  email: 'info@revivalcare.co.uk',
  hours: [
    { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: 'On Call' },
    { day: 'Sunday', hours: 'On Call' },
  ],
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Contact Us</Badge>
            <h1 className="mb-6">We&apos;re Here to Help</h1>
            <p className="text-xl text-neutral-600 mb-8">
              Have questions about our care services? Ready to get started?
              Reach out to our friendly team &mdash; we respond within 1 hour during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Phone */}
            <a href="tel:+441324868987">
              <Card hover className="text-center h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-100 mb-4">
                  <Phone className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p className="text-sm text-neutral-600 mb-2">Speak with a care coordinator</p>
                <p className="font-medium text-primary-600 mb-4">01324868987</p>
                <Button variant="outline" size="sm" fullWidth>
                  Call Now
                </Button>
              </Card>
            </a>

            {/* Email */}
            <a href="mailto:info@revivalcare.co.uk">
              <Card hover className="text-center h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-100 mb-4">
                  <Mail className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-sm text-neutral-600 mb-2">Send us a message anytime</p>
                <p className="font-medium text-primary-600 mb-4">info@revivalcare.co.uk</p>
                <Button variant="outline" size="sm" fullWidth>
                  Email Us
                </Button>
              </Card>
            </a>

            {/* Consultation */}
            <Link href="/consultation">
              <Card hover className="text-center h-full border-2 border-primary-200 bg-primary-50/40">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-600 mb-4">
                  <ArrowRight className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Free Assessment</h3>
                <p className="text-sm text-neutral-600 mb-2">Book a care assessment</p>
                <p className="font-medium text-primary-600 mb-4">No obligation</p>
                <Button variant="primary" size="sm" fullWidth>
                  Book Now
                </Button>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Office Info + Map */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Office Details */}
            <div className="space-y-6">
              <Card className="bg-white">
                <h3 className="font-semibold text-lg mb-6">Office Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-neutral-600 text-sm whitespace-pre-line">
                        {officeInfo.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href={`tel:${officeInfo.phone}`} className="text-primary-600 hover:underline text-sm">
                        {officeInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href={`mailto:${officeInfo.email}`} className="text-primary-600 hover:underline text-sm">
                        {officeInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <h3 className="font-semibold text-lg">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeInfo.hours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between text-sm">
                      <span className="text-neutral-600">{schedule.day}</span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Map */}
            <div>
              <Card className="overflow-hidden h-full">
                <div className="p-6 pb-4">
                  <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                  <p className="text-neutral-600 text-sm">
                    Find us at our Polmont office.
                  </p>
                </div>
                <iframe
                  src="https://www.google.com/maps?q=Marchmont+Avenue,+Polmont,+Falkirk+FK2+0NZ,+UK&output=embed"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Revival Care Solutions Office Location - Polmont, Falkirk"
                  className="w-full"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a free, no-obligation consultation with our care team.
              We&apos;ll call you within 1 hour to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button
                  variant="secondary"
                  size="xl"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Schedule Free Assessment
                </Button>
              </Link>
              <a href="tel:+441324868987">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-white text-white hover:bg-white/10"
                  leftIcon={<Phone className="w-5 h-5" />}
                >
                  Call 01324868987
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/90 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Available Business Hours
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Response within 1 hour
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> No commitment required
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
