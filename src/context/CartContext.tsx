"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { toast } from "sonner";

export type ProductDataType = {
  productId: string;
  productName: string;
  description: string;
  image: string;
  price: number;
  discountPercent: number;
  quantity: number;
};

export const CartContext = createContext<any>([]);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<ProductDataType[] | []>([]);

  useEffect(() => {
    console.log(`useEffect in CartContext`);
    setCartProducts(() => {
      if (typeof window !== "undefined") {
        const storedProducts = localStorage.getItem("products");
        return storedProducts ? JSON.parse(storedProducts) : [...cartProducts];
      }
    });
  }, []);

  console.log(`CartContext comp rendered`);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");

    console.log(`CartContext useEffect executed`);

    if (storedProducts) {
      setCartProducts(JSON.parse(storedProducts));
    } else {
      localStorage.setItem("products", JSON.stringify(cartProducts));
    }
  }, []);

  const addToCart = (product: ProductDataType[]) => {
    setCartProducts((prevCartProducts) => [...prevCartProducts, ...product]);
  };

  const handleRemove = useCallback(
    (productId: string, productName: string) => {
      try {
        setCartProducts((prevCartProducts: ProductDataType[]) =>
          prevCartProducts.filter(
            (product) => product?.productId !== productId,
          ),
        );

        toast.success(
          `${productName} has been successfully removed from the cart ✔`,
        );
      } catch (error) {
        toast.error(`Something went wrong ❌`);
      }
    },
    [cartProducts],
  );

  const calculateSubTotal = useMemo(
    () =>
      (cartProducts: ProductDataType[]): number => {
        const subTotal = cartProducts.reduce(
          (accumulator: number, currentProduct: ProductDataType) => {
            return (
              accumulator +
              Math.floor(
                currentProduct?.price * 80 -
                  (currentProduct?.discountPercent / 100) *
                    currentProduct?.price *
                    80,
              ) *
                currentProduct?.quantity
            );
          },
          0,
        );

        return subTotal;
      },
    [cartProducts],
  );

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addToCart,
        handleRemove,
        calculateSubTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
