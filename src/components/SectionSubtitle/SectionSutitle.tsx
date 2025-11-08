import { JSX } from 'react';

export default function SectionSubtitle({ text = '' }: { text: string }): JSX.Element {

  return (
    <p className='section-subtitle'>
      {text}
    </p>
  );
}
