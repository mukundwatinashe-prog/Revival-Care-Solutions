import { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  FileText,
  HelpCircle,
  Download,
  ArrowRight,
  Calendar,
  Clock,
  User,
} from 'lucide-react';
import { Button, Card, Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Access helpful resources including care guides, blog articles, FAQs, and downloadable materials for families and caregivers.',
};

const resourceCategories = [
  {
    icon: BookOpen,
    title: 'Blog & Articles',
    description: 'Expert insights on elderly care, health tips, and family support.',
    href: '/resources/blog',
    count: '50+ Articles',
  },
  {
    icon: FileText,
    title: 'Care Guides',
    description: 'Comprehensive guides for understanding and planning care.',
    href: '/resources/guides',
    count: '12 Guides',
  },
  {
    icon: HelpCircle,
    title: 'FAQ',
    description: 'Answers to commonly asked questions about our services.',
    href: '/resources/faq',
    count: '30+ Questions',
  },
  {
    icon: Download,
    title: 'Downloads',
    description: 'Printable checklists, forms, and reference materials.',
    href: '/resources/downloads',
    count: '15+ Resources',
  },
];

const featuredArticles = [
  {
    title: 'Understanding the Signs: When Your Parent Needs Home Care',
    excerpt: 'Learn to recognize the key indicators that suggest a loved one may benefit from professional home care assistance.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    category: 'Getting Started',
    date: 'January 3, 2026',
    readTime: '8 min read',
    author: 'Dr. Sarah Chen',
    href: '/resources/blog/signs-parent-needs-home-care',
  },
  {
    title: 'How to Talk to Your Aging Parent About Accepting Help',
    excerpt: 'Sensitive strategies for approaching the difficult conversation about accepting care assistance.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
    category: 'Family Support',
    date: 'December 28, 2025',
    readTime: '6 min read',
    author: 'Elena Rodriguez',
    href: '/resources/blog/talking-to-aging-parent',
  },
  {
    title: 'The Complete Guide to Medicare and Home Care Coverage',
    excerpt: 'Navigate the complexities of Medicare coverage for home care services and understand your options.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    category: 'Insurance & Finances',
    date: 'December 20, 2025',
    readTime: '12 min read',
    author: 'Marcus Williams',
    href: '/resources/blog/medicare-home-care-coverage',
  },
];

const popularGuides = [
  {
    title: 'First-Time Family Caregiver Handbook',
    description: 'Everything you need to know when becoming a caregiver for a loved one.',
    pages: 45,
  },
  {
    title: 'Home Safety Assessment Checklist',
    description: 'A room-by-room guide to making a home safer for seniors.',
    pages: 12,
  },
  {
    title: 'Understanding Dementia Care',
    description: 'Comprehensive guide to caring for someone with dementia or Alzheimer\'s.',
    pages: 38,
  },
  {
    title: 'Choosing the Right Home Care Provider',
    description: 'Key questions to ask and factors to consider when selecting care.',
    pages: 20,
  },
];

const topFAQs = [
  {
    question: 'How quickly can care services begin?',
    answer: 'In most cases, we can begin services within 24-48 hours of the initial assessment. Emergency situations may be accommodated even sooner.',
  },
  {
    question: 'What is the cost of home care services?',
    answer: 'Costs vary based on the level of care needed, hours of service, and specific requirements. We provide free consultations with detailed, transparent pricing.',
  },
  {
    question: 'Are your caregivers insured and bonded?',
    answer: 'Yes, all Revival Care caregivers are fully insured and bonded. We also carry comprehensive liability insurance for your peace of mind.',
  },
  {
    question: 'Can I meet the caregiver before services begin?',
    answer: 'Absolutely! We encourage families to meet their assigned caregiver before care begins. We\'ll find a new match if it\'s not the right fit.',
  },
];

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Resources</Badge>
            <h1 className="mb-6">Helpful Resources for Families</h1>
            <p className="text-xl text-neutral-600 mb-8">
              Access expert insights, practical guides, and helpful tools to support 
              your caregiving journey. We&apos;re here to help you make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((category) => (
              <Link key={category.title} href={category.href}>
                <Card hover className="h-full text-center group">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-100 mb-4 group-hover:scale-110 transition-transform">
                    <category.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                  <p className="text-neutral-600 text-sm mb-3">{category.description}</p>
                  <Badge variant="neutral" size="sm">{category.count}</Badge>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <Badge variant="secondary" className="mb-4">Latest Articles</Badge>
              <h2>Featured from Our Blog</h2>
            </div>
            <Link href="/resources/blog">
              <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View All Articles
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Link key={article.title} href={article.href}>
                <Card hover padding="none" className="h-full overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="primary">{article.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guides & FAQs */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Popular Guides */}
            <div>
              <div className="flex justify-between items-end mb-8">
                <div>
                  <Badge variant="accent" className="mb-4">Care Guides</Badge>
                  <h2 className="text-2xl">Popular Guides</h2>
                </div>
                <Link href="/resources/guides" className="text-primary-600 hover:text-primary-700 font-medium">
                  View All →
                </Link>
              </div>

              <div className="space-y-4">
                {popularGuides.map((guide) => (
                  <Card key={guide.title} variant="bordered" className="group cursor-pointer hover:border-primary-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-accent-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-primary-600 transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-neutral-600 mt-1">{guide.description}</p>
                        <p className="text-xs text-neutral-400 mt-2">{guide.pages} pages</p>
                      </div>
                      <Download className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 transition-colors" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Top FAQs */}
            <div>
              <div className="flex justify-between items-end mb-8">
                <div>
                  <Badge variant="primary" className="mb-4">FAQ</Badge>
                  <h2 className="text-2xl">Common Questions</h2>
                </div>
                <Link href="/resources/faq" className="text-primary-600 hover:text-primary-700 font-medium">
                  View All →
                </Link>
              </div>

              <div className="space-y-4">
                {topFAQs.map((faq) => (
                  <Card key={faq.question} variant="bordered">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-neutral-600 text-sm">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-primary-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">Stay Informed</h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter for the latest caregiving tips, resources, 
              and updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-secondary-500"
                required
              />
              <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

