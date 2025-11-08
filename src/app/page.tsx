import Header from '@/components/layout/Header/Header';
import HeroPromo from '@/components/layout/HeroPromo/HeroPromo';
import AboutUs from '@/components/layout/AboutUs/AboutUs';
import Products from '@/components/layout/Products/Products';

export default function HomePage() {
  return (
    <main className="container">
      <Header />
      <HeroPromo></HeroPromo>
      <AboutUs></AboutUs>
      <Products></Products>
    </main>
  );
}
