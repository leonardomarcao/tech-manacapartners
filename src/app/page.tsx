import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesCarousel from '@/components/ServicesCarousel';
import SolutionsCTA from '@/components/SolutionsCTA';
import EmailCTA from '@/components/EmailCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesCarousel />
      <EmailCTA />
      <Footer />
    </div>
  );
}
