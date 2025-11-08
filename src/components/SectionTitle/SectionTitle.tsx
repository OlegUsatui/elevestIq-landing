import { JSX } from 'react';

export default function SectionTitle({ text = '' }: { text: string }): JSX.Element {

  return (
    <h2 className='section-title'>
      {text}
    </h2>
  );
}
