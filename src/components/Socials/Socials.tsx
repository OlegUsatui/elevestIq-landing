'use client';

import Link from 'next/link';
import React from 'react';
import Icon from '@/components/Icon/Icon';

type SocialItem = {
  href: string;
  label: string;
  name: 'facebook' | 'instagram' | 'youtube';
};

type Props = {
  items?: SocialItem[];
  className?: string;
};

export default function Socials({
  items = [
    { href: '#', label: 'Facebook', name: 'facebook' },
    { href: '#', label: 'Instagram', name: 'instagram' },
    { href: '#', label: 'YouTube', name: 'youtube' },
  ],

  className = '',
}: Props) {
  return (
    <nav className={`social ${className}`} aria-label="Social media">
      {items.map(({ href, label, name }) => (
        <Link
          key={name}
          href={href}
          aria-label={label}
          className="social__btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name={name} className="social__icon" />
        </Link>
      ))}
    </nav>
  );
}
