import { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  ExternalLink,
  Download,
  ArrowRight,
  BookOpen,
  Shield,
  Heart,
  Users,
} from 'lucide-react';
import { Button, Card, Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Care Guides',
  description: 'Comprehensive guides and resources for understanding and planning home care for your loved ones.',
};

const externalResources = [
  {
    title: 'Care Inspectorate Hub',
    description: 'The official Care Inspectorate resource hub for Scotland. Access guidance, publications, and quality frameworks for social care and support services.',
    href: 'https://hub.careinspectorate.com/',
    icon: Shield,
    badge: 'Official Resource',
  },
  {
    title: 'NHS Inform - Care at Home',
    description: 'Information from NHS Scotland about care at home services, what to expect, and how to access support.',
    href: 'https://www.nhsinform.scot/care-support-and-rights/care-at-home',
    icon: Heart,
    badge: 'NHS Scotland',
  },
  {
    title: 'Age Scotland',
    description: 'Advice and support for older people in Scotland, including information about care options and rights.',
    href: 'https://www.ageuk.org.uk/scotland/',
    icon: Users,
    badge: 'Charity',
  },
];

const downloadableGuides = [
  {
    title: 'First-Time Family Caregiver Handbook',
    description: 'Everything you need to know when becoming a caregiver for a loved one, including practical tips and emotional support strategies.',
    pages: 45,
    category: 'Getting Started',
  },
  {
    title: 'Home Safety Assessment Checklist',
    description: 'A comprehensive room-by-room guide to making a home safer for elderly loved ones, reducing fall risks and hazards.',
    pages: 12,
    category: 'Safety',
  },
  {
    title: 'Understanding Dementia Care',
    description: 'A compassionate guide to caring for someone with dementia or Alzheimer\'s, including communication tips and daily care routines.',
    pages: 38,
    category: 'Specialist Care',
  },
  {
    title: 'Choosing the Right Home Care Provider',
    description: 'Key questions to ask and important factors to consider when selecting a home care service for your family.',
    pages: 20,
    category: 'Planning',
  },
  {
    title: 'Managing Medications at Home',
    description: 'A practical guide to medication management, including tips for organisation, reminders, and working with healthcare professionals.',
    pages: 15,
    category: 'Health',
  },
  {
    title: 'Nutrition Guide for Elderly Care',
    description: 'Understanding nutritional needs for older adults, meal planning tips, and managing dietary requirements.',
    pages: 22,
    category: 'Nutrition',
  },
];

export default function CareGuidesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Care Guides</Badge>
            <h1 className="mb-6">Resources for Family Caregivers</h1>
            <p className="text-xl text-neutral-600 mb-8">
              Access comprehensive guides, trusted external resources, and practical tools 
              to help you provide the best possible care for your loved ones.
            </p>
            <Link href="/consultation">
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Get Personalised Advice
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Official Resources */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Trusted Resources</Badge>
            <h2 className="mb-4">Official Care Resources</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Access trusted information from official organisations and regulatory bodies in Scotland.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {externalResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card hover className="h-full group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <resource.icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <Badge variant="accent" size="sm">{resource.badge}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">{resource.description}</p>
                  <div className="flex items-center gap-2 text-primary-600 font-medium">
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">Downloadable Guides</Badge>
            <h2 className="mb-4">Our Care Guides</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Free downloadable guides created by our care experts to help you 
              navigate the caregiving journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadableGuides.map((guide) => (
              <Card key={guide.title} hover className="group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 text-accent-600" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="neutral" size="sm" className="mb-2">{guide.category}</Badge>
                    <h3 className="font-semibold group-hover:text-primary-600 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mt-2">{guide.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-neutral-400">{guide.pages} pages</span>
                      <div className="flex items-center gap-1 text-primary-600 text-sm font-medium">
                        <Download className="w-4 h-4" />
                        Download
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Need Personalised Guidance?</h2>
            <p className="text-xl text-white/90 mb-8">
              Our care team is here to help you understand your options and create 
              a care plan tailored to your family&apos;s unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Schedule Free Consultation
                </Button>
              </Link>
              <a href="tel:+447544152585">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10"
                >
                  Call 07544 152585
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
