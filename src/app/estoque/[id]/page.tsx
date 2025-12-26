"use client";

import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, Heart, Gauge, Fuel, Calendar, MapPin, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
        description: "Luxo e desempenho em perfeita harmonia. O BMW X5 xDrive40i M Sport oferece uma experiência de condução incomparável.",
        specifications: {
            transmission: "Automática 8 velocidades",
            engine: "Motor Twin-Turbo 3.0L",
            power: "335 cavalos",
            torque: "330 Nm",
            acceleration: "0-100 km/h em 5.5s",
            topSpeed: "240 km/h",
            consumption: "10.2 km/l",
            interior: "Couro Nappa premium",
            doors: "5 portas",
            seats: "5 assentos",
        },
        features: [
            "Teto panorâmico deslizante",
            "Sistema de som Harman Kardon",
            "Controle de clima automático",
            "Carregamento sem fio para smartphones",
            "Câmera de visão 360°",
            "Freios adaptativos",
            "Controle de estabilidade M Sport",
            "Faróis LED adaptativos",
        ],
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
        description: "Elegância teutônica com tecnologia de ponta. A Mercedes-Benz GLE 450 híbrida combina eficiência com potência.",
        specifications: {
            transmission: "Automática 9 velocidades",
            engine: "Motor Twin-Turbo 3.0L + Elétrico",
            power: "362 cavalos",
            torque: "500 Nm",
            acceleration: "0-100 km/h em 5.8s",
            topSpeed: "250 km/h",
            consumption: "7.5 km/l",
            interior: "Couro Nappa com detalhe alumínio",
            doors: "5 portas",
            seats: "5 assentos",
        },
        features: [
            "Sistema de amortecimento adaptativo",
            "Teto panorâmico com abertura elétrica",
            "Sistema de som Burmester",
            "Painel digital 12.3 polegadas",
            "Carregamento por indução",
            "Airbags de segurança avançados",
            "Modo híbrido inteligente",
            "Conectividade Mercedes me",
        ],
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
        description: "Performance e eficiência em uma só máquina. O Porsche Cayenne E-Hybrid redefine o conceito de veículo esportivo utilitário.",
        specifications: {
            transmission: "Automática 8 velocidades",
            engine: "Motor Twin-Turbo 3.0L + Elétrico",
            power: "462 cavalos",
            torque: "700 Nm",
            acceleration: "0-100 km/h em 5.0s",
            topSpeed: "253 km/h",
            consumption: "6.8 km/l",
            interior: "Cuero premium com costura contrastante",
            doors: "5 portas",
            seats: "5 assentos",
        },
        features: [
            "Tração inteligente AWD",
            "Freios cerâmicos de alto desempenho",
            "Suspensão pneumática adaptativa",
            "Sistema de som Bose",
            "Teto solar panorâmico",
            "Bancos aquecidos e ventilados",
            "Modo Sport Plus",
            "Cockpit digital de 12.3 polegadas",
        ],
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
        description: "Agressividade sofisticada em forma de coupe SUV. O Audi Q8 Performance Black é para quem não faz concessões.",
        specifications: {
            transmission: "Automática 8 velocidades",
            engine: "Motor V8 Twin-Turbo 4.0L",
            power: "530 cavalos",
            torque: "770 Nm",
            acceleration: "0-100 km/h em 3.9s",
            topSpeed: "305 km/h",
            consumption: "8.5 km/l",
            interior: "Alcântara com costura vermelha",
            doors: "5 portas",
            seats: "5 assentos",
        },
        features: [
            "Tração integral quattro",
            "Freios de carbono cerâmico",
            "Suspensão dinâmica com sistema air",
            "Sistema de som Bang & Olufsen",
            "Painel digital OLED",
            "Bancos em couro e Alcântara",
            "Modo RS Performance",
            "Câmera 360° com visão de topo",
        ],
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
        description: "Onde elegância encontra a capacidade off-road. Range Rover Sport para o aventureiro sofisticado.",
        specifications: {
            transmission: "Automática 8 velocidades",
            engine: "Motor Diesel Twin-Turbo 3.0L",
            power: "258 cavalos",
            torque: "600 Nm",
            acceleration: "0-100 km/h em 7.8s",
            topSpeed: "210 km/h",
            consumption: "7.2 km/l",
            interior: "Couro Windsor premium",
            doors: "5 portas",
            seats: "5 assentos",
        },
        features: [
            "Sistema All-Terrain Response",
            "Tração integral inteligente",
            "Suspensão pneumática adaptativa",
            "Teto solar panorâmico",
            "Sistema de som Meridian",
            "Carregamento por indução",
            "Modo resposta de lama/areia/rochas",
            "Câmera de escavação",
        ],
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
        description: "Segurança, conforto e sustentabilidade. O Volvo XC90 híbrido para famílias que não abrem mão da qualidade.",
        specifications: {
            transmission: "Automática 8 velocidades",
            engine: "Motor Twin-Turbo 2.0L + Elétrico",
            power: "407 cavalos",
            torque: "625 Nm",
            acceleration: "0-100 km/h em 5.8s",
            topSpeed: "240 km/h",
            consumption: "6.5 km/l",
            interior: "Couro Nappa com costura refinada",
            doors: "5 portas",
            seats: "7 assentos",
        },
        features: [
            "Sistema de segurança City Safety",
            "Pilot Assist 2 (piloto automático)",
            "Bancos ajustáveis eletricamente",
            "Sistema de som Bowers & Wilkins",
            "Google integrado",
            "Modo híbrido puro elétrico",
            "Teto solar panorâmico",
            "Câmera de estacionamento com sensores",
        ],
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
        description: "Pura agressividade e performance. BMW M4 Competition para verdadeiros entusiastas de performance pura.",
        specifications: {
            transmission: "Automática 8 velocidades M",
            engine: "Motor S58 Twin-Turbo 3.0L",
            power: "503 cavalos",
            torque: "600 Nm",
            acceleration: "0-100 km/h em 3.9s",
            topSpeed: "250 km/h (com piloto eletrônico limitado)",
            consumption: "8.8 km/l",
            interior: "Alcântara M com costura vermelha",
            doors: "2 portas",
            seats: "4 assentos",
        },
        features: [
            "Tração integral M xDrive",
            "Diferenciais ativos M",
            "Freios de carbono M",
            "Suspensão M adaptativa",
            "Câmbio M Sport automático",
            "Sistema de som Harman Kardon",
            "Painel de instrumentos digital",
            "Modo Track para pista",
        ],
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
        description: "Esportividade e conforto em uma simbiose perfeita. Mercedes-AMG GT 53 para o condutor que aprecia ambos.",
        specifications: {
            transmission: "Automática 9 velocidades",
            engine: "Motor Twin-Turbo 3.0L + Turbo elétrico",
            power: "435 cavalos",
            torque: "520 Nm",
            acceleration: "0-100 km/h em 3.9s",
            topSpeed: "290 km/h",
            consumption: "8.2 km/l",
            interior: "Couro Nappa com insertos de madeira",
            doors: "2 portas",
            seats: "4 assentos",
        },
        features: [
            "Tração integral AMG 4MATIC+",
            "Freios AMG com discos cerâmicos",
            "Suspensão AMG adaptativa",
            "Sistema de som Burmester",
            "Teto solar panorâmico",
            "Painel touchscreen duplo",
            "Modo Dynamic Plus",
            "Escape AMG esportivo",
        ],
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
        description: "A essência da condução esportiva. Porsche 911 Carrera S é a definição de performance pura.",
        specifications: {
            transmission: "Automática dupla embreagem 8 velocidades",
            engine: "Motor Flat-Six Twin-Turbo 3.0L",
            power: "450 cavalos",
            torque: "530 Nm",
            acceleration: "0-100 km/h em 3.7s",
            topSpeed: "304 km/h",
            consumption: "9.5 km/l",
            interior: "Couro exclusivo com costura contrastante",
            doors: "2 portas",
            seats: "4 assentos",
        },
        features: [
            "Tração integral PTM",
            "Freios Porsche Ceramic Composite",
            "Suspensão pneumática adaptativa",
            "Sistema de som Bose",
            "Painel de instrumentos analógico + digital",
            "Bancos esportivos com ajuste elétrico",
            "Modo Track Precision",
            "Head-up display",
        ],
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
        description: "Praticidade com performance de supercarro. Audi RS6 Avant redefine o conceito de perfeição.",
        specifications: {
            transmission: "Automática 8 velocidades",
            engine: "Motor V10 Twin-Turbo 5.0L",
            power: "592 cavalos",
            torque: "770 Nm",
            acceleration: "0-100 km/h em 3.6s",
            topSpeed: "305 km/h",
            consumption: "10.5 km/l",
            interior: "Alcântara com costura vermelha",
            doors: "5 portas",
            seats: "5 assentos",
        },
        features: [
            "Tração integral quattro performance",
            "Freios de carbono-cerâmica",
            "Suspensão pneumática RS",
            "Sistema de som Bang & Olufsen",
            "Painel digital virtual cockpit",
            "Bancos em couro e Alcântara",
            "Modo Dynamic RS",
            "Câmera 360° de alta resolução",
        ],
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
        description: "Dinamismo felino em uma forma agressiva. Jaguar F-PACE SVR para quem busca um SUV com alma de esportivo.",
        specifications: {
            transmission: "Automática 8 velocidades",
            engine: "Motor Supercharged 5.0L V8",
            power: "550 cavalos",
            torque: "680 Nm",
            acceleration: "0-100 km/h em 4.3s",
            topSpeed: "280 km/h",
            consumption: "8.2 km/l",
            interior: "Couro premium com detalhe carbono",
            doors: "5 portas",
            seats: "5 assentos",
        },
        features: [
            "Tração integral inteligente",
            "Freios Brembo de alto desempenho",
            "Suspensão adaptativa dinâmica",
            "Sistema de som Meridian",
            "Teto solar panorâmico",
            "Câmera de visão 360°",
            "Modo Intelligent Dynamics",
            "Escape Akrapovic esportivo",
        ],
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
        description: "Lenda moderna com alma de conquista. Land Rover Defender V8 é pura característica e capacidade sem limites.",
        specifications: {
            transmission: "Automática 8 velocidades",
            engine: "Motor V8 Supercharged 5.0L",
            power: "525 cavalos",
            torque: "625 Nm",
            acceleration: "0-100 km/h em 4.9s",
            topSpeed: "240 km/h",
            consumption: "7.8 km/l",
            interior: "Couro Windsor com costura contrastante",
            doors: "5 portas",
            seats: "5 assentos",
        },
        features: [
            "Sistema All-Terrain Response",
            "Tração integral inteligente",
            "Suspensão pneumática adaptativa",
            "Sistema de som Meridian",
            "Teto solar panorâmico",
            "Carregamento por indução",
            "Modo resposta de lama/areia/rochas",
            "Câmera de escavação de 3D",
        ],
    },
];

