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
  description: 'Learn about Revival Care Solutions - our mission, values, and commitment to providing compassionate home care services for seniors since 2010.',
};

const timeline = [
  { year: '2010', title: 'Founded', description: 'Revival Care Solutions was founded with a mission to provide dignified, compassionate home care.' },
  { year: '2013', title: 'Community Growth', description: 'Expanded services to cover the entire metropolitan area, serving 500+ families.' },
  { year: '2016', title: 'Training Excellence', description: 'Launched our proprietary caregiver training program, setting new industry standards.' },
  { year: '2019', title: 'Regional Recognition', description: 'Named "Best Home Care Provider" by Regional Healthcare Excellence Awards.' },
  { year: '2022', title: '2000+ Families', description: 'Reached the milestone of serving over 2,000 families in our community.' },
  { year: '2024', title: 'Expanding Care', description: 'Introduced specialized dementia care and expanded to neighboring counties.' },
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

const leadership = [
  {
    name: 'Milton Mukundwa',
    title: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces',
    bio: 'With over 20 years in healthcare, Milton founded Revival Care Solutions after personally experiencing the challenges of finding quality care for his grandmother.',
  },
  {
    name: 'Dr. Sarah Chen',
    title: 'Chief Medical Advisor',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=faces',
    bio: 'Board-certified geriatrician who ensures our care protocols meet the highest medical standards and best practices.',
  },
  {
    name: 'Marcus Williams',
    title: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces',
    bio: 'Former hospital administrator bringing 15 years of healthcare operations experience to ensure seamless service delivery.',
  },
  {
    name: 'Elena Rodriguez',
    title: 'Director of Caregiver Services',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces',
    bio: 'Registered nurse and certified caregiver trainer who oversees recruitment, training, and caregiver support programs.',
  },
];

const certifications = [
  'State Licensed Home Care Agency',
  'Medicare Certified',
  'Better Business Bureau A+ Rating',
  'National Home Care Association Member',
  'Joint Commission Accredited',
  'Dementia Care Certified',
];

const stats = [
  { value: '15+', label: 'Years of Service' },
  { value: '2,500+', label: 'Families Served' },
  { value: '200+', label: 'Trained Caregivers' },
  { value: '98%', label: 'Client Satisfaction' },
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
              <h1 className="mb-6">Caring for Families Since 2010</h1>
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
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=300&fit=crop"
                      alt="Caregiver with elderly client"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&h=300&fit=crop"
                      alt="Diverse care team"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=300&fit=crop"
                      alt="Healthcare professional"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop"
                      alt="Senior receiving care"
                      className="w-full h-48 object-cover"
                    />
                  </div>
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
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-primary-200">{stat.label}</div>
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
                Revival Care Solutions began in 2010 when our founder, Milton Mukundwa, 
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

      {/* Leadership Team */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Leadership</Badge>
            <h2 className="mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Our experienced leadership team brings together decades of healthcare, 
              business, and caregiving expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader) => (
              <Card key={leader.name} hover className="text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold mb-1">{leader.name}</h3>
                <p className="text-primary-600 font-medium text-sm mb-4">{leader.title}</p>
                <p className="text-neutral-600 text-sm">{leader.bio}</p>
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

      {/* CTA Section */}
      <section className="py-24 bg-primary-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Join the Revival Care Family</h2>
            <p className="text-xl text-primary-100 mb-8">
              Whether you&apos;re seeking care for a loved one or looking to join our 
              team of compassionate caregivers, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Request Care
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10"
              >
                Join Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

