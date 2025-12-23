import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-obsidian-light relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Contato</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream mb-6">
              Vamos <span className="luxury-text-gradient">Conversar</span>
            </h2>
            <p className="text-cream/60 text-lg mb-10 max-w-md">
              Estamos prontos para atendê-lo. Entre em contato e descubra 
              como podemos ajudar a encontrar o veículo dos seus sonhos.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-gold" size={22} />
                </div>
                <div>
                  <span className="block text-cream font-medium mb-1">Localização</span>
                  <span className="text-cream/60">Av. das Américas, 15000 - Recreio, Rio de Janeiro - RJ</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <Phone className="text-gold" size={22} />
                </div>
                <div>
                  <span className="block text-cream font-medium mb-1">Telefone</span>
                  <a href="tel:+552199999999" className="text-gold hover:text-gold-light transition-colors">
                    (21) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <Mail className="text-gold" size={22} />
                </div>
                <div>
                  <span className="block text-cream font-medium mb-1">E-mail</span>
                  <a href="mailto:contato@surmanimotors.com.br" className="text-gold hover:text-gold-light transition-colors">
                    contato@surmanimotors.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <Clock className="text-gold" size={22} />
                </div>
                <div>
                  <span className="block text-cream font-medium mb-1">Horário</span>
                  <span className="text-cream/60">Seg - Sáb: 9h às 19h</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">
              <MessageCircle size={20} />
              Falar pelo WhatsApp
            </Button>
          </div>

          {/* Right Column - Form */}
          <div className="bg-obsidian border border-gold/20 rounded-lg p-8 lg:p-10">
            <h3 className="font-display text-2xl font-semibold text-cream mb-6">
              Envie uma Mensagem
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-cream/70 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-obsidian-light border border-gold/20 rounded px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-cream/70 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-obsidian-light border border-gold/20 rounded px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-cream/70 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-obsidian-light border border-gold/20 rounded px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm text-cream/70 mb-2">
                  Interesse
                </label>
                <select
                  id="interest"
                  className="w-full bg-obsidian-light border border-gold/20 rounded px-4 py-3 text-cream focus:outline-none focus:border-gold/50 transition-colors"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="compra">Quero comprar um veículo</option>
                  <option value="venda">Quero vender meu veículo</option>
                  <option value="troca">Quero trocar meu veículo</option>
                  <option value="financiamento">Financiamento</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-cream/70 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-obsidian-light border border-gold/20 rounded px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  placeholder="Conte-nos como podemos ajudá-lo..."
                />
              </div>

              <Button variant="gold" size="lg" className="w-full group">
                Enviar Mensagem
                <Send size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
