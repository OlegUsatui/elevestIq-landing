import { JSX } from 'react';

export default function SectionTitle({ title = '' }: { title: string }): JSX.Element {

  return (
    <h2 className='section-title'>
      {title}
    </h2>
  );
}
