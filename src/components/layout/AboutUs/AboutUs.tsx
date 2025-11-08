'use client';
import React from 'react';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import clsx from 'clsx';

type Props = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  onStart?: () => void;
  onExplore?: () => void;
};

export default function AboutUs({}: Props) {
  const cards = [
    {id: 1, icon: 'target', title: 'Our Mission', text: 'Connecting investors with innovative startups to drive growth and foster success'},
    {id: 2, icon: 'heart', title: 'Our Values', text: 'Integrity, transparency, and collaboration are at the core of everything we do'},
    {id: 3, icon: 'connection', title: 'Our Story', text: 'Born from a simple insight  to simplify funding through AI, legal clarity, and connection'},
    {id: 4, icon: 'partnership', title: 'Our Partners', text: 'We collaborate with a diverse range of industry partners to amplify our impact and reach'},
  ]
  return (
    <section className="about-us">
      <SectionTitle title="About Us" />
      <ul className="about-us__cards">
        {cards.map((card) => (
          <li key={card.id} className="about-us__card">
            <div className={'card-icon'}>
              <svg width={45} height={45}>
                <use href={`/icons/sprite.svg#${card.icon}`} />
              </svg>
            </div>
            <div className="card-info">
              <div className="card-info__title">{card.title}</div>
              <div className="card-info__text">{card.text}</div>
            </div>
          </li>
        ))}

      </ul>
    </section>
  );
}
