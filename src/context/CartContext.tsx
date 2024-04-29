"use client";

import { createContext, useEffect, useState } from "react";

export type ProductDataType = {
  productId: string;
  productName: string;
  description: string;
  image: string;
  price: number;
  discountPercent: number;
};

export const CartContext = createContext<any>([]);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<ProductDataType[] | []>([]);

  console.log(`CartContext comp rendered`);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");

    console.log(`CartContext useEffect executed`);

    if (storedProducts) {
      setCartProducts(JSON.parse(storedProducts));
    } else {
      localStorage.setItem("products", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
