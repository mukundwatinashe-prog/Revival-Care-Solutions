import { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  ArrowRight,
  Phone,
  CheckCircle,
  Clock,
  Users,
  Sparkles,
} from 'lucide-react';
import { Button, Card, Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Service Areas',
  description: 'Revival Care Solutions provides home care services in Falkirk, Denny, Larbert, Grangemouth, Linlithgow and surrounding areas in Central Scotland.',
};

const currentAreas = [
  'Falkirk',
  'Denny',
  'Larbert',
  'Grangemouth',
  'Linlithgow',
];

const stats = [
  { value: '5', label: 'Areas Served' },
  { value: '24/7', label: 'Service Availability' },
  { value: 'Local', label: 'Family-Owned' },
  { value: 'Care', label: 'Inspectorate Registered' },
];

export default function ServiceAreasPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Service Areas</Badge>
            <h1 className="mb-6">Serving Central Scotland</h1>
            <p className="text-xl text-neutral-600 mb-8">
              Revival Care Solutions proudly provides compassionate home care services 
              across Falkirk and the surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Schedule Free Consultation
                </Button>
              </Link>
              <Button variant="outline" size="lg" leftIcon={<Phone className="w-5 h-5" />}>
                07544 152585
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Service Areas */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Areas We Currently Serve</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We provide quality home care services in the following areas. 
              Contact us to check availability for your specific location.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {currentAreas.map((area) => (
              <Card key={area} hover className="text-center">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-xl">{area}</h3>
                </div>
              </Card>
            ))}
          </div>

          {/* Coming Soon Banner */}
          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="bg-gradient-to-r from-secondary-50 to-accent-50 border-secondary-200 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-secondary-600" />
                <h3 className="font-semibold text-lg text-neutral-900">More Areas Coming Soon!</h3>
              </div>
              <p className="text-neutral-600">
                We&apos;re expanding our service coverage across Central Scotland. 
                If you&apos;re in a nearby area not listed above, please get in touch – 
                we may still be able to help or add your area to our expansion plans.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142073.95385252043!2d-3.8732!3d55.9833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887d0f1d1f1c4f1%3A0x5f0c1f1f1f1f1f1f!2sFalkirk%2C%20UK!5e0!3m2!1sen!2suk!4v1704672000000!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Revival Care Solutions Service Area - Central Scotland"
              className="w-full"
            />
          </div>
          <p className="text-center text-neutral-600 mt-4">
            Serving Falkirk, Denny, Larbert, Grangemouth, Linlithgow and surrounding areas
          </p>
        </div>
      </section>

      {/* Not Listed Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Expanding Coverage</Badge>
              <h2 className="mb-6">Don&apos;t See Your Area?</h2>
              <p className="text-lg text-neutral-600 mb-6">
                We&apos;re actively expanding our service area to help more families across 
                Central Scotland. Even if your community isn&apos;t listed, we may still be 
                able to provide care services.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span className="text-neutral-700">Call to check availability in your area</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span className="text-neutral-700">Special arrangements for nearby areas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span className="text-neutral-700">Register interest to help us plan expansion</span>
                </li>
              </ul>
              <Button size="lg" leftIcon={<Phone className="w-5 h-5" />}>
                Call to Check Availability
              </Button>
            </div>
            <div className="relative">
              <Card className="bg-primary-50 border-primary-100">
                <h3 className="font-semibold text-xl mb-6">Quick Enquiry</h3>
                <p className="text-neutral-600 mb-6">
                  Want to know if we can provide care in your area? Get in touch and 
                  we&apos;ll let you know right away.
                </p>
                <div className="space-y-4">
                  <Link href="/consultation">
                    <Button fullWidth rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Request Consultation
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-neutral-600 mt-4 text-center">
                  Or call <a href="tel:+447544152585" className="text-primary-600 font-medium">07544 152585</a>
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Local Care Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">Local Care</Badge>
            <h2 className="mb-4">Benefits of Local Home Care</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Our local presence in Falkirk means better care for your loved ones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card hover className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-100 mb-4">
                <Clock className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Response</h3>
              <p className="text-neutral-600">
                Local caregivers mean faster response times and reliable coverage, 
                even in emergencies.
              </p>
            </Card>
            <Card hover className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary-100 mb-4">
                <Users className="w-7 h-7 text-secondary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Community Knowledge</h3>
              <p className="text-neutral-600">
                Our caregivers know the local community, resources, and can help 
                clients stay connected.
              </p>
            </Card>
            <Card hover className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-100 mb-4">
                <MapPin className="w-7 h-7 text-accent-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Consistent Care</h3>
              <p className="text-neutral-600">
                Proximity allows for consistent scheduling with the same trusted 
                caregivers your family knows.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to confirm service availability in your area 
              and schedule a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Schedule Consultation
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                leftIcon={<Phone className="w-5 h-5" />}
                className="border-white text-white hover:bg-white/10"
              >
                07544 152585
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
