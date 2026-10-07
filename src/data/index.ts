import restaurantData from './restaurantData.json';
import { MenuItem, Branch, Category, BrandInfo, SocialLinks, RestaurantData } from '../types';

export const RESTAURANT_DATA = restaurantData as RestaurantData;
export const MENU_ITEMS: MenuItem[] = restaurantData.menuItems as MenuItem[];
export const BRANCHES: Branch[] = restaurantData.branches as Branch[];
export const CATEGORIES: Category[] = restaurantData.categories as Category[];
export const BRAND_INFO: BrandInfo = restaurantData.brand as BrandInfo;
export const SOCIAL_LINKS: SocialLinks = restaurantData.socials as SocialLinks;

export default restaurantData;
