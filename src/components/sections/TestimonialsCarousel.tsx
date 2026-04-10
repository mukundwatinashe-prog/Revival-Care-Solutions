'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Badge } from '@/components/ui';

const INTERVAL_MS = 12000;

const testimonials = [
  {
    id: '1',
    paragraphs: [
      'Revival provides care for our loved one four times a day. As we live locally, we visit about five times a week. We have always found the staff professional and reliable; they carry out their tasks responsibly and efficiently. Revival’s staff treat our loved one with respect, dignity, and kindness.',
      'When staff have questions about care, they contact us without hesitation—for example if supplies are low or bedding needs changing urgently.',
      'When necessary, they go above and beyond. At short notice they have travelled several miles to a pharmacy in difficult conditions to collect medication that should have arrived the day before. They have also stayed with our loved one until emergency services arrived after an alarm was raised.',
      'Our experience has been positive and we would happily recommend Revival as an excellent care provider.',
    ],
    attribution: 'Anonymous family member',
  },
  {
    id: '2',
    paragraphs: [
      'Communication channels are consistently maintained, so family members stay fully informed about our loved one’s wellbeing. This was especially clear after falls—updates were prompt, clear, and reassuring. Immediate action was taken to secure the home when needed, showing vigilance and a strong commitment to safety.',
      'The branch manager is exceptionally responsive, addressing queries in a timely and professional way regardless of day or time. Their reliability gives family members living at a distance extra confidence and peace of mind.',
    ],
    attribution: 'Anonymous family member',
  },
  {
    id: '3',
    paragraphs: [
      'All managers and carers we have met are diligent, efficient, and caring. The team were outstanding on the day an ambulance was required. We are very grateful and appreciate all that they do. We know we will be contacted if anything is needed.',
    ],
    attribution: 'Anonymous family member',
  },
] as const;

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex(((i % testimonials.length) + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const t = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(t);
  }, []);

  const current = testimonials[index];

  return (
    <section
      className="py-16 lg:py-24 bg-gradient-to-b from-primary-50 to-white border-y border-primary-100"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <Badge variant="secondary" className="mb-4">
            Testimonials
          </Badge>
          <h2 id="testimonials-heading" className="mb-4">
            What families say
          </h2>
          <p className="text-neutral-700 text-lg">
            Anonymous feedback from relatives—we are grateful for the trust families place in us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div
            className="rounded-2xl bg-white border border-primary-100 shadow-lg shadow-primary-900/5 px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12"
            aria-live="polite"
            aria-atomic="true"
          >
            <Quote
              className="w-10 h-10 text-secondary-400 mb-6 opacity-90"
              aria-hidden
              strokeWidth={1.25}
            />

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4"
              >
                {current.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-neutral-700 leading-relaxed text-base sm:text-lg font-serif"
                  >
                    {p}
                  </p>
                ))}
                <p className="pt-4 text-sm font-medium text-primary-800 border-t border-neutral-100">
                  — {current.attribution}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(i)}
                className={`
                  h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
                  ${i === index ? 'w-10 bg-primary-600' : 'w-2.5 bg-primary-200 hover:bg-primary-300'}
                `}
                aria-label={`Show testimonial ${i + 1} of ${testimonials.length}`}
                aria-current={i === index ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
