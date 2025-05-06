
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  image?: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Silva",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    text: "As refeições da Que Tal Congelados salvam meu dia a dia! Trabalho em home office e com filhos pequenos, ter comida pronta e saudável é um alívio. O sabor é incrível, parece comida caseira mesmo.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Mendes",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Sou solteiro e não tenho tempo para cozinhar. Desde que descobri a Que Tal Congelados, não perco mais tempo com delivery de fast food. Comida gostosa, saudável e com preço justo!",
    rating: 5,
  },
  {
    id: 3,
    name: "Mariana Costa",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "O que mais me impressiona é a qualidade dos ingredientes. Dá para sentir que são produtos frescos e bem selecionados. Além disso, o atendimento pelo WhatsApp é super prático e rápido.",
    rating: 4,
  }
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <svg 
      key={i} 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill={i < rating ? "#FFCB45" : "none"} 
      stroke={i < rating ? "#FFCB45" : "#cbd5e0"}
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="inline-block"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ));
};

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">O que nossos clientes dizem</h2>
        <p className="section-subtitle">
          A opinião de quem já experimentou nossas refeições congeladas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-sm hover:shadow-md transition-all border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4 space-x-4">
                  {testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-foreground/80 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
