import { Metadata } from 'next';
import { Badge } from '@/components/ui';
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
  const { items, sources, fetchedAt } = await getNewsFeed();
  const unavailable = sources.filter((s) => !s.ok);
  const updated = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'Europe/London',
  }).format(new Date(fetchedAt));

  return (
    <div>
      <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">News</Badge>
            <h1 className="mb-6">Latest Care Sector News</h1>
            <p className="text-xl text-neutral-600">
              This month&apos;s updates from the SSSC, Disclosure Scotland and the Care Inspectorate,
              all in one place. If a source hasn&apos;t posted this month, we show its most recent articles.
            </p>
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

          <p className="text-center text-xs text-neutral-500 mt-8 max-w-2xl mx-auto">
            Articles belong to the organisations named on each card and open on their own websites.
            This page checks for new articles every 4 hours. Last checked {updated}.
          </p>
        </div>
      </section>
    </div>
  );
}
