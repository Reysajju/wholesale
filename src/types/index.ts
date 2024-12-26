export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  minOrder?: number;
  wholesale?: boolean;
}

export interface NavLink {
  title: string;
  path: string;
}

export interface WholesaleTier {
  quantity: string;
  discount: string;
}

export interface BusinessType {
  id: string;
  name: string;
}