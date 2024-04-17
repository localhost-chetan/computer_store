import { Button } from "@nextui-org/react";
import { FaCartPlus } from "react-icons/fa6";

type ProductBtnType = {
  showIcon?: boolean;
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
};

const AddToCart = ({
  showIcon = true,
  color = "primary",
  variant = "solid",
  radius = "sm",
}: ProductBtnType) => {
  return (
    <Button
      color={color}
      variant={variant}
      radius={radius}
      className={`font-semibold`}
    >
      {showIcon && <FaCartPlus size={20} />}
      Add to Cart
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
