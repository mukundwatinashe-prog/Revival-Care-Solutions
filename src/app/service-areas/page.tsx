import { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  ArrowRight,
  Phone,
  CheckCircle,
  Clock,
  Users,
} from 'lucide-react';
import { Button, Card, Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Service Areas',
  description: 'View the communities we serve. Revival Care Solutions provides home care services throughout the metropolitan area and surrounding counties.',
};

const serviceAreas = [
  {
    region: 'Healthcare City Metro',
    description: 'Our main service area covering the entire metropolitan region.',
    cities: [
      'Downtown Healthcare City',
      'Northgate',
      'Southside',
      'Eastview',
      'Westlake',
      'Central District',
      'University Area',
      'Medical District',
    ],
  },
  {
    region: 'Northern County',
    description: 'Serving communities throughout Northern County.',
    cities: [
      'Northbrook',
      'Highland Park',
      'Lake Forest',
      'Riverdale',
      'Summit Grove',
      'Oak Hills',
    ],
  },
  {
    region: 'Southern County',
    description: 'Comprehensive coverage across Southern County.',
    cities: [
      'Southfield',
      'Greenview',
      'Parkside',
      'Meadowbrook',
      'Fairview Heights',
      'Sunset Valley',
    ],
  },
  {
    region: 'Eastern Region',
    description: 'Extending our care to Eastern communities.',
    cities: [
      'East Harbor',
      'Seaside',
      'Bay View',
      'Coastal Heights',
      'Marina District',
    ],
  },
  {
    region: 'Western Region',
    description: 'Serving families in the Western corridor.',
    cities: [
      'Westwood',
      'Mountain View',
      'Valley Center',
      'Hillcrest',
      'Desert Springs',
    ],
  },
];

const stats = [
  { value: '5', label: 'Counties Served' },
  { value: '50+', label: 'Communities' },
  { value: '200+', label: 'Active Caregivers' },
  { value: '24/7', label: 'Service Availability' },
];

export default function ServiceAreasPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Service Areas</Badge>
            <h1 className="mb-6">Serving Communities Across the Region</h1>
            <p className="text-xl text-neutral-600 mb-8">
              Revival Care Solutions proudly provides compassionate home care services 
              throughout the greater metropolitan area and surrounding counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Check Your Area
              </Button>
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
                <div className="text-primary-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-neutral-100 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Service Area Map</h3>
              <p className="text-neutral-600 max-w-md">
                Our service area covers the entire metropolitan region. 
                Enter your zip code above to confirm service availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Areas We Serve</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Find your community below. Don&apos;t see your area listed? 
              Contact us – we may still be able to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
              <Card key={area.region} hover>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-lg">{area.region}</h3>
                </div>
                <p className="text-neutral-600 text-sm mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.cities.map((city) => (
                    <Badge key={city} variant="neutral" size="sm">
                      {city}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
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
                We&apos;re constantly expanding our service area to help more families. 
                Even if your community isn&apos;t listed, we may still be able to 
                provide care services.
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
                  <span className="text-neutral-700">Referrals to trusted partner agencies</span>
                </li>
              </ul>
              <Button size="lg" leftIcon={<Phone className="w-5 h-5" />}>
                Call to Check Availability
              </Button>
            </div>
            <div className="relative">
              <Card className="bg-primary-50 border-primary-100">
                <h3 className="font-semibold text-xl mb-6">Quick Area Check</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Enter Your Zip Code
                    </label>
                    <input
                      type="text"
                      placeholder="12345"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <Button fullWidth rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Check Availability
                  </Button>
                </form>
                <p className="text-sm text-neutral-600 mt-4 text-center">
                  Or call <a href="tel:07544 152585" className="text-primary-600 font-medium">07544 152585</a>
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
              Our local presence means better care for your loved ones.
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
            <p className="text-xl text-primary-100 mb-8">
              Contact us today to confirm service availability in your area 
              and schedule a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Schedule Consultation
              </Button>
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

