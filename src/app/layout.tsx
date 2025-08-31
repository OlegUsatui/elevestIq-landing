import type { Metadata } from 'next';
import '../styles/global.scss';

export const metadata: Metadata = {
  title: 'ElevestIQ',
  description: 'ElevestIQ landing'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
    </head>
    <body>{children}</body>
    </html>
  );
}
