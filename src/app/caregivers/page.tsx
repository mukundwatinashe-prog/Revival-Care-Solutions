import { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  Award,
  Heart,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Phone,
  Users,
  Star,
  Clock,
  BadgeCheck,
  GraduationCap,
  Fingerprint,
  FileCheck,
} from 'lucide-react';
import { Button, Card, Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Our Caregivers',
  description: 'Meet our compassionate, highly trained caregivers. Learn about our rigorous screening, training, and matching process.',
};

const screeningSteps = [
  {
    icon: Fingerprint,
    title: 'Background Checks',
    description: 'Comprehensive criminal background checks at federal, state, and county levels.',
  },
  {
    icon: FileCheck,
    title: 'Reference Verification',
    description: 'Thorough verification of employment history and personal references.',
  },
  {
    icon: BadgeCheck,
    title: 'Credential Verification',
    description: 'Verification of all certifications, licenses, and professional credentials.',
  },
  {
    icon: Shield,
    title: 'Drug Screening',
    description: 'Pre-employment and random drug testing to ensure a safe environment.',
  },
];

const trainingAreas = [
  'Personal Care Best Practices',
  'Safe Transfer Techniques',
  'Infection Control',
  'Dementia & Alzheimer\'s Care',
  'Medication Management',
  'Emergency Response',
  'Communication Skills',
  'Cultural Sensitivity',
  'Falls Prevention',
  'Nutrition & Hydration',
  'End-of-Life Care',
  'HIPAA Compliance',
];

