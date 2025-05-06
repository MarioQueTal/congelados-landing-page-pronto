
import { Button } from '@/components/ui/button';

// Define type for menu items
interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

// Sample menu data
const menuItems: MenuItem[] = [
  // Refeições
  {
    id: 1,
    name: "Lasanha à Bolonhesa",
    description: "Massa fresca, molho de tomate caseiro, carne selecionada e queijo gratinado",
    image: "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&q=80&w=600",
    category: "refeicoes"
  },
  {
    id: 2,
    name: "Penne ao Molho Pesto",
    description: "Penne integral com molho pesto de manjericão fresco e castanhas",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=600",
    category: "refeicoes"
  },
  {
    id: 3,
    name: "Strogonoff de Frango",
    description: "Frango caipira, creme de leite fresco, champignon e arroz branco",
    image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&q=80&w=600",
    category: "refeicoes"
  },
  // Sopas
  {
    id: 4,
    name: "Creme de Abóbora",
    description: "Abóbora assada, leite de coco e especiarias",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600",
    category: "sopas"
  },
  {
    id: 5,
    name: "Caldo Verde",
    description: "Batata, couve, linguiça artesanal e azeite de oliva extra virgem",
    image: "https://images.unsplash.com/photo-1616501268209-edfae9cecd86?auto=format&fit=crop&q=80&w=600",
    category: "sopas"
  },
  // Croissants
  {
    id: 6,
    name: "Croissant de Chocolate",
    description: "Massa folhada artesanal com recheio de chocolate belga",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&q=80&w=600",
    category: "croissants"
  },
  {
    id: 7,
    name: "Croissant de Presunto e Queijo",
    description: "Massa folhada artesanal com presunto e queijo tipo gruyère",
    image: "https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?auto=format&fit=crop&q=80&w=600",
    category: "croissants"
  },
  // Chipas e Croquetes
  {
    id: 8,
    name: "Chipa Paraguaia",
    description: "Tradicional pãozinho de polvilho e queijo",
    image: "https://images.unsplash.com/photo-1594149929911-78975a43d4f5?auto=format&fit=crop&q=80&w=600",
    category: "chipas"
  },
  {
    id: 9,
    name: "Croquete de Carne",
    description: "Croquete crocante de carne desfiada e temperos naturais",
    image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&q=80&w=600",
    category: "chipas"
  },
  // Picolés
  {
    id: 10,
    name: "Picolé de Frutas Vermelhas",
    description: "Picolé artesanal de frutas vermelhas sem adição de açúcar",
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&q=80&w=600",
    category: "picoles"
  },
  {
    id: 11,
    name: "Picolé de Manga",
    description: "Picolé artesanal de manga fresca da estação",
    image: "https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?auto=format&fit=crop&q=80&w=600",
    category: "picoles"
  },
];

const MenuSection = () => {
  const categories = [
    { id: "refeicoes", name: "Refeições Congeladas" },
    { id: "sopas", name: "Sopas" },
    { id: "croissants", name: "Croissants" },
    { id: "chipas", name: "Chipas e Croquetes" },
    { id: "picoles", name: "Picolés" }
  ];

  const handleWhatsApp = (productName: string) => {
    const message = `Olá! Gostaria de informações sobre o produto: ${productName}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5500000000000?text=${encodedMessage}`, '_blank');
  };

  const handleEcommerce = () => {
    // Replace with actual e-commerce URL
    window.open('https://www.quetalcongelados.com.br/loja', '_blank');
  };

  return (
    <section id="cardapio" className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Nosso Cardápio</h2>
        <p className="section-subtitle">
          Conheça a variedade de produtos congelados que preparamos para você
        </p>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.id}>
              <h3 className="text-2xl md:text-3xl font-semibold text-brand-green mb-8 text-center">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems
                  .filter(item => item.category === category.id)
                  .map(item => (
                    <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="font-semibold text-xl mb-2">{item.name}</h4>
                        <p className="text-foreground/70 mb-4 text-sm h-12">{item.description}</p>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button onClick={handleEcommerce} className="btn-primary flex-1 text-sm py-2">
                            Ver no E-commerce
                          </Button>
                          <Button onClick={() => handleWhatsApp(item.name)} className="btn-whatsapp flex-1 text-sm py-2">
                            Pedir no WhatsApp
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
