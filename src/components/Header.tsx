import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Início", href: "/", isRoute: true },
  { name: "Estoque", href: "/estoque", isRoute: true },
  { name: "Serviços", href: "/#servicos", isRoute: false },
  { name: "Sobre", href: "/#sobre", isRoute: false },
  { name: "Contato", href: "/#contato", isRoute: false },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-obsidian/95 backdrop-blur-xl border-b border-gold/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-gold-dark via-gold to-gold-light flex items-center justify-center">
            <span className="font-display font-bold text-obsidian text-xl">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-semibold text-cream tracking-wide group-hover:text-gold transition-colors">
              Surmani
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold/70">Motors</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-cream/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-cream/80 hover:text-gold transition-colors duration-300 text-sm font-medium tracking-wide relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            )
          )}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+5511999999999" className="flex items-center gap-2 text-cream/70 hover:text-gold transition-colors">
            <Phone size={16} />
            <span className="text-sm">(11) 99999-9999</span>
          </a>
          <Button variant="gold" size="sm">
            Agendar Visita
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-cream hover:text-gold transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-obsidian/98 backdrop-blur-xl transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-cream text-2xl font-display hover:text-gold transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-cream text-2xl font-display hover:text-gold transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
              </a>
            )
          )}
          <Button variant="gold" size="lg" className="mt-4">
            Agendar Visita
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
