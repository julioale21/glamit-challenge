import Product from "../models/Product";

export interface Icart extends Product {
  quantity: number;
}

export type ProductContextState = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};
