
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateTo = (sectionId: string) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5500000000000', '_blank');
  };

  const handleOrder = () => {
    // Replace with actual e-commerce URL
    window.open('https://www.quetalcongelados.com.br/loja', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="#inicio" className="flex items-center">
            <span className="text-brand-green font-heading font-bold text-xl md:text-2xl">Que Tal Congelados</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => navigateTo('inicio')} className="text-foreground hover:text-brand-green transition-colors">Início</button>
          <button onClick={() => navigateTo('sobre')} className="text-foreground hover:text-brand-green transition-colors">Sobre Nós</button>
          <button onClick={() => navigateTo('cardapio')} className="text-foreground hover:text-brand-green transition-colors">Cardápio</button>
          <button onClick={() => navigateTo('diferenciais')} className="text-foreground hover:text-brand-green transition-colors">Nossos Diferenciais</button>
          <button onClick={() => navigateTo('contato')} className="text-foreground hover:text-brand-green transition-colors">Contato</button>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button onClick={handleOrder} className="btn-secondary">
            Peça Agora
          </Button>
          <Button onClick={handleWhatsApp} className="btn-whatsapp">
            Fale Conosco
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white pt-4 pb-6 shadow-lg">
          <div className="container flex flex-col space-y-4">
            <button onClick={() => navigateTo('inicio')} className="text-foreground py-2 hover:text-brand-green transition-colors">
              Início
            </button>
            <button onClick={() => navigateTo('sobre')} className="text-foreground py-2 hover:text-brand-green transition-colors">
              Sobre Nós
            </button>
            <button onClick={() => navigateTo('cardapio')} className="text-foreground py-2 hover:text-brand-green transition-colors">
              Cardápio
            </button>
            <button onClick={() => navigateTo('diferenciais')} className="text-foreground py-2 hover:text-brand-green transition-colors">
              Nossos Diferenciais
            </button>
            <button onClick={() => navigateTo('contato')} className="text-foreground py-2 hover:text-brand-green transition-colors">
              Contato
            </button>
            
            <div className="flex flex-col space-y-3 pt-4">
              <Button onClick={handleOrder} className="btn-secondary w-full">
                Peça Agora
              </Button>
              <Button onClick={handleWhatsApp} className="btn-whatsapp w-full">
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
