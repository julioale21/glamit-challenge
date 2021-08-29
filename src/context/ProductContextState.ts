import Product from "../models/Product";

export interface ICart extends Product {
  quantity: number;
}

export type ProductContextState = {
  cart: ICart[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};
