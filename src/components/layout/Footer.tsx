'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight
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
  { label: 'Testimonials', href: '/testimonials' },
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
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-primary-800">
        <div className="container-custom py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-2">
                Stay Updated with Care Tips
              </h3>
              <p className="text-white/80">
                Subscribe to our newsletter for caregiving resources and company updates.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-800 border-primary-700 text-white placeholder:text-white/50 sm:w-72"
                required
              />
              <Button variant="secondary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-32 h-32">
                <Image
                  src="/logo.png"
                  alt="Revival Care Solutions"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-white/80 mb-6 max-w-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Providing compassionate, professional home care services that enhance the quality 
              of life for seniors and their families. Trusted care since 2023.
            </p>
            
            <div className="space-y-4 mb-8">
              <a href="tel:+447544152585" className="flex items-center gap-3 text-white hover:text-secondary-400 transition-colors">
                <Phone className="w-5 h-5 text-secondary-400" />
                <span>07544 152585</span>
              </a>
              <a href="mailto:milton@revivalcare.co.uk" className="flex items-center gap-3 text-white hover:text-secondary-400 transition-colors">
                <Mail className="w-5 h-5 text-secondary-400" />
                <span>milton@revivalcare.co.uk</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5" />
                <span>Office 3 Marchmont Avenue<br />Polmont, Falkirk, FK2 0NZ</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5 text-secondary-400" />
                <span>24/7 Care Available</span>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-800 flex items-center justify-center text-white/70 hover:bg-secondary-600 hover:text-white transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-white/80 hover:text-secondary-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-white/80 hover:text-secondary-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-white/80 hover:text-secondary-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Revival Care Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 hover:text-secondary-400 transition-colors"
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
