import { Metadata } from 'next';
import Link from 'next/link';
import {
  Heart,
  Users,
  Award,
  Target,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Star,
  Globe,
  Handshake,
} from 'lucide-react';
import { Button, Card, Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Revival Care Solutions - our mission, values, and commitment to providing compassionate home care services for seniors since 2023.',
};

const timeline = [
  { year: '2023', title: 'Founded', description: 'Revival Care Solutions was founded with a mission to provide dignified, compassionate home care in Central Scotland.' },
  { year: '2024', title: 'Care Inspectorate Registered', description: 'Achieved full registration with the Care Inspectorate, meeting Scotland\'s national care standards.' },
  { year: '2024', title: 'Growing Team', description: 'Building our team of dedicated, compassionate caregivers to serve the Falkirk area.' },
  { year: '2025', title: 'Expanding Coverage', description: 'Extending our service areas across Central Scotland to help more families.' },
];

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We treat every client with the warmth, empathy, and genuine care we would want for our own family members.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We operate with complete transparency and honesty in all our interactions with clients, families, and staff.',
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We continuously strive to exceed expectations and deliver the highest quality care possible.',
  },
  {
    icon: Users,
    title: 'Respect',
    description: 'We honor the dignity, independence, and individual preferences of every person we serve.',
  },
  {
    icon: Globe,
    title: 'Diversity',
    description: 'We celebrate cultural differences and ensure our care is inclusive and culturally sensitive.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description: 'We work collaboratively with families, healthcare providers, and communities to deliver comprehensive care.',
  },
];


const certifications = [
  'Care Inspectorate Registered',
  'SSSC Registered Carers',
  'Fully Insured',
  'PVG Checked Caregivers',
  'Professional Training Standards',
  'Local Family-Owned Business',
];