const caregiverProfiles = [
  {
    name: 'Maria Santos',
    role: 'Certified Nursing Assistant',
    experience: '8 years experience',
    specialties: ['Dementia Care', 'Mobility Assistance', 'Companionship'],
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=faces',
    quote: 'Every senior I care for becomes like family to me. I find joy in helping them maintain their independence and dignity.',
  },
  {
    name: 'James Washington',
    role: 'Home Health Aide',
    experience: '12 years experience',
    specialties: ['Personal Care', 'Meal Preparation', 'Light Housekeeping'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces',
    quote: 'Being a caregiver is not just a job for me – it\'s a calling. I love making a difference in people\'s lives every day.',
  },
  {
    name: 'Priya Patel',
    role: 'Certified Caregiver',
    experience: '6 years experience',
    specialties: ['Medication Reminders', 'Companionship', 'Cultural Dietary Needs'],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=faces',
    quote: 'I understand the cultural nuances that matter to many families. Respectful, culturally-sensitive care is my priority.',
  },
  {
    name: 'Robert Thompson',
    role: 'Licensed Practical Nurse',
    experience: '15 years experience',
    specialties: ['Complex Care', 'Wound Care', 'Chronic Disease Management'],
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=faces',
    quote: 'With years of nursing experience, I bring medical expertise combined with genuine compassion to every client.',
  },
  {
    name: 'Aisha Johnson',
    role: 'Certified Nursing Assistant',
    experience: '5 years experience',
    specialties: ['Hospice Care', 'Emotional Support', 'Family Communication'],
    image: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=300&h=300&fit=crop&crop=faces',
    quote: 'I specialize in end-of-life care, providing comfort and dignity during the most difficult times for families.',
  },
  {
    name: 'David Kim',
    role: 'Physical Therapy Aide',
    experience: '7 years experience',
    specialties: ['Mobility Training', 'Exercise Programs', 'Fall Prevention'],
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=faces',
    quote: 'Helping seniors stay active and mobile is incredibly rewarding. Every step forward is a victory.',
  },
];

const matchingCriteria = [
  { title: 'Skills & Experience', description: 'Matched to the specific care needs and medical conditions' },
  { title: 'Personality', description: 'Compatible temperament and communication style' },
  { title: 'Schedule', description: 'Availability that aligns with care requirements' },
  { title: 'Location', description: 'Convenient proximity for reliable, punctual care' },
  { title: 'Language', description: 'Language compatibility for clear communication' },
  { title: 'Cultural Background', description: 'Cultural sensitivity and understanding' },
];

export default function CaregiversPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="mb-4">Our Caregivers</Badge>
              <h1 className="mb-6">Exceptional People, Exceptional Care</h1>
              <p className="text-xl text-neutral-600 mb-8">
                Our caregivers are the heart of Revival Care Solutions. Each one is 
                carefully selected, thoroughly trained, and genuinely passionate about 
                making a difference in the lives of seniors.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold">100%</div>
                    <div className="text-sm text-neutral-600">Background Checked</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold">40+ Hours</div>
                    <div className="text-sm text-neutral-600">Initial Training</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Request a Caregiver
                </Button>
                <Button variant="outline" size="lg">
                  Join Our Team
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-3 gap-3">
                {caregiverProfiles.slice(0, 6).map((caregiver, index) => (
                  <div 
                    key={caregiver.name}
                    className={`rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'mt-6' : ''}`}
                  >
                    <img
                      src={caregiver.image}
                      alt={caregiver.name}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screening Process */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Vetting Process</Badge>
            <h2 className="mb-4">Rigorous Screening & Selection</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We maintain the highest standards for caregiver selection. Only 1 in 10 
              applicants makes it through our comprehensive vetting process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {screeningSteps.map((step, index) => (
              <Card key={step.title} hover className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 mb-4">
                  <step.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-neutral-600 text-sm">{step.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-600">
              All caregivers must pass every screening requirement before joining our team. 
              We also conduct ongoing monitoring and periodic re-verification.
            </p>
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="accent" className="mb-4">Training Excellence</Badge>
              <h2 className="mb-6">Comprehensive Training Program</h2>
              <p className="text-lg text-neutral-600 mb-6">
                Every Revival Care caregiver completes our proprietary 40+ hour training 
                program before their first assignment. But learning doesn&apos;t stop there – 
                we provide ongoing education to ensure our team stays current with best practices.
              </p>
              <p className="text-neutral-600 mb-8">
                Our training covers everything from hands-on care techniques to communication 
                skills and cultural sensitivity, ensuring caregivers are prepared for any situation.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary-600" />
                  <span className="font-medium">40+ Hours Initial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <span className="font-medium">12 Hours Annual</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-primary-50 border-primary-100">
                <h3 className="font-semibold text-lg mb-6">Training Topics Include:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {trainingAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span className="text-sm text-neutral-700">{area}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Caregiver Matching */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Perfect Match</Badge>
            <h2 className="mb-4">Personalized Caregiver Matching</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We don&apos;t just assign caregivers – we carefully match them based on 
              multiple factors to ensure the best possible care relationship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {matchingCriteria.map((criteria) => (
              <div 
                key={criteria.title}
                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-200"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{criteria.title}</h4>
                  <p className="text-sm text-neutral-600">{criteria.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-neutral-600 mb-6">
              If the initial match isn&apos;t perfect, we work with families to find 
              the right caregiver at no additional cost.
            </p>
            <Button variant="outline">Learn About Our Matching Process</Button>
          </div>
        </div>
      </section>

      {/* Featured Caregivers */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Meet Our Team</Badge>
            <h2 className="mb-4">Featured Caregivers</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Get to know some of the compassionate professionals who make Revival Care special.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caregiverProfiles.map((caregiver) => (
              <Card key={caregiver.name} hover>
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={caregiver.image}
                    alt={caregiver.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{caregiver.name}</h3>
                    <p className="text-primary-600 text-sm">{caregiver.role}</p>
                    <p className="text-neutral-500 text-sm">{caregiver.experience}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {caregiver.specialties.map((specialty) => (
                    <Badge key={specialty} variant="neutral" size="sm">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <blockquote className="text-neutral-600 italic text-sm">
                  &ldquo;{caregiver.quote}&rdquo;
                </blockquote>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Experience the Revival Care Difference</h2>
            <p className="text-xl text-primary-100 mb-8">
              Our caregivers are what set us apart. Experience compassionate, 
              professional care that makes a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Request Care Today
                </Button>
              </Link>
              <a href="tel:+447544152585">
                <Button 
                  variant="outline" 
                  size="lg" 
                  leftIcon={<Phone className="w-5 h-5" />}
                  className="border-white text-white hover:bg-white/10"
                >
                  07544 152585
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="accent" className="mb-4">Careers</Badge>
              <h2 className="mb-6">Join Our Team of Caregivers</h2>
              <p className="text-lg text-neutral-600 mb-6">
                Are you passionate about making a difference in the lives of seniors? 
                Revival Care is always looking for compassionate, dedicated caregivers 
                to join our team.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Competitive pay and benefits',
                  'Flexible scheduling options',
                  'Comprehensive training and support',
                  'Career advancement opportunities',
                  'Meaningful, rewarding work',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500" />
                    <span className="text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                View Open Positions
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1516307365426-bea591f05011?w=600&h=400&fit=crop"
                  alt="Revival Care team meeting"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">200+</div>
                    <div className="text-sm text-neutral-600">Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

