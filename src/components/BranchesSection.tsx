import React, { useState } from 'react';
import { BRANCHES } from '../data/branchesData';
import { Branch } from '../types';
import { MapPin, Clock, Phone, Navigation, ExternalLink } from 'lucide-react';
import { LoopArrow } from './BrandIcons';

export const BranchesSection: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<Branch>(BRANCHES[0] || {
    id: 'boulevard-abdali',
    name: 'Scoop Loop',
    area: 'AlAbdali - The Boulevard Abdali',
    address: 'The Boulevard Abdali, Amman',
    hours: '9:00 AM – 12:00 AM Daily',
    status: 'Open Now',
    phone: '+962 7 8999 7778',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.924053560224!2d35.9088078!3d31.962956999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1957310d46b%3A0xe3613e11a60c7b47!2sSCOOP%20LOOP!5e0!3m2!1sen!2sjo!4v1791362097451!5m2!1sen!2sjo',
    mapShareUrl: 'https://maps.app.goo.gl/jDFRTPJXiVALxScZA',
  });

  const getEmbedMapSrc = (branch: Branch) => {
    if (branch.mapEmbedUrl && branch.mapEmbedUrl.includes('/embed')) {
      return branch.mapEmbedUrl;
    }
    const query = encodeURIComponent(`${branch.name} ${branch.address || branch.area}`);
    return `https://maps.google.com/maps?q=${query}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  };

  const getDirectMapUrl = (branch: Branch) => {
    return branch.mapShareUrl || branch.mapEmbedUrl || `https://maps.google.com/?q=${encodeURIComponent(`${branch.name} ${branch.address}`)}`;
  };

  return (
    <section id="branches" className="py-10 sm:py-16 bg-[#F9F6ED] border-t-2 border-[#0B3B24]/10 scroll-mt-16 w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFE000] text-[#0B3B24] border border-[#0B3B24] rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <LoopArrow size={14} color="#0B3B24" />
            <span>LOCATIONS &amp; HOURS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B3B24] uppercase tracking-tight">
            FIND YOUR LOOP
          </h2>
          <p className="text-xs sm:text-base font-semibold text-[#0B3B24]/75 mt-1">
            Fresh bites served hot. Visit us or order takeaway.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start w-full">
          {/* Branch Cards Column */}
          <div className={`w-full ${BRANCHES.length === 1 ? 'lg:col-span-6 grid grid-cols-1' : 'lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4'}`}>
            {BRANCHES.map((branch) => {
              const isSelected = activeBranch.id === branch.id;
              const directMapUrl = getDirectMapUrl(branch);

              return (
                <div
                  key={branch.id}
                  onClick={() => setActiveBranch(branch)}
                  className={`bg-white rounded-2xl p-4 sm:p-5 border-2 transition-all cursor-pointer relative flex flex-col justify-between w-full ${
                    isSelected
                      ? 'border-[#0B3B24] shadow-sm bg-[#FFFDF5]'
                      : 'border-[#0B3B24]/15 hover:border-[#0B3B24]/40 hover:shadow-2xs'
                  }`}
                >
                  <div>
                    {/* Status & Area Tag */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase px-2 py-0.5 rounded-md bg-[#E8F5E9] text-[#0B3B24]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                        {branch.status}
                      </span>
                      {branch.distance ? (
                        <span className="text-[11px] font-extrabold text-[#0B3B24]/60">
                          {branch.distance}
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold text-[#0B3B24]/60">
                          Amman
                        </span>
                      )}
                    </div>

                    {/* Branch Title & Area */}
                    <h3 className="font-black text-lg sm:text-xl text-[#0B3B24] leading-snug mb-1">
                      {branch.name}
                    </h3>
                    <p className="text-xs font-bold text-[#0B3B24]/70 mb-2.5 flex items-center gap-1">
                      <MapPin size={13} className="text-[#0B3B24] shrink-0" />
                      <span>{branch.area}</span>
                    </p>

                    <p className="text-xs font-medium text-[#0B3B24]/80 leading-relaxed mb-3 pl-3 border-l-2 border-[#FFE000]">
                      {branch.address}
                    </p>

                    {/* Opening Hours */}
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B3B24] mb-3.5 bg-[#FFFDF5] p-2 rounded-lg border border-[#0B3B24]/10">
                      <Clock size={13} className="text-[#0B3B24]/70 shrink-0" />
                      <span>{branch.hours}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-dashed border-[#0B3B24]/10 flex flex-col gap-2">
                    <a
                      href={directMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-2.5 px-4 bg-[#0B3B24] text-[#FFE000] hover:bg-[#072a19] rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
                    >
                      <Navigation size={14} />
                      <span>Get Directions</span>
                    </a>

                    <a
                      href={`tel:${branch.phone.replace(/[^\d+]/g, '')}`}
                      onClick={(e) => e.stopPropagation()}
                      className="w-full py-2.5 px-4 bg-[#FFE000] text-[#0B3B24] border-2 border-[#0B3B24] hover:bg-[#ffe633] active:scale-98 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
                      aria-label={`Call ${branch.phone}`}
                    >
                      <Phone size={14} />
                      <span>Call {branch.phone}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Google Maps Preview Column with SCOOP LOOP Theme */}
          <div className={`${BRANCHES.length === 1 ? 'lg:col-span-6' : 'lg:col-span-5'} bg-white rounded-2xl sm:rounded-3xl border-2 border-[#0B3B24] overflow-hidden shadow-xs w-full`}>
            {/* Map Header */}
            <div className="p-3.5 sm:p-4 bg-[#FFE000] border-b-2 border-[#0B3B24] flex items-center justify-between gap-2">
              <div className="min-w-0">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0B3B24]/75 block truncate">
                  Google Maps Location
                </span>
                <span className="text-sm sm:text-base font-black text-[#0B3B24] tracking-tight truncate block">
                  {activeBranch.name} • {activeBranch.area}
                </span>
              </div>
              <a
                href={getDirectMapUrl(activeBranch)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#0B3B24] text-[#FFE000] rounded-lg text-xs font-bold flex items-center gap-1 hover:bg-[#082a1a] shrink-0"
                aria-label="Open branch in Google Maps app"
              >
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Real Google Maps Embed Container with SCOOP LOOP Framing */}
            <div className="relative w-full h-64 sm:h-80 bg-[#E9E5D9] overflow-hidden">
              <iframe
                title={`Google Maps location for ${activeBranch.name}`}
                src={getEmbedMapSrc(activeBranch)}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* SCOOP LOOP Floating theme badge */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-xs p-2 sm:p-2.5 rounded-xl border-2 border-[#0B3B24] shadow-xs flex items-center justify-between text-xs max-w-[calc(100%-20px)] pointer-events-auto">
                <div className="flex items-center gap-1.5 min-w-0 mr-2">
                  <div className="w-6 h-6 rounded-md bg-[#FFE000] text-[#0B3B24] flex items-center justify-center shrink-0 border border-[#0B3B24]">
                    <LoopArrow size={13} color="#0B3B24" />
                  </div>
                  <span className="font-extrabold text-[#0B3B24] truncate text-[11px] sm:text-xs">
                    {activeBranch.address}
                  </span>
                </div>
                <a
                  href={getDirectMapUrl(activeBranch)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 bg-[#0B3B24] text-[#FFE000] px-2.5 py-1 rounded-lg font-black hover:bg-[#072a19] flex items-center gap-1 text-[11px] uppercase transition-colors"
                >
                  <span>Open Maps</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>

            {/* Details bar below map */}
            <div className="p-3 sm:p-4 bg-white text-xs text-[#0B3B24]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 border-t border-[#0B3B24]/10">
              <span className="font-bold flex items-center gap-1 text-[11px] sm:text-xs">
                <Clock size={12} className="text-[#0B3B24] shrink-0" />
                {activeBranch.hours}
              </span>
              <a
                href={`tel:${activeBranch.phone.replace(/\s+/g, '')}`}
                className="font-black text-[#0B3B24] text-[11px] sm:text-xs hover:underline flex items-center gap-1"
              >
                <Phone size={12} />
                <span>{activeBranch.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
