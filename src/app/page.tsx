import Link from 'next/link';
import Image from 'next/image';
import {
  Heart,
  Users,
  Clock,
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Pill,
  Footprints,
  UtensilsCrossed,
  HandHeart,
  MessageCircle,
} from 'lucide-react';
import { Button, Card, Badge } from '@/components/ui';

// Services data
const services = [
  {
    icon: HandHeart,
    title: 'Personal Care',
    description: 'Dignified assistance with bathing, grooming, dressing, and personal hygiene needs.',
    href: '/services/personal-care',
    color: 'primary',
  },
  {
    icon: MessageCircle,
    title: 'Companionship',
    description: 'Meaningful social interaction, conversation, and emotional support for your loved ones.',
    href: '/services/companionship',
    color: 'secondary',
  },
  {
    icon: Pill,
    title: 'Medication Management',
    description: 'Careful medication reminders and assistance to ensure proper adherence.',
    href: '/services/medication-management',
    color: 'accent',
  },
  {
    icon: Footprints,
    title: 'Mobility Assistance',
    description: 'Safe support with walking, transfers, and maintaining physical independence.',
    href: '/services/mobility-assistance',
    color: 'primary',
  },
  {
    icon: UtensilsCrossed,
    title: 'Meal Preparation',
    description: 'Heating and serving meals as directed by the client or family, using airfryer or microwave.',
    href: '/services/meal-preparation',
    color: 'secondary',
  },
];

// Trust stats
const stats = [
  { value: '24/7', label: 'Care Available', icon: Clock },
  { value: '100%', label: 'Dedication', icon: Heart },
  { value: 'Care', label: 'Inspectorate Registered', icon: Award },
  { value: 'Local', label: 'Family-Owned', icon: Users },
];


