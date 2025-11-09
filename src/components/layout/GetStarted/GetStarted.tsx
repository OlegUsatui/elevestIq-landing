'use client';

import React, { FormEvent } from 'react';
import Button from '@/components/Button/Button';

type Props = {
  onSubmit?: (data: {
    name: string;
    email: string;
    phone: string;
    role: 'investor' | 'startup';
  }) => void;
};

export default function GetStarted({ onSubmit }: Props) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    onSubmit?.({
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      phone: String(fd.get('phone') || ''),
      role: (String(fd.get('role') || 'investor') as 'investor' | 'startup'),
    });
  };

  return (
    <section className="start">
      <form className="start__card" onSubmit={handleSubmit}>
        <h2 className="start__title">Get started</h2>
        <p className="start__subtitle">
          Please use the form below to contact us. Enter your name, email, and phone number and we’ll get back to you shortly.
        </p>

        <div className="start__field">
          <label className="start__label" htmlFor="start-name">Name</label>
          <input id="start-name" name="name" type="text" className="start__input" placeholder="Name" required />
        </div>

        <div className="start__field">
          <label className="start__label" htmlFor="start-email">Email</label>
          <input id="start-email" name="email" type="email" className="start__input" placeholder="Email" required />
        </div>

        <div className="start__field">
          <label className="start__label" htmlFor="start-phone">Phone</label>
          <input id="start-phone" name="phone" type="tel" className="start__input" placeholder="Phone" />
        </div>

        <fieldset className="start__options">
          <legend className="sr-only">Role</legend>

          <label className="start__option">
            <input type="radio" name="role" value="investor" defaultChecked />
            <span>Investor</span>
          </label>

          <label className="start__option">
            <input type="radio" name="role" value="startup" />
            <span>Startup owner</span>
          </label>
        </fieldset>

        <Button as="button" variant={'primary'} className="start__submit">Send</Button>

        <p className="start__hint">
          Already have an account? <a className="start__login" href="/login">Log in</a>
        </p>
      </form>
    </section>
  );
}
