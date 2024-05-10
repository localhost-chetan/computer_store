"use client";

import { CartContext, ProductDataType } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { memo, useCallback, useContext, useEffect, useState } from "react";

const QuantityComp = ({
  min = 1,
  max = 10,
  scale,
  showText = true,
  quantity,
  productId,
}: {
  productId?: string;
  quantity: number;
  min?: number;
  max?: number;
  scale?: string;
  showText?: boolean;
}) => {
  const [counter, setCounter] = useState(quantity);
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const cartUpdater = useCallback(
    (id: string) => {
      if (setCartProducts) {
        setCartProducts((prevCartProducts: ProductDataType[]) => {
          return prevCartProducts.map((product: ProductDataType) => {
            return product?.productId === id
              ? { ...product, quantity: counter }
              : product;
          });
        });
      }
      localStorage.setItem("products", JSON.stringify(cartProducts));
    },
    [cartProducts, productId, counter], // Include setCounter as a dependency
  );

  useEffect(() => {
    console.log(`useEffect for cartUpdater`);
    cartUpdater(productId!);
  }, [counter]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const handleIncrement = () => {
    setCounter((prevCounter) => Math.min(prevCounter + 1, max));
  };

  const handleDecrement = () => {
    setCounter((prevCounter) => Math.max(prevCounter - 1, min));
  };

  return (
    <div className={cn(`flex items-stretch gap-2 font-semibold ${scale}`)}>
      <div className={cn(`self-center ${showText ? "block" : "hidden"}`)}>
        Qty:
      </div>

      <div
        className={`flex overflow-hidden rounded-md border-small border-zinc-500 bg-zinc-300`}
      >
        <div className={``}>
          <Button
            isIconOnly
            radius={`none`}
            className={`text-xl font-medium`}
            onClick={handleDecrement}
          >
            -
          </Button>
        </div>

        <div className={`flex items-center bg-zinc-400 px-4 dark:bg-gray-500`}>
          {counter}
        </div>

        <div className={``}>
          <Button
            isIconOnly
            radius={`none`}
            className={`text-xl font-medium`}
            onClick={handleIncrement}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(QuantityComp);
