export type CategoryId = 'all' | 'sandwiches' | 'sides' | 'sauces' | 'drinks';

export interface Category {
  id: CategoryId;
  label: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'sandwiches' | 'sides' | 'sauces' | 'drinks';
  description: string;
  price: number;
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
  spicyLevel?: 0 | 1 | 2 | 3;
  tags?: string[];
  options?: {
    spiciness?: string[];
    sizes?: { name: string; extraPrice: number }[];
    addons?: { name: string; price: number }[];
  };
}

export interface Branch {
  id: string;
  name: string;
  area: string;
  address: string;
  hours: string;
  status: 'Open Now' | 'Opening Soon';
  phone: string;
  mapEmbedUrl: string;
  mapShareUrl?: string;
  distance?: string;
}

export interface SocialLinks {
  instagram: string;
  facebook?: string;
  tiktok?: string;
  twitter?: string;
}

export interface BrandInfo {
  name: string;
  subtitle: string;
  headline: string;
  tagline: string;
  currency?: string;
  highlightBadges: string[];
  heroFeastTitle?: string;
  heroFeastSubtitle?: string;
}

export interface RestaurantData {
  brand: BrandInfo;
  socials: SocialLinks;
  categories: Category[];
  menuItems: MenuItem[];
  branches: Branch[];
}
