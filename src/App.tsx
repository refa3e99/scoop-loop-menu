/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { ItemModal } from './components/ItemModal';
import { BranchesSection } from './components/BranchesSection';
import { Footer } from './components/Footer';
import { MENU_ITEMS } from './data/menuData';
import { MenuItem } from './types';

export default function App() {
  const [activeNav, setActiveNav] = useState<'menu' | 'branches'>('menu');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const branchesEl = document.getElementById('branches');
      if (branchesEl) {
        const rect = branchesEl.getBoundingClientRect();
        if (rect.top <= 200) {
          setActiveNav('branches');
        } else {
          setActiveNav('menu');
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: 'menu' | 'branches') => {
    setActiveNav(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col font-['Plus_Jakarta_Sans',sans-serif] bg-[#FFFDF7] text-[#0B3B24]">
      {/* 1. Header with SCOOP LOOP branding and simple, mobile-responsive navigation */}
      <Header
        activeSection={activeNav}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {/* 2. Hero Section: Bright Yellow, Headline, View Menu CTA, Looping packaging graphics */}
        <Hero
          onViewMenu={() => handleNavigate('menu')}
          onViewBranches={() => handleNavigate('branches')}
        />

        {/* 3. Menu Section: Main focus, category filters, food cards */}
        <MenuSection
          items={MENU_ITEMS}
          onSelectItem={(item) => setSelectedItem(item)}
        />

        {/* 4. Branches Section: "FIND YOUR LOOP", compact cards, directions & interactive map */}
        <BranchesSection />
      </main>

      {/* 5. Minimal Footer */}
      <Footer />

      {/* Item Details Modal */}
      <ItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
