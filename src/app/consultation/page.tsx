'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import {
  Phone,
  Mail,
  Send,
  CheckCircle,
  ArrowLeft,
  Heart,
  Shield,
  Users,
  MessageSquareQuote,
} from 'lucide-react';
import { Button, Card, Badge, Input, Textarea } from '@/components/ui';

const careTypes = [
  'Personal Care',
  'Companionship',
  'Medication Management',
  'Mobility Assistance',
  'Meal Preparation',
  'Respite Care',
  'Live-In Care',
  'Other',
];

function ConsultationForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const initialCareType = careTypes.find(
    (t) => t.toLowerCase().replace(/\s+/g, '-') === preselectedService
  ) || '';

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    area: '',
    careType: initialCareType,
    urgency: '',
    message: '',
    consent: false,
    honeypot: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    if (formData.honeypot) {
      setFormStatus('success');
      return;
    }

    const payload = new FormData();
    payload.append('_subject', `New Consultation Request from ${formData.firstName} ${formData.lastName}`);
    payload.append('_captcha', 'false');
    payload.append('_template', 'table');
    payload.append('Name', `${formData.firstName} ${formData.lastName}`);
    payload.append('Email', formData.email);
    payload.append('Phone', formData.phone);
    payload.append('Area', formData.area);
    payload.append('Type of Care', formData.careType);
    payload.append('Urgency', formData.urgency || 'Not specified');
    payload.append('Message', formData.message || 'No additional message provided.');

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@revivalcare.co.uk', {
        method: 'POST',
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
      } else {
        setErrorMessage('Something went wrong. Please try again.');
        setFormStatus('error');
      }
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
      setFormStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      {/* Form */}
      <div className="lg:col-span-2">
        <Card variant="elevated" className="p-8">
          {formStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Request Received!</h2>
              <p className="text-neutral-600 mb-8 max-w-md mx-auto">
                We&apos;ll call the phone number you provided within 1 business hour
                to discuss your care needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button variant="outline">
                    Return Home
                  </Button>
                </Link>
                <a href="tel:+441324868987">
                  <Button leftIcon={<Phone className="w-4 h-4" />}>
                    Call Us Now
                  </Button>
                </a>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
                  Tell Us About Your Care Needs
                </h2>
                <p className="text-neutral-600">
                  Fill in the short form below and we&apos;ll call you back within 1 hour.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Your first name"
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Your last name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="07XXX XXXXXX"
                  />
                  <Input
                    label="Email (optional)"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                <Input
                  label="Your Area / Town"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Falkirk, Denny, Larbert, Grangemouth, Linlithgow"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Type of Care Needed <span className="text-secondary-500">*</span>
                    </label>
                    <select
                      name="careType"
                      value={formData.careType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select care type</option>
                      {careTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      How Soon Do You Need Care? <span className="text-secondary-500">*</span>
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select timeframe</option>
                      <option value="Immediately">Immediately</option>
                      <option value="Within 1 week">Within 1 week</option>
                      <option value="Within 2 weeks">Within 2 weeks</option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="Just exploring options">Just exploring options</option>
                    </select>
                  </div>
                </div>

                <Textarea
                  label="Anything else you'd like us to know? (optional)"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any specific needs, concerns, or questions..."
                />

                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-1 w-5 h-5 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-sm text-neutral-600">
                    I consent to Revival Care Solutions contacting me about my care enquiry.
                    I understand my information will be handled in accordance with the{' '}
                    <Link href="/privacy" className="text-primary-600 hover:underline">
                      Privacy Policy
                    </Link>.
                  </span>
                </label>

                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                    {errorMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  size="xl"
                  className="w-full"
                  disabled={formStatus === 'submitting'}
                  rightIcon={formStatus === 'submitting' ? undefined : <Send className="w-5 h-5" />}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Request Free Consultation'}
                </Button>
              </form>
            </>
          )}
        </Card>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Contact Card */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Prefer to Talk?
          </h3>
          <p className="text-neutral-600 mb-6">
            Our care coordinators are available to answer your questions and discuss your needs.
          </p>
          <div className="space-y-4">
            <a
              href="tel:+441324868987"
              className="flex items-center gap-3 p-4 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-neutral-900">01324868987</div>
                <div className="text-sm text-neutral-500">Call us anytime</div>
              </div>
            </a>

            <a
              href="mailto:info@revivalcare.co.uk"
              className="flex items-center gap-3 p-4 rounded-xl bg-secondary-50 hover:bg-secondary-100 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary-600 flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-neutral-900">Email Us</div>
                <div className="text-sm text-neutral-500">info@revivalcare.co.uk</div>
              </div>
            </a>
          </div>
        </Card>

        {/* Testimonial */}
        <Card className="p-6 bg-secondary-50 border-secondary-100">
          <MessageSquareQuote className="w-8 h-8 text-secondary-400 mb-4" />
          <blockquote className="text-neutral-700 italic mb-4 leading-relaxed">
            &ldquo;Revival Care found us a carer within 48 hours. Mum is so much
            happier being looked after at home. The team are wonderful.&rdquo;
          </blockquote>
          <p className="text-sm font-semibold text-neutral-900">&mdash; Family in Falkirk</p>
        </Card>

        {/* Trust Indicators */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Why Choose Us
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-primary-600" />
              </div>
              <div>
                <div className="font-medium text-neutral-900">Care Inspectorate Registered</div>
                <div className="text-sm text-neutral-500">Licensed and insured care services</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-secondary-100 flex items-center justify-center flex-shrink-0">
                <Users className="w-4 h-4 text-secondary-600" />
              </div>
              <div>
                <div className="font-medium text-neutral-900">PVG Checked</div>
                <div className="text-sm text-neutral-500">All caregivers thoroughly vetted</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center flex-shrink-0">
                <Heart className="w-4 h-4 text-accent-600" />
              </div>
              <div>
                <div className="font-medium text-neutral-900">Compassionate Care</div>
                <div className="text-sm text-neutral-500">We treat every client like family</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function ConsultationPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 gradient-hero">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <Badge variant="primary" className="mb-4">Free Consultation</Badge>
          <h1 className="mb-4">Schedule Your <span className="text-gradient">Free Consultation</span></h1>
          <p className="text-xl text-neutral-600 max-w-2xl">
            Take the first step towards quality care for your loved one.
            Fill in the short form and we&apos;ll call you back within 1 hour.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <Suspense fallback={null}>
            <ConsultationForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
