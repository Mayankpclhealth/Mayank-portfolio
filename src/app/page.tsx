import Background from '@/components/Background';
import Effects from '@/components/Effects';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Work from '@/components/Work';
import ExperienceSection from '@/components/ExperienceSection';
import Care from '@/components/Care';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Background />
      <Effects />
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Work />
        <ExperienceSection />
        <Care />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
