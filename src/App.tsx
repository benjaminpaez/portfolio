import { About } from './components/About';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { SocialLinks } from './components/BarLinks';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode
  id: string
}

function AnimatedSection({ children, id }: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const opacity = inView ? 1 : 0;
  const translateY = inView ? 0 : 50;

  return (
    <motion.div
      ref={ref}
      id={id} 
      initial={{ opacity: 0, translateY: 5 }}
      animate={{ opacity, translateY }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
}

function App() {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
  
    if (section) {
      const currentScroll = window.scrollY
  
      const targetPosition = section.getBoundingClientRect().top + currentScroll
      const miniScrollAmount = 75
      const adjustedScroll = targetPosition - miniScrollAmount
  
      window.scrollTo({ top: adjustedScroll, behavior: 'smooth' })
    }
  };
  

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <AnimatedSection id='inicio'>
        <Home />
      </AnimatedSection>
      
      <AnimatedSection id='about'>
        <About />
      </AnimatedSection>
      <SocialLinks />
      <AnimatedSection id='proyectos'>
        <Portfolio />
      </AnimatedSection>
      <AnimatedSection id='habilidades' >
        <Skills />
      </AnimatedSection>
      <Footer />
    </>
  );
}

export default App;
