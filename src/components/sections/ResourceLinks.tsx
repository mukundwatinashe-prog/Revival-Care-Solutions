import { ArrowUpRight } from 'lucide-react';
import { Badge, Card } from '@/components/ui';

const featured = {
  org: 'Care Information Scotland',
  title: 'Adult Support and Protection (Scotland) Act 2007',
  description:
    'The Adult Support and Protection Act 2007 gives protection to adults at risk of harm or neglect. Learn about the Act and who it protects.',
  href: 'https://www.careinfoscotland.scot/topics/your-rights/legislation-protecting-people-in-care/adult-support-and-protection-scotland-act-2007/',
  image: 'https://www.careinfoscotland.scot/wp-content/uploads/2020/08/813.png',
};

const resources = [
  {
    org: 'Social Security Scotland',
    description:
      'Apply for and manage Scottish benefits such as Adult Disability Payment, Pension Age Disability Payment and Carer Support Payment.',
    href: 'https://www.socialsecurity.gov.scot/',
  },
  {
    org: 'Office of the Public Guardian (Scotland)',
    description:
      'Information and registers for power of attorney, guardianship and intervention orders for adults who cannot make some decisions themselves.',
    href: 'https://www.publicguardian-scotland.gov.uk/',
  },
  {
    org: 'Mental Welfare Commission for Scotland',
    description:
      'Protects the rights of people with mental illness, dementia and learning disabilities, with guidance on capacity and consent.',
    href: 'https://www.mwcscot.org.uk/',
  },
  {
    org: 'Alzheimer Scotland',
    description: 'Dementia advice, support services and a freephone helpline for people living with dementia and their families.',
    href: 'https://www.alzscot.org/',
  },
  {
    org: 'Age Scotland',
    description: 'Advice, information and a free helpline for older people and their families across Scotland.',
    href: 'https://www.agescotland.org.uk/',
  },
  {
    org: 'Carers Scotland',
    description: 'Information, advice and guidance on rights and support for unpaid carers in Scotland.',
    href: 'https://www.carersuk.org/scotland',
  },
  {
    org: 'NHS inform',
    description: "Scotland's national health information service, with trusted advice on conditions, treatments and local services.",
    href: 'https://www.nhsinform.scot/',
  },
  {
    org: 'Public Health Scotland',
    description: "Scotland's national public health body, with guidance on vaccination, winter health and infection prevention.",
    href: 'https://www.publichealthscotland.scot/',
  },
  {
    org: 'Healthcare Improvement Scotland',
    description: 'Supports quality and safety in health and care, and publishes national standards and guidance.',
    href: 'https://www.healthcareimprovementscotland.scot/',
  },
  {
    org: 'Scottish Public Services Ombudsman',
    description:
      'The final stage for complaints about public services, including the NHS and social work, once the service has finished its own process.',
    href: 'https://www.spso.org.uk/',
  },
];

export function ResourceLinks() {
  return (
    <div className="max-w-5xl mx-auto mt-16">
      <div className="text-center mb-8">
        <Badge variant="secondary" className="mb-3">Useful resources</Badge>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Know Your Rights</h2>
      </div>

      <a href={featured.href} target="_blank" rel="noopener noreferrer" className="group block mb-6">
        <Card hover variant="elevated" padding="none" className="bg-white border border-neutral-100 overflow-hidden md:flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={featured.image}
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full md:w-[340px] md:flex-shrink-0 object-cover"
          />
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <Badge variant="primary" size="sm" className="self-start mb-3">{featured.org}</Badge>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
              {featured.title}
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed mb-4">{featured.description}</p>
            <span className="inline-flex items-center gap-1 text-primary-600 font-semibold text-sm">
              Read on {featured.org} <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </Card>
      </a>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((r) => (
          <a key={r.href} href={r.href} target="_blank" rel="noopener noreferrer" className="group block">
            <Card hover variant="elevated" className="h-full bg-white border border-neutral-100">
              <h3 className="text-base font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                {r.org}
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed mb-4">{r.description}</p>
              <span className="inline-flex items-center gap-1 text-primary-600 font-semibold text-sm">
                Visit website <ArrowUpRight className="w-4 h-4" />
              </span>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
