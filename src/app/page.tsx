import Link from 'next/link';
import {
  Heart,
  Users,
  Clock,
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Star,
  Quote,
  Pill,
  Footprints,
  UtensilsCrossed,
  Sparkles,
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
    description: 'Nutritious meal planning and preparation tailored to dietary needs and preferences.',
    href: '/services/meal-preparation',
    color: 'secondary',
  },
  {
    icon: Sparkles,
    title: 'Light Housekeeping',
    description: 'Maintaining a clean, safe, and comfortable living environment.',
    href: '/services/light-housekeeping',
    color: 'accent',
  },
];

// Trust stats
const stats = [
  { value: '15+', label: 'Years of Experience', icon: Clock },
  { value: '2,500+', label: 'Families Served', icon: Users },
  { value: '98%', label: 'Client Satisfaction', icon: Star },
  { value: '24/7', label: 'Care Available', icon: Shield },
];

// Testimonials
const testimonials = [
  {
    quote: "Revival Care has been a blessing for our family. The caregivers are not just professional, they genuinely care about my mother's wellbeing. She looks forward to their visits every day.",
    author: "Maria Rodriguez",
    role: "Daughter of Client",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
  },
  {
    quote: "After my father's stroke, we were overwhelmed. Revival Care stepped in with compassion and expertise. Their team helped him regain independence while giving us peace of mind.",
    author: "James Chen",
    role: "Son of Client",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
  },
  {
    quote: "The quality of care my husband receives is exceptional. The caregivers are trained, punctual, and treat him with such dignity. I can't recommend Revival Care enough.",
    author: "Dorothy Williams",
    role: "Wife of Client",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
  },
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
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <Badge variant="primary" size="lg" className="mb-6">
                Trusted Home Care Since 2010
              </Badge>
              
              <h1 className="text-balance mb-6">
                Compassionate Care for{' '}
                <span className="text-gradient">Your Loved Ones</span>
          </h1>
              
              <p className="text-xl text-neutral-600 mb-8 max-w-lg">
                Professional, personalized home care services that help seniors 
                maintain independence and dignity while providing families with 
                peace of mind.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button 
                  size="xl" 
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Schedule Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  leftIcon={<Phone className="w-5 h-5" />}
                >
                  07544 152585
                </Button>
              </div>

              {/* Quick trust indicators */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-neutral-600">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span>Background Checked</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image Collage */}
            <div className="relative hidden lg:block animate-fade-in stagger-2">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main image */}
                <div className="absolute top-0 right-0 w-[70%] h-[70%] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&h=600&fit=crop"
                    alt="Caregiver helping elderly woman with a warm smile"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Secondary image */}
                <div className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&h=400&fit=crop"
                    alt="African American caregiver supporting senior client"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute top-10 left-0 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900">2,500+</div>
                    <div className="text-sm text-neutral-500">Families Served</div>
                  </div>
                </div>

                {/* Rating badge */}
                <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-xl p-4">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
                    ))}
                  </div>
                  <div className="text-sm text-neutral-600">4.9/5 from 500+ reviews</div>
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
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-4">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-primary-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Our Services</Badge>
            <h2 className="mb-4">Comprehensive Care Services</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              From personal care to companionship, we offer a full range of services 
              tailored to meet the unique needs of each individual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} hover className="h-full group">
                <div className={`
                  inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-transform group-hover:scale-110
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
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <Link 
                  href={service.href}
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* About/Values Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop"
                      alt="Asian caregiver with elderly patient"
                      className="w-full h-60 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&h=300&fit=crop"
                      alt="Diverse care team meeting"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=300&fit=crop"
                      alt="Healthcare professional smiling"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=500&fit=crop"
                      alt="Caregiver assisting with mobility"
                      className="w-full h-60 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-secondary-500 text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl">
                <span className="text-3xl font-bold">15+</span>
                <span className="text-sm">Years</span>
              </div>
            </div>

            {/* Content */}
            <div>
              <Badge variant="secondary" className="mb-4">About Us</Badge>
              <h2 className="mb-6">Dedicated to Dignified Care</h2>
              <p className="text-lg text-neutral-600 mb-6">
                Since 2010, Revival Care Solutions has been committed to providing 
                exceptional home care services that enable seniors to age gracefully 
                in the comfort of their own homes.
              </p>
              <p className="text-neutral-600 mb-8">
                Our diverse team of compassionate caregivers represents the communities 
                we serve. We believe that quality care transcends cultural boundaries 
                and that everyone deserves to be treated with respect and dignity.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">{value.title}</h4>
                      <p className="text-sm text-neutral-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Learn Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">Testimonials</Badge>
            <h2 className="mb-4">What Families Say About Us</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what the families 
              we serve have to say about our care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} variant="elevated" className="h-full relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-100" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                
                <blockquote className="text-neutral-700 mb-6 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-neutral-900">{testimonial.author}</div>
                    <div className="text-sm text-neutral-500">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 pattern-dots" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" size="lg" className="mb-6">
              Start Your Care Journey
            </Badge>
            <h2 className="text-white mb-6">
              Ready to Give Your Loved One the Care They Deserve?
            </h2>
            <p className="text-xl text-primary-100 mb-10">
              Schedule a free, no-obligation consultation with our care team. 
              We&apos;ll work together to create a personalized care plan that 
              meets your family&apos;s unique needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="xl"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Schedule Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                leftIcon={<Phone className="w-5 h-5" />}
                className="border-white text-white hover:bg-white/10"
              >
                07544 152585
              </Button>
            </div>

            <p className="mt-8 text-primary-200 text-sm">
              Available 24/7 • Response within 1 hour • No commitment required
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Why Choose Us</Badge>
            <h2 className="mb-4">The Revival Care Difference</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
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
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="py-16 bg-neutral-100">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-2">
                Serving Communities Across the Region
              </h3>
              <p className="text-neutral-600">
                We proudly provide care services throughout the greater metropolitan area and surrounding counties.
              </p>
            </div>
            <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
              View Service Areas
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
