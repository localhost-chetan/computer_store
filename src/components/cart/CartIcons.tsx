"use client";

import { CartContext } from "@/context/CartContext";
// import { CartContext } from "@/context/CartContext";
import { Badge, Button } from "@nextui-org/react";
import Link from "next/link";
import { useContext } from "react";
// import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartIconComp = () => {
  const { cartProducts } = useContext(CartContext);
  // const ref = useRef();

  return (
    <Badge
      content={cartProducts?.length}
      color={`danger`}
      className={`mr-1 cursor-pointer`}
      showOutline={false}
      placement={`top-right`}
    >
      <Button
        isIconOnly
        as={Link}
        href={`/cart`}
        variant={`flat`}
        color={`default`}
        className={`mr-1`}
        // onClick={() => setCartState((prev: number) => prev + 1)}
      >
        <FaShoppingCart className={`cursor-pointer text-xl`} />
      </Button>
    </Badge>
  );
};

export default CartIconComp;
