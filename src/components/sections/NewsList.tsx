'use client';

import { useState } from 'react';
import { ArrowUpRight, Newspaper } from 'lucide-react';
import { Badge, Card } from '@/components/ui';
import type { NewsItem, NewsSourceName } from '@/lib/news';

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function NewsList({ items, sources }: { items: NewsItem[]; sources: NewsSourceName[] }) {
  const [filter, setFilter] = useState<NewsSourceName | 'All'>('All');
  const visible = filter === 'All' ? items : items.filter((i) => i.source === filter);

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
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {visible.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card hover variant="elevated" padding="none" className="h-full bg-white border border-neutral-100 overflow-hidden">
                <div className="aspect-[16/9] bg-primary-50 flex items-center justify-center overflow-hidden">
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Newspaper className="w-10 h-10 text-primary-300" aria-hidden />
                  )}
                </div>
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
          ))}
        </div>
      )}
    </div>
  );
}
