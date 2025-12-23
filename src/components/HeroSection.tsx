import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-showroom.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Showroom de carros de luxo Surmani Motors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold/3 rounded-full blur-2xl" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-obsidian/50 backdrop-blur-sm mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm text-gold/90 tracking-wide">Excelência em Veículos Premium</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-[1.1] mb-6 animate-fade-up animation-delay-100">
            Onde o{" "}
            <span className="luxury-text-gradient">Luxo</span>
            <br />
            Encontra Exclusividade
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-cream/70 max-w-xl mb-10 leading-relaxed animate-fade-up animation-delay-200">
            Descubra nossa curadoria de veículos seminovos de alto padrão. 
            Cada automóvel é selecionado para oferecer a experiência que você merece.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl" className="group" asChild>
              <Link to="/estoque">
                Explorar Estoque
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="goldOutline" size="xl" className="group">
              <Play size={18} className="mr-1" />
              Conhecer a Loja
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 mt-16 pt-8 border-t border-gold/10 animate-fade-up animation-delay-400">
            <div>
              <span className="block text-3xl md:text-4xl font-display font-semibold text-gold">150+</span>
              <span className="text-sm text-cream/50 uppercase tracking-wider">Veículos em Estoque</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-display font-semibold text-gold">12</span>
              <span className="text-sm text-cream/50 uppercase tracking-wider">Anos de Mercado</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-display font-semibold text-gold">98%</span>
              <span className="text-sm text-cream/50 uppercase tracking-wider">Clientes Satisfeitos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animation-delay-600">
        <span className="text-xs uppercase tracking-widest text-cream/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
