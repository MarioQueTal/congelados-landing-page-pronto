
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const navigateTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-darkBlue text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-brand-green mb-2">Que Tal Congelados</h3>
              <p className="text-white/80">
                Refeições congeladas, práticas e saborosas para o seu dia a dia.
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://instagram.com/quetalcongelados" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-white/30 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/quetalcongelados" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-white/30 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigateTo('inicio')} 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('sobre')} 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('cardapio')} 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Cardápio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('diferenciais')} 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Nossos Diferenciais
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('contato')} 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/termos"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a 
                  href="/privacidade"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a 
                  href="/loja"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  E-commerce
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Que Tal Congelados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
