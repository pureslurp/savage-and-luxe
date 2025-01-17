//src/app/page.tsx
import Header from '@/components/layout/Header';
import HeroBanner from '@/components/home/HeroBanner';
import BrandsSection from '@/components/home/BrandsSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
    </main>
  );
}