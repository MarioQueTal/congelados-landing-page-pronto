
const About = () => {
  return (
    <section id="sobre" className="bg-brand-mint/20">
      <div className="container mx-auto">
        <h2 className="section-title">Sobre Nós</h2>
        <p className="section-subtitle">
          Conheça um pouco da nossa história e compromisso com qualidade
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" 
              alt="Equipe Que Tal Congelados" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-brand-green mb-3">Nossa História</h3>
              <p className="text-foreground/80">
                A Que Tal Congelados nasceu em 2018 da paixão por comida saudável e prática. 
                Começamos como uma pequena empresa familiar e hoje atendemos centenas de clientes 
                que buscam praticidade sem abrir mão da qualidade e do sabor nas suas refeições diárias.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-brand-green mb-3">Missão e Valores</h3>
              <p className="text-foreground/80">
                Nossa missão é proporcionar mais qualidade de vida através da alimentação, 
                oferecendo refeições saudáveis, saborosas e práticas. Valorizamos a transparência 
                nos processos, o uso de ingredientes de qualidade e o respeito ao cliente.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-brand-green mb-3">Compromisso com Qualidade</h3>
              <p className="text-foreground/80">
                Todas as nossas refeições são preparadas com ingredientes selecionados e processos 
                que garantem o máximo de nutrientes e sabor. Utilizamos a tecnologia de ultracongelamento, 
                que preserva as propriedades dos alimentos sem a necessidade de conservantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
