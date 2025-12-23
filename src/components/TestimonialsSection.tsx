import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "Empresário",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    content: "Experiência impecável do início ao fim. A equipe entendeu exatamente o que eu procurava e encontrou o carro perfeito. Atendimento digno de uma concessionária europeia.",
    rating: 5,
    vehicle: "Porsche Cayenne",
  },
  {
    name: "Fernanda Costa",
    role: "Médica",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    content: "A transparência e profissionalismo da Surmani são incomparáveis. Documentação impecável, veículo exatamente como descrito. Recomendo fortemente.",
    rating: 5,
    vehicle: "Mercedes-Benz GLE",
  },
  {
    name: "Paulo Henrique",
    role: "Advogado",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    content: "Terceiro carro que compro aqui. A qualidade se mantém exemplar a cada experiência. Fidelidade construída através de confiança e excelência.",
    rating: 5,
    vehicle: "BMW X7",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-obsidian relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gold/10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Depoimentos</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream mb-6">
            O Que Nossos <span className="luxury-text-gradient">Clientes</span> Dizem
          </h2>
          <p className="text-cream/60 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior recompensa. 
            Confira algumas experiências de quem já faz parte da família Surmani.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 bg-obsidian-light border border-gold/10 rounded-lg group hover:border-gold/30 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-gold/20" size={40} />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-gold fill-gold" size={16} />
                ))}
              </div>

              {/* Content */}
              <p className="text-cream/80 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                />
                <div>
                  <span className="block font-display text-lg font-semibold text-cream">
                    {testimonial.name}
                  </span>
                  <span className="text-cream/50 text-sm">{testimonial.role}</span>
                </div>
              </div>

              {/* Vehicle Tag */}
              <div className="mt-6 pt-6 border-t border-gold/10">
                <span className="text-xs text-gold/70 uppercase tracking-wider">Adquiriu: </span>
                <span className="text-sm text-cream/70">{testimonial.vehicle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
