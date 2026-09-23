'use client';

import Image from 'next/image';
import { Award, Quote } from 'lucide-react';
import { Badge } from '@/components/ui';

const employeesOfTheQuarter = [
  {
    id: 'q3-2026',
    quarter: 'Q3 2026',
    name: 'Judith',
    photoSrc: '/images/employee-of-the-quarter-q3-2026.jpg',
    photoAlt: 'Judith receiving her Employee of the Quarter certificate',
    quote:
      'I would like to say thank you \u{1F64F}\u{1F3FC} for noticing and appreciating the work I do, will always do my best as I want to see the company grow.',
  },
] as const;

export function OurTeam() {
  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="our-team-heading">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <Badge variant="primary" className="mb-4">
            Our Team
          </Badge>
          <h2 id="our-team-heading" className="mb-4">
            Employee of the Quarter
          </h2>
          <p className="text-neutral-700 text-lg">
            Celebrating the caregivers who go above and beyond for our clients and their families.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {employeesOfTheQuarter.map((employee) => (
            <div
              key={employee.id}
              className="rounded-xl bg-neutral-50 border border-neutral-100 shadow-md overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={employee.photoSrc}
                  alt={employee.photoAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="inline-flex items-center gap-1.5 shadow">
                    <Award className="w-3.5 h-3.5" aria-hidden />
                    {employee.quarter}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">{employee.name}</h3>
                <div className="flex gap-2">
                  <Quote
                    className="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5 opacity-90"
                    aria-hidden
                    strokeWidth={1.25}
                  />
                  <p className="text-neutral-700 leading-relaxed text-sm font-serif">
                    {employee.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
