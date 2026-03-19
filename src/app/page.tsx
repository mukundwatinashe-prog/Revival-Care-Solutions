'use client';

import { useEffect, useState } from 'react';
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
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev === 0 ? 1 : 0));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero - full-width fading video background */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              activeVideo === 0 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src="/vecteezy_midsection-of-female-nurse-checking-blood-pressure-of-woman_36474264.mp4" type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              activeVideo === 1 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src="/vecteezy_intimate-portrait-of-senior-couple-side-profile-aging_72393751.mov" type="video/quicktime" />
          </video>
        </div>
        <div className="absolute inset-0 bg-primary-900/45" />
        <div className="container-custom relative z-10 py-12 md:py-16 lg:py-20">
          <div className="max-w-2xl">
            <div>
              <Badge variant="secondary" size="md" className="mb-6">
                Compassionate Home Care Services
              </Badge>
              <h1 className="text-balance mb-6 leading-tight text-white">
                Compassionate Care for{' '}
                <span className="text-secondary-200">Your Loved Ones</span>
              </h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Professional, personalized home care services that help seniors
                maintain independence and dignity while providing families with
                peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation">
                  <Button size="xl" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    Schedule Free Consultation
                  </Button>
                </Link>
                <a href="tel:+441324868987">
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-2 border-white text-white hover:bg-white/20"
                    leftIcon={<Phone className="w-5 h-5" />}
                  >
                    01324868987
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-white/30">
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <CheckCircle className="w-5 h-5 text-secondary-300 flex-shrink-0" />
                  Care Inspectorate Registered
                </div>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <Shield className="w-5 h-5 text-secondary-300 flex-shrink-0" />
                  Background Checked
                </div>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <Clock className="w-5 h-5 text-secondary-300 flex-shrink-0" />
                  Available 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar - corporate strip */}
      <section className="py-10 bg-primary-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/15 mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - clean grid, corporate cards */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <Badge variant="primary" className="mb-4">Our Services</Badge>
            <h2 className="mb-4">Comprehensive Care Services</h2>
            <p className="text-neutral-700 text-lg">
              From personal care to companionship, we offer a full range of services
              tailored to meet the unique needs of each individual.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} hover variant="elevated" className="h-full bg-white border border-neutral-100">
                <div
                  className={`
                  inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5
                  ${service.color === 'primary' ? 'bg-primary-100' : ''}
                  ${service.color === 'secondary' ? 'bg-secondary-100' : ''}
                  ${service.color === 'accent' ? 'bg-accent-100' : ''}
                `}
                >
                  <service.icon
                    className={`
                    w-7 h-7
                    ${service.color === 'primary' ? 'text-primary-600' : ''}
                    ${service.color === 'secondary' ? 'text-secondary-600' : ''}
                    ${service.color === 'accent' ? 'text-accent-600' : ''}
                  `}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900">{service.title}</h3>
                <p className="text-neutral-700 mb-5 leading-relaxed text-sm">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About / Values - two columns, image left */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/healthcare-worker.jpg"
                    alt="Healthcare worker with mask"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 280px"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/women-talking-chairs.jpg"
                    alt="Two women talking in comfortable chairs"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 280px"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/nurse-smiling-patient.jpg"
                    alt="Nurse smiling with elderly patient in room"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 280px"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/caregiver-knitting.jpg"
                    alt="Caregiver assisting elderly women with knitting activity"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 280px"
                  />
                </div>
              </div>
            </div>
            <div>
              <Badge variant="secondary" className="mb-4">About Us</Badge>
              <h2 className="mb-6">Dedicated to Dignified Care</h2>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Revival Care Solutions is committed to providing exceptional home care
                services that enable seniors to age gracefully in the comfort of their
                own homes.
              </p>
              <p className="text-neutral-700 mb-8 leading-relaxed">
                Our diverse team of compassionate caregivers represents the communities
                we serve. We believe that quality care transcends cultural boundaries
                and that everyone deserves to be treated with respect and dignity.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 text-sm">{value.title}</h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Learn Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - simple feature grid */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <Badge variant="primary" className="mb-4">Why Choose Us</Badge>
            <h2 className="mb-4">The Revival Care Difference</h2>
            <p className="text-neutral-700 text-lg">
              We go above and beyond to ensure the highest quality of care for your loved ones.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Fully Vetted Caregivers',
                description:
                  'Comprehensive background checks including PVG checks through Disclosure Scotland, SSSC registration verification, and reference checks for every caregiver.',
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
                description:
                  'Customized care strategies developed in collaboration with families and healthcare providers.',
              },
            ].map((feature) => (
              <Card key={feature.title} variant="elevated" className="bg-white border border-neutral-100 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 mb-4">
                  <feature.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-neutral-900">{feature.title}</h3>
                <p className="text-neutral-700 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - lead generation style */}
      <section className="py-16 lg:py-24 bg-primary-700">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
              Ready to Give Your Loved One the Care They Deserve?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Schedule a free, no-obligation consultation with our care team. We&apos;ll work
              together to create a personalized care plan that meets your family&apos;s unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button
                  variant="secondary"
                  size="xl"
                  className="shadow-lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Schedule Free Consultation
                </Button>
              </Link>
              <a href="tel:+441324868987">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-2 border-white text-white hover:bg-white/10"
                  leftIcon={<Phone className="w-5 h-5" />}
                >
                  01324868987
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/90 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Available 24/7
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Response within 1 hour
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> No commitment required
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation - logos and short copy */}
      <section className="py-16 bg-primary-50 border-t border-primary-200">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <a
                href="https://www.careinspectorate.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4"
              >
                <div className="h-24 bg-white rounded-lg shadow-md border border-primary-200 flex items-center justify-center p-4 hover:shadow-lg transition-shadow">
                  <img
                    src="/logos/care-inspectorate-logo.png"
                    alt="Care Inspectorate Registered"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              </a>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Revival Care Solutions is proudly registered with the Care Inspectorate,
                ensuring we meet Scotland&apos;s national care standards for quality and safety.
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://www.sssc.uk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4"
              >
                <div className="h-24 bg-white rounded-lg shadow-md border border-primary-200 flex items-center justify-center p-4 hover:shadow-lg transition-shadow">
                  <img
                    src="/logos/sssc-logo.png"
                    alt="SSSC Registered"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              </a>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Our carers are <strong>SSSC registered</strong>, demonstrating their commitment to
                professional standards and continuous development in social care.
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://www.mygov.scot/organisations/disclosure-scotland"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4"
              >
                <div className="h-24 bg-white rounded-lg shadow-md border border-primary-200 flex items-center justify-center p-4 hover:shadow-lg transition-shadow">
                  <img
                    src="/logos/pvg-logo.png"
                    alt="PVG Checked - Disclosure Scotland"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              </a>
              <p className="text-neutral-700 text-sm leading-relaxed">
                All our carers are <strong>Protecting Vulnerable Groups (PVG) checked</strong> with
                Disclosure Scotland, ensuring the highest levels of safety and protection for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
