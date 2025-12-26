"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, Grid3X3, List, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VehicleCard from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";

const vehicles = [
    {
        id: 1,
        name: "BMW X5 xDrive40i M Sport",
        year: 2023,
        price: 589900,
        km: 12000,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
        brand: "BMW",
        fuel: "Gasolina",
        featured: true,
    },
    {
        id: 2,
        name: "Mercedes-Benz GLE 450 AMG Line",
        year: 2023,
        price: 649900,
        km: 8500,
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
        brand: "Mercedes-Benz",
        fuel: "Híbrido",
        featured: true,
    },
    {
        id: 3,
        name: "Porsche Cayenne E-Hybrid",
        year: 2022,
        price: 789900,
        km: 15000,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        brand: "Porsche",
        fuel: "Híbrido",
        featured: false,
    },
    {
        id: 4,
        name: "Audi Q8 Performance Black",
        year: 2023,
        price: 549900,
        km: 5000,
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
        brand: "Audi",
        fuel: "Gasolina",
        featured: false,
    },
    {
        id: 5,
        name: "Range Rover Sport HSE Dynamic",
        year: 2022,
        price: 729900,
        km: 18000,
        image: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=800&q=80",
        brand: "Land Rover",
        fuel: "Diesel",
        featured: true,
    },
    {
        id: 6,
        name: "Volvo XC90 T8 Inscription",
        year: 2023,
        price: 489900,
        km: 9000,
        image: "https://images.unsplash.com/photo-1612825173281-9a193378571e?w=800&q=80",
        brand: "Volvo",
        fuel: "Híbrido",
        featured: false,
    },
    {
        id: 7,
        name: "BMW M4 Competition Coupé",
        year: 2023,
        price: 879900,
        km: 3500,
        image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80",
        brand: "BMW",
        fuel: "Gasolina",
        featured: true,
    },
    {
        id: 8,
        name: "Mercedes-AMG GT 53 4MATIC+",
        year: 2022,
        price: 989900,
        km: 7000,
        image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
        brand: "Mercedes-Benz",
        fuel: "Gasolina",
        featured: false,
    },
    {
        id: 9,
        name: "Porsche 911 Carrera S",
        year: 2022,
        price: 1189900,
        km: 4500,
        image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
        brand: "Porsche",
        fuel: "Gasolina",
        featured: true,
    },
    {
        id: 10,
        name: "Audi RS6 Avant",
        year: 2023,
        price: 1089900,
        km: 6000,
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80",
        brand: "Audi",
        fuel: "Gasolina",
        featured: false,
    },
    {
        id: 11,
        name: "Jaguar F-PACE SVR",
        year: 2022,
        price: 699900,
        km: 12000,
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
        brand: "Jaguar",
        fuel: "Gasolina",
        featured: false,
    },
    {
        id: 12,
        name: "Land Rover Defender 110 V8",
        year: 2023,
        price: 849900,
        km: 8000,
        image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
        brand: "Land Rover",
        fuel: "Gasolina",
        featured: true,
    },
];

const brands = ["Todas", "BMW", "Mercedes-Benz", "Porsche", "Audi", "Land Rover", "Volvo", "Jaguar"];
const priceRanges = [
    { label: "Todos os preços", min: 0, max: Infinity },
    { label: "Até R$ 500.000", min: 0, max: 500000 },
    { label: "R$ 500.000 - R$ 800.000", min: 500000, max: 800000 },
    { label: "R$ 800.000 - R$ 1.000.000", min: 800000, max: 1000000 },
    { label: "Acima de R$ 1.000.000", min: 1000000, max: Infinity },
];
const sortOptions = [
    { label: "Mais Recentes", value: "recent" },
    { label: "Menor Preço", value: "price-asc" },
    { label: "Maior Preço", value: "price-desc" },
    { label: "Menor Km", value: "km-asc" },
];

