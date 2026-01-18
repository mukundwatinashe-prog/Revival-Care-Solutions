'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Linkedin,
  ArrowRight,
  Award
} from 'lucide-react';
import { Button, Input } from '@/components/ui';

const services = [
  { label: 'Personal Care', href: '/services/personal-care' },
  { label: 'Companionship', href: '/services/companionship' },
  { label: 'Medication Management', href: '/services/medication-management' },
  { label: 'Mobility Assistance', href: '/services/mobility-assistance' },
  { label: 'Meal Preparation', href: '/services/meal-preparation' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

const resources = [
  { label: 'Blog', href: '/resources/blog' },
  { label: 'Care Guides', href: '/resources/guides' },
  { label: 'FAQ', href: '/resources/faq' },
  { label: 'Insurance Info', href: '/resources/insurance' },
];

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Accessibility', href: '/accessibility' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
      </div>
      
      {/* Newsletter Section - Enhanced */}
      <div className="border-b border-primary-700/50 relative z-10">
        <div className="container-custom py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-3xl font-semibold mb-3">
                Stay Updated with Care Tips
              </h3>
              <p className="text-white/90 text-lg">
                Subscribe to our newsletter for caregiving resources and company updates.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-800/80 border-primary-700 text-white placeholder:text-white/50 sm:w-80 shadow-lg"
                required
              />
              <Button variant="secondary" className="shadow-lg hover:shadow-xl transition-all" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content - Enhanced */}
      <div className="container-custom py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column - Enhanced */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="relative w-36 h-36 transition-transform group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Revival Care Solutions"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </Link>
            <p className="text-white/90 mb-8 max-w-md text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.95)' }}>
              Providing compassionate, professional home care services that enhance the quality 
              of life for seniors and their families. Trusted care since 2023.
            </p>
            
            <div className="space-y-5 mb-10">
              <a href="tel:+447544152585" className="flex items-center gap-4 text-white hover:text-secondary-300 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary-800/50 flex items-center justify-center group-hover:bg-secondary-600 transition-all">
                  <Phone className="w-5 h-5 text-secondary-400 group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-lg">07544 152585</span>
              </a>
              <a href="tel:+4413124868987" className="flex items-center gap-4 text-white hover:text-secondary-300 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary-800/50 flex items-center justify-center group-hover:bg-secondary-600 transition-all">
                  <Phone className="w-5 h-5 text-secondary-400 group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-lg">013124 868987</span>
              </a>
              <a href="mailto:milton@revivalcare.co.uk" className="flex items-center gap-4 text-white hover:text-secondary-300 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary-800/50 flex items-center justify-center group-hover:bg-secondary-600 transition-all">
                  <Mail className="w-5 h-5 text-secondary-400 group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium">milton@revivalcare.co.uk</span>
              </a>
              <div className="flex items-start gap-4 text-white/90">
                <div className="w-12 h-12 rounded-xl bg-primary-800/50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-secondary-400" />
                </div>
                <span className="leading-relaxed">Office 3 Marchmont Avenue<br />Polmont, Falkirk, FK2 0NZ</span>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-12 h-12 rounded-xl bg-primary-800/50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-secondary-400" />
                </div>
                <span className="font-medium">24/7 Care Available</span>
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl bg-primary-800/50 flex items-center justify-center text-white/80 hover:bg-secondary-600 hover:text-white transition-all shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column - Enhanced */}
          <div>
            <h4 className="font-semibold text-xl mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-white/90 hover:text-secondary-300 transition-all flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span className="group-hover:translate-x-2 transition-transform">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column - Enhanced */}
          <div>
            <h4 className="font-semibold text-xl mb-6 text-white">Company</h4>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-white/90 hover:text-secondary-300 transition-all flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span className="group-hover:translate-x-2 transition-transform">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column - Enhanced */}
          <div>
            <h4 className="font-semibold text-xl mb-6 text-white">Resources</h4>
            <ul className="space-y-4">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-white/90 hover:text-secondary-300 transition-all flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    <span className="group-hover:translate-x-2 transition-transform">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Accreditation Logos */}
      <div className="border-t border-primary-800 bg-primary-950/50">
        <div className="container-custom py-10">
          <div className="flex flex-col items-center gap-8">
            <h4 className="text-white/90 text-sm font-semibold uppercase tracking-wider">
              Accredited & Registered
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-10">
              {/* Care Inspectorate Logo */}
              <div className="flex items-center justify-center group">
                <div className="relative w-40 h-24 bg-white rounded-xl p-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-all ring-2 ring-white/20 group-hover:ring-white/40">
                  <Image
                    src="/logos/care-inspectorate-logo.png"
                    alt="Care Inspectorate Registered"
                    width={140}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Falkirk Council Logo */}
              <div className="flex items-center justify-center group">
                <div className="relative w-40 h-24 bg-white rounded-xl p-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-all ring-2 ring-white/20 group-hover:ring-white/40">
                  <Image
                    src="/logos/falkirk-council-logo.png"
                    alt="Falkirk Council"
                    width={140}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Enhanced */}
      <div className="border-t border-primary-700/50 relative z-10">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm text-center md:text-left font-medium">
              © {new Date().getFullYear()} Revival Care Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/80 hover:text-secondary-300 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
