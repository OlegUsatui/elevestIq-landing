import type { Metadata } from 'next';
import '../styles/global.scss';

export const metadata: Metadata = {
  title: 'ElevestIQ',
  description: 'ElevestIQ landing'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  );
}