export default function VehicleDetail() {
    const params = useParams();
    const router = useRouter();
    const id = params?.id;

    const vehicle = vehicles.find((v) => v.id === Number(id));

    if (!vehicle) {
        return (
            <div className="min-h-screen bg-obsidian">
                <Header />
                <section className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <h1 className="font-display text-3xl text-cream mb-4">Veículo não encontrado</h1>
                        <Button variant="luxury" onClick={() => router.push("/estoque")}>
                            Voltar ao Estoque
                        </Button>
                    </div>
                </section>
            </div>
        );
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    const formatKm = (km: number) => {
        return new Intl.NumberFormat("pt-BR").format(km);
    };

    return (
        <div className="min-h-screen bg-obsidian">
            <Header />

            {/* Back Button */}
            <section className="pt-32 pb-8">
                <div className="container mx-auto px-6">
                    <button
                        onClick={() => router.push("/estoque")}
                        className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
                        data-testid="button-back"
                    >
                        <ChevronLeft size={20} />
                        Voltar ao Estoque
                    </button>
                </div>
            </section>

            {/* Hero Section */}
            <section className="relative py-12">
                <div className="container mx-auto px-6">
                    <div className="relative aspect-[16/9] rounded-lg overflow-hidden group">
                        <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />

                        {/* Featured Badge */}
                        {vehicle.featured && (
                            <div className="absolute top-6 left-6 z-10 px-4 py-2 bg-gold text-obsidian font-semibold uppercase tracking-wider rounded">
                                Destaque
                            </div>
                        )}

                        {/* Favorite Button */}
                        <button
                            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-obsidian/70 backdrop-blur-sm flex items-center justify-center text-cream/60 hover:text-gold hover:bg-obsidian transition-all duration-300"
                            aria-label="Adicionar aos favoritos"
                            data-testid="button-favorite"
                        >
                            <Heart size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Header */}
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-gold text-sm uppercase tracking-wider font-medium">{vehicle.brand}</span>
                                    <span className="text-cream/50 flex items-center gap-1">
                                        <Calendar size={14} />
                                        {vehicle.year}
                                    </span>
                                </div>
                                <h1 className="font-display text-4xl md:text-5xl font-semibold text-cream mb-4">
                                    {vehicle.name}
                                </h1>
                                <p className="text-cream/60 text-lg">{vehicle.description}</p>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-obsidian-light rounded-lg border border-gold/10">
                                <div>
                                    <span className="block text-cream/60 text-xs uppercase tracking-wider mb-2">Quilometragem</span>
                                    <span className="flex items-center gap-2 font-display text-xl font-semibold text-gold">
                                        <Gauge size={16} />
                                        {formatKm(vehicle.km)} km
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-cream/60 text-xs uppercase tracking-wider mb-2">Combustível</span>
                                    <span className="flex items-center gap-2 font-display text-xl font-semibold text-gold">
                                        <Fuel size={16} />
                                        {vehicle.fuel}
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-cream/60 text-xs uppercase tracking-wider mb-2">Localização</span>
                                    <span className="flex items-center gap-2 font-display text-xl font-semibold text-gold">
                                        <MapPin size={16} />
                                        São Paulo
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-cream/60 text-xs uppercase tracking-wider mb-2">Garantia</span>
                                    <span className="flex items-center gap-2 font-display text-xl font-semibold text-gold">
                                        <Shield size={16} />
                                        12 meses
                                    </span>
                                </div>
                            </div>

                            {/* Specifications */}
                            <div className="mb-8">
                                <h2 className="font-display text-2xl font-semibold text-cream mb-6">Especificações</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-obsidian-light rounded-lg border border-gold/10">
                                    {Object.entries(vehicle.specifications).map(([key, value]) => (
                                        <div key={key}>
                                            <span className="block text-cream/60 text-xs uppercase tracking-wider mb-2 capitalize">
                                                {key.replace(/([A-Z])/g, " $1").trim()}
                                            </span>
                                            <span className="text-cream font-medium">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="mb-8">
                                <h2 className="font-display text-2xl font-semibold text-cream mb-6">Características</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {vehicle.features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 bg-obsidian-light rounded-lg border border-gold/10">
                                            <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                                            <span className="text-cream">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Price Card */}
                            <div className="sticky top-32 bg-gradient-to-b from-obsidian-light to-obsidian border border-gold/20 rounded-lg p-8 mb-6">
                                <div className="mb-6">
                                    <span className="block text-cream/60 text-xs uppercase tracking-wider mb-2">Preço</span>
                                    <span className="font-display text-4xl font-semibold text-gold block mb-2">
                                        {formatPrice(vehicle.price)}
                                    </span>
                                    <span className="text-cream/50 text-sm">A partir de</span>
                                </div>

                                <div className="space-y-3">
                                    <Button
                                        className="w-full"
                                        variant="luxury"
                                        data-testid="button-whatsapp-contact"
                                    >
                                        Fazer Proposta
                                    </Button>
                                    <Button
                                        className="w-full"
                                        variant="outline"
                                        data-testid="button-schedule-visit"
                                    >
                                        Agendar Visita
                                    </Button>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-obsidian-light border border-gold/10 rounded-lg p-6">
                                <h3 className="font-display text-lg font-semibold text-cream mb-4">Fale Conosco</h3>
                                <div className="space-y-4">
                                    <div>
                                        <span className="block text-cream/60 text-xs uppercase tracking-wider mb-2">Telefone</span>
                                        <span className="text-cream font-medium text-lg">(11) 99999-9999</span>
                                    </div>
                                    <div>
                                        <span className="block text-cream/60 text-xs uppercase tracking-wider mb-2">Email</span>
                                        <span className="text-cream font-medium">contato@surmani.com</span>
                                    </div>
                                    <div>
                                        <span className="block text-cream/60 text-xs uppercase tracking-wider mb-2">Horário</span>
                                        <span className="text-cream font-medium">Seg-Sex: 9h-19h<br />Sab: 10h-17h</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
