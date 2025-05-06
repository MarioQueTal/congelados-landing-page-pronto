
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToMenu = () => {
    const menu = document.getElementById('cardapio');
    if (menu) {
      menu.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5500000000000', '_blank');
  };

  return (
    <section id="inicio" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1920')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Refeições congeladas, práticas e saborosas para o seu dia a dia
          </h1>
          <p className="text-white/90 text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Conheça nosso cardápio de refeições preparadas com ingredientes naturais e tecnologia de ultracongelamento
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button onClick={scrollToMenu} className="btn-primary text-lg">
              Ver Cardápio
            </Button>
            <Button onClick={handleWhatsApp} className="btn-whatsapp text-lg">
              Peça pelo WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
