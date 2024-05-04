"use client";

import { CartContext } from "@/context/CartContext";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useMemo, useState } from "react";
import { FaCartPlus, FaCheck } from "react-icons/fa6";
import { toast } from "sonner";

type ProductDataType = {
  productId: string;
  productName: string;
  description: string;
  image: string;
  price: number;
  discountPercent: number;
};

type ProductBtnType = {
  children?: string;
  radius?: "full" | "lg" | "md" | "sm" | "none";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning";
  variant?:
    | "solid"
    | "faded"
    | "bordered"
    | "light"
    | "flat"
    | "ghost"
    | "shadow";
  productData?: ProductDataType;
};

const AddToCart = ({
  variant = "solid",
  radius = "sm",
  productData,
}: ProductBtnType) => {
  const router = useRouter();

  const { cartProducts, setCartProducts } = useContext(CartContext);

  const [cartBtnState, setCartBtnState] = useState({
    cartBtnText: "Add to Cart",
    cartBtnIcon: <FaCartPlus size={20} />,
    isRoutable: false,
    color: `primary`,
  });

  console.log(cartProducts);

  const isProductInCart = useMemo((): boolean => {
    return cartProducts?.some(
      (product: ProductDataType) =>
        product.productId === productData?.productId,
    );
  }, [cartProducts, productData?.productId]);

  const handleClick = () => {
    console.log(`Add to Cart handleClick() invoked ${productData?.productId}`);

    if (isProductInCart) {
      router.push(`/cart`);
    } else {
      setCartProducts((prevCartProducts: ProductDataType[]) => [
        ...prevCartProducts,
        productData,
      ]);
      toast.success(`${productData?.productName} added to cart`);
      // console.log(`CartProducts inside handleClick ${cartProducts}`);
    }
  };

  useEffect(() => {
    if (isProductInCart) {
      setCartBtnState({
        ...cartBtnState,
        cartBtnText: "View in Cart",
        cartBtnIcon: <FaCheck size={20} />,
        isRoutable: true,
        color: isProductInCart ? `default` : `primary`,
      });
    }
    localStorage.setItem("products", JSON.stringify(cartProducts));
  }, [isProductInCart]);

  return (
    <Button
      color={
        cartBtnState.color as
          | "default"
          | "primary"
          | "secondary"
          | "danger"
          | "success"
          | "warning"
      }
      variant={variant}
      radius={radius}
      className={`font-semibold`}
      onClick={handleClick}
      size={`md`}
    >
      {cartBtnState.cartBtnIcon}
      {cartBtnState.cartBtnText}
    </Button>
  );
};

const BuyNow = ({
  color = "primary",
  variant = "shadow",
  radius = `sm`,
}: ProductBtnType) => {
  return (
    <Button
      color={color}
      variant={variant}
      radius={radius}
      className={`font-semibold`}
    >
      Buy Now
    </Button>
  );
};

export { AddToCart, BuyNow };
