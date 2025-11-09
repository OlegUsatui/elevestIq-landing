'use client';

import { useEffect, useState, useCallback } from 'react';
import clsx from 'clsx';
import Icon from '@/components/Icon/Icon';
import Logo from '@/components/Logo/Logo';
import Socials from '@/components/Socials/Socials';

const links = [
  { href: '#about', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#elevestAi', label: 'Elevest AI' },
  { href: '#how', label: 'How it works' },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={clsx('header', {
        'header--open': open,
        'header--scrolled': scrolled,
      })}
    >
      <Logo />

      <div className="header__inner">
        <nav className="header__nav" aria-label="Primary">
          <ul className="header__menu">
            {links.map((l) => (
              <li key={l.href} className="header__item">
                <a className="header__link" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <button className="header__actions-button">Start Free</button>
        </div>

        <button
          type="button"
          className="header__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon
            name={open ? 'close' : 'menu'}
            className={`header__action-icon ${open ? 'header__action-icon--close' : 'header__action-icon--menu'}`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className="header__panel"
        role="dialog"
        aria-modal="true"
      >
        <div className="header__panel-inner container">
          <nav aria-label="Mobile">
            <ul className="header__menu">
              {links.map((l) => (
                <li key={l.href} className="header__item">
                  <a className="header__link" href={l.href} onClick={closeMenu}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__socials">
            <Socials></Socials>
          </div>
        </div>
      </div>
    </header>
  );
}
