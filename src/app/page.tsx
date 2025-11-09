import Header from '@/components/layout/Header/Header';
import HeroPromo from '@/components/layout/HeroPromo/HeroPromo';
import AboutUs from '@/components/layout/AboutUs/AboutUs';
import Products from '@/components/layout/Products/Products';
import Pricing from '@/components/layout/Pricing/Pricing';
import ElevestAI from '@/components/layout/ElevestAI/ElevestAI';
import HowItWorks from '@/components/layout/HowItWorks/HowItWorks';

export default function HomePage() {
  return (
    <main className="container">
      <Header />
      <HeroPromo />
      <AboutUs />
      <Products />
      <Pricing />
      <ElevestAI />
      <HowItWorks />
    </main>
  );
}
