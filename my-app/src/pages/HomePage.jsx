import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import BrandSection from '../components/BrandSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      
      <BrandSection 
        id="section3" 
        brandName="APEX ARCHITECTS" 
      />

      <BrandSection 
        id="section4" 
        brandName="DIONYSOS RESORTS" 
      />
      
      <BrandSection 
        id="section5" 
        brandName="ARGUS EYEWEAR" 
      />
      
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;