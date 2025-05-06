
import { Snowflake, Leaf, Zap, Cake, MessageCircle } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: <Snowflake size={36} className="text-brand-green" />,
      title: "Uso do Ultracongelador",
      description: "Nossa tecnologia de ultracongelamento preserva sabor e nutrientes sem conservantes artificiais",
      link: "#ultracongelador"
    },
    {
      icon: <Leaf size={36} className="text-brand-green" />,
      title: "Ingredientes Naturais",
      description: "Selecionamos cuidadosamente ingredientes frescos e de produtores locais para nossas receitas",
      link: "#ingredientes"
    },
    {
      icon: <Zap size={36} className="text-brand-green" />,
      title: "Praticidade e Sabor",
      description: "Do freezer para o seu prato em minutos, sem perder o sabor da comida caseira",
      link: "#praticidade"
    },
    {
      icon: <Cake size={36} className="text-brand-green" />,
      title: "Opções para Datas Comemorativas",
      description: "Cardápios especiais para momentos especiais, facilitando suas celebrações",
      link: "#comemorativas"
    },
    {
      icon: <MessageCircle size={36} className="text-brand-green" />,
      title: "Atendimento Humano via WhatsApp",
      description: "Atendimento personalizado para tirar suas dúvidas e fazer pedidos especiais",
      link: "#atendimento"
    }
  ];

  return (
    <section id="diferenciais" className="bg-brand-mint/20">
      <div className="container mx-auto">
        <h2 className="section-title">Nossos Diferenciais</h2>
        <p className="section-subtitle">
          O que torna a Que Tal Congelados especial e por que nossos clientes confiam em nós
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-brand-mint rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-foreground/80 mb-4">{item.description}</p>
                <a 
                  href={item.link} 
                  className="text-brand-green font-medium hover:underline"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
