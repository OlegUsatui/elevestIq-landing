'use client';

import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
import Socials from '@/components/Socials/Socials';

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
      <div className="main-container">
        <div className="footer__container">
          <div className="footer__logo">
            <Logo theme={'light'} />
          </div>
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

              <Socials></Socials>
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
              <Link href="#" className="footer__legal-link">
                Privacy Policy
              </Link>

              <Link href="#" className="footer__legal-link">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
