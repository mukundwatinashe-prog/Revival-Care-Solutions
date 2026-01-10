'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ArrowLeft,
  Heart,
  Shield,
  Users,
} from 'lucide-react';
import { Button, Card, Badge, Input, Textarea } from '@/components/ui';

const careTypes = [
  'Personal Care',
  'Companionship',
  'Medication Management',
  'Mobility Assistance',
  'Meal Preparation',
  'Light Housekeeping',
  'Respite Care',
  'Live-In Care',
  'Other',
];

const relationships = [
  'Son/Daughter',
  'Spouse/Partner',
  'Sibling',
  'Other Family Member',
  'Friend',
  'Self',
  'Healthcare Professional',
  'Other',
];

export default function ConsultationPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    area: '',
    careType: '',
    relationship: '',
    careRecipientName: '',
    urgency: '',
    message: '',
    consent: false,
    honeypot: '', // Spam protection - hidden field
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
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
            Take the first step towards quality care for your loved one. Fill out the form below 
            and our care team will contact you within 24 hours.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card variant="elevated" className="p-8">
                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                      Thank You for Reaching Out!
                    </h2>
                    <p className="text-neutral-600 mb-8 max-w-md mx-auto">
                      We&apos;ve received your consultation request. A member of our care team 
                      will contact you within 24 hours to discuss your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/">
                        <Button variant="outline">
                          Return Home
                        </Button>
                      </Link>
                      <Button 
                        leftIcon={<Phone className="w-4 h-4" />}
                        onClick={() => window.location.href = 'tel:+447544152585'}
                      >
                        Call Us Now
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
                        Tell Us About Your Care Needs
                      </h2>
                      <p className="text-neutral-600">
                        Please fill out the form below and we&apos;ll be in touch shortly.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Contact Information */}
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Your Contact Information</h3>
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

                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          <Input
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                          />
                          <Input
                            label="Phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="07XXX XXXXXX"
                          />
                        </div>

                        <div className="mt-6">
                          <Input
                            label="Your Area / Town"
                            name="area"
                            value={formData.area}
                            onChange={handleChange}
                            required
                            placeholder="e.g. Falkirk, Denny, Larbert, Grangemouth, Linlithgow"
                          />
                        </div>
                      </div>

                      {/* Care Details */}
                      <div className="pt-6 border-t border-neutral-200">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Care Details</h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                              Type of Care Needed
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
                              Your Relationship to Care Recipient
                            </label>
                            <select
                              name="relationship"
                              value={formData.relationship}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                            >
                              <option value="">Select relationship</option>
                              {relationships.map(rel => (
                                <option key={rel} value={rel}>{rel}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          <Input
                            label="Care Recipient's Name (Optional)"
                            name="careRecipientName"
                            value={formData.careRecipientName}
                            onChange={handleChange}
                            placeholder="Name of person needing care"
                          />

                          <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                              How Soon Do You Need Care?
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
                      </div>

                      {/* Additional Information */}
                      <div className="pt-6 border-t border-neutral-200">
                        <Textarea
                          label="Tell Us More About Your Needs"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Please share any specific requirements, concerns, or questions you have about care services..."
                        />
                      </div>

                      {/* Honeypot field - hidden from users, catches bots */}
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

                      {/* Consent */}
                      <div className="pt-6 border-t border-neutral-200">
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
                      </div>

                      {/* Error Message */}
                      {formStatus === 'error' && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                          {errorMessage}
                        </div>
                      )}

                      {/* Submit Button */}
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
                    href="tel:+447544152585" 
                    className="flex items-center gap-3 p-4 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">07544 152585</div>
                      <div className="text-sm text-neutral-500">Call us anytime</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:milton@revivalcare.co.uk" 
                    className="flex items-center gap-3 p-4 rounded-xl bg-secondary-50 hover:bg-secondary-100 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary-600 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">Email Us</div>
                      <div className="text-sm text-neutral-500">milton@revivalcare.co.uk</div>
                    </div>
                  </a>
                </div>
              </Card>

              {/* Response Time */}
              <Card className="p-6 bg-primary-50 border-primary-100">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-primary-600" />
                  <h3 className="font-semibold text-neutral-900">Quick Response</h3>
                </div>
                <p className="text-neutral-600">
                  We respond to all consultation requests within 24 hours. For urgent needs, 
                  please call us directly.
                </p>
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
                      <div className="font-medium text-neutral-900">Fully Licensed</div>
                      <div className="text-sm text-neutral-500">Licensed and insured care services</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary-100 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-secondary-600" />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900">Background Checked</div>
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
        </div>
      </section>
    </div>
  );
}
