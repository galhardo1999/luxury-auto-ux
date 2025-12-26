"use client";

import { Heart, Gauge, Fuel, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Vehicle {
  id: number;
  name: string;
  year: number;
  price: number;
  km: number;
  image: string;
  brand: string;
  fuel: string;
  featured?: boolean;
}

interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
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

const VehicleCard = ({ vehicle, index }: VehicleCardProps) => {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/estoque/${vehicle.id}`);
  };

  return (
    <article
      className="group relative bg-gradient-to-b from-obsidian-light to-obsidian border border-gold/10 rounded-lg overflow-hidden transition-all duration-500 hover:border-gold/30 hover:shadow-gold-glow animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Featured Badge */}
      {vehicle.featured && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gold text-obsidian text-xs font-semibold uppercase tracking-wider rounded">
          Destaque
        </div>
      )}

      {/* Favorite Button */}
      <button
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-obsidian/70 backdrop-blur-sm flex items-center justify-center text-cream/60 hover:text-gold hover:bg-obsidian transition-all duration-300"
        aria-label="Adicionar aos favoritos"
        data-testid="button-favorite"
      >
        <Heart size={18} />
      </button>

      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={vehicle.image}
          alt={`${vehicle.name} ${vehicle.year}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Brand & Year */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-gold text-xs uppercase tracking-wider font-medium">{vehicle.brand}</span>
          <span className="text-cream/50 text-xs flex items-center gap-1">
            <Calendar size={12} />
            {vehicle.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-semibold text-cream mb-4 group-hover:text-gold transition-colors line-clamp-2">
          {vehicle.name}
        </h3>

        {/* Specs */}
        <div className="flex items-center gap-4 text-cream/60 text-sm mb-6">
          <span className="flex items-center gap-1.5">
            <Gauge size={14} className="text-gold/70" />
            {formatKm(vehicle.km)} km
          </span>
          <span className="flex items-center gap-1.5">
            <Fuel size={14} className="text-gold/70" />
            {vehicle.fuel}
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-end justify-between pt-4 border-t border-gold/10">
          <div>
            <span className="block text-xs text-cream/40 uppercase tracking-wider mb-1">A partir de</span>
            <span className="font-display text-2xl font-semibold text-gold">
              {formatPrice(vehicle.price)}
            </span>
          </div>
          <Button
            variant="luxury"
            size="sm"
            onClick={handleViewDetails}
            data-testid={`button-view-details-${vehicle.id}`}
          >
            Ver Detalhes
          </Button>
        </div>
      </div>
    </article>
  );
};

export default VehicleCard;
