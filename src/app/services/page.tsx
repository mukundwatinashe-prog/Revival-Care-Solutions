import { Metadata } from 'next';
import Link from 'next/link';
import {
  HandHeart,
  MessageCircle,
  Pill,
  Footprints,
  UtensilsCrossed,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Phone,
  Clock,
  Shield,
  Heart,
} from 'lucide-react';
import { Button, Card, Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive home care services including personal care, companionship, medication management, mobility assistance, meal preparation, and housekeeping.',
};

const services = [
  {
    slug: 'personal-care',
    icon: HandHeart,
    title: 'Personal Care Assistance',
    shortDescription: 'Dignified assistance with bathing, grooming, dressing, and personal hygiene needs.',
    fullDescription: 'Our personal care services help seniors maintain their dignity while receiving assistance with essential daily activities. Our trained caregivers provide compassionate support with bathing, grooming, dressing, toileting, and personal hygiene.',
    features: [
      'Bathing and showering assistance',
      'Grooming and hair care',
      'Dressing and wardrobe selection',
      'Toileting and incontinence care',
      'Skin care and hygiene',
      'Oral hygiene support',
    ],
    color: 'primary',
  },
  {
    slug: 'companionship',
    icon: MessageCircle,
    title: 'Companionship Services',
    shortDescription: 'Meaningful social interaction, conversation, and emotional support for your loved ones.',
    fullDescription: 'Loneliness can significantly impact senior health. Our companionship services provide meaningful social interaction, mental stimulation, and emotional support to enhance quality of life.',
    features: [
      'Engaging conversation and active listening',
      'Games, puzzles, and brain exercises',
      'Reading and storytelling',
      'Accompaniment on walks and outings',
      'Attending social events and appointments',
      'Video calls with family and friends',
    ],
    color: 'secondary',
  },
  {
    slug: 'medication-management',
    icon: Pill,
    title: 'Medication Management',
    shortDescription: 'Careful medication reminders and assistance to ensure proper adherence.',
    fullDescription: 'Managing multiple medications can be challenging. Our caregivers provide reliable medication reminders and assist with organizing prescriptions, helping ensure your loved one stays on track with their health regimen.',
    features: [
      'Medication reminders and prompts',
      'Pill organizer management',
      'Prescription refill coordination',
      'Monitoring for side effects',
      'Communication with healthcare providers',
      'Maintaining medication logs',
    ],
    color: 'accent',
  },
  {
    slug: 'mobility-assistance',
    icon: Footprints,
    title: 'Mobility Assistance',
    shortDescription: 'Safe support with walking, transfers, and maintaining physical independence.',
    fullDescription: 'Our mobility assistance services help seniors maintain independence while ensuring safety. We provide support with walking, transferring, and positioning to reduce fall risks and promote physical activity.',
    features: [
      'Walking assistance and supervision',
      'Safe transfer techniques',
      'Wheelchair and walker assistance',
      'Fall prevention strategies',
      'Range of motion exercises',
      'Positioning and repositioning support',
    ],
    color: 'primary',
  },
  {
    slug: 'meal-preparation',
    icon: UtensilsCrossed,
    title: 'Meal Preparation',
    shortDescription: 'Nutritious meal planning and preparation tailored to dietary needs and preferences.',
    fullDescription: 'Good nutrition is essential for senior health. Our caregivers prepare delicious, nutritious meals tailored to dietary requirements, cultural preferences, and personal tastes.',
    features: [
      'Meal planning and grocery shopping',
      'Preparation of nutritious meals',
      'Special diet accommodation',
      'Feeding assistance if needed',
      'Kitchen cleanup and organization',
      'Monitoring hydration and nutrition',
    ],
    color: 'secondary',
  },
  {
    slug: 'light-housekeeping',
    icon: Sparkles,
    title: 'Light Housekeeping',
    shortDescription: 'Maintaining a clean, safe, and comfortable living environment.',
    fullDescription: 'A clean home is a safe home. Our light housekeeping services ensure seniors live in a comfortable, hygienic environment while reducing hazards that could lead to accidents.',
    features: [
      'Dusting and vacuuming',
      'Laundry and linen changes',
      'Dishwashing and kitchen cleaning',
      'Bathroom sanitization',
      'Trash removal and organizing',
      'General tidying and decluttering',
    ],
    color: 'accent',
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Personalized Care Plans',
    description: 'Every care plan is customized to meet the unique needs, preferences, and goals of each client.',
  },
  {
    icon: Shield,
    title: 'Trained & Vetted Caregivers',
    description: 'All caregivers undergo extensive background checks and receive ongoing professional training.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'From hourly visits to 24/7 live-in care, we adapt our services to fit your schedule.',
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Our Services</Badge>
            <h1 className="mb-6">Comprehensive Home Care Services</h1>
            <p className="text-xl text-neutral-600 mb-8">
              We offer a full spectrum of personalized care services designed to help 
              seniors maintain independence, dignity, and quality of life in the comfort 
              of their own homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Schedule Free Assessment
              </Button>
              <Button variant="outline" size="lg" leftIcon={<Phone className="w-5 h-5" />}>
                07544 152585
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.slug} hover className="h-full flex flex-col">
                <div className={`
                  inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4
                  ${service.color === 'primary' ? 'bg-primary-100' : ''}
                  ${service.color === 'secondary' ? 'bg-secondary-100' : ''}
                  ${service.color === 'accent' ? 'bg-accent-100' : ''}
                `}>
                  <service.icon className={`
                    w-7 h-7
                    ${service.color === 'primary' ? 'text-primary-600' : ''}
                    ${service.color === 'secondary' ? 'text-secondary-600' : ''}
                    ${service.color === 'accent' ? 'text-accent-600' : ''}
                  `} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-4 flex-grow">{service.shortDescription}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all mt-auto"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose Revival Care?</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We&apos;re committed to providing the highest quality care with compassion and professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Not Sure Which Services You Need?</h2>
            <p className="text-xl text-white/90 mb-8">
              Our care coordinators will work with you to assess your loved one&apos;s needs 
              and create a personalized care plan. Schedule a free, no-obligation consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Schedule Free Consultation
                </Button>
              </Link>
              <a href="tel:+447544152585">
                <Button 
                  variant="outline" 
                  size="lg" 
                  leftIcon={<Phone className="w-5 h-5" />}
                  className="border-white text-white hover:bg-white/10"
                >
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

