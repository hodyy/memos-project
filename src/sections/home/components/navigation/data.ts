import type { NavItems } from '@/sections/home/components/navigation/navTypes.ts';
import faDribbble from '@/assets/images/icons/fa-dribbble.svg';
import faBehance from '@/assets/images/icons/fa-behance.svg';

type Item = {
  name: NavItems;
  icon?: string;
};

const home: Item = {
  name: 'Home',
};

const features: Item = {
  name: 'Features',
};
const pricing: Item = {
  name: 'Pricing',
};
const blog: Item = {
  name: 'Blog',
};
const network: Item = {
  name: 'Ball',
  icon: faDribbble,
};
const be: Item = {
  name: 'Be',
  icon: faBehance,
};

export const navigationItems: Item[] = [home, features, pricing, blog, network, be];
