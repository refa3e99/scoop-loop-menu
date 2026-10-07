import React from 'react';
import { ScoopLoopLogo } from './BrandIcons';
import { MapPin, UtensilsCrossed } from 'lucide-react';

interface HeaderProps {
  activeSection: 'menu' | 'branches';
  onNavigate: (section: 'menu' | 'branches') => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full max-w-full bg-[#FFE000] border-b-2 border-[#0B3B24]/15 shadow-xs transition-colors">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-14 sm:h-20 flex items-center justify-between gap-2">
        {/* Logo / Brand Name on the left */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B3B24] rounded-lg p-0.5 shrink-0"
          aria-label="SCOOP LOOP Home"
        >
          <ScoopLoopLogo variant="dark" />
        </a>

        {/* Navigation: Menu & Branches */}
        <nav
          aria-label="Primary Navigation"
          className="flex items-center gap-1 sm:gap-2 bg-[#0B3B24]/10 p-0.5 sm:p-1 rounded-xl shrink-0"
        >
          <button
            onClick={() => onNavigate('menu')}
            className={`min-h-[34px] sm:min-h-[42px] px-2.5 sm:px-4 py-1.5 rounded-lg text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-150 flex items-center gap-1 active:scale-95 cursor-pointer ${
              activeSection === 'menu'
                ? 'bg-[#0B3B24] text-[#FFE000] shadow-xs'
                : 'text-[#0B3B24] hover:bg-black/5'
            }`}
          >
            <UtensilsCrossed size={13} className="shrink-0" />
            <span>Menu</span>
          </button>

          <button
            onClick={() => onNavigate('branches')}
            className={`min-h-[34px] sm:min-h-[42px] px-2.5 sm:px-4 py-1.5 rounded-lg text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-150 flex items-center gap-1 active:scale-95 cursor-pointer ${
              activeSection === 'branches'
                ? 'bg-[#0B3B24] text-[#FFE000] shadow-xs'
                : 'text-[#0B3B24] hover:bg-black/5'
            }`}
          >
            <MapPin size={13} className="shrink-0" />
            <span>Branches</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
