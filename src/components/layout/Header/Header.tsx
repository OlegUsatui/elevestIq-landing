'use client';

import { useEffect, useState, useCallback } from 'react';
import clsx from 'clsx';
import Button from '@/components/Button/Button';
import Icon from "@/components/Icon/Icon";

const links = [
  { href: '#about', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#elevestAi', label: 'Elevest AI' },
  { href: '#how', label: 'How it works' },
  { href: '#startFree', label: 'Start Free' },
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
    <header className={clsx('header', { 'header--open': open, 'header--scrolled': scrolled })}>
      <div className="container header__inner">
        <a href="/" className="header__logo">Elevestiq</a>

        <nav className="header__nav" aria-label="Primary">
          <ul className="header__menu">
            {links.map(l => (
              <li key={l.href} className="header__item">
                <a className="header__link" href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <Button as="a" href="#start" size="md">Start Free</Button>
        </div>

        <button
          type="button"
          className="header__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size="lg" className="header__icon" />
        </button>
      </div>

      <div id="mobile-menu" className="header__panel" role="dialog" aria-modal="true">
        <div className="header__panel-inner container">
          <div className="header__panel-header">
            <a href="/" className="header__logo" onClick={closeMenu}>Elevestiq</a>
          </div>
          <nav aria-label="Mobile">
            <ul className="header__menu">
              {links.map(l => (
                <li key={l.href} className="header__item">
                  <a className="header__link" href={l.href} onClick={closeMenu}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__panel-actions">
            <Button size="lg" onClick={closeMenu} as="a" href="#start">Start Free</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
