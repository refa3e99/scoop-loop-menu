import React from 'react';
import { MenuItem } from '../types';
import { X, Flame, Check } from 'lucide-react';
import { LoopArrow } from './BrandIcons';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FFFDF7] w-full max-w-lg rounded-l-3xl rounded-r-none max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in slide-in-from-bottom duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/95 text-[#0B3B24] border border-[#0B3B24]/20 flex items-center justify-center hover:bg-[#FFE000] transition-colors cursor-pointer"
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        {/* Header Image */}
        <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F8F5EE] border-b-2 border-[#0B3B24]/15 rounded-tl-3xl rounded-tr-none">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {item.isPopular && (
            <div className="absolute top-3 left-3 bg-[#FFE000] text-[#0B3B24] px-3 py-1 rounded-lg border border-[#0B3B24] text-xs font-black uppercase flex items-center gap-1">
              <LoopArrow size={12} color="#0B3B24" />
              <span>Popular Pick</span>
            </div>
          )}
        </div>

        {/* Content body */}
        <div className="p-5 sm:p-6 space-y-6">
          <div>
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <h2 id="modal-title" className="text-2xl font-black text-[#0B3B24] uppercase tracking-tight">
                {item.name}
              </h2>
              <span className="text-2xl font-black text-[#0B3B24]">
                {item.price.toFixed(2)} <span className="text-base font-extrabold">JD</span>
              </span>
            </div>
            <p className="text-sm font-medium text-[#0B3B24]/80 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Size / Meal Options available in store */}
          {item.options?.sizes && item.options.sizes.length > 0 && (
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider text-[#0B3B24]">
                Meal &amp; Size Options
              </label>
              <div className="grid grid-cols-1 gap-2">
                {item.options.sizes.map((sz) => (
                  <div
                    key={sz.name}
                    className="flex items-center justify-between p-3 rounded-xl border border-[#0B3B24]/20 bg-white text-[#0B3B24]"
                  >
                    <span className="text-sm font-bold">{sz.name}</span>
                    <span className="text-xs font-black text-[#0B3B24]/80">
                      {sz.extraPrice > 0 ? `+${sz.extraPrice.toFixed(2)} JD` : 'Standard'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Spice Level Option */}
          {item.options?.spiciness && item.options.spiciness.length > 0 && (
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider text-[#0B3B24] flex items-center gap-1">
                <Flame size={14} className="text-[#FF5500]" />
                Spice &amp; Seasoning Options
              </label>
              <div className="flex flex-wrap gap-2">
                {item.options.spiciness.map((sp) => (
                  <span
                    key={sp}
                    className="px-3 py-1.5 rounded-xl border border-[#0B3B24]/20 bg-white text-xs font-bold text-[#0B3B24]"
                  >
                    {sp}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Add-ons */}
          {item.options?.addons && item.options.addons.length > 0 && (
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider text-[#0B3B24]">
                Add-ons &amp; Extras
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.options.addons.map((add) => (
                  <div
                    key={add.name}
                    className="flex items-center justify-between p-2.5 rounded-xl border border-[#0B3B24]/15 bg-white text-xs text-[#0B3B24]"
                  >
                    <div className="flex items-center gap-1.5">
                      <Check size={13} className="text-[#0B3B24]" />
                      <span className="font-medium">{add.name}</span>
                    </div>
                    <span className="font-extrabold">+{add.price.toFixed(2)} JD</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Close Action */}
          <div className="pt-3 border-t-2 border-[#0B3B24]/15">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3.5 px-4 bg-[#0B3B24] text-[#FFE000] hover:bg-[#062818] rounded-xl font-black text-sm uppercase tracking-wider transition-all active:scale-98 shadow-sm cursor-pointer text-center"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
