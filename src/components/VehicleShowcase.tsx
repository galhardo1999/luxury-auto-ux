import { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import VehicleCard from "./VehicleCard";

const brands = ["Todas", "BMW", "Mercedes-Benz", "Porsche", "Audi", "Jaguar", "Land Rover"];
const priceRanges = ["Qualquer preço", "Até R$ 200.000", "R$ 200.000 - 400.000", "R$ 400.000 - 600.000", "Acima de R$ 600.000"];
const years = ["Qualquer ano", "2024", "2023", "2022", "2021", "2020 ou anterior"];

const vehicles = [
  {
    id: 1,
    name: "BMW X5 xDrive50e",
    year: 2024,
    price: 698000,
    km: 12000,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    brand: "BMW",
    fuel: "Híbrido",
    featured: true,
  },
  {
    id: 2,
    name: "Mercedes-AMG GT 63",
    year: 2023,
    price: 1250000,
    km: 8500,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    brand: "Mercedes-Benz",
    fuel: "Gasolina",
    featured: true,
  },
  {
    id: 3,
    name: "Porsche 911 Carrera S",
    year: 2024,
    price: 980000,
    km: 5200,
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
    brand: "Porsche",
    fuel: "Gasolina",
    featured: false,
  },
  {
    id: 4,
    name: "Audi RS e-tron GT",
    year: 2023,
    price: 890000,
    km: 15000,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    brand: "Audi",
    fuel: "Elétrico",
    featured: false,
  },
  {
    id: 5,
    name: "Range Rover Autobiography",
    year: 2024,
    price: 1150000,
    km: 3800,
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
    brand: "Land Rover",
    fuel: "Diesel",
    featured: true,
  },
  {
    id: 6,
    name: "Jaguar F-Type R",
    year: 2023,
    price: 720000,
    km: 11200,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    brand: "Jaguar",
    fuel: "Gasolina",
    featured: false,
  },
];

const VehicleShowcase = () => {
  const [selectedBrand, setSelectedBrand] = useState("Todas");
  const [showFilters, setShowFilters] = useState(false);

  const filteredVehicles = selectedBrand === "Todas" 
    ? vehicles 
    : vehicles.filter(v => v.brand === selectedBrand);

  return (
    <section id="estoque" className="py-24 bg-obsidian relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Nosso Acervo</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream mb-6">
            Veículos em <span className="luxury-text-gradient">Destaque</span>
          </h2>
          <p className="text-cream/60 max-w-2xl mx-auto">
            Uma seleção exclusiva dos melhores veículos do mercado, 
            cuidadosamente inspecionados para garantir excelência em cada detalhe.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-obsidian-light border border-gold/10 rounded-lg p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/40" size={20} />
              <input
                type="text"
                placeholder="Buscar por marca, modelo ou ano..."
                className="w-full bg-obsidian border border-gold/20 rounded pl-12 pr-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>

            {/* Filter Toggles */}
            <div className="flex gap-3">
              <Button
                variant="goldOutline"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <SlidersHorizontal size={18} />
                Filtros
                <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
              <Button variant="gold">
                Buscar
              </Button>
            </div>
          </div>

          {/* Expanded Filters */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gold/10 transition-all duration-300 ${showFilters ? 'block' : 'hidden'}`}>
            <div>
              <label className="block text-sm text-cream/60 mb-2">Marca</label>
              <select className="w-full bg-obsidian border border-gold/20 rounded px-4 py-3 text-cream focus:outline-none focus:border-gold/50">
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-cream/60 mb-2">Faixa de Preço</label>
              <select className="w-full bg-obsidian border border-gold/20 rounded px-4 py-3 text-cream focus:outline-none focus:border-gold/50">
                {priceRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-cream/60 mb-2">Ano</label>
              <select className="w-full bg-obsidian border border-gold/20 rounded px-4 py-3 text-cream focus:outline-none focus:border-gold/50">
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Brand Quick Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedBrand === brand
                  ? "bg-gold text-obsidian"
                  : "bg-obsidian-light text-cream/70 border border-gold/20 hover:border-gold/50 hover:text-cream"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Button variant="goldOutline" size="lg">
            Ver Todo o Estoque
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;
