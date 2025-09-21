'use client';
import React from 'react';

type Props = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  onStart?: () => void;
  onExplore?: () => void;
};

export default function HeroPromo({
  title = 'Where Smart Startups Meet Trusted Investors',
  subtitle = 'AI-powered matching, legal support, and secure signing — all in one platform.',
  imageSrc = '/hero-agreement.jpg',
  onStart,
  onExplore,
}: Props) {
  return (
    <section className="hero">
      <div className="hero__card">
        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>

          <div className="hero__actions">
            <button className="btn btn--primary" onClick={onStart}>
              Start Free
            </button>
            <button className="btn btn--secondary" onClick={onExplore}>
              Explore How It Works
            </button>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <img src={imageSrc} alt="" />
        </div>
      </div>
    </section>
  );
}
