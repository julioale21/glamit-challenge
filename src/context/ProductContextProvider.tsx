import React, { useState } from "react";
import Product from "../models/Product";
import { ProductContext } from "./ProductContext";
import { ICart } from "./ProductContextState";
import { editCart } from "./selector";

const ProductContextProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<ICart[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const addToCart = (product: Product) => {
    // setCart(cart.concat(product));
    setCart(editCart(product, "increment"));
  };

  const removeFromCart = (product: Product) => {
    //setCart(cart.filter((product) => product.id != id));
    setCart(editCart(product, "decrement"));
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
