'use client';

import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Calendar,
} from 'lucide-react';
import { Button, Card, Badge, Input, Textarea } from '@/components/ui';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    description: 'Speak with a care coordinator',
    value: '07544 152585',
    href: 'tel:+447544152585',
    action: 'Call Now',
    isScroll: false,
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us a message anytime',
    value: 'milton@revivalcare.co.uk',
    href: 'mailto:milton@revivalcare.co.uk',
    action: 'Email Us',
    isScroll: false,
  },
  {
    icon: Calendar,
    title: 'Schedule',
    description: 'Book a consultation',
    value: 'Free assessment',
    href: '#consultation-form',
    action: 'Book Now',
    isScroll: true,
  },
];

const officeInfo = {
  address: 'Office 3 Marchmont Avenue\nPolmont, Falkirk, FK2 0NZ',
  phone: '07544 152585',
  email: 'milton@revivalcare.co.uk',
  hours: [
    { day: 'Monday - Friday', hours: '9:00 AM - 5:30 PM' },
    { day: 'Saturday - Sunday', hours: 'Closed' },
  ],
};

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

export default function ContactPage() {
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
    message: '',
    consent: false,
    honeypot: '', // Spam protection - hidden field
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');
    
    try {
      // Prepare form data for API
      const submissionData = {
        ...formData,
        careRecipientName: '', // Not in contact form
        urgency: 'Just exploring options', // Default for contact form
      };

      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setFormStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          area: '',
          careType: '',
          relationship: '',
          message: '',
          consent: false,
          honeypot: '',
        });
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        setFormStatus('error');
      }
    } catch (error) {
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
      <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Contact Us</Badge>
            <h1 className="mb-6">We&apos;re Here to Help</h1>
            <p className="text-xl text-neutral-600 mb-8">
              Have questions about our care services? Ready to get started? 
              Reach out to our friendly team – we respond within 1 hour during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 -mt-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <Card key={method.title} hover className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-100 mb-4">
                  <method.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                <p className="text-sm text-neutral-600 mb-2">{method.description}</p>
                <p className="font-medium text-primary-600 mb-4">{method.value}</p>
                {method.isScroll ? (
                  <button
                    onClick={() => {
                      document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full"
                  >
                    <Button variant="outline" size="sm" fullWidth>
                      {method.action}
                    </Button>
                  </button>
                ) : (
                  <a href={method.href}>
                    <Button variant="outline" size="sm" fullWidth>
                      {method.action}
                    </Button>
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2" id="consultation-form">
              <Card>
                <h2 className="text-2xl font-serif font-semibold mb-2">Request a Free Consultation</h2>
                <p className="text-neutral-600 mb-8">
                  Fill out the form below and a care coordinator will contact you within 1 hour 
                  to discuss your needs and answer any questions.
                </p>

                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                    <p className="text-neutral-600 mb-6">
                      We&apos;ve received your message and will contact you within 24 hours during business hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="outline" onClick={() => {
                        setFormStatus('idle');
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          area: '',
                          careType: '',
                          relationship: '',
                          message: '',
                          consent: false,
                          honeypot: '',
                        });
                      }}>
                        Send Another Message
                      </Button>
                      <a href="tel:+447544152585">
                        <Button leftIcon={<Phone className="w-4 h-4" />}>
                          Call Us Now
                        </Button>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="John"
                      />
                      <Input
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Smith"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
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
                          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent hover:border-neutral-300 transition-all duration-200"
                        >
                          <option value="">Select care type</option>
                          {careTypes.map((type) => (
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
                          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent hover:border-neutral-300 transition-all duration-200"
                        >
                          <option value="">Select relationship</option>
                          <option value="self">I need care for myself</option>
                          <option value="parent">Parent</option>
                          <option value="spouse">Spouse/Partner</option>
                          <option value="grandparent">Grandparent</option>
                          <option value="sibling">Sibling</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <Textarea
                      label="Tell us about your care needs"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share any details about the care situation, specific needs, or questions you have..."
                      rows={5}
                    />

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

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        className="mt-1 w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor="consent" className="text-sm text-neutral-600">
                        I consent to Revival Care Solutions contacting me about care services. 
                        I understand my information will be handled according to the{' '}
                        <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>.
                      </label>
                    </div>

                    {/* Error Message */}
                    {formStatus === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                        {errorMessage}
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      fullWidth
                      disabled={formStatus === 'submitting'}
                      rightIcon={formStatus === 'submitting' ? undefined : <Send className="w-5 h-5" />}
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Submit Request'}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Office Info */}
              <Card className="bg-primary-50 border-primary-100">
                <h3 className="font-semibold text-lg mb-6">Office Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-neutral-600 text-sm whitespace-pre-line">
                        {officeInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a 
                        href={`tel:${officeInfo.phone}`}
                        className="text-primary-600 hover:underline text-sm"
                      >
                        {officeInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href={`mailto:${officeInfo.email}`}
                        className="text-primary-600 hover:underline text-sm"
                      >
                        {officeInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Hours */}
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <h3 className="font-semibold text-lg">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeInfo.hours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between text-sm">
                      <span className="text-neutral-600">{schedule.day}</span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Marchmont+Avenue,+Polmont,+Falkirk+FK2+0NZ,+UK&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Revival Care Solutions Office Location - Polmont, Falkirk"
              className="w-full"
            />
          </div>
          <p className="text-center text-neutral-600 mt-4">
            Office 3 Marchmont Avenue, Polmont, Falkirk, FK2 0NZ
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="!text-white mb-6" style={{ color: 'white' }}>Prefer to Talk Now?</h2>
            <p className="text-xl !text-white/90 mb-8" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Our care coordinators are standing by to answer your questions 
              and help you get started with a free consultation.
            </p>
            <Button 
              variant="secondary" 
              size="xl" 
              leftIcon={<Phone className="w-5 h-5" />}
            >
              Call 07544 152585
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

