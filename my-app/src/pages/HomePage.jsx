import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import BrandSection from '../components/BrandSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

import apexBg from '../images/apex-bg.jpg';
import argusBg from '../images/argus-bg.jpg';
import dionysosBg from '../images/dionysos-bg.jpg';
import contactBg from '../images/contact-bg.jpg'
import AllWorkSection from '../components/AllWorkSection';


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      
      <BrandSection 
        id="section3" 
        brandName="APEX ARCHITECTS"
        image={apexBg} 
      />

      <BrandSection 
        id="section4" 
        brandName="DIONYSOS RESORTS"
        image={dionysosBg} 
      />
      
      <BrandSection 
        id="section5" 
        brandName="ARGUS EYEWEAR"
        image={argusBg} 
      />

      <AllWorkSection/>
      
      <ContactSection
      id="section6"
      image={contactBg} />
      <Footer />
    </>
  );
};

export default HomePage;