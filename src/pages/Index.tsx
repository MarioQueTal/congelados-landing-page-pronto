
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuSection from '@/components/MenuSection';
import Differentials from '@/components/Differentials';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Que Tal Congelados | Refeições congeladas, práticas e saborosas</title>
        <meta name="description" content="Refeições congeladas de qualidade, com ingredientes naturais e preparo artesanal. Praticidade e sabor para o seu dia a dia." />
        <meta name="keywords" content="refeições congeladas, alimentação prática, comida congelada, ultracongelamento, comida saudável" />
      </Helmet>

      <Header />
      
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Differentials />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
