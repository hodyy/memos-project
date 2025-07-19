export type Tariff = {
  name: string;
  price: number;
  activeFeatures: number[];
  buttonColor?: string;
};

const starter = {
  name: 'Starter',
  price: 9.99,
  activeFeatures: [1, 2, 3, 4],
};

const professional = {
  name: 'Professional',
  price: 19.99,
  activeFeatures: [1, 2, 3, 4, 5, 6, 7],
  buttonColor: '#E93A7D',
};

const team = {
  name: 'Team',
  price: 49.99,
  activeFeatures: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

export const tariffs = [starter, professional, team];
export const features = [
  { id: 1, name: '2GB of space' },
  { id: 2, name: '14 days of backups' },
  { id: 3, name: 'Social integrations' },
  { id: 4, name: 'Client billing' },
  { id: 5, name: 'Remote access' },
  { id: 6, name: 'Custom Domain' },
  { id: 7, name: '24 hours support' },
  { id: 8, name: 'Admin tools' },
  { id: 9, name: 'Collaboration tools' },
  { id: 10, name: 'User management' },
];

export const pricingData = {
  header: 'Plans & Pricing',
  text: 'Startup Framework is free forever — you only pay for custom domain hosting or to export your site.',
};
