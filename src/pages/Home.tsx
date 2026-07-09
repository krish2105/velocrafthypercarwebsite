import Hero from '../components/Hero';
import CarShowcase from '../components/CarShowcase';
import ThreeCarScene from '../components/ThreeCarScene';
import FeatureSection from '../components/FeatureSection';
import PerformanceStats from '../components/PerformanceStats';
import GallerySection from '../components/GallerySection';
import HeritageSection from '../components/HeritageSection';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <CarShowcase />
      <FeatureSection />
      <ThreeCarScene />
      <PerformanceStats />
      <GallerySection />
      <HeritageSection />
      <CTASection />
    </div>
  );
}
