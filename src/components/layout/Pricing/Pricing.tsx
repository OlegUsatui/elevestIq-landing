'use client';

import React from 'react';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import SectionSubtitle from '@/components/SectionSubtitle/SectionSutitle';
import Button from '@/components/Button/Button';
import clsx from 'clsx';

type Tier = {
  id: 'starter' | 'pro' | 'partner';
  name: string;
  price: string; // без знаку $ і /month
  per: string; // напр. "month"
  features: string[];
  successFee: string;
};

type Props = {
  title?: string;
  subtitle?: string;
  onStart?: (tierId: Tier['id']) => void;
};

export default function Pricing({
  title = 'Pricing',
  subtitle = 'Simple, fair and growth-friendly. Start for free — pay as you grow.',
  onStart,
}: Props) {
  const tiers: Tier[] = [
    {
      id: 'starter',
      name: 'Starter',
      price: '0',
      per: 'month',
      features: [
        'Create a profile',
        'Public profile visibility',
        'Match with other users',
        'Access agreement templates (SAFE, Term Sheet)',
        'KYC verification',
      ],
      successFee: '3% of closed deal',
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '49',
      per: 'month',
      features: [
        'Matching priority',
        'AI-powered project & investor recommendations',
        'Full agreement editor',
        'Sign documents (eSign)',
        'Export analytics',
      ],
      successFee: '1.5% of closed deal',
    },
    {
      id: 'partner',
      name: 'Partner',
      price: '199',
      per: 'month',
      features: [
        'White-label portal',
        'Custom templates & onboarding',
        'CRM functionality',
        'API integration',
        'Private demo-days',
      ],
      successFee: 'Per custom agreement',
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <SectionTitle text={title} />
      <SectionSubtitle text={subtitle} />

      <ul className="pricing__cards">
        {tiers.map((t) => (
          <li key={t.id} className="pricing__card">
            <div
              className={clsx('pricing__head', t.id === 'pro' ? 'pro' : null)}
            >
              <h3 className="pricing__card-title">{t.name}</h3>
            </div>

            <div className="pricing__card-body">
              <div
                className="pricing__price"
                aria-label={`$${t.price} per ${t.per}`}
              >
                <span className="pricing__currency">$</span>
                <span className="pricing__amount">{t.price}</span>
                <span className="pricing__per">/{t.per}</span>
              </div>

              <ul className="pricing__features">
                {t.features.map((f, i) => (
                  <li key={i} className="pricing__feature">
                    {f}
                  </li>
                ))}
              </ul>

              <div className="pricing__note">
                <span className="pricing__note-label">Success fee: </span>
                {t.successFee}
              </div>

              <Button
                as="button"
                variant="accent"
                onClick={() => onStart?.(t.id)}
              >
                Start Free
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
