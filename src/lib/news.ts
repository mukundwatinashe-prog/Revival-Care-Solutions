export const NEWS_REVALIDATE_SECONDS = 4 * 60 * 60;

export type NewsSourceName =
  | 'SSSC'
  | 'Disclosure Scotland'
  | 'Care Inspectorate'
  | 'Carers Trust';

export interface NewsItem {
  id: string;
  source: NewsSourceName;
  title: string;
  summary?: string;
  tag?: string;
  url: string;
  date: string;
}

export interface NewsSourceStatus {
  name: NewsSourceName;
  homepage: string;
  ok: boolean;
}

export interface NewsFeed {
  items: NewsItem[];
  sources: NewsSourceStatus[];
  fetchedAt: string;
}

const PER_SOURCE_LIMIT = 10;
const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';
const PAGE_HEADERS = {
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-GB,en;q=0.9',
};

const MONTHS: Record<string, number> = {
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
};

const NAMED_ENTITIES: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“',
  ndash: '–', mdash: '—', hellip: '…', pound: '£',
};

function decodeEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, name) => NAMED_ENTITIES[name.toLowerCase()] ?? m);
}

function cleanText(html: string): string {
  return decodeEntities(html.replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();
}

function parseHumanDate(text: string): string | null {
  const m = text.match(/(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})/);
  if (!m) return null;
  const month = MONTHS[m[2].toLowerCase()];
  if (month === undefined) return null;
  return new Date(Date.UTC(Number(m[3]), month, Number(m[1]))).toISOString();
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function fetchOptions(extra: RequestInit = {}): RequestInit & { next: { revalidate: number } } {
  return {
    ...extra,
    headers: { 'User-Agent': USER_AGENT, ...PAGE_HEADERS, ...(extra.headers ?? {}) },
    signal: AbortSignal.timeout(10000),
    next: { revalidate: NEWS_REVALIDATE_SECONDS },
  };
}

async function fetchSssc(): Promise<NewsItem[]> {
  const api = 'https://appuksomcapi.azurewebsites.net/api';
  const authRes = await fetch(`${api}/Auth/public`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': USER_AGENT,
    },
    body: 'hostDomainName=news.sssc.uk.com',
    signal: AbortSignal.timeout(10000),
  });
  if (!authRes.ok) throw new Error(`SSSC auth ${authRes.status}`);
  const { token } = (await authRes.json()) as { token: string };

  const searchRes = await fetch(
    `${api}/story/search?categoryName=&searchTerms=&pageNumber=0&pageSize=${PER_SOURCE_LIMIT}&orderBy=DATE_DESC`,
    fetchOptions({ headers: { Authorization: `Bearer ${token}` } })
  );
  if (!searchRes.ok) throw new Error(`SSSC search ${searchRes.status}`);
  const data = (await searchRes.json()) as {
    list: { id: string; displayDate: string; headLine: string; leadParagraph?: string }[];
  };

  return data.list.map((s) => ({
    id: `sssc-${s.id}`,
    source: 'SSSC' as const,
    title: cleanText(s.headLine),
    summary: s.leadParagraph ? cleanText(s.leadParagraph) : undefined,
    url: `https://news.sssc.uk.com/press-releases/${s.id}/${slugify(s.headLine)}`,
    date: new Date(s.displayDate).toISOString(),
  }));
}

async function fetchCareInspectorate(): Promise<NewsItem[]> {
  const res = await fetch('https://www.careinspectorate.scot/news-and-media', fetchOptions());
  if (!res.ok) throw new Error(`Care Inspectorate ${res.status}`);
  const html = await res.text();
  const match = html.match(/<script data-search-config type="application\/json">([\s\S]*?)<\/script>/);
  if (!match) throw new Error('Care Inspectorate: listing data not found');
  const config = JSON.parse(match[1]) as {
    initialResults: {
      id: string;
      title: string;
      url: string;
      date: string;
      news_types_labels?: string[];
      areas_labels?: string[];
    }[];
  };

  return config.initialResults.slice(0, PER_SOURCE_LIMIT).map((r) => ({
    id: `ci-${r.id}`,
    source: 'Care Inspectorate' as const,
    title: cleanText(r.title),
    tag: [...(r.news_types_labels ?? []), ...(r.areas_labels ?? [])].slice(0, 2).join(' · ') || undefined,
    url: new URL(r.url, 'https://www.careinspectorate.scot').toString(),
    date: new Date(r.date).toISOString(),
  }));
}

