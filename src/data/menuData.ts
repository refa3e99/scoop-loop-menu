import restaurantData from './restaurantData.json';
import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = restaurantData.menuItems as MenuItem[];
export default MENU_ITEMS;
