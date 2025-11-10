'use client';

import Link from 'next/link';
import Logo from '@/components/Logo/Logo';

type NavItem = { href: string; label: string };
type SocialItem = { href: string; icon: string; label: string };

type Props = {
  phone?: string;
  address?: string;
  nav?: NavItem[];
  socials?: SocialItem[];
};

export default function Footer({
  phone = '+380 -------',
  address = '— —',
  nav = [
    { href: '#about', label: 'About us' },
    { href: '#products', label: 'Products' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#elevest-ai', label: 'ElevestAI' },
    { href: '#how', label: 'How it works' },
  ],
  socials = [
    { href: 'https://facebook.com', icon: 'facebook', label: 'Facebook' },
    { href: 'https://instagram.com', icon: 'instagram', label: 'Instagram' },
    { href: 'https://youtube.com', icon: 'youtube', label: 'YouTube' },
  ],
}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo />
        <div className="footer__top">

          <div className="footer__brand">
            <dl className="footer__info">
              <div className="footer__row">
                <dt className="footer__dt">Phone number:</dt>
                <dd className="footer__dd">{phone}</dd>
              </div>
              <div className="footer__row">
                <dt className="footer__dt">Address:</dt>
                <dd className="footer__dd">{address}</dd>
              </div>
            </dl>

            <ul className="footer__social">
              {socials.map((s) => (
                <li key={s.icon}>
                  <a
                    className="footer__social-link"
                    href={s.href}
                    target="_blank"
                    rel="noopener"
                    aria-label={s.label}
                  >
                    <svg width={18} height={18} aria-hidden="true">
                      <use href={`/icons/sprite.svg#${s.icon}`} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <ul className="footer__nav-list">
              {nav.map((item) => (
                <li key={item.label} className="footer__nav-item">
                  <Link href={item.href} className="footer__nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <div className="footer__copy">
            ©{year} ElevestIQ. All rights reserved.
          </div>
          <div className="footer__legal">
            <Link href="/privacy" className="footer__legal-link">
              Privacy Policy
            </Link>
            <span className="footer__sep" aria-hidden="true">
              •
            </span>
            <Link href="/terms" className="footer__legal-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
