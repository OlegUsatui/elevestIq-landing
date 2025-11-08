'use client';

import React from 'react';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SectionSubtitle from '@/components/SectionSubtitle/SectionSutitle';
import Button from '@/components/Button/Button';

type Item = { id: number; icon: string; title: string; text: string };

type Props = {
  title?: string;
  subtitle?: string;
  onStartInvestors?: () => void;
  onStartStartups?: () => void;
};

export default function Products({
  title = 'Products',
  subtitle = 'Whether you’re raising or funding — ElevestIQ gives you the edge to connect and grow.',
  onStartInvestors,
  onStartStartups,
}: Props) {
  const investors: Item[] = [
    {
      id: 1,
      icon: 'laptop',
      title: 'Curated Deal Flow',
      text: 'AI-matched startup suggestions tailored to your interests',
    },
    {
      id: 2,
      icon: 'data-center',
      title: 'Due Diligence Insights',
      text: 'In-depth data and analytical tools for evaluating investments',
    },
    {
      id: 3,
      icon: 'communication-bubble-chat',
      title: 'Seamless Communication',
      text: 'Connect with founders directly within our secure platform',
    },
    {
      id: 4,
      icon: 'invoice',
      title: 'Legal Workflow Integration',
      text: 'Built-in legal support and contract signing',
    },
  ];

  const startups: Item[] = [
    {
      id: 1,
      icon: 'loupe-search',
      title: 'Targeted Investor Matches',
      text: 'Find investors aligned with your industry and stage',
    },
    {
      id: 2,
      icon: 'performance-graph',
      title: 'Enhanced Due Diligence',
      text: 'Present metrics and progress in a structured format',
    },
    {
      id: 3,
      icon: 'secure',
      title: 'Secure Document Sharing',
      text: 'Share confidential information in a safe environment',
    },
    {
      id: 4,
      icon: 'legal-aid',
      title: 'Legal Document Automation',
      text: 'Automate contract creation and negotiation',
    },
  ];

  return (
    <section className="products" id="products">
      <SectionTitle text={title} />
      <SectionSubtitle text={subtitle} />

      <div className="products__grid">
        <article className="products__card products__card--investors">
          <h3 className="products__title">For Investors</h3>

          <ul className="products__list">
            {investors.map((item) => (
              <li key={item.id} className="products__item">
                <div className="card-icon">
                  <svg width={44} height={44} aria-hidden="true">
                    <use href={`/icons/sprite.svg#${item.icon}`} />
                  </svg>
                </div>

                <div className="card-info">
                  <div className="card-info__title">{item.title}</div>
                  <div className="card-info__text">{item.text}</div>
                </div>
              </li>
            ))}
          </ul>

          <Button
            as="button"
            variant="accent"
            onClick={onStartInvestors}
          >
            Start Free
          </Button>
        </article>

        <article className="products__card products__card--startups">
          <h3 className="products__title">For Startups</h3>

          <ul className="products__list">
            {startups.map((item) => (
              <li key={item.id} className="products__item">
                <div className="card-icon">
                  <svg width={44} height={44} aria-hidden="true">
                    <use href={`/icons/sprite.svg#${item.icon}`} />
                  </svg>
                </div>

                <div className="card-info">
                  <div className="card-info__title">{item.title}</div>
                  <div className="card-info__text">{item.text}</div>
                </div>
              </li>
            ))}
          </ul>

          <Button
            as="button"
            variant="outline"
            onClick={onStartStartups}
          >
            Start Free
          </Button>
        </article>
      </div>
    </section>
  );
}
