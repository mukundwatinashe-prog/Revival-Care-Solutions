import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Briefcase } from 'lucide-react';
import { Button, Badge } from '@/components/ui';
import { OurTeam } from '@/components/sections/OurTeam';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the caregivers behind Revival Care Solutions and see who we’re celebrating as Employee of the Quarter.',
};

export default function OurTeamPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Our Team</Badge>
            <h1 className="mb-6">The People Behind Our Care</h1>
            <p className="text-xl text-neutral-600 mb-8">
              Our caregivers are the heart of Revival Care Solutions. Here, we celebrate
              the team members who go above and beyond for our clients and their families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers">
                <Button size="lg" rightIcon={<Briefcase className="w-5 h-5" />}>
                  Join Our Team
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  About Revival Care
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <OurTeam />
    </div>
  );
}
