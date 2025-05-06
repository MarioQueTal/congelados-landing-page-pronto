
import { Button } from '@/components/ui/button';
import { MessageCircle, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5500000000000', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/quetalcongelados', '_blank');
  };

  const handleFacebook = () => {
    window.open('https://facebook.com/quetalcongelados', '_blank');
  };

  return (
    <section id="contato" className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">
          Estamos prontos para atender você e tirar todas as suas dúvidas
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-brand-mint/30 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-lg mb-2">Endereço</h4>
                <p>Av. Principal, 1234, Bairro Centro</p>
                <p>Cidade - Estado, 12345-678</p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2">Horário de Atendimento</h4>
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 13h</p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <button
                    onClick={handleInstagram}
                    className="p-3 bg-brand-green rounded-full text-white hover:bg-brand-green/90 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </button>
                  <button
                    onClick={handleFacebook}
                    className="p-3 bg-brand-green rounded-full text-white hover:bg-brand-green/90 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </button>
                </div>
              </div>
              
              <div>
                <Button
                  onClick={handleWhatsApp}
                  className="btn-whatsapp w-full justify-center text-lg py-6"
                >
                  <MessageCircle size={20} />
                  <span>Fale com a gente agora mesmo!</span>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="h-96 md:h-auto rounded-xl overflow-hidden">
            {/* Google Maps Embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356219850906!2d-43.2316383!3d-22.9019376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzA3LjAiUyA0M8KwMTMnNTMuOSJX!5e0!3m2!1sen!2sbr!4v1620421788092!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Localização Que Tal Congelados"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
