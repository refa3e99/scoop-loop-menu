import restaurantData from './restaurantData.json';
import { Branch } from '../types';

export const BRANCHES: Branch[] = restaurantData.branches as Branch[];
export default BRANCHES;
