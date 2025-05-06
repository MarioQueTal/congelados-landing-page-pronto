
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const openWhatsApp = () => {
    // Replace with actual WhatsApp number
    window.open('https://wa.me/5500000000000', '_blank');
  };

  return (
    <button 
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[#20BD5C] transition-all animate-pulse-subtle"
      aria-label="Contact us via WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default FloatingWhatsApp;
