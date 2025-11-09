'use client';

import SectionTitle from '@/components/SectionTitle/SectionTitle';

type Step = {
  id: number;
  icon: string;
  title: string;
  text: string;
  full?: boolean;
};

type Props = {
  title?: string;
  subtitle?: string;
  steps?: Step[];
};

export default function HowItWorks({
  title = 'How It Works?',
  subtitle = 'A built-in deal assistant that helps you negotiate, sign, and close with ease.',
  steps = [
    {
      id: 1,
      icon: 'profile',
      title: 'Create a profile',
      text: 'Tell us who you are — founder or investor.',
    },
    {
      id: 2,
      icon: 'trend-up',
      title: 'Get matched',
      text: 'AI connects you with relevant startups or backers.',
    },
    {
      id: 3,
      icon: 'conversation',
      title: 'Evaluate opportunities',
      text: 'Browse profiles, terms, and auto-generated insights.',
    },
    {
      id: 4,
      icon: 'list',
      title: 'Negotiate & close',
      text: 'Use built-in tools to edit, sign, and store deals securely.',
    },
    {
      id: 5,
      icon: 'teamwork-job',
      title: 'Grow with confidence',
      text: 'Track performance and manage relationships.',
      full: true,
    },
  ],
}: Props) {
  return (
    <section className="how">
      <div className="how__wrap">
        <h2 className="how__title">{title}</h2>
        <p className="how__subtitle">{subtitle}</p>

        <ul className="how__grid">
          {steps.map((s) => (
            <li
              key={s.id}
              className={`how__step${s.full ? ' how__step--full' : ''}`}
            >
              <div className="how__grid-icon">
                <svg width={44} height={44} aria-hidden="true">
                  <use href={`/icons/sprite.svg#${s.icon}`} />
                </svg>
              </div>
              <div className="how__grid-title">{s.title}</div>
              <div className="how__grid-text">{s.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
