import React, { useState } from "react";
import Product from "../models/Product";
import { ProductContext } from "./ProductContext";

const ProductContextProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const addToCart = (product: Product) => {
    setCart(cart.concat(product));
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((product) => product.id != id));
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <ProductContext.Provider
      value={{ cart, addToCart, removeFromCart, isCartOpen, openCart, closeCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
