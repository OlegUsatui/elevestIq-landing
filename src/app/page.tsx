import Header from '@/components/layout/Header/Header';
import HeroPromo from '@/components/layout/HeroPromo/HeroPromo';
import AboutUs from '@/components/layout/AboutUs/AboutUs';

export default function HomePage() {
  return (
    <main className="container">
      <Header />
      <HeroPromo></HeroPromo>
      <AboutUs></AboutUs>
    </main>
  );
}