const stats = [
  { value: '24/7', label: 'Care Available' },
  { value: '100%', label: 'Dedication' },
  { value: 'Care', label: 'Inspectorate Registered' },
  { value: 'Local', label: 'Family-Owned' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="mb-4">About Us</Badge>
              <h1 className="mb-6">Caring for Families Since 2023</h1>
              <p className="text-xl text-neutral-600 mb-8">
                Revival Care Solutions was founded on a simple belief: everyone deserves 
                to age with dignity, surrounded by compassionate care in the comfort of 
                their own home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Meet Our Team
                </Button>
                <Button variant="outline" size="lg">
                  Our Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-100 rounded-2xl p-8 flex items-center justify-center">
                  <Heart className="w-20 h-20 text-primary-600" />
                </div>
                <div className="bg-secondary-100 rounded-2xl p-8 flex items-center justify-center">
                  <Shield className="w-20 h-20 text-secondary-600" />
                </div>
                <div className="bg-accent-100 rounded-2xl p-8 flex items-center justify-center">
                  <Award className="w-20 h-20 text-accent-600" />
                </div>
                <div className="bg-primary-100 rounded-2xl p-8 flex items-center justify-center">
                  <Users className="w-20 h-20 text-primary-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-1" style={{ color: 'white' }}>{stat.value}</div>
                <div className="text-white/80" style={{ color: 'rgba(255,255,255,0.8)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="bg-primary-50 border-primary-100">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-100 mb-6">
                <Target className="w-7 h-7 text-primary-600" />
              </div>
              <h2 className="text-2xl font-serif font-semibold mb-4">Our Mission</h2>
              <p className="text-lg text-neutral-700">
                To provide exceptional, personalized home care services that empower seniors 
                to live independently with dignity, while giving their families peace of mind. 
                We are committed to treating every client like family, with the compassion, 
                respect, and excellence they deserve.
              </p>
            </Card>
            <Card className="bg-secondary-50 border-secondary-100">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary-100 mb-6">
                <Star className="w-7 h-7 text-secondary-600" />
              </div>
              <h2 className="text-2xl font-serif font-semibold mb-4">Our Vision</h2>
              <p className="text-lg text-neutral-700">
                To be the most trusted name in home care, recognized for our unwavering 
                commitment to quality, our diverse and highly trained caregivers, and our 
                ability to positively transform the lives of seniors and their families 
                across our community.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Story</Badge>
            <h2 className="mb-6">From Personal Experience to Community Impact</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-center mb-12">
              <p className="text-neutral-700">
                Revival Care Solutions began in 2023 when our founder, Milton Mukundwa, 
                struggled to find quality home care for his grandmother. Frustrated by the 
                lack of compassionate, reliable options, he set out to create the care 
                company he wished had existed.
              </p>
              <p className="text-neutral-700">
                Starting with just three caregivers and a commitment to excellence, Revival 
                Care has grown into a regional leader in home care services. But our core 
                values remain unchanged: every client is treated like family, with the dignity, 
                respect, and personalized attention they deserve.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div 
                    key={item.year}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <Card>
                        <div className="text-primary-600 font-bold text-lg mb-1">{item.year}</div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-neutral-600">{item.description}</p>
                      </Card>
                    </div>
                    <div className="relative z-10 w-4 h-4 rounded-full bg-primary-500 border-4 border-white shadow" />
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Our Values</Badge>
            <h2 className="mb-4">What Guides Us Every Day</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Our core values aren&apos;t just words on a wall – they&apos;re the principles 
              that guide every interaction, every decision, and every care plan we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} hover>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-100 mb-4">
                  <value.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Certifications */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="accent" className="mb-4">Accreditations</Badge>
              <h2 className="mb-6">Certified Excellence</h2>
              <p className="text-lg text-neutral-600 mb-8">
                Our certifications and accreditations reflect our commitment to meeting 
                and exceeding industry standards. Families can trust that Revival Care 
                Solutions meets the highest quality and safety benchmarks.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-neutral-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-100 rounded-2xl p-8 flex items-center justify-center">
                  <Award className="w-20 h-20 text-primary-600" />
                </div>
                <div className="bg-secondary-100 rounded-2xl p-8 flex items-center justify-center">
                  <Shield className="w-20 h-20 text-secondary-600" />
                </div>
                <div className="bg-accent-100 rounded-2xl p-8 flex items-center justify-center">
                  <Star className="w-20 h-20 text-accent-600" />
                </div>
                <div className="bg-primary-100 rounded-2xl p-8 flex items-center justify-center">
                  <Users className="w-20 h-20 text-primary-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation & Service Areas - Combined Section */}
      <section className="py-20 bg-gradient-to-r from-primary-50 via-primary-100/50 to-primary-50 border-y-2 border-primary-200">
        <div className="container-custom">
          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {/* Care Inspectorate Logo */}
            <a 
              href="https://www.careinspectorate.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative w-full h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center border-2 border-primary-200 ring-4 ring-primary-100 p-6 overflow-hidden hover:shadow-2xl transition-all cursor-pointer">
                <img
                  src="/logos/care-inspectorate-logo.png"
                  alt="Care Inspectorate Registered"
                  className="max-w-full max-h-full object-contain"
                  style={{ width: 'auto', height: 'auto', maxWidth: '140px', maxHeight: '70px' }}
                />
              </div>
            </a>

            {/* Falkirk Council Logo */}
            <a 
              href="https://www.falkirk.gov.uk/social-care/care-and-support-at-home" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative w-full h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center border-2 border-primary-200 ring-4 ring-primary-100 p-6 overflow-hidden hover:shadow-2xl transition-all cursor-pointer">
                <img
                  src="/logos/falkirk-council-logo.svg"
                  alt="Falkirk Council"
                  className="max-w-full max-h-full object-contain"
                  style={{ width: 'auto', height: 'auto', maxWidth: '140px', maxHeight: '70px' }}
                />
              </div>
            </a>

            {/* SSSC Logo */}
            <a 
              href="https://www.sssc.uk.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative w-full h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center border-2 border-primary-200 ring-4 ring-primary-100 p-6 overflow-hidden hover:shadow-2xl transition-all cursor-pointer">
                <img
                  src="/logos/sssc-logo.png"
                  alt="SSSC Registered"
                  className="max-w-full max-h-full object-contain"
                  style={{ width: 'auto', height: 'auto', maxWidth: '140px', maxHeight: '70px' }}
                />
              </div>
            </a>

            {/* PVG Logo */}
            <a 
              href="https://www.mygov.scot/organisations/disclosure-scotland" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative w-full h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center border-2 border-primary-200 ring-4 ring-primary-100 p-6 overflow-hidden hover:shadow-2xl transition-all cursor-pointer">
                <img
                  src="/logos/pvg-logo.png"
                  alt="PVG Checked - Disclosure Scotland"
                  className="max-w-full max-h-full object-contain"
                  style={{ width: 'auto', height: 'auto', maxWidth: '140px', maxHeight: '70px' }}
                />
              </div>
            </a>
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Registration Info */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                Registered with the Care Inspectorate
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Revival Care Solutions is proudly registered with the Care Inspectorate, 
                ensuring we meet Scotland&apos;s national care standards for quality and safety.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Our carers are <strong>SSSC registered</strong>, demonstrating their commitment to 
                professional standards and continuous development in social care.
              </p>
            </div>

            {/* Right Column - Service Areas & PVG Info */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-4">
                Serving Falkirk & Surrounding Areas
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                We proudly provide care services in Falkirk, Denny, Larbert, Grangemouth, Linlithgow and more areas coming soon.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                All our carers are <strong>Protecting Vulnerable Groups (PVG) checked</strong> with 
                Disclosure Scotland, ensuring the highest levels of safety and protection for our clients.
              </p>
              <Link href="/service-areas">
                <Button variant="outline" size="md" className="shadow-lg hover:shadow-xl transition-all border-2" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  View Service Areas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="!text-white mb-6" style={{ color: 'white' }}>Join the Revival Care Family</h2>
            <p className="text-xl !text-white/90 mb-8" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Whether you&apos;re seeking care for a loved one or looking to join our 
              team of compassionate caregivers, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Request Care
                </Button>
              </Link>
              <Link href="/careers">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10"
                >
                  Join Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

