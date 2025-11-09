'use client';

import React from 'react';

type Feature = { id: number; text: string };

type Props = {
  title?: string;
  features?: Feature[];
};

export default function ElevestAI({
  title = 'Meet ElevestAI',
  features = [
    {
      id: 1,
      text: 'Intelligent Matching — AI pairs you with ideal startups or investors',
    },
    {
      id: 2,
      text: 'Contract Drafting — Auto-generate term sheets & SAFE docs',
    },
    { id: 3, text: 'Risk Detection — Spot red flags instantly' },
    {
      id: 4,
      text: 'Performance Insights — AI-powered deal analytics at a glance',
    },
  ],
}: Props) {
  return (
    <section className="eai" id="elevest-ai">
      <div className="eai__wrap">
        <div className="eai__stack" aria-hidden="true">
          <div className="eai__card eai__card--mid" />
          <div className="eai__card eai__card--back" />
          <div className="eai__panel eai__panel--front">
            <p className="eai__lead">
              A built-in deal assistant that helps you negotiate, sign, and close
              with ease.
            </p>

            <ul className="eai__list">
              {features.map((f) => (
                <li key={f.id} className="eai__item">
                <span className="eai__tick">
                  <svg width={20} height={20} aria-hidden="true">
                    <use href="/icons/sprite.svg#check" />
                  </svg>
                </span>
                  <span className="eai__text">{f.text}</span>
                </li>
              ))}
            </ul>

            <div className="eai__logo">
              <svg width={110} height={90} aria-hidden="true">
                <use href="/icons/sprite.svg#product-logo" />
              </svg>
            </div>
          </div>

        </div>

        <h2 className="eai__title">{title}</h2>

      </div>
    </section>
  );
}
