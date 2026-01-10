import { Metadata } from 'next';
import Link from 'next/link';
import {
  Star,
  Quote,
  ArrowRight,
  Phone,
  CheckCircle,
} from 'lucide-react';
import { Button, Card, Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Read what families say about Revival Care Solutions. Real stories from real families about our compassionate home care services.',
};

const testimonials = [
  {
    quote: "Revival Care has been a blessing for our family. The caregivers are not just professional, they genuinely care about my mother's wellbeing. She looks forward to their visits every day.",
    author: "Maria Rodriguez",
    role: "Daughter of Client",
    location: "Healthcare City, HC",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    service: "Personal Care",
    duration: "Client for 2 years",
  },
  {
    quote: "After my father's stroke, we were overwhelmed and didn't know where to turn. Revival Care stepped in with compassion and expertise. Their team helped him regain so much independence while giving us peace of mind.",
    author: "James Chen",
    role: "Son of Client",
    location: "Westside, HC",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    service: "Mobility Assistance",
    duration: "Client for 18 months",
  },
  {
    quote: "The quality of care my husband receives is exceptional. The caregivers are trained, punctual, and treat him with such dignity. I can finally take breaks knowing he's in good hands.",
    author: "Dorothy Williams",
    role: "Wife of Client",
    location: "Northgate, HC",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    service: "Companionship",
    duration: "Client for 3 years",
  },
  {
    quote: "I was hesitant about accepting help at first, but the team at Revival Care made me feel comfortable from day one. My caregiver Maria has become like family to me.",
    author: "Robert Johnson",
    role: "Client",
    location: "Downtown, HC",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    service: "Personal Care",
    duration: "Client for 1 year",
  },
  {
    quote: "As a healthcare professional myself, I have high standards for care. Revival Care exceeds them. Their training program and caregiver quality are truly impressive.",
    author: "Dr. Priya Patel",
    role: "Daughter of Client",
    location: "Medical District, HC",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    service: "Medication Management",
    duration: "Client for 8 months",
  },
  {
    quote: "My mother has dementia, and finding caregivers who understand her needs was challenging. Revival Care's specialized dementia training makes all the difference.",
    author: "Michael Thompson",
    role: "Son of Client",
    location: "Eastside, HC",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    service: "Dementia Care",
    duration: "Client for 2 years",
  },
  {
    quote: "The flexibility of scheduling has been a lifesaver. Whether we need a few hours or full-day care, they always accommodate us with the same excellent caregivers.",
    author: "Sarah Kim",
    role: "Granddaughter of Client",
    location: "Riverside, HC",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    service: "Respite Care",
    duration: "Client for 6 months",
  },
  {
    quote: "What sets Revival Care apart is their communication. They keep me updated about my dad's care even though I live out of state. The online portal is incredibly helpful.",
    author: "Angela Martinez",
    role: "Daughter of Client",
    location: "Out of State",
    image: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=200&h=200&fit=crop&crop=faces",
    rating: 5,
    service: "Full-Time Care",
    duration: "Client for 14 months",
  },
];

const stats = [
  { value: '98%', label: 'Client Satisfaction Rate' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '500+', label: 'Reviews' },
  { value: '95%', label: 'Would Recommend' },
];

const highlights = [
  'Background-checked, trained caregivers',
  'Personalized care plans',
  '24/7 support and availability',
  'Transparent communication',
  'Flexible scheduling',
  'No long-term contracts',
];

export default function TestimonialsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Testimonials</Badge>
            <h1 className="mb-6">What Families Say About Us</h1>
            <p className="text-xl text-neutral-600 mb-8">
              Don&apos;t just take our word for it. Here&apos;s what the families 
              we serve have to say about their experience with Revival Care.
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent-400 text-accent-400" />
              ))}
            </div>
            <p className="text-neutral-600">
              <span className="font-bold">4.9 out of 5</span> based on 500+ reviews
            </p>
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

      {/* Testimonials Grid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.author} 
                hover 
                className={`relative ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
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
                
                <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-wrap gap-2">
                  <Badge variant="primary" size="sm">{testimonial.service}</Badge>
                  <Badge variant="neutral" size="sm">{testimonial.duration}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Placeholder */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Video Stories</Badge>
            <h2 className="mb-4">Hear from Our Families</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Watch real families share their experiences with Revival Care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div 
                key={index} 
                className="aspect-video rounded-2xl bg-neutral-200 flex items-center justify-center cursor-pointer hover:bg-neutral-300 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[12px] border-l-primary-600 border-y-[8px] border-y-transparent ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Choose Us */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="accent" className="mb-4">Why Choose Us</Badge>
              <h2 className="mb-6">Reasons Families Trust Revival Care</h2>
              <p className="text-lg text-neutral-600 mb-8">
                Our commitment to excellence shows in every aspect of our care, 
                and it&apos;s why families continue to choose us.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-neutral-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=300&h=200&fit=crop"
                    alt="Caregiver with client"
                    className="rounded-2xl shadow-lg w-full"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=300&h=250&fit=crop"
                    alt="Happy senior"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <div className="pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=300&h=400&fit=crop"
                    alt="Care team"
                    className="rounded-2xl shadow-lg w-full"
                  />
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
            <h2 className="text-white mb-6">Ready to Experience the Revival Care Difference?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Join the hundreds of families who trust us with their loved ones&apos; care. 
              Schedule a free consultation today.
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