async function fetchCarersTrustFromRss(): Promise<NewsItem[]> {
  const res = await fetch('https://carers.org/blogfeed.xml', fetchOptions());
  if (!res.ok) throw new Error(`Carers Trust RSS ${res.status}`);
  const xml = await res.text();
  const entries = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

  const items: NewsItem[] = [];
  for (const entry of entries) {
    const title = entry.match(/<title>([\s\S]*?)<\/title>/)?.[1];
    const link = entry.match(/<link>\s*([\s\S]*?)\s*<\/link>/)?.[1];
    const pubDate = entry.match(/<pubDate>\s*([\s\S]*?)\s*<\/pubDate>/)?.[1];
    const date = pubDate ? new Date(pubDate) : null;
    if (!title || !link || !date || Number.isNaN(date.getTime())) continue;
    const description = entry.match(/<description>([\s\S]*?)<\/description>/)?.[1] ?? '';
    const summary = cleanText(description.replace(/<!\[CDATA\[|\]\]>/g, ''));
    items.push({
      id: `ct-${link}`,
      source: 'Carers Trust',
      title: cleanText(title),
      summary: summary ? summary.slice(0, 280) : undefined,
      url: link,
      date: date.toISOString(),
    });
  }
  return items.slice(0, PER_SOURCE_LIMIT);
}

async function fetchCarersTrustFromPage(): Promise<NewsItem[]> {
  const res = await fetch('https://carers.org/news-and-media/news', fetchOptions());
  if (!res.ok) throw new Error(`Carers Trust ${res.status}`);
  const html = await res.text();
  const articles = html.match(/<article class="masonry-item">[\s\S]*?<\/article>/g) ?? [];

  const items: NewsItem[] = [];
  for (const block of articles) {
    const href = block.match(/<a href="([^"]+)"/)?.[1];
    const title = block.match(/<h3 class="[^"]*heading">([\s\S]*?)<\/h3>/)?.[1];
    const dateText = block.match(/comment-card__date">([^<]+)</)?.[1];
    const date = dateText ? parseHumanDate(dateText) : null;
    if (!href || !title || !date) continue;
    const summary = block.match(/<p>([\s\S]*?)<\/p>/)?.[1];
    const tag = block.match(/comment-card__label">([^<]+)</)?.[1];
    items.push({
      id: `ct-${href}`,
      source: 'Carers Trust',
      title: cleanText(title),
      summary: summary ? cleanText(summary) : undefined,
      tag: tag ? cleanText(tag) : undefined,
      url: new URL(href, 'https://carers.org/').toString(),
      date,
    });
  }
  return items.slice(0, PER_SOURCE_LIMIT);
}

async function fetchCarersTrust(): Promise<NewsItem[]> {
  try {
    const items = await fetchCarersTrustFromPage();
    if (items.length > 0) return items;
  } catch (error) {
    console.error('Carers Trust page fetch failed, trying RSS:', error);
  }
  return fetchCarersTrustFromRss();
}

async function fetchDisclosureScotland(): Promise<NewsItem[]> {
  const res = await fetch('https://www.disclosure.gov.scot/news', fetchOptions());
  if (!res.ok) throw new Error(`Disclosure Scotland ${res.status}`);
  const html = await res.text();
  const results = html.match(/<li class="ds_search-result">[\s\S]*?<\/li>/g) ?? [];

  const items: NewsItem[] = [];
  for (const block of results) {
    const link = block.match(/<a class="ds_search-result__link" href="([^"]+)">([\s\S]*?)<\/a>/);
    const dateText = block.match(/ds_metadata__value">([^<]+)</)?.[1];
    const date = dateText ? parseHumanDate(dateText) : null;
    if (!link || !date) continue;
    const summary = block.match(/ds_search-result__summary">([\s\S]*?)<\/p>/)?.[1];
    items.push({
      id: `ds-${link[1]}`,
      source: 'Disclosure Scotland',
      title: cleanText(link[2]),
      summary: summary ? cleanText(summary) : undefined,
      url: new URL(link[1], 'https://www.disclosure.gov.scot').toString(),
      date,
    });
  }
  return items.slice(0, PER_SOURCE_LIMIT);
}

const SOURCES: {
  name: NewsSourceName;
  homepage: string;
  fetcher: () => Promise<NewsItem[]>;
}[] = [
  { name: 'SSSC', homepage: 'https://news.sssc.uk.com/press-releases', fetcher: fetchSssc },
  { name: 'Disclosure Scotland', homepage: 'https://www.disclosure.gov.scot/news', fetcher: fetchDisclosureScotland },
  { name: 'Care Inspectorate', homepage: 'https://www.careinspectorate.scot/news-and-media', fetcher: fetchCareInspectorate },
  { name: 'Carers Trust', homepage: 'https://carers.org/news-and-media/news', fetcher: fetchCarersTrust },
];

export async function getNewsFeed(): Promise<NewsFeed> {
  const settled = await Promise.allSettled(SOURCES.map((s) => s.fetcher()));

  const items: NewsItem[] = [];
  const sources: NewsSourceStatus[] = settled.map((result, i) => {
    const { name, homepage } = SOURCES[i];
    if (result.status === 'fulfilled') {
      items.push(...result.value);
      if (result.value.length === 0) console.error(`News fetch for ${name} returned no articles`);
      return { name, homepage, ok: result.value.length > 0 };
    }
    console.error(`News fetch failed for ${name}:`, result.reason);
    return { name, homepage, ok: false };
  });

  items.sort((a, b) => b.date.localeCompare(a.date));
  return { items, sources, fetchedAt: new Date().toISOString() };
}
