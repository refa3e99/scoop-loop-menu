import React from 'react';
import { MenuItem } from '../types';
import { Flame, ArrowUpRight } from 'lucide-react';
import { LoopArrow } from './BrandIcons';

interface FoodCardProps {
  item: MenuItem;
  onSelect: (item: MenuItem) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item, onSelect }) => {
  return (
    <article
      onClick={() => onSelect(item)}
      className="group relative bg-white rounded-3xl border-2 border-[#0B3B24]/15 hover:border-[#0B3B24] transition-all duration-200 overflow-hidden flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-[0_12px_24px_-10px_rgba(11,59,36,0.18)]"
    >
      {/* Food Photo Container */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F8F5EE]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Popular / New Badge */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {item.isPopular && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FFE000] text-[#0B3B24] font-black text-xs uppercase tracking-wider border border-[#0B3B24] shadow-xs">
              <LoopArrow size={12} color="#0B3B24" />
              Popular
            </span>
          )}
          {item.isNew && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-[#0B3B24] text-[#FFE000] font-black text-[11px] uppercase tracking-wider shadow-xs">
              New
            </span>
          )}
        </div>

        {/* Spicy indicator if applicable */}
        {item.spicyLevel && item.spicyLevel > 0 ? (
          <div className="absolute bottom-2 left-3 bg-[#0B3B24]/90 backdrop-blur-xs text-white px-2 py-0.5 rounded-md text-[11px] font-bold flex items-center gap-1">
            <Flame size={12} className="text-[#FF5500]" />
            <span>{item.spicyLevel === 3 ? 'Extra Hot' : 'Spicy'}</span>
          </div>
        ) : null}
      </div>

      {/* Card Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-black text-lg sm:text-xl text-[#0B3B24] leading-tight group-hover:text-[#062818] transition-colors">
              {item.name}
            </h3>
            <span className="text-[#0B3B24]/40 group-hover:text-[#0B3B24] transition-colors shrink-0 pt-0.5">
              <ArrowUpRight size={18} />
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#0B3B24]/75 font-medium line-clamp-2 leading-relaxed mb-4">
            {item.description}
          </p>
        </div>

        {/* Price & Clean Details Indicator */}
        <div className="pt-3 border-t border-dashed border-[#0B3B24]/15 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-extrabold text-[#0B3B24]/60 tracking-wider">
              Price
            </span>
            <span className="font-black text-xl sm:text-2xl text-[#0B3B24] tracking-tight">
              {item.price.toFixed(2)} <span className="text-sm sm:text-base font-extrabold">JD</span>
            </span>
          </div>

          <span className="text-xs font-black uppercase text-[#0B3B24] bg-[#FFE000]/30 group-hover:bg-[#FFE000] px-3 py-1.5 rounded-xl border border-[#0B3B24]/20 transition-colors">
            Details
          </span>
        </div>
      </div>
    </article>
  );
};
