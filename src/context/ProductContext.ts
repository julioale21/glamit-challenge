import { createContext } from "react";
import { ProductContextState } from "./ProductContextState";

export const contextDefaultValues: ProductContextState = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  isCartOpen: false,
  openCart: () => {},
  closeCart: () => {},
};

export const ProductContext = createContext<ProductContextState>(contextDefaultValues);
