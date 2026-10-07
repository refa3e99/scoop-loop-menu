import React, { useState, useMemo } from 'react';
import { MenuItem, CategoryId } from '../types';
import { FoodCard } from './FoodCard';
import { Search, Sparkles, X } from 'lucide-react';
import { LoopArrow } from './BrandIcons';
import restaurantData from '../data/restaurantData.json';

interface MenuSectionProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
}

const CATEGORIES = restaurantData.categories as { id: CategoryId; label: string }[];

export const MenuSection: React.FC<MenuSectionProps> = ({
  items,
  onSelectItem,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyPopular, setOnlyPopular] = useState(false);

  // Filter items
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Popular filter
      if (onlyPopular && !item.isPopular) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTags = item.tags?.some((t) => t.toLowerCase().includes(query));
        return matchesName || matchesDesc || matchesTags;
      }
      return true;
    });
  }, [items, activeCategory, searchQuery, onlyPopular]);

  return (
    <section id="menu" className="py-10 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 scroll-mt-16 w-full max-w-full">
      {/* Menu Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-6 sm:mb-10 w-full">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0B3B24] mb-2">
            <LoopArrow size={15} color="#0B3B24" />
            <span>SCOOP LOOP FRESH KITCHEN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B3B24] uppercase tracking-tight">
            OUR CRAVE MENU
          </h2>
          <p className="text-xs sm:text-base text-[#0B3B24]/75 font-medium mt-1">
            Always freshly fried, seasoned, and stacked to order.
          </p>
        </div>

        {/* Search Bar & Quick Toggles */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto">
          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0B3B24]/50 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search burgers, fries..."
              className="w-full pl-9 pr-8 py-2 sm:py-2.5 bg-white border-2 border-[#0B3B24]/20 focus:border-[#0B3B24] rounded-xl text-xs sm:text-sm font-semibold text-[#0B3B24] placeholder-[#0B3B24]/40 outline-hidden transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#0B3B24]/50 hover:text-[#0B3B24]"
                aria-label="Clear search"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Popular toggle button */}
          <button
            onClick={() => setOnlyPopular(!onlyPopular)}
            className={`px-3 py-2 sm:py-2.5 rounded-xl border-2 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              onlyPopular
                ? 'bg-[#FFE000] border-[#0B3B24] text-[#0B3B24]'
                : 'bg-white border-[#0B3B24]/20 text-[#0B3B24]/70 hover:border-[#0B3B24]'
            }`}
          >
            <Sparkles size={13} />
            <span>Popular Only</span>
          </button>
        </div>
      </div>

      {/* Category Tabs: Contained without negative margin overflow */}
      <div className="sticky top-14 sm:top-20 z-30 bg-[#FFFDF7]/95 backdrop-blur-xs py-2 sm:py-3 mb-6 sm:mb-8 border-b border-[#0B3B24]/10 w-full overflow-hidden">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-1 w-full">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                }}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wide whitespace-nowrap transition-all duration-150 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#0B3B24] text-[#FFE000] shadow-sm'
                    : 'bg-[#FFE000]/25 text-[#0B3B24] hover:bg-[#FFE000]/50 border border-[#0B3B24]/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Food Cards Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full">
          {filteredItems.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              onSelect={onSelectItem}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-12 px-4 bg-white rounded-3xl border-2 border-dashed border-[#0B3B24]/25 max-w-md mx-auto">
          <div className="w-12 h-12 bg-[#FFE000] rounded-2xl flex items-center justify-center mx-auto mb-3 border-2 border-[#0B3B24]">
            <LoopArrow size={24} color="#0B3B24" />
          </div>
          <h3 className="text-lg font-black text-[#0B3B24] uppercase mb-1">
            No Bites Found
          </h3>
          <p className="text-xs text-[#0B3B24]/70 mb-4">
            We couldn't find any menu item matching your search or filters.
          </p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
              setOnlyPopular(false);
            }}
            className="px-4 py-2 bg-[#0B3B24] text-[#FFE000] rounded-xl text-xs font-black uppercase cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};