export default function Estoque() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("Todas");
    const [selectedPriceRange, setSelectedPriceRange] = useState(0);
    const [sortBy, setSortBy] = useState("recent");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [showFilters, setShowFilters] = useState(false);

    const filteredVehicles = vehicles
        .filter((vehicle) => {
            const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesBrand = selectedBrand === "Todas" || vehicle.brand === selectedBrand;
            const priceRange = priceRanges[selectedPriceRange];
            const matchesPrice = vehicle.price >= priceRange.min && vehicle.price < priceRange.max;
            return matchesSearch && matchesBrand && matchesPrice;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "price-asc":
                    return a.price - b.price;
                case "price-desc":
                    return b.price - a.price;
                case "km-asc":
                    return a.km - b.km;
                default:
                    return b.year - a.year;
            }
        });

    return (
        <div className="min-h-screen bg-obsidian">
            <Header />

            {/* Hero Banner */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian-light to-obsidian" />
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream mb-4">
                            Nosso <span className="luxury-text-gradient">Estoque</span>
                        </h1>
                        <p className="text-cream/60 text-lg">
                            Explore nossa seleção exclusiva de veículos premium. Cada modelo foi cuidadosamente
                            selecionado para oferecer o melhor em performance, conforto e sofisticação.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters (Desktop) */}
                    <aside className="hidden lg:block w-72 shrink-0 space-y-8">
                        <div className="bg-obsidian-light border border-gold/10 rounded-lg p-6 sticky top-24">
                            <h3 className="font-display text-xl font-semibold text-cream mb-6 flex items-center gap-2">
                                <SlidersHorizontal size={20} className="text-gold" />
                                Filtros
                            </h3>

                            {/* Search */}
                            <div className="mb-8">
                                <label className="block text-sm text-cream/60 mb-2">Buscar</label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-cream/40" size={16} />
                                    <input
                                        type="text"
                                        placeholder="Modelo, marca..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 bg-obsidian border border-gold/20 rounded-md text-cream text-sm placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Brand Filter */}
                            <div className="mb-8">
                                <label className="block text-sm text-cream/60 mb-3">Marca</label>
                                <div className="space-y-2">
                                    {brands.map((brand) => (
                                        <button
                                            key={brand}
                                            onClick={() => setSelectedBrand(brand)}
                                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all flex items-center justify-between ${selectedBrand === brand
                                                ? "bg-gold text-obsidian font-medium"
                                                : "text-cream/70 hover:bg-obsidian hover:text-gold"
                                                }`}
                                        >
                                            {brand}
                                            {selectedBrand === brand && <div className="w-1.5 h-1.5 rounded-full bg-obsidian" />}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div>
                                <label className="block text-sm text-cream/60 mb-3">Faixa de Preço</label>
                                <div className="space-y-2">
                                    {priceRanges.map((range, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedPriceRange(index)}
                                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all ${selectedPriceRange === index
                                                ? "bg-gold text-obsidian font-medium"
                                                : "text-cream/70 hover:bg-obsidian hover:text-gold"
                                                }`}
                                        >
                                            {range.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Reset Filters */}
                            <div className="mt-8 pt-6 border-t border-gold/10">
                                <Button
                                    variant="outline"
                                    className="w-full border-gold/20 text-cream hover:bg-gold hover:text-obsidian hover:border-gold"
                                    onClick={() => {
                                        setSearchTerm("");
                                        setSelectedBrand("Todas");
                                        setSelectedPriceRange(0);
                                    }}
                                >
                                    Limpar Filtros
                                </Button>
                            </div>
                        </div>
                    </aside>

                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden mb-6">
                        <Button
                            variant="goldOutline"
                            className="w-full flex justify-between items-center"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <span className="flex items-center gap-2">
                                <SlidersHorizontal size={18} />
                                Filtros e Busca
                            </span>
                            <ChevronDown className={`transition-transform duration-300 ${showFilters ? "rotate-180" : ""}`} />
                        </Button>

                        {/* Mobile Filters Content */}
                        {showFilters && (
                            <div className="mt-4 bg-obsidian-light border border-gold/10 rounded-lg p-6 animate-fade-up">
                                {/* Copy of sidebar content for mobile (simplified) */}
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm text-cream/60 mb-2">Buscar</label>
                                        <input
                                            type="text"
                                            placeholder="Buscar veículo..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full px-4 py-2 bg-obsidian border border-gold/20 rounded-md text-cream"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-cream/60 mb-2">Marca</label>
                                        <select
                                            value={selectedBrand}
                                            onChange={(e) => setSelectedBrand(e.target.value)}
                                            className="w-full px-4 py-2 bg-obsidian border border-gold/20 rounded-md text-cream"
                                        >
                                            {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm text-cream/60 mb-2">Preço</label>
                                        <select
                                            value={selectedPriceRange}
                                            onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
                                            className="w-full px-4 py-2 bg-obsidian border border-gold/20 rounded-md text-cream"
                                        >
                                            {priceRanges.map((range, idx) => <option key={idx} value={idx}>{range.label}</option>)}
                                        </select>
                                    </div>
                                    <Button
                                        variant="gold"
                                        className="w-full"
                                        onClick={() => setShowFilters(false)}
                                    >
                                        Ver Resultados
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Main Content */}
                    <main className="flex-1">
                        {/* Top Controls */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-gold/10">
                            <p className="text-cream/60">
                                Exibindo <span className="text-gold font-medium">{filteredVehicles.length}</span> veículos
                            </p>

                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                <div className="relative flex-1 sm:flex-none">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full sm:w-48 appearance-none pl-4 pr-10 py-2 bg-obsidian-light border border-gold/20 rounded-lg text-cream text-sm focus:outline-none focus:border-gold/50 cursor-pointer hover:border-gold/40 transition-colors"
                                    >
                                        {sortOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/40 pointer-events-none" size={16} />
                                </div>

                                <div className="hidden sm:flex items-center border border-gold/20 rounded-lg overflow-hidden">
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={`p-2 transition-colors ${viewMode === "grid" ? "bg-gold text-obsidian" : "text-cream/50 hover:text-gold bg-obsidian-light"}`}
                                        title="Visualização em Grade"
                                    >
                                        <Grid3X3 size={18} />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={`p-2 transition-colors ${viewMode === "list" ? "bg-gold text-obsidian" : "text-cream/50 hover:text-gold bg-obsidian-light"}`}
                                        title="Visualização em Lista"
                                    >
                                        <List size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Grid Results */}
                        {filteredVehicles.length > 0 ? (
                            <div
                                className={`grid gap-6 ${viewMode === "grid"
                                    ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                                    : "grid-cols-1"
                                    }`}
                            >
                                {filteredVehicles.map((vehicle, index) => (
                                    <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-obsidian-light/50 rounded-lg border border-gold/5">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-obsidian-light flex items-center justify-center">
                                    <Search className="text-cream/30" size={32} />
                                </div>
                                <h3 className="font-display text-2xl text-cream mb-2">Nenhum veículo encontrado</h3>
                                <p className="text-cream/60 mb-6">Tente ajustar os filtros para encontrar o que procura.</p>
                                <Button
                                    variant="goldOutline"
                                    onClick={() => {
                                        setSearchTerm("");
                                        setSelectedBrand("Todas");
                                        setSelectedPriceRange(0);
                                    }}
                                >
                                    Limpar Filtros
                                </Button>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
}
