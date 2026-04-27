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
  Award,
  Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui';

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

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Accessibility', href: '/accessibility' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/people/Revival-Care-Solutions/61588764682856/?rdid=fCmU07eFg0HV51uh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GMi4QDQRN%2F', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <>
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden pb-16 lg:pb-0">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main Footer Content - Enhanced */}
      <div className="container-custom py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column - Enhanced */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 md:mb-8 group">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 transition-transform group-hover:scale-105 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Revival Care Solutions"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </Link>
            <p className="text-white/90 mb-6 md:mb-8 max-w-md text-base sm:text-lg leading-relaxed">
              Providing compassionate, professional home care services that enhance the quality 
              of life for seniors and their families. Trusted care since 2023.
            </p>
            
            <div className="space-y-5 mb-10">
              <a href="tel:+441324868987" className="flex items-center gap-4 text-white hover:text-secondary-300 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary-800/50 flex items-center justify-center group-hover:bg-secondary-600 transition-all">
                  <Phone className="w-5 h-5 text-secondary-400 group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-lg">01324868987</span>
              </a>
              <a href="mailto:info@revivalcare.co.uk" className="flex items-center gap-4 text-white hover:text-secondary-300 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary-800/50 flex items-center justify-center group-hover:bg-secondary-600 transition-all">
                  <Mail className="w-5 h-5 text-secondary-400 group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium">info@revivalcare.co.uk</span>
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
                <span className="font-medium">Business Hours Care Available</span>
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

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-neutral-200 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] safe-area-bottom">
        <div className="flex items-stretch">
          <a
            href="tel:+441324868987"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-primary-700 font-semibold text-sm hover:bg-primary-50 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <div className="w-px bg-neutral-200" />
          <Link
            href="/consultation"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Free Assessment
          </Link>
        </div>
      </div>
    </>
  );
}
