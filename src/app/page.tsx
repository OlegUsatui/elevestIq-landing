import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';

export default function HomePage() {
  return (
    <main className="container" style={{ paddingBlock: '32px' }}>
      <h1 style={{ fontSize: 'var(--fs-xl)', fontWeight: 800, margin: 0 }}>Elevestiq</h1>
      <p style={{ marginTop: '12px', fontSize: 'var(--fs-lg)', maxWidth: 560 }}>
        Explore how it works or start free. Components follow BEM and mobile-first.
      </p>

      <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
        <Button variant="outline" size="lg" as="a" href="#how">Explore How It Works</Button>
        <Button variant="primary" size="lg">Start Free</Button>
      </div>

      <div style={{ marginTop: '28px', maxWidth: 420, display: 'grid', gap: '12px' }}>
        <Input placeholder="Name" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Phone" type="tel" />
      </div>
    </main>
  );
}
