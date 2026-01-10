import { Metadata } from 'next';
import {
  Heart,
  DollarSign,
  Clock,
  GraduationCap,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  MapPin,
  Briefcase,
} from 'lucide-react';
import { Button, Card, Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the Revival Care team. We\'re hiring compassionate caregivers who want to make a difference in the lives of seniors.',
};

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Pay',
    description: 'Above-market hourly rates with regular increases based on performance and tenure.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Choose shifts that fit your life. Full-time, part-time, and weekend options available.',
  },
  {
    icon: GraduationCap,
    title: 'Paid Training',
    description: 'Comprehensive paid training program with ongoing education and career development.',
  },
  {
    icon: Shield,
    title: 'Insurance Options',
    description: 'Health, dental, and vision insurance available for eligible employees.',
  },
  {
    icon: Heart,
    title: 'Meaningful Work',
    description: 'Make a real difference in the lives of seniors and their families every day.',
  },
  {
    icon: Users,
    title: 'Supportive Team',
    description: '24/7 support from care coordinators and a community of fellow caregivers.',
  },
];

const openPositions = [
  {
    title: 'Caregiver / Home Health Aide',
    type: 'Full-time / Part-time',
    location: 'Multiple Locations',
    description: 'Provide personal care, companionship, and assistance with daily activities for seniors in their homes.',
    requirements: [
      'High school diploma or equivalent',
      'Valid driver\'s license and reliable transportation',
      'Ability to pass background check',
      'Compassionate and patient demeanor',
    ],
  },
  {
    title: 'Certified Nursing Assistant (CNA)',
    type: 'Full-time / Part-time',
    location: 'Multiple Locations',
    description: 'Provide skilled personal care and support under the direction of our care management team.',
    requirements: [
      'Current CNA certification',
      'Minimum 1 year experience preferred',
      'Valid driver\'s license',
      'Strong communication skills',
    ],
  },
  {
    title: 'Live-In Caregiver',
    type: 'Full-time',
    location: 'Various Client Homes',
    description: 'Provide round-the-clock care and companionship for clients requiring 24-hour support.',
    requirements: [
      '2+ years caregiving experience',
      'Ability to stay overnight at client homes',
      'Experience with complex care needs',
      'Flexibility and adaptability',
    ],
  },
  {
    title: 'Dementia Care Specialist',
    type: 'Full-time / Part-time',
    location: 'Multiple Locations',
    description: 'Specialized care for clients with Alzheimer\'s disease and other forms of dementia.',
    requirements: [
      'Dementia care certification or training',
      '2+ years relevant experience',
      'Patience and specialized communication skills',
      'Understanding of dementia progression',
    ],
  },
  {
    title: 'Care Coordinator',
    type: 'Full-time',
    location: 'Healthcare City Office',
    description: 'Coordinate care services, manage caregiver schedules, and maintain client relationships.',
    requirements: [
      'Bachelor\'s degree in healthcare or related field',
      '3+ years healthcare experience',
      'Strong organizational skills',
      'Excellent communication abilities',
    ],
  },
];

const testimonials = [
  {
    quote: "Working at Revival Care has been the most rewarding job I've ever had. The support from the team and the relationships I build with clients are incredible.",
    name: "Maria S.",
    role: "Caregiver, 3 years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop&crop=faces",
  },
  {
    quote: "The flexible scheduling allows me to balance work with my family. And the training I've received has made me a much better caregiver.",
    name: "James T.",
    role: "CNA, 2 years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  },
  {
    quote: "Revival Care truly cares about their employees. They invested in my professional development and I've grown so much in my career here.",
    name: "Priya M.",
    role: "Senior Caregiver, 5 years",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=faces",
  },
];

const process = [
  { step: '1', title: 'Apply Online', description: 'Submit your application through our careers portal' },
  { step: '2', title: 'Phone Interview', description: 'Brief call to discuss your experience and goals' },
  { step: '3', title: 'In-Person Interview', description: 'Meet with our team and tour our facilities' },
  { step: '4', title: 'Background Check', description: 'Comprehensive screening for safety and compliance' },
  { step: '5', title: 'Paid Training', description: 'Complete our 40+ hour training program' },
  { step: '6', title: 'Start Caring', description: 'Begin making a difference in clients\' lives' },
];

export default function CareersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="mb-4">Careers</Badge>
              <h1 className="mb-6">Join Our Team of Compassionate Caregivers</h1>
              <p className="text-xl text-neutral-600 mb-8">
                Make a meaningful difference in the lives of seniors while building 
                a rewarding career with flexible scheduling, competitive pay, and 
                a supportive team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  View Open Positions
                </Button>
                <Button variant="outline" size="lg">
                  Learn About Benefits
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=300&h=400&fit=crop"
                  alt="Caregiver with client"
                  className="rounded-2xl shadow-lg w-full"
                />
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=180&fit=crop"
                    alt="Care team meeting"
                    className="rounded-2xl shadow-lg w-full"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1586105251261-72a756497a11?w=300&h=180&fit=crop"
                    alt="Caregiver training"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Why Join Us</Badge>
            <h2 className="mb-4">Benefits of Working at Revival Care</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We believe in taking care of our team so they can take care of our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} hover>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-100 mb-4">
                  <benefit.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Open Positions</Badge>
            <h2 className="mb-4">Current Opportunities</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Find a position that fits your skills and schedule.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position) => (
              <Card key={position.title} className="group">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary-600 transition-colors">
                        {position.title}
                      </h3>
                      <Badge variant="primary" size="sm">{position.type}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-600 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{position.location}</span>
                    </div>
                    <p className="text-neutral-600 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4">
                      {position.requirements.slice(0, 3).map((req) => (
                        <div key={req} className="flex items-center gap-2 text-sm text-neutral-500">
                          <CheckCircle className="w-4 h-4 text-primary-500" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:flex-shrink-0">
                    <Button rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Apply Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">Hiring Process</Badge>
            <h2 className="mb-4">How to Join Our Team</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Our straightforward hiring process gets you started quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                <Card className="h-full">
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold shadow-lg">
                    {step.step}
                  </div>
                  <div className="pt-4">
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-neutral-600">{step.description}</p>
                  </div>
                </Card>
                {index < process.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-24 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Team</Badge>
            <h2 className="mb-4">What Our Caregivers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <blockquote className="text-neutral-700 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-neutral-500">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="!text-white mb-6" style={{ color: 'white' }}>Ready to Start Your Caregiving Career?</h2>
            <p className="text-xl !text-white/90 mb-8" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Join a team that values your work and supports your growth. 
              Apply today and start making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Apply Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                leftIcon={<Briefcase className="w-5 h-5" />}
                className="border-white text-white hover:bg-white/10"
              >
                View All Positions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

