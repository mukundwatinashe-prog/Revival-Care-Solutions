'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Search,
  Phone,
  ArrowRight,
  HelpCircle,
  DollarSign,
  Users,
  Shield,
  Clock,
  Heart,
} from 'lucide-react';
import { Button, Card, Badge, Input } from '@/components/ui';

const faqCategories = [
  { id: 'getting-started', label: 'Getting Started', icon: HelpCircle },
  { id: 'costs-insurance', label: 'Costs & Insurance', icon: DollarSign },
  { id: 'caregivers', label: 'Our Caregivers', icon: Users },
  { id: 'services', label: 'Services', icon: Heart },
  { id: 'safety-quality', label: 'Safety & Quality', icon: Shield },
  { id: 'scheduling', label: 'Scheduling', icon: Clock },
];

const faqs = [
  {
    category: 'getting-started',
    questions: [
      {
        q: 'How do I get started with Revival Care?',
        a: 'Getting started is easy! Simply call us at 07544 152585 or fill out our online contact form. We\'ll schedule a free, no-obligation consultation to assess your needs and create a personalized care plan. Most families can begin receiving care within 24-48 hours of the assessment.',
      },
      {
        q: 'What happens during the initial assessment?',
        a: 'During the assessment, a care coordinator will visit the home to meet with the client and family members. We\'ll discuss care needs, medical conditions, daily routines, preferences, and goals. This helps us create a customized care plan and match the most suitable caregiver.',
      },
      {
        q: 'Is there a minimum number of hours required?',
        a: 'We offer flexible scheduling to meet your needs. While our minimum visit is typically 4 hours, we can discuss options that work best for your situation. We offer everything from a few hours a week to 24/7 live-in care.',
      },
      {
        q: 'What areas do you serve?',
        a: 'We proudly serve the entire metropolitan area and surrounding counties. Visit our Service Areas page for a complete list of communities we cover. If you\'re unsure if we serve your area, please call us and we\'ll let you know.',
      },
    ],
  },
  {
    category: 'costs-insurance',
    questions: [
      {
        q: 'What is the cost of home care services?',
        a: 'Costs vary based on the level of care needed, hours of service, and specific requirements. We provide transparent pricing during your free consultation. On average, hourly rates range from $25-$45 depending on the type of care required.',
      },
      {
        q: 'Does Medicare cover home care services?',
        a: 'Medicare typically covers skilled nursing care and therapy services prescribed by a doctor, but not custodial care (help with daily activities). We can help you understand what coverage you may have and explore all available options.',
      },
      {
        q: 'Do you accept long-term care insurance?',
        a: 'Yes, we work with most major long-term care insurance providers. Our team can help you understand your policy benefits and assist with the claims process to maximize your coverage.',
      },
      {
        q: 'Are there any hidden fees?',
        a: 'Absolutely not. We believe in complete transparency. All costs are clearly explained upfront, and you\'ll receive detailed invoices. There are no hidden fees, cancellation penalties, or surprise charges.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept various payment methods including private pay (credit card, check, ACH transfer), long-term care insurance, veterans benefits (Aid & Attendance), and Medicaid waiver programs in some areas.',
      },
    ],
  },
  {
    category: 'caregivers',
    questions: [
      {
        q: 'How do you screen your caregivers?',
        a: 'All caregivers undergo comprehensive screening including criminal background checks at federal, state, and county levels, drug testing, reference verification, credential verification, and in-depth interviews. Only about 1 in 10 applicants are accepted.',
      },
      {
        q: 'Are your caregivers employees or contractors?',
        a: 'All our caregivers are W-2 employees of Revival Care, not independent contractors. This means they are fully insured, bonded, and covered by workers\' compensation. We handle all taxes, training, and supervision.',
      },
      {
        q: 'What if my caregiver is sick or unavailable?',
        a: 'We maintain a reliable backup system to ensure continuity of care. If your regular caregiver is unavailable, we\'ll arrange for a qualified replacement caregiver who is familiar with the care plan.',
      },
      {
        q: 'Can I request a specific caregiver or change caregivers?',
        a: 'Absolutely. We carefully match caregivers to clients, but we understand that personal compatibility is important. If you\'re not satisfied with your caregiver match, we\'ll work with you to find a better fit at no additional cost.',
      },
      {
        q: 'What training do caregivers receive?',
        a: 'All caregivers complete our comprehensive 40+ hour training program covering personal care, safety, emergency response, communication, and more. They also receive ongoing education and specialized training as needed.',
      },
    ],
  },
  {
    category: 'services',
    questions: [
      {
        q: 'What services do you offer?',
        a: 'We offer a full range of home care services including personal care, companionship, medication reminders, mobility assistance, meal preparation, transportation, and more. Care plans are customized to each client\'s specific needs.',
      },
      {
        q: 'Do you provide medical care or nursing services?',
        a: 'Our caregivers provide non-medical assistance with daily activities. For medical care, we can coordinate with home health agencies that provide skilled nursing. Some of our caregivers are also CNAs or have nursing backgrounds.',
      },
      {
        q: 'Can caregivers administer medications?',
        a: 'Caregivers can provide medication reminders and help organize medications, but they cannot administer medications. The client takes their own medications with the caregiver\'s prompting and supervision.',
      },
      {
        q: 'Do you provide specialized dementia or Alzheimer\'s care?',
        a: 'Yes, we have caregivers specially trained in dementia and Alzheimer\'s care. They understand the unique challenges of memory care and use proven techniques to provide safe, compassionate support.',
      },
      {
        q: 'Can caregivers take clients to appointments or outings?',
        a: 'Yes, our caregivers can provide transportation to medical appointments, social activities, shopping, and other outings. They can use the client\'s vehicle or their own, depending on arrangements.',
      },
    ],
  },
  {
    category: 'safety-quality',
    questions: [
      {
        q: 'Are you licensed and insured?',
        a: 'Yes, Revival Care Solutions is fully licensed by the state as a home care agency. We carry comprehensive general liability insurance and workers\' compensation coverage. All caregivers are bonded for your protection.',
      },
      {
        q: 'How do you ensure quality of care?',
        a: 'We maintain quality through careful caregiver selection, comprehensive training, regular supervisory visits, client feedback surveys, and 24/7 on-call support. Our care coordinators regularly check in to ensure satisfaction.',
      },
      {
        q: 'What happens if there\'s an emergency?',
        a: 'Caregivers are trained in emergency response and will call 911 immediately if needed, then contact family members and our office. We have 24/7 on-call support for any urgent situations.',
      },
      {
        q: 'How do you protect client privacy?',
        a: 'We take privacy seriously and comply with all applicable privacy laws. All caregivers sign confidentiality agreements, and we never share client information without consent. Our systems are secure and HIPAA-compliant.',
      },
    ],
  },
  {
    category: 'scheduling',
    questions: [
      {
        q: 'How flexible is the scheduling?',
        a: 'Very flexible! We offer care ranging from a few hours per week to 24/7 live-in care. You can adjust the schedule as needs change. We can accommodate regular schedules, occasional care, or varying weekly schedules.',
      },
      {
        q: 'What if I need to cancel or change a scheduled visit?',
        a: 'We understand that plans change. We ask for 24-48 hours notice for schedule changes when possible, but we can usually accommodate last-minute changes as well. There are no penalties for schedule adjustments.',
      },
      {
        q: 'Do you provide overnight or 24-hour care?',
        a: 'Yes, we offer overnight care, 24-hour care, and live-in care options. Live-in caregivers stay in the home and provide around-the-clock support. We\'ll help you determine which option best fits your needs.',
      },
      {
        q: 'How quickly can you start services?',
        a: 'In most cases, we can begin services within 24-48 hours of completing the initial assessment. For urgent situations, we may be able to start even sooner. Call us to discuss your timeline.',
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (question: string) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(question)) {
      newOpenQuestions.delete(question);
    } else {
      newOpenQuestions.add(question);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const filteredFAQs = searchQuery
    ? faqs.flatMap(cat => cat.questions.filter(q => 
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
      ))
    : faqs.find(cat => cat.category === activeCategory)?.questions || [];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">FAQ</Badge>
            <h1 className="mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-neutral-600 mb-8">
              Find answers to common questions about our home care services. 
              Can&apos;t find what you&apos;re looking for? Contact us anytime.
            </p>
            
            {/* Search */}
            <div className="max-w-lg mx-auto">
              <Input
                type="search"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftIcon={<Search className="w-5 h-5" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Category Navigation */}
            {!searchQuery && (
              <div className="lg:col-span-1">
                <nav className="sticky top-24 space-y-2">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                        activeCategory === category.id
                          ? 'bg-primary-100 text-primary-700'
                          : 'hover:bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      <category.icon className="w-5 h-5" />
                      <span className="font-medium">{category.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            )}

            {/* Questions */}
            <div className={searchQuery ? 'lg:col-span-4' : 'lg:col-span-3'}>
              {searchQuery && (
                <p className="text-neutral-600 mb-6">
                  {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
                </p>
              )}
              
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <Card
                    key={faq.q}
                    variant="bordered"
                    padding="none"
                    className="overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(faq.q)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                    >
                      <span className="font-semibold pr-4">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-neutral-400 transition-transform flex-shrink-0 ${
                          openQuestions.has(faq.q) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openQuestions.has(faq.q) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-6 pb-6 text-neutral-600">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                ))}
              </div>

              {filteredFAQs.length === 0 && (
                <Card className="text-center py-12">
                  <HelpCircle className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No results found</h3>
                  <p className="text-neutral-600 mb-4">
                    We couldn&apos;t find any questions matching your search.
                  </p>
                  <Button variant="outline" onClick={() => setSearchQuery('')}>
                    Clear Search
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Still Have Questions?</h2>
            <p className="text-xl text-neutral-600 mb-8">
              Our care team is here to help. Reach out anytime for personalized 
              answers to your questions about home care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Contact Us
                </Button>
              </Link>
              <a href="tel:+447544152585">
                <Button variant="outline" size="lg" leftIcon={<Phone className="w-5 h-5" />}>
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

