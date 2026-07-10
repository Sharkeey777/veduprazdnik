import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Formats from './components/Formats';
import Showreel from './components/Showreel';
import Gallery from './components/Gallery';
import Steps from './components/Steps';
import Trust from './components/Trust';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StudioCredit from './components/StudioCredit';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Formats />
        <Showreel />
        <Gallery />
        <Steps />
        <Trust />
        <Reviews />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
      <StudioCredit />
    </>
  );
}
