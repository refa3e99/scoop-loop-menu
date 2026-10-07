import React from 'react';
import { ScoopLoopLogo, LoopArrow } from './BrandIcons';
import restaurantData from '../data/restaurantData.json';

export const Footer: React.FC = () => {
  const { socials } = restaurantData;

  return (
    <footer className="w-full max-w-full bg-[#0B3B24] text-[#FFE000] border-t-4 border-[#FFE000] pt-10 sm:pt-12 pb-8 sm:pb-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#FFE000]/20">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <ScoopLoopLogo variant="yellow" />
            <p className="text-xs sm:text-sm font-bold text-[#FFE000]/80 mt-2 max-w-sm">
              Your favorite bites, scooped, stacked &amp; served hot.
            </p>
          </div>

          {/* Social Icons & Links */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#FFE000]/70">
              JOIN THE LOOP ON SOCIAL
            </span>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-[#FFE000] text-[#0B3B24] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform font-bold cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Facebook */}
              {socials.facebook && (
                <a
                  href={socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-[#FFE000] text-[#0B3B24] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform font-bold cursor-pointer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom minimal copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFE000]/70 font-semibold gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <LoopArrow size={14} color="#FFE000" />
            <span>&copy; {new Date().getFullYear()} SCOOP LOOP Fast Food Co. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-bold">
            <span className="text-[#FFE000]/90">Good Food. Good Loop.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
