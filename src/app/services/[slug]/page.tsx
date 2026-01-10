import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
  ArrowLeft,
  Clock,
  Users,
  Heart,
  LucideIcon,
} from 'lucide-react';
import { Button, Card, Badge } from '@/components/ui';

interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  heroDescription: string;
  fullDescription: string[];
  features: string[];
  benefits: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  color: 'primary' | 'secondary' | 'accent';
}

const servicesData: Record<string, ServiceData> = {
  'personal-care': {
    slug: 'personal-care',
    icon: HandHeart,
    title: 'Personal Care Assistance',
    subtitle: 'Dignified support for daily living activities',
    heroDescription: 'Our personal care services help seniors maintain their independence and dignity while receiving compassionate assistance with essential daily activities.',
    fullDescription: [
      'Personal care is at the heart of what we do. Our trained caregivers provide respectful, dignified assistance with the activities of daily living that many seniors find challenging as they age.',
      'We understand that accepting help with personal care can be difficult. Our caregivers are specially trained to provide this sensitive care with compassion, patience, and respect for privacy.',
      'Each personal care plan is customized to the individual\'s needs, preferences, and level of independence. We work closely with families and healthcare providers to ensure comprehensive, coordinated care.',
    ],
    features: [
      'Bathing and showering assistance',
      'Grooming and hair care',
      'Dressing and wardrobe selection',
      'Toileting and incontinence care',
      'Skin care and hygiene',
      'Oral hygiene support',
      'Nail care and maintenance',
      'Shaving assistance',
    ],
    benefits: [
      { title: 'Maintain Dignity', description: 'Our caregivers are trained to provide personal care with the utmost respect and sensitivity.' },
      { title: 'Prevent Complications', description: 'Regular personal care helps prevent skin breakdown, infections, and other health issues.' },
      { title: 'Boost Confidence', description: 'Feeling clean and well-groomed improves self-esteem and overall wellbeing.' },
    ],
    faqs: [
      { question: 'How do you match caregivers with clients?', answer: 'We carefully consider personality, experience, and specific care needs when matching caregivers with clients. Gender preferences and cultural considerations are always respected.' },
      { question: 'What if my loved one is uncomfortable with personal care?', answer: 'We understand this can be challenging. Our caregivers are trained to build trust gradually and always prioritize the client\'s comfort and preferences.' },
      { question: 'Are your caregivers trained in specialized care?', answer: 'Yes, all caregivers receive training in safe personal care techniques, including proper body mechanics, infection control, and sensitivity training.' },
    ],
    color: 'primary',
  },
  'companionship': {
    slug: 'companionship',
    icon: MessageCircle,
    title: 'Companionship Services',
    subtitle: 'Meaningful connection and social engagement',
    heroDescription: 'Combat loneliness and enhance quality of life with our compassionate companionship services that provide meaningful social interaction and emotional support.',
    fullDescription: [
      'Social isolation and loneliness can have serious impacts on senior health, contributing to depression, cognitive decline, and even physical health problems. Our companionship services address these concerns with meaningful, engaging care.',
      'Our companions are more than caregivers – they\'re friends who genuinely care. They engage in conversation, share activities, and provide the emotional support that keeps seniors connected to life.',
      'Whether it\'s playing cards, going for walks, reading together, or simply sharing stories over tea, our companions bring joy and connection to every visit.',
    ],
    features: [
      'Engaging conversation and active listening',
      'Games, puzzles, and brain exercises',
      'Reading and storytelling',
      'Accompaniment on walks and outings',
      'Attending social events and appointments',
      'Video calls with family and friends',
      'Hobby and interest activities',
      'Reminiscence and life story sharing',
    ],
    benefits: [
      { title: 'Reduce Isolation', description: 'Regular social interaction combats the loneliness that affects many seniors living alone.' },
      { title: 'Mental Stimulation', description: 'Engaging activities and conversation help maintain cognitive function.' },
      { title: 'Emotional Support', description: 'A caring companion provides the emotional connection everyone needs.' },
    ],
    faqs: [
      { question: 'What activities can companions do with my loved one?', answer: 'Companions can engage in a wide variety of activities based on the client\'s interests – from card games and crafts to walks in the park and shopping trips.' },
      { question: 'Can companions accompany seniors on outings?', answer: 'Absolutely! Our companions can accompany clients to appointments, social events, shopping, restaurants, and more.' },
      { question: 'How does companionship differ from personal care?', answer: 'Companionship focuses on social and emotional support rather than hands-on personal care. Many clients benefit from a combination of both services.' },
    ],
    color: 'secondary',
  },
  'medication-management': {
    slug: 'medication-management',
    icon: Pill,
    title: 'Medication Management',
    subtitle: 'Safe and reliable medication support',
    heroDescription: 'Ensure medication adherence and safety with our comprehensive medication management services that provide reminders, organization, and monitoring.',
    fullDescription: [
      'Managing multiple medications can be overwhelming and confusing, especially for seniors with complex health conditions. Our medication management services help ensure medications are taken correctly and on time.',
      'Our caregivers provide reliable medication reminders, help organize prescriptions, and maintain detailed logs to share with healthcare providers. While we cannot administer medications, we provide the support needed for successful medication adherence.',
      'We also monitor for potential side effects and coordinate with pharmacies and healthcare providers to ensure seamless medication management.',
    ],
    features: [
      'Medication reminders and prompts',
      'Pill organizer management',
      'Prescription refill coordination',
      'Monitoring for side effects',
      'Communication with healthcare providers',
      'Maintaining medication logs',
      'Pharmacy coordination',
      'Appointment scheduling for medication reviews',
    ],
    benefits: [
      { title: 'Improve Adherence', description: 'Regular reminders and support help ensure medications are taken as prescribed.' },
      { title: 'Reduce Errors', description: 'Organized medication management reduces the risk of missed doses or double-dosing.' },
      { title: 'Coordinate Care', description: 'Communication with healthcare providers ensures comprehensive medication oversight.' },
    ],
    faqs: [
      { question: 'Can caregivers administer medications?', answer: 'Caregivers can remind and prompt clients to take medications and assist with organizing pills, but they cannot administer medications. This task is performed by the client themselves.' },
      { question: 'How do you handle prescription refills?', answer: 'We can coordinate with pharmacies to ensure timely refills and can pick up prescriptions or arrange delivery as needed.' },
      { question: 'What if there\'s a medication emergency?', answer: 'Caregivers are trained to recognize signs of adverse reactions and will immediately contact emergency services and family members if needed.' },
    ],
    color: 'accent',
  },
  'mobility-assistance': {
    slug: 'mobility-assistance',
    icon: Footprints,
    title: 'Mobility Assistance',
    subtitle: 'Safe movement and fall prevention',
    heroDescription: 'Maintain independence and safety with our mobility assistance services that provide support with walking, transfers, and physical activity.',
    fullDescription: [
      'Mobility challenges are one of the leading causes of falls among seniors. Our mobility assistance services help clients move safely while maintaining as much independence as possible.',
      'Our caregivers are trained in proper transfer techniques, fall prevention strategies, and the use of mobility aids. They provide the right level of support – enough to ensure safety, but not so much that it undermines independence.',
      'Regular mobility support can actually help improve strength and balance over time, reducing the risk of future falls and maintaining quality of life.',
    ],
    features: [
      'Walking assistance and supervision',
      'Safe transfer techniques',
      'Wheelchair and walker assistance',
      'Fall prevention strategies',
      'Range of motion exercises',
      'Positioning and repositioning support',
      'Assistance with stairs and uneven surfaces',
      'Home safety assessments',
    ],
    benefits: [
      { title: 'Prevent Falls', description: 'Proper assistance and supervision significantly reduce the risk of falls and injuries.' },
      { title: 'Maintain Independence', description: 'The right level of support helps clients stay active and mobile longer.' },
      { title: 'Build Confidence', description: 'Knowing help is available gives seniors the confidence to stay active.' },
    ],
    faqs: [
      { question: 'What if my loved one uses a wheelchair?', answer: 'Our caregivers are trained to assist with wheelchair transfers, navigation, and positioning to ensure comfort and safety.' },
      { question: 'Can caregivers help with physical therapy exercises?', answer: 'Caregivers can assist with exercises prescribed by a physical therapist, providing support and encouragement to maintain a regular exercise routine.' },
      { question: 'How do you prevent falls in the home?', answer: 'We can conduct home safety assessments and recommend modifications like removing tripping hazards, improving lighting, and installing grab bars.' },
    ],
    color: 'primary',
  },
  'meal-preparation': {
    slug: 'meal-preparation',
    icon: UtensilsCrossed,
    title: 'Meal Preparation',
    subtitle: 'Nutritious and delicious home-cooked meals',
    heroDescription: 'Ensure proper nutrition with our meal preparation services that provide healthy, delicious meals tailored to dietary needs and personal preferences.',
    fullDescription: [
      'Good nutrition is essential for senior health, but many seniors struggle with meal preparation due to physical limitations, lack of energy, or simply losing interest in cooking for one. Our meal preparation services solve these challenges.',
      'Our caregivers prepare fresh, nutritious meals tailored to each client\'s dietary requirements, cultural preferences, and personal tastes. We can accommodate special diets for diabetes, heart health, allergies, and more.',
      'Beyond just cooking, we help with grocery shopping, meal planning, and kitchen cleanup – making mealtimes enjoyable rather than a chore.',
    ],
    features: [
      'Meal planning and grocery shopping',
      'Preparation of nutritious meals',
      'Special diet accommodation',
      'Feeding assistance if needed',
      'Kitchen cleanup and organization',
      'Monitoring hydration and nutrition',
      'Snack preparation',
      'Batch cooking and meal prep',
    ],
    benefits: [
      { title: 'Better Nutrition', description: 'Properly prepared meals ensure seniors get the nutrients they need for health.' },
      { title: 'Enjoyable Meals', description: 'Home-cooked meals tailored to preferences make eating a pleasure, not a chore.' },
      { title: 'Independence', description: 'Having meals prepared allows seniors to focus energy on activities they enjoy.' },
    ],
    faqs: [
      { question: 'Can you accommodate special diets?', answer: 'Absolutely! We can prepare meals for diabetes, heart health, low sodium, gluten-free, and many other dietary requirements.' },
      { question: 'Do caregivers do the grocery shopping?', answer: 'Yes, caregivers can shop for groceries, or accompany clients on shopping trips if they prefer to be involved.' },
      { question: 'What if my loved one needs help eating?', answer: 'Caregivers can provide feeding assistance as needed, ensuring meals are enjoyed safely and comfortably.' },
    ],
    color: 'secondary',
  },
  'light-housekeeping': {
    slug: 'light-housekeeping',
    icon: Sparkles,
    title: 'Light Housekeeping',
    subtitle: 'A clean, safe, and comfortable home',
    heroDescription: 'Maintain a healthy living environment with our light housekeeping services that keep homes clean, organized, and safe.',
    fullDescription: [
      'A clean home isn\'t just about appearances – it\'s about health and safety. Clutter can create fall hazards, while poor hygiene can lead to illness. Our light housekeeping services address these concerns.',
      'Our caregivers handle everyday cleaning tasks that may be difficult for seniors, from vacuuming and dusting to laundry and dishes. We focus on maintaining a comfortable, healthy living environment.',
      'Light housekeeping is often combined with other services to provide comprehensive care that addresses all aspects of daily living.',
    ],
    features: [
      'Dusting and vacuuming',
      'Laundry and linen changes',
      'Dishwashing and kitchen cleaning',
      'Bathroom sanitization',
      'Trash removal and organizing',
      'General tidying and decluttering',
      'Making beds',
      'Plant care and pet feeding',
    ],
    benefits: [
      { title: 'Healthier Environment', description: 'Regular cleaning reduces dust, allergens, and germs that can cause illness.' },
      { title: 'Reduced Fall Risk', description: 'Organized, clutter-free spaces are safer for seniors with mobility challenges.' },
      { title: 'Peace of Mind', description: 'A clean home promotes mental wellbeing and reduces stress.' },
    ],
    faqs: [
      { question: 'Is this the same as professional house cleaning?', answer: 'Light housekeeping focuses on everyday tasks to maintain the home. For deep cleaning, we can coordinate with professional cleaning services.' },
      { question: 'Can caregivers help with laundry?', answer: 'Yes, caregivers can wash, dry, fold, and put away laundry, as well as change bed linens.' },
      { question: 'What about pet care?', answer: 'Caregivers can help with basic pet care like feeding, watering, and letting pets outside. For more extensive pet care, we can coordinate with pet care services.' },
    ],
    color: 'accent',
  },
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: service.heroDescription,
  };
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const colorClasses = {
    primary: {
      bg: 'bg-primary-100',
      text: 'text-primary-600',
      badge: 'primary' as const,
    },
    secondary: {
      bg: 'bg-secondary-100',
      text: 'text-secondary-600',
      badge: 'secondary' as const,
    },
    accent: {
      bg: 'bg-accent-100',
      text: 'text-accent-600',
      badge: 'accent' as const,
    },
  };

  const colors = colorClasses[service.color];

  // Get other services for the sidebar
  const otherServices = Object.values(servicesData).filter(s => s.slug !== slug);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-neutral-50 py-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-neutral-500 hover:text-primary-600">Home</Link>
            <span className="text-neutral-400">/</span>
            <Link href="/services" className="text-neutral-500 hover:text-primary-600">Services</Link>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-900">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-primary-600 hover:gap-3 transition-all mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Services
            </Link>
            
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.bg} mb-6`}>
              <Icon className={`w-8 h-8 ${colors.text}`} />
            </div>
            
            <h1 className="mb-4">{service.title}</h1>
            <p className="text-2xl text-neutral-600 font-light">{service.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="prose prose-lg max-w-none mb-12">
                {service.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-neutral-700">{paragraph}</p>
                ))}
              </div>

              {/* Features */}
              <Card className="mb-12">
                <h2 className="text-2xl font-serif font-semibold mb-6">What&apos;s Included</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-semibold mb-6">Key Benefits</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {service.benefits.map((benefit) => (
                    <Card key={benefit.title} variant="bordered" className="text-center">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} mb-4`}>
                        <Heart className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-neutral-600 text-sm">{benefit.description}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-serif font-semibold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <Card key={index} variant="bordered">
                      <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                      <p className="text-neutral-600">{faq.answer}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <Card className="bg-primary-50 border-primary-100 mb-8 sticky top-24">
                <h3 className="font-serif text-xl font-semibold mb-4">Get Started Today</h3>
                <p className="text-neutral-600 mb-6">
                  Schedule a free consultation to discuss how our {service.title.toLowerCase()} 
                  services can help your loved one.
                </p>
                <div className="space-y-3">
                  <Link href="/consultation">
                    <Button fullWidth rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Free Consultation
                    </Button>
                  </Link>
                  <a href="tel:+447544152585">
                    <Button variant="outline" fullWidth leftIcon={<Phone className="w-4 h-4" />}>
                      07544 152585
                    </Button>
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-primary-200 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <Clock className="w-4 h-4 text-primary-600" />
                    <span>24/7 Care Available</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <Users className="w-4 h-4 text-primary-600" />
                    <span>Matched Caregiver Program</span>
                  </div>
                </div>
              </Card>

              {/* Other Services */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Other Services</h3>
                <div className="space-y-3">
                  {otherServices.slice(0, 4).map((otherService) => {
                    const OtherIcon = otherService.icon;
                    return (
                      <Link 
                        key={otherService.slug}
                        href={`/services/${otherService.slug}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors"
                      >
                        <div className={`w-10 h-10 rounded-lg ${colorClasses[otherService.color].bg} flex items-center justify-center`}>
                          <OtherIcon className={`w-5 h-5 ${colorClasses[otherService.color].text}`} />
                        </div>
                        <span className="font-medium text-neutral-700">{otherService.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="!text-white mb-4" style={{ color: 'white' }}>Ready to Get Started?</h2>
            <p className="text-xl !text-white/90 mb-8" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Contact us today to schedule a free, no-obligation consultation 
              and learn how we can help your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Schedule Consultation
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
    </div>
  );
}

