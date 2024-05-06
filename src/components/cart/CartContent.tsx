"use client";

import { CartContext, ProductDataType } from "@/context/CartContext";
import { useContext, useState } from "react";
import PriceConvertor from "../ProductComps/ProductCardComps/PriceConvertor";
import Image from "next/image";
import QuantityComp from "../ProductComps/QuantityComp";
import { Button, Tooltip } from "@nextui-org/react";
import { FaTrashAlt } from "react-icons/fa";
import Discount from "../ProductComps/ProductCardComps/Discount";

const CartContent = () => {
  const { cartProducts } = useContext(CartContext);

  const [subTotal, setSubTotal] = useState<ProductDataType[]>(cartProducts);

  console.log(cartProducts.length);

  return (
    <div className={`mx-auto w-full space-y-4 p-1 sm:w-[70%] lg:w-full`}>
      {cartProducts.map((product: ProductDataType) => {
        return (
          <div
            key={product?.productId!}
            className={`mx-auto grid max-w-[350px] grid-cols-1 place-items-stretch items-center justify-center gap-x-2 gap-y-2 rounded-md border-small border-slate-600 bg-gray-900 pb-3 lg:max-w-full lg:grid-cols-2 xl:gap-x-10`}
          >
            <div
              className={`flex  flex-col items-center gap-x-4 gap-y-3 border lg:flex-row`}
            >
              {/* Image */}
              <div
                className={`relative h-full w-full select-none overflow-hidden border md:aspect-square md:h-56`}
              >
                <Image
                  src={product.image}
                  alt={product.description}
                  width={150}
                  height={150}
                  className={`h-full w-full bg-slate-200 object-contain`}
                ></Image>

                <Discount
                  percentage={product?.discountPercent}
                  className={`left-1 top-1 scale-80`}
                />
              </div>

              {/* Details */}
              <div className={`w-full px-3 text-left`}>
                <span className={`text-balance font-semibold text-white`}>
                  {product?.productName}
                </span>

                <PriceConvertor
                  price={product?.price}
                  percentage={product?.discountPercent}
                  sm={`text-base`}
                  md={`text-lg`}
                  lg={`text-xl`}
                  className={`text-green-500`}
                ></PriceConvertor>
              </div>
            </div>

            {/* Subtotal & trash */}
            <div className={`ml-auto flex w-full items-center gap-x-14 border`}>
              <QuantityComp
                showText={false}
                scale={`scale-75 md:scale-85`}
              ></QuantityComp>

              <div className={`ml-auto flex items-center gap-x-4`}>
                <PriceConvertor
                  price={product?.price}
                  percentage={product?.discountPercent}
                  className={`text-xl text-green-500`}
                />

                <Tooltip
                  className={`font-semibold`}
                  content={`Remove this product from cart`}
                  color={`danger`}
                  size={`sm`}
                  shadow={`lg`}
                  placement={`top`}
                  offset={1}
                  delay={0}
                  closeDelay={0}
                  motionProps={{
                    variants: {
                      exit: {
                        opacity: 0,
                        transition: {
                          duration: 0.1,
                          ease: "easeIn",
                        },
                      },
                      enter: {
                        opacity: 1,
                        transition: {
                          duration: 0.15,
                          ease: "easeOut",
                        },
                      },
                    },
                  }}
                >
                  <Button isIconOnly variant={`light`} radius={`full`}>
                    <FaTrashAlt
                      color="white"
                      size={20}
                      className={`scale-75 transition-colors hover:text-rose-500 hover:dark:text-rose-300 md:scale-100`}
                    />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartContent;
