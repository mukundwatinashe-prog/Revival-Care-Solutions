import { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { Badge, Card } from '@/components/ui';
import { NewsList } from '@/components/sections/NewsList';
import { getNewsFeed } from '@/lib/news';

// Must be a literal: 4 hours (keep in sync with NEWS_REVALIDATE_SECONDS in src/lib/news.ts)
export const revalidate = 14400;

export const metadata: Metadata = {
  title: 'News',
  description:
    'This month\u2019s news from the SSSC, Disclosure Scotland and the Care Inspectorate, gathered in one place for carers and families.',
};

export default async function NewsPage() {
  const { items, sources } = await getNewsFeed();
  const unavailable = sources.filter((s) => !s.ok);

  return (
    <div>
      <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">News</Badge>
            <h1>Latest Care Sector News</h1>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="container-custom">
          <NewsList items={items} sources={sources.map((s) => s.name)} />

          {unavailable.length > 0 && (
            <p className="text-center text-sm text-neutral-600 mt-8">
              We couldn&apos;t load the latest from{' '}
              {unavailable.map((s, i) => (
                <span key={s.name}>
                  {i > 0 && ', '}
                  <a href={s.homepage} target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">
                    {s.name}
                  </a>
                </span>
              ))}{' '}
              just now &mdash; please visit their sites directly.
            </p>
          )}

          <div className="max-w-5xl mx-auto mt-16">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-3">Useful resources</Badge>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Know Your Rights</h2>
            </div>
            <a
              href="https://www.careinfoscotland.scot/topics/your-rights/legislation-protecting-people-in-care/adult-support-and-protection-scotland-act-2007/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card hover variant="elevated" padding="none" className="bg-white border border-neutral-100 overflow-hidden md:flex">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://www.careinfoscotland.scot/wp-content/uploads/2020/08/813.png"
                  alt=""
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full md:w-[340px] md:flex-shrink-0 object-cover"
                />
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <Badge variant="primary" size="sm" className="self-start mb-3">Care Information Scotland</Badge>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Adult Support and Protection (Scotland) Act 2007
                  </h3>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                    The Adult Support and Protection Act 2007 gives protection to adults at risk of harm or
                    neglect. Learn about the Act and who it protects.
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary-600 font-semibold text-sm">
                    Read on Care Information Scotland <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Card>
            </a>
          </div>

          <p className="text-center text-xs text-neutral-500 mt-8 max-w-2xl mx-auto">
            Articles belong to the organisations named on each card and open on their own websites.
          </p>
        </div>
      </section>
    </div>
  );
}