// Values
const values = [
  { icon: Heart, title: 'Compassion', description: 'We treat every client like family' },
  { icon: Shield, title: 'Trust', description: 'Background-checked, trained professionals' },
  { icon: Award, title: 'Excellence', description: 'Highest standards of care quality' },
  { icon: Users, title: 'Diversity', description: 'Celebrating all backgrounds and cultures' },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Modern Redesign */}
      <section className="relative min-h-[95vh] flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        {/* Modern Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-400/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-400/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-300/10 rounded-full blur-[150px]" />
        </div>

        <div className="container-custom relative z-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Enhanced */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <Badge variant="primary" size="lg" className="mb-6 shadow-lg">
                  Compassionate Home Care Services
                </Badge>
              </div>
              
              <h1 className="text-balance mb-6 leading-tight">
                Compassionate Care for{' '}
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-secondary-600 to-secondary-500">
                  Your Loved Ones
                </span>
          </h1>
              
              <p className="text-xl lg:text-2xl text-neutral-700 mb-10 max-w-lg leading-relaxed font-light">
                Professional, personalized home care services that help seniors 
                maintain independence and dignity while providing families with 
                peace of mind.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/consultation">
                  <Button 
                    size="xl" 
                    className="shadow-xl hover:shadow-2xl transition-all"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                  >
                    Schedule Free Consultation
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="xl"
                  className="border-2 hover:bg-primary-50 transition-all"
                  leftIcon={<Phone className="w-5 h-5" />}
                >
                  07544 152585
                </Button>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-neutral-200">
                <div className="flex items-center gap-3 text-neutral-700">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="font-medium">Care Inspectorate Registered</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-700">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="font-medium">Background Checked</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-700">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="font-medium">Available 24/7</span>
                </div>
              </div>
            </div>

            {/* Right Content - Modern Image Layout */}
            <div className="relative animate-fade-in stagger-2">
              {/* Mobile: Single centered image */}
              <div className="relative w-full aspect-[4/3] max-w-md mx-auto lg:hidden mb-8">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-white/50">
                  <Image
                    src="/images/caregiver-elderly-couple.jpg"
                    alt="Caregiver assisting elderly couple with coloring"
                    fill
                    className="object-cover"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                </div>
              </div>
              
              {/* Desktop: Enhanced Image Collage */}
              <div className="relative hidden lg:block w-full aspect-square max-w-xl mx-auto">
                {/* Main image - Larger and more prominent */}
                <div className="absolute top-0 right-0 w-[75%] h-[75%] rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-white/80 z-10">
                  <Image
                    src="/images/caregiver-elderly-couple.jpg"
                    alt="Caregiver assisting elderly couple with coloring"
                    fill
                    className="object-cover"
                    quality={100}
                    sizes="(max-width: 1024px) 50vw, 450px"
                  />
                </div>
                
                {/* Secondary image - Enhanced styling */}
                <div className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-white/80">
                  <Image
                    src="/images/nurse-laughing.jpg"
                    alt="Two women laughing together indoors"
                    fill
                    className="object-cover"
                    quality={100}
                    sizes="(max-width: 1024px) 40vw, 360px"
                  />
                </div>

                {/* Modern Floating Badge */}
                <div className="absolute top-8 left-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-5 flex items-center gap-4 animate-float border border-primary-100 z-20">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900 text-lg">24/7</div>
                    <div className="text-sm text-neutral-600">Care Available</div>
                  </div>
                </div>

                {/* Enhanced Trust Badge */}
                <div className="absolute bottom-16 right-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-5 border border-primary-100 z-20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary-600" />
                    </div>
                    <span className="font-semibold text-neutral-900 text-lg">Fully Licensed</span>
                  </div>
                  <div className="text-sm text-neutral-600 ml-13">Professional & Insured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Redesign */}
      <section className="py-16 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDMuMzE0LTIuNjg2IDYtNiA2cy02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNnoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm mb-6 group-hover:bg-white/20 transition-all shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-2" style={{ color: 'white' }}>{stat.value}</div>
                <div className="text-white/90 font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Modern Redesign */}
      <section className="py-28 bg-gradient-to-b from-white via-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <Badge variant="primary" className="mb-6 shadow-md">Our Services</Badge>
            <h2 className="mb-6 text-4xl lg:text-5xl">Comprehensive Care Services</h2>
            <p className="text-xl lg:text-2xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              From personal care to companionship, we offer a full range of services 
              tailored to meet the unique needs of each individual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} hover variant="elevated" className="h-full group border border-neutral-100 hover:border-primary-200 transition-all duration-300">
                <div className={`
                  inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg
                  ${service.color === 'primary' ? 'bg-gradient-to-br from-primary-100 to-primary-50' : ''}
                  ${service.color === 'secondary' ? 'bg-gradient-to-br from-secondary-100 to-secondary-50' : ''}
                  ${service.color === 'accent' ? 'bg-gradient-to-br from-accent-100 to-accent-50' : ''}
                `}>
                  <service.icon className={`
                    w-8 h-8
                    ${service.color === 'primary' ? 'text-primary-600' : ''}
                    ${service.color === 'secondary' ? 'text-secondary-600' : ''}
                    ${service.color === 'accent' ? 'text-accent-600' : ''}
                  `} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-neutral-900">{service.title}</h3>
                <p className="text-neutral-700 mb-6 leading-relaxed">{service.description}</p>
                <Link 
                  href={service.href}
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all group/link"
                >
                  Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services">
              <Button variant="primary" size="lg" className="shadow-xl hover:shadow-2xl transition-all" rightIcon={<ArrowRight className="w-5 h-5" />}>
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About/Values Section - Modern Redesign */}
      <section className="py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Enhanced Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-5">
                  <div className="rounded-3xl overflow-hidden shadow-xl relative h-64 ring-2 ring-neutral-100">
                    <Image
                      src="/images/healthcare-worker.jpg"
                      alt="Healthcare worker with mask"
                      fill
                      className="object-cover"
                      quality={100}
                      sizes="(max-width: 768px) 50vw, 320px"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-xl relative h-44 ring-2 ring-neutral-100">
                    <Image
                      src="/images/women-talking-chairs.jpg"
                      alt="Two women talking in comfortable chairs"
                      fill
                      className="object-cover"
                      quality={100}
                      sizes="(max-width: 768px) 50vw, 320px"
                    />
                  </div>
                </div>
                <div className="space-y-5 pt-10">
                  <div className="rounded-3xl overflow-hidden shadow-xl relative h-44 ring-2 ring-neutral-100">
                    <Image
                      src="/images/nurse-smiling-patient.jpg"
                      alt="Nurse smiling with elderly patient in room"
                      fill
                      className="object-cover"
                      quality={100}
                      sizes="(max-width: 768px) 50vw, 320px"
                    />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-xl relative h-64 ring-2 ring-neutral-100">
                    <Image
                      src="/images/caregiver-knitting.jpg"
                      alt="Caregiver assisting elderly women with knitting activity"
                      fill
                      className="object-cover"
                      quality={100}
                      sizes="(max-width: 768px) 50vw, 320px"
                    />
                  </div>
                </div>
              </div>

              {/* Modern Trust Badge */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-secondary-500 to-secondary-600 text-white rounded-3xl w-36 h-36 flex flex-col items-center justify-center shadow-2xl ring-4 ring-white z-10">
                <Shield className="w-10 h-10 mb-2" />
                <span className="text-sm font-semibold">Regulated</span>
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-6 shadow-md">About Us</Badge>
                <h2 className="mb-6 text-4xl lg:text-5xl">Dedicated to Dignified Care</h2>
                <p className="text-lg lg:text-xl text-neutral-700 mb-6 leading-relaxed">
                  Revival Care Solutions is committed to providing exceptional home care 
                  services that enable seniors to age gracefully in the comfort of their 
                  own homes.
                </p>
                <p className="text-neutral-700 mb-8 leading-relaxed">
                  Our diverse team of compassionate caregivers represents the communities 
                  we serve. We believe that quality care transcends cultural boundaries 
                  and that everyone deserves to be treated with respect and dignity.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center flex-shrink-0 shadow-md">
                      <value.icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">{value.title}</h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-all" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Learn Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section - Modern Redesign */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDMuMzE0LTIuNjg2IDYtNiA2cy02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNnoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" size="lg" className="mb-8 shadow-lg">
              Start Your Care Journey
            </Badge>
            <h2 className="!text-white mb-8 text-4xl lg:text-5xl" style={{ color: 'white' }}>
              Ready to Give Your Loved One the Care They Deserve?
            </h2>
            <p className="text-xl lg:text-2xl !text-white/95 mb-12 leading-relaxed" style={{ color: 'rgba(255,255,255,0.95)' }}>
              Schedule a free, no-obligation consultation with our care team. 
              We&apos;ll work together to create a personalized care plan that 
              meets your family&apos;s unique needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
              <Link href="/consultation">
                <Button 
                  variant="secondary" 
                  size="xl"
                  className="shadow-2xl hover:shadow-3xl transition-all"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Schedule Free Consultation
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="xl"
                leftIcon={<Phone className="w-5 h-5" />}
                className="border-2 border-white/80 text-white hover:bg-white/20 backdrop-blur-sm shadow-xl"
              >
                07544 152585
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Response within 1 hour</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>No commitment required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Modern Redesign */}
      <section className="py-28 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <Badge variant="primary" className="mb-6 shadow-md">Why Choose Us</Badge>
            <h2 className="mb-6 text-4xl lg:text-5xl">The Revival Care Difference</h2>
            <p className="text-xl lg:text-2xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              We go above and beyond to ensure the highest quality of care for your loved ones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Fully Vetted Caregivers',
                description: 'Comprehensive background checks, drug screening, and reference verification for every caregiver.',
              },
              {
                icon: Award,
                title: 'Ongoing Training',
                description: 'Continuous education and skills development to maintain the highest care standards.',
              },
              {
                icon: Clock,
                title: 'Flexible Scheduling',
                description: 'From a few hours a week to 24/7 live-in care, we adapt to your needs.',
              },
              {
                icon: Heart,
                title: 'Personalized Care Plans',
                description: 'Customized care strategies developed in collaboration with families and healthcare providers.',
              },
            ].map((feature) => (
              <Card key={feature.title} hover variant="elevated" className="text-center border border-neutral-100 hover:border-primary-200 transition-all">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 mb-6 shadow-lg">
                  <feature.icon className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-900">{feature.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Care Inspectorate Registration - Modern Redesign */}
      <section className="py-16 bg-gradient-to-r from-primary-50 via-primary-100/50 to-primary-50 border-y-2 border-primary-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="relative w-48 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center border-2 border-primary-200 ring-4 ring-primary-100 p-6">
              <Image
                src="/logos/care-inspectorate-logo.png"
                alt="Care Inspectorate Registered"
                fill
                className="object-contain p-4"
                sizes="192px"
              />
            </div>
            <div className="max-w-2xl">
              <h3 className="text-2xl lg:text-3xl font-semibold text-neutral-900 mb-3">
                Registered with the Care Inspectorate
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Revival Care Solutions is proudly registered with the Care Inspectorate, 
                ensuring we meet Scotland&apos;s national care standards for quality and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Preview - Modern Redesign */}
      <section className="py-20 bg-gradient-to-br from-neutral-100 via-white to-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-48 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center border-2 border-neutral-200 p-6 flex-shrink-0">
                <Image
                  src="/logos/falkirk-council-logo.svg"
                  alt="Falkirk Council"
                  fill
                  className="object-contain p-4"
                  sizes="192px"
                />
              </div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-serif font-semibold mb-4 text-neutral-900">
                  Serving Falkirk & Surrounding Areas
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed max-w-2xl">
                  We proudly provide care services in Falkirk, Denny, Larbert, Grangemouth, Linlithgow and more areas coming soon.
                </p>
              </div>
            </div>
            <Link href="/service-areas">
              <Button variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-all border-2" rightIcon={<ArrowRight className="w-5 h-5" />}>
                View Service Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
