'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Heart,
  DollarSign,
  Clock,
  GraduationCap,
  Shield,
  Users,
  ArrowRight,
  ArrowLeft,
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
    title: 'Benefits Package',
    description: 'Comprehensive benefits package available for eligible employees including pension contributions and other benefits.',
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
    key: 'fulltime' as const,
    title: 'Care Assistant Fulltime',
    type: 'Full-time',
    location: 'Falkirk & Surrounding Areas',
    description:
      'Provide personal care, companionship, and assistance with daily activities for elderly clients in their homes.',
    requirements: [
      'Compassionate and patient demeanor',
      'Valid driver\'s license and reliable transportation',
      'Ability to pass PVG check',
      'Good communication skills',
      'Right to work in the UK',
    ],
  },
  {
    key: 'part-time' as const,
    title: 'Care Assistant Part-time',
    type: 'Part-time',
    location: 'Falkirk & Surrounding Areas',
    description:
      'Provide personal care, companionship, and assistance with daily activities for elderly clients in their homes.',
    requirements: [
      'Compassionate and patient demeanor',
      'Ability to pass PVG check',
      'Good communication skills',
      'Right to work in the UK',
    ],
  },
];

const hiringSteps = [
  { step: '1', title: 'Apply Online', description: 'Submit your application through our careers portal' },
  { step: '2', title: 'Phone Interview', description: 'Brief call to discuss your experience and goals' },
  { step: '3', title: 'In-Person Interview', description: 'Meet with our team and tour our facilities' },
  { step: '4', title: 'Background Check', description: 'Comprehensive screening for safety and compliance' },
  { step: '5', title: 'Paid Training', description: 'Complete our 40+ hour training program' },
  { step: '6', title: 'Start Caring', description: 'Begin making a difference in clients\' lives' },
];

export default function CareersPage() {
  type RoleKey = 'fulltime' | 'part-time';
  const [selectedRole, setSelectedRole] = useState<RoleKey | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const selectedPosition = selectedRole
    ? openPositions.find((p) => p.key === selectedRole) || null
    : null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!web3formsKey) {
      console.error('WEB3FORMS_ACCESS_KEY not configured');
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToPositions = () => {
    document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Careers</Badge>
            <h1 className="mb-6">Join Our Team of Compassionate Caregivers</h1>
            <p className="text-xl text-neutral-600 mb-8 mx-auto">
              Make a meaningful difference in the lives of seniors while building
              a rewarding career with flexible scheduling, competitive pay, and
              a supportive team.
            </p>
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} onClick={scrollToPositions}>
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Open Positions - prominent clickable boxes */}
      <section id="open-positions" className="py-16 lg:py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-6">
            <Badge variant="primary" className="mb-4">Open Positions</Badge>
            <h2 className="mb-4">Current Opportunities</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Choose a role below to apply.
            </p>
          </div>
          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary-100 text-secondary-700 font-semibold text-sm">
              <DollarSign className="w-4 h-4" />
              Rate of pay is competitive
            </div>
          </div>

          {submitted ? (
            <Card className="max-w-2xl mx-auto text-center py-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Thanks for applying!</h3>
              <p className="text-neutral-600 mb-6 mx-auto">
                We&apos;ve received your application and will be in touch soon.
              </p>
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setSelectedRole(null);
                  setCvFile(null);
                }}
              >
                Submit Another Application
              </Button>
            </Card>
          ) : selectedRole && selectedPosition ? (
            /* Application Form */
            <Card className="max-w-2xl mx-auto">
              <button
                type="button"
                onClick={() => { setSelectedRole(null); setCvFile(null); }}
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6 font-medium text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to positions
              </button>
              <h3 className="text-2xl font-semibold mb-2">
                Apply for {selectedPosition.title}
              </h3>
              <p className="text-neutral-600 mb-6">Fields marked with * are mandatory.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value={web3formsKey || ''} />
                <input
                  type="hidden"
                  name="subject"
                  value={`New Job Application - ${selectedPosition.title}`}
                />
                <input type="hidden" name="from_name" value="Revival Care Careers" />
                <input
                  type="hidden"
                  name="job_role"
                  value={selectedPosition.title}
                />

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
                      Phone Number
                    </label>
                    <Input type="tel" name="phone" placeholder="Your phone number" />
                  </div>
                </div>

                {selectedRole === 'part-time' && (
                  <div>
                    <Input
                      type="number"
                      name="max_hours_per_week"
                      required
                      min={1}
                      label="Max hours you can work per week *"
                      placeholder="e.g. 20"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Your Area / Town
                  </label>
                  <Input name="area" placeholder="e.g. Falkirk, Denny, Larbert" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Do you have a valid UK driving licence?
                  </label>
                  <select
                    name="driving_licence"
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

                {/* CV Upload - mandatory */}
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
                    Why do you want to work as a Care Assistant?
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
                    onClick={() => {
                      setSelectedRole(null);
                      setCvFile(null);
                    }}
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
            /* Two prominent clickable role boxes */
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {openPositions.map((position) => (
                <button
                  key={position.key}
                  type="button"
                  onClick={() => {
                    setSelectedRole(position.key);
                    setCvFile(null);
                    setSubmitted(false);
                  }}
                  className="text-left group"
                >
                  <Card hover variant="elevated" className="h-full border-2 border-transparent group-hover:border-primary-400 transition-all">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-100 mb-5">
                      <Briefcase className="w-7 h-7 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-900 group-hover:text-primary-600 transition-colors">
                      {position.title}
                    </h3>
                    <Badge variant="primary" size="sm" className="mb-4">{position.type}</Badge>
                    <div className="flex items-center gap-2 text-neutral-500 text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </div>
                    <p className="text-neutral-600 text-sm mb-5">{position.description}</p>
                    <div className="space-y-2 mb-6">
                      {position.requirements.map((req) => (
                        <div key={req} className="flex items-center gap-2 text-sm text-neutral-500">
                          <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </div>
                  </Card>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16">
            <Badge variant="secondary" className="mb-4">Why Join Us</Badge>
            <h2 className="mb-4">Benefits of Working at Revival Care</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We believe in taking care of our team so they can take care of our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} hover variant="elevated" className="bg-white border border-neutral-100">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-100 mb-4">
                  <benefit.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900">{benefit.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16">
            <Badge variant="accent" className="mb-4">Hiring Process</Badge>
            <h2 className="mb-4">How to Join Our Team</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our straightforward hiring process gets you started quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hiringSteps.map((step, index) => (
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
                {index < hiringSteps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Start Your Caregiving Career?</h2>
            <p className="text-xl text-white/90 mb-8 mx-auto">
              Join a team that values your work and supports your growth.
              Apply today and start making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} onClick={scrollToPositions}>
                Apply Now
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
