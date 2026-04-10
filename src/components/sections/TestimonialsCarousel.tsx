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
      className="py-12 lg:py-16 bg-gradient-to-b from-primary-50 to-white border-y border-primary-100"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-7 lg:mb-9">
          <Badge variant="secondary" className="mb-3">
            Testimonials
          </Badge>
          <h2 id="testimonials-heading" className="mb-2 text-2xl sm:text-3xl font-semibold tracking-tight">
            What families say
          </h2>
          <p className="text-neutral-700 text-sm sm:text-base">
            Anonymous feedback from relatives—we are grateful for the trust families place in us.
          </p>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <div
            className="rounded-xl bg-white border border-primary-100 shadow-md shadow-primary-900/5 px-5 py-6 sm:px-7 sm:py-7 md:px-8 md:py-8"
            aria-live="polite"
            aria-atomic="true"
          >
            <Quote
              className="w-7 h-7 sm:w-8 sm:h-8 text-secondary-400 mb-4 opacity-90"
              aria-hidden
              strokeWidth={1.25}
            />

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-3"
              >
                {current.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-neutral-700 leading-relaxed text-sm sm:text-base font-serif"
                  >
                    {p}
                  </p>
                ))}
                <p className="pt-3 text-xs sm:text-sm font-medium text-primary-800 border-t border-neutral-100">
                  — {current.attribution}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(i)}
                className={`
                  h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
                  ${i === index ? 'w-8 bg-primary-600' : 'w-2 bg-primary-200 hover:bg-primary-300'}
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
