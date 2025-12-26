"use client";

import { Instagram, Facebook, Youtube, Linkedin, MapPin, Phone, Mail, ArrowUp } from "lucide-react";

const footerLinks = {
  navegacao: [
    { name: "Início", href: "#" },
    { name: "Estoque", href: "#estoque" },
    { name: "Serviços", href: "#servicos" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ],
  servicos: [
    { name: "Compra de Veículos", href: "#" },
    { name: "Venda Consignada", href: "#" },
    { name: "Financiamento", href: "#" },
    { name: "Avaliação Gratuita", href: "#" },
    { name: "Entrega Nacional", href: "#" },
  ],
  marcas: [
    { name: "BMW", href: "#" },
    { name: "Mercedes-Benz", href: "#" },
    { name: "Porsche", href: "#" },
    { name: "Audi", href: "#" },
    { name: "Jaguar", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-obsidian border-t border-gold/10">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-gold-dark via-gold to-gold-light flex items-center justify-center">
                <span className="font-display font-bold text-obsidian text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-semibold text-cream tracking-wide">Surmani</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold/70">Motors</span>
              </div>
            </div>
            <p className="text-cream/60 mb-6 max-w-sm leading-relaxed">
              Há mais de 12 anos proporcionando experiências únicas no mercado de veículos
              premium. Excelência, confiança e sofisticação em cada negócio.
            </p>

            {/* Contact Quick Info */}
            <div className="space-y-3">
              <a href="tel:+552199999999" className="flex items-center gap-2 text-cream/60 hover:text-gold transition-colors">
                <Phone size={16} />
                <span className="text-sm">(21) 99999-9999</span>
              </a>
              <a href="mailto:contato@surmanimotors.com.br" className="flex items-center gap-2 text-cream/60 hover:text-gold transition-colors">
                <Mail size={16} />
                <span className="text-sm">contato@surmanimotors.com.br</span>
              </a>
              <div className="flex items-start gap-2 text-cream/60">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span className="text-sm">Av. das Américas, 15000 - Recreio, Rio de Janeiro</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-6">Navegação</h4>
            <ul className="space-y-3">
              {footerLinks.navegacao.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-cream/60 hover:text-gold transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-6">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-cream/60 hover:text-gold transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-6">Marcas</h4>
            <ul className="space-y-3">
              {footerLinks.marcas.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-cream/60 hover:text-gold transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-cream/40 text-sm text-center md:text-left">
            © 2024 Surmani Motors. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-obsidian-light border border-gold/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="hidden md:flex items-center gap-2 text-cream/40 hover:text-gold transition-colors text-sm"
          >
            Voltar ao topo
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
