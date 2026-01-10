'use client';

import { useState } from 'react';
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
  Upload,
  FileText,
} from 'lucide-react';
import { Button, Card, Badge, Input, Textarea } from '@/components/ui';


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
    title: 'Carer',
    type: 'Full-time / Part-time',
    location: 'Falkirk & Surrounding Areas',
    description: 'Provide personal care, companionship, and assistance with daily activities for elderly clients in their homes. Join our compassionate team making a real difference in people\'s lives.',
    requirements: [
      'Compassionate and patient demeanor',
      'Valid driver\'s license and reliable transportation',
      'Ability to pass PVG check',
      'Good communication skills',
      'Right to work in the UK',
    ],
  },
];

const testimonials = [
  {
    quote: "Working at Revival Care has been the most rewarding job I've ever had. The support from the team and the relationships I build with clients are incredible.",
    name: "Maria S.",
    role: "Caregiver, 3 years",
  },
  {
    quote: "The flexible scheduling allows me to balance work with my family. And the training I've received has made me a much better caregiver.",
    name: "James T.",
    role: "Carer, 2 years",
  },
  {
    quote: "Revival Care truly cares about their employees. They invested in my professional development and I've grown so much in my career here.",
    name: "Priya M.",
    role: "Senior Carer, 5 years",
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
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        setShowApplicationForm(false);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <img
                src="/images/team-silhouette.jpg"
                alt="Team of carers together"
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
              />
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

          {submitted ? (
            <Card className="max-w-2xl mx-auto text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Application Submitted!</h3>
              <p className="text-neutral-600 mb-6">
                Thank you for your interest in joining Revival Care. We&apos;ll review your application 
                and get back to you within 5 working days.
              </p>
              <Button onClick={() => setSubmitted(false)}>
                Submit Another Application
              </Button>
            </Card>
          ) : showApplicationForm ? (
            <Card className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6">Apply for Carer Position</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="da9ddbe9-204a-4d74-8327-d53182cd71ec" />
                <input type="hidden" name="subject" value="New Job Application - Carer Position" />
                <input type="hidden" name="from_name" value="Revival Care Careers" />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      First Name *
                    </label>
                    <Input name="first_name" required placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Last Name *
                    </label>
                    <Input name="last_name" required placeholder="Your last name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <Input type="email" name="email" required placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <Input type="tel" name="phone" required placeholder="Your phone number" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Your Area / Town *
                  </label>
                  <Input name="area" required placeholder="e.g. Falkirk, Denny, Larbert" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Do you have a valid UK driving licence? *
                  </label>
                  <select
                    name="driving_licence"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                  >
                    <option value="">Please select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Learning">Currently learning</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Do you have previous care experience?
                  </label>
                  <select
                    name="experience"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                  >
                    <option value="">Please select</option>
                    <option value="No experience">No experience (training provided)</option>
                    <option value="Less than 1 year">Less than 1 year</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="2-5 years">2-5 years</option>
                    <option value="5+ years">5+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Upload Your CV *
                  </label>
                  <div className="border-2 border-dashed border-neutral-300 rounded-xl p-6 text-center hover:border-primary-400 transition-colors">
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="hidden"
                      id="cv-upload"
                    />
                    <label htmlFor="cv-upload" className="cursor-pointer">
                      {cvFile ? (
                        <div className="flex items-center justify-center gap-3">
                          <FileText className="w-8 h-8 text-primary-600" />
                          <span className="text-neutral-700 font-medium">{cvFile.name}</span>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
                          <p className="text-neutral-600 mb-1">Click to upload your CV</p>
                          <p className="text-sm text-neutral-400">PDF, DOC or DOCX (max 5MB)</p>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Why do you want to work as a Carer?
                  </label>
                  <Textarea
                    name="motivation"
                    rows={4}
                    placeholder="Tell us about yourself and why you'd like to join our team..."
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowApplicationForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </div>
              </form>
            </Card>
          ) : (
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
                        {position.requirements.map((req) => (
                          <div key={req} className="flex items-center gap-2 text-sm text-neutral-500">
                            <CheckCircle className="w-4 h-4 text-primary-500" />
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:flex-shrink-0">
                      <Button 
                        onClick={() => setShowApplicationForm(true)}
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
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
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
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

