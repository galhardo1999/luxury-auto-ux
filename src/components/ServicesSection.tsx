import { Shield, Award, Truck, Headphones, FileCheck, RefreshCcw } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Garantia Estendida",
    description: "Tranquilidade total com até 24 meses de garantia em todos os veículos.",
  },
  {
    icon: Award,
    title: "Certificação Premium",
    description: "Laudo completo de procedência e mais de 150 pontos de inspeção.",
  },
  {
    icon: Truck,
    title: "Entrega Nacional",
    description: "Levamos seu veículo até você, em qualquer lugar do Brasil.",
  },
  {
    icon: Headphones,
    title: "Concierge Exclusivo",
    description: "Atendimento personalizado do primeiro contato à entrega das chaves.",
  },
  {
    icon: FileCheck,
    title: "Financiamento Facilitado",
    description: "Parceria com os principais bancos para as melhores condições do mercado.",
  },
  {
    icon: RefreshCcw,
    title: "Avaliação Instantânea",
    description: "Aceitamos seu veículo como parte do pagamento com a melhor avaliação.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-obsidian-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Diferenciais</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream mb-6">
              A Experiência <span className="luxury-text-gradient">Surmani</span>
            </h2>
            <p className="text-cream/60 text-lg">
              Mais do que vender carros, proporcionamos uma jornada de excelência. 
              Cada detalhe é pensado para superar suas expectativas.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="text-right">
              <span className="block text-5xl font-display font-semibold luxury-text-gradient">12+</span>
              <span className="text-cream/50 text-sm uppercase tracking-wider">Anos de Excelência</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-obsidian border border-gold/10 rounded-lg transition-all duration-500 hover:border-gold/30 hover:bg-obsidian/50 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="text-gold" size={28} />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-cream mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-cream/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
