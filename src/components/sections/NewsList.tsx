'use client';

import { useState, useSyncExternalStore } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Badge, Card } from '@/components/ui';
import type { NewsItem, NewsSourceName } from '@/lib/news';

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

const TWO_COLUMN_QUERY = '(min-width: 768px)';

function useColumnCount(): 1 | 2 {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(TWO_COLUMN_QUERY);
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    },
    () => (window.matchMedia(TWO_COLUMN_QUERY).matches ? 2 : 1),
    () => 2
  );
}

// Rough card height so each article can go in the shorter column, keeping columns level.
function estimateHeight(item: NewsItem): number {
  const titleLines = Math.ceil(item.title.length / 36);
  const summaryLines = item.summary ? Math.min(3, Math.ceil(item.summary.length / 48)) : 0;
  return 150 + titleLines * 28 + summaryLines * 22 + (item.tag ? 22 : 0) + (item.image ? 215 : 0);
}

// Newest first, each into the currently shorter column, so there are no big gaps between cards.
function splitIntoColumns(items: NewsItem[], count: number): NewsItem[][] {
  const columns: NewsItem[][] = Array.from({ length: count }, () => []);
  const heights = new Array(count).fill(0);
  for (const item of items) {
    const shortest = heights.indexOf(Math.min(...heights));
    columns[shortest].push(item);
    heights[shortest] += estimateHeight(item);
  }
  return columns;
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="group block">
      <Card hover variant="elevated" padding="none" className="bg-white border border-neutral-100 overflow-hidden">
        {item.image && (
          <div className="aspect-[16/9] bg-primary-50 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt=""
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="primary" size="sm">{item.source}</Badge>
            <time dateTime={item.date} className="text-xs text-neutral-500">
              {dateFormat.format(new Date(item.date))}
            </time>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
            {item.title}
          </h3>
          {item.tag && <p className="text-xs text-neutral-500 mb-2">{item.tag}</p>}
          {item.summary && (
            <p className="text-sm text-neutral-700 leading-relaxed mb-4 line-clamp-3">{item.summary}</p>
          )}
          <span className="inline-flex items-center gap-1 text-primary-600 font-semibold text-sm">
            Read on {item.source} <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </Card>
    </a>
  );
}

export function NewsList({ items, sources }: { items: NewsItem[]; sources: NewsSourceName[] }) {
  const [filter, setFilter] = useState<NewsSourceName | 'All'>('All');
  const columnCount = useColumnCount();
  const visible = filter === 'All' ? items : items.filter((i) => i.source === filter);
  const columns = splitIntoColumns(visible, columnCount);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter news by source">
        {(['All', ...sources] as const).map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setFilter(name)}
            aria-pressed={filter === name}
            className={`px-4 py-2 min-h-[44px] rounded-full text-sm font-medium border transition-colors ${
              filter === name
                ? 'bg-primary-600 text-white border-primary-600'
                : 'bg-white text-primary-700 border-primary-200 hover:bg-primary-50'
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="text-center text-neutral-600">No articles available right now. Please check back soon.</p>
      ) : (
        <div className="flex gap-6 items-start max-w-5xl mx-auto">
          {columns.map((column, i) => (
            <div key={i} className="flex-1 min-w-0 flex flex-col gap-6">
              {column.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
