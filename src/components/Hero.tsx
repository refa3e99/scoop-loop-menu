import React from 'react';
import { ArrowDown, Flame, Sparkles } from 'lucide-react';
import { LoopArrow } from './BrandIcons';
import restaurantData from '../data/restaurantData.json';

interface HeroProps {
  onViewMenu: () => void;
  onViewBranches: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewMenu, onViewBranches }) => {
  const { brand } = restaurantData;
  return (
    <section className="relative w-full max-w-full bg-[#FFE000] text-[#0B3B24] overflow-hidden pt-7 pb-10 sm:pt-14 sm:pb-20 border-b-4 border-[#0B3B24]">
      {/* Background Packaging Looping Arrow Graphics */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-15">
        <svg
          className="absolute -top-10 -left-10 w-64 h-64 sm:w-80 sm:h-80 text-[#0B3B24]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M20,100 A80,80 0 1,1 180,100 A80,80 0 1,1 20,100"
            stroke="currentColor"
            strokeWidth="12"
            strokeDasharray="18 12"
          />
          <polygon points="175,85 195,100 175,115" fill="currentColor" />
        </svg>

        <svg
          className="absolute -bottom-16 -right-10 w-72 h-72 sm:w-96 sm:h-96 text-[#0B3B24]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M30,100 C30,40 170,40 170,100 C170,160 30,160 30,100"
            stroke="currentColor"
            strokeWidth="10"
            strokeDasharray="24 16"
          />
          <polygon points="170,90 185,105 155,105" fill="currentColor" />
        </svg>

        <div className="absolute top-1/4 right-1/3 rotate-12">
          <LoopArrow size={48} color="#0B3B24" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10 w-full">
            {/* Playful brand ribbon */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B3B24] text-[#FFE000] text-[11px] sm:text-xs font-black uppercase tracking-wider mb-3 sm:mb-6 shadow-xs">
              <LoopArrow size={13} color="#FFE000" />
              <span>FRESH • CRISPY • STACKED</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-[#0B3B24] leading-[0.98] mb-3 sm:mb-6 break-words w-full">
              GOOD VIBES.
              <br />
              <span className="relative inline-block">
                GREAT SCOOPS.
                {/* Underline swoop */}
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-2.5 sm:h-3 text-[#0B3B24]"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C50 2 150 2 198 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting line */}
            <p className="text-base sm:text-2xl font-bold text-[#0B3B24]/90 max-w-xl leading-snug mb-5 sm:mb-8">
              {brand.tagline}
            </p>

            {/* Feature points */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 sm:mb-7 text-xs sm:text-sm font-extrabold text-[#0B3B24]">
              {brand.highlightBadges.map((badge, idx) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 bg-[#FFFDF5] px-2.5 sm:px-3 py-1.5 rounded-lg border border-[#0B3B24]/15 shadow-2xs"
                >
                  {idx % 2 === 0 ? (
                    <Flame size={14} className="text-[#0B3B24]" />
                  ) : (
                    <Sparkles size={14} className="text-[#0B3B24]" />
                  )}
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onViewMenu}
                className="w-full sm:w-auto px-6 py-3.5 sm:px-7 sm:py-4 bg-[#0B3B24] text-[#FFE000] hover:bg-[#072919] hover:scale-[1.02] active:scale-[0.98] transition-all rounded-2xl font-black text-sm sm:text-lg uppercase tracking-wider shadow-md flex items-center justify-center gap-2 sm:gap-3 cursor-pointer group"
              >
                <span>View Menu</span>
                <ArrowDown
                  size={18}
                  className="transition-transform group-hover:translate-y-1"
                />
              </button>

              <button
                onClick={onViewBranches}
                className="w-full sm:w-auto px-5 py-3.5 sm:px-6 sm:py-4 bg-transparent border-2 border-[#0B3B24] text-[#0B3B24] hover:bg-[#0B3B24]/10 active:scale-[0.98] transition-all rounded-2xl font-black text-xs sm:text-base uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Find A Branch</span>
                <LoopArrow size={15} color="#0B3B24" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Food Spread Image */}
          <div className="lg:col-span-5 relative mt-3 lg:mt-0 w-full">
            {/* Packaging badge - kept safely inside mobile bounds */}
            <div className="absolute top-2 left-2 sm:-top-4 sm:-left-4 z-20 bg-[#0B3B24] text-[#FFE000] w-16 h-16 sm:w-22 sm:h-22 rounded-full flex flex-col items-center justify-center p-1 text-center shadow-md -rotate-12 border-2 border-[#FFE000]">
              <span className="text-[9px] sm:text-[11px] font-black uppercase leading-tight">CRUNCH</span>
              <span className="text-sm sm:text-lg font-black leading-none">LOOP</span>
              <span className="text-[8px] font-bold opacity-80">DAILY</span>
            </div>

            {/* Food Image Container */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-3 sm:border-4 border-[#0B3B24] shadow-[4px_4px_0px_0px_#0B3B24] sm:shadow-[8px_8px_0px_0px_#0B3B24] bg-white transition-transform hover:-translate-y-1 duration-300 w-full">
              <img
                src="/src/assets/images/hero_spread_1791354987636.jpg"
                alt="SCOOP LOOP Crispy Chicken Burgers and Loaded Fries Spread"
                className="w-full h-auto object-cover aspect-4/3 sm:aspect-16/10"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 sm:p-4 bg-[#FFFDF5] border-t-2 border-[#0B3B24] flex items-center justify-between">
                <div>
                  <p className="font-black text-xs sm:text-base text-[#0B3B24] uppercase tracking-tight">
                    The Loop Feast
                  </p>
                  <p className="text-[11px] sm:text-xs font-medium text-[#0B3B24]/75">
                    Fried to golden perfection on order
                  </p>
                </div>
                <span className="text-[10px] sm:text-xs font-black bg-[#FFE000] text-[#0B3B24] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-[#0B3B24]">
                  SIGNATURE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
