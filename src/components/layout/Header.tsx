'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { 
  Menu, 
  X, 
  Phone, 
  ChevronDown,
  Users,
  BookOpen,
  Mail,
  Briefcase,
  Home,
  Shield,
  Clock,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui';

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  { label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
  {
    label: 'Services',
    href: '/services',
    icon: <Heart className="w-4 h-4" />,
    children: [
      { label: 'Personal Care', href: '/services/personal-care' },
      { label: 'Companionship', href: '/services/companionship' },
      { label: 'Medication Management', href: '/services/medication-management' },
      { label: 'Mobility Assistance', href: '/services/mobility-assistance' },
      { label: 'Meal Preparation', href: '/services/meal-preparation' },
      { label: 'Light Housekeeping', href: '/services/light-housekeeping' },
    ],
  },
  { label: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
  { label: 'Caregivers', href: '/caregivers', icon: <Shield className="w-4 h-4" /> },
  { label: 'Resources', href: '/resources', icon: <BookOpen className="w-4 h-4" /> },
  { label: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-500 text-white py-2 px-4">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a 
              href="tel:+447544152585" 
              className="flex items-center gap-2 hover:text-primary-100 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">07544 152585</span>
              <span className="sm:hidden">Call Us</span>
            </a>
            <div className="hidden md:flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Available 24/7</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/careers" 
              className="flex items-center gap-2 hover:text-primary-100 transition-colors"
            >
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Careers</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={clsx(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
            : 'bg-white py-3'
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-28 h-28 transition-transform group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Revival Care Solutions"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={clsx(
                      'flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium text-neutral-700',
                      'hover:bg-primary-50 hover:text-primary-700 transition-colors'
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={clsx(
                          'w-4 h-4 transition-transform',
                          openDropdown === item.label && 'rotate-180'
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 w-64"
                      >
                        <div className="bg-white rounded-xl shadow-xl border border-neutral-100 overflow-hidden">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="outline" size="md">
                Free Consultation
              </Button>
              <Button variant="primary" size="md" leftIcon={<Phone className="w-4 h-4" />}>
                Call Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-neutral-700" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-700" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2">
                    <div className="relative w-20 h-20">
                      <Image
                        src="/logo.png"
                        alt="Revival Care"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="font-serif font-bold text-lg text-neutral-950">Menu</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-neutral-700" />
                  </button>
                </div>

                <div className="space-y-2">
                  {navigation.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => !item.children && setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                      >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </Link>
                      {item.children && (
                        <div className="ml-8 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-neutral-600 hover:text-primary-700 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  <Button variant="outline" fullWidth>
                    Free Consultation
                  </Button>
                  <Button variant="primary" fullWidth leftIcon={<Phone className="w-4 h-4" />}>
                    Call Now
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <a
                    href="tel:+447544152585"
                    className="flex items-center gap-3 text-primary-600 font-medium"
                  >
                    <Phone className="w-5 h-5" />
                    07544 152585
                  </a>
                  <p className="mt-2 text-sm text-neutral-500">
                    Available 24 hours a day, 7 days a week
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
