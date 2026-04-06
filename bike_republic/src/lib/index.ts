export const ROUTE_PATHS = {
  HOME: '/',
  BRAND: '/brand',
  PRODUCTS: '/products',
  DEALERS: '/dealers',
  SERVICES: '/services',
  CONTACT: '/contact',
} as const;

export type BikeCategory = 'Climbing' | 'Aero' | 'Endurance';

export interface Product {
  id: string;
  name: string;
  category: BikeCategory;
  price: number;
  weight: number;
  material: string;
  groupset: string;
  geometry: {
    stackHeight: number;
    reachLength: number;
    headTubeAngle: number;
    seatTubeAngle: number;
    wheelbase: number;
  };
  features: string[];
  benefitCopy: string;
  image: string;
  available: boolean;
}

export interface Dealer {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  region: '香港島' | '九龍' | '新界';
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Service {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  duration: string;
  bookingUrl: string;
  icon: string;
  features: string[];
}
