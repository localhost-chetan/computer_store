"use client";

import { CartContext, ProductDataType } from "@/context/CartContext";
import { useContext, useState } from "react";
import PriceConvertor from "../ProductComps/ProductCardComps/PriceConvertor";
import Image from "next/image";
import QuantityComp from "../ProductComps/QuantityComp";
import { Divider } from "@nextui-org/react";

const CartContent = () => {
  const { cartProducts } = useContext(CartContext);

  const [subTotal, setSubTotal] = useState<ProductDataType[]>(cartProducts);

  console.log(cartProducts);

  return (
    <>
      <div className={`overflow-hidden`}>
        <div className={`space-y-3 border`}>
          {cartProducts.map(
            ({
              productId,
              price,
              discountPercent,
              image,
              productName,
              description,
            }: ProductDataType) => (
              <>
                <div
                  key={productId}
                  className={`grid grid-cols-6 items-center justify-between gap-x-2 align-middle`}
                >
                  <div className={`col-span-3 flex items-center gap-x-4`}>
                    <Image
                      src={image}
                      alt={description}
                      height={200}
                      width={200}
                      priority
                      className={`aspect-square w-[100px] select-none border bg-[#e9e9e9] object-contain`}
                    ></Image>

                    <h4
                      className={`line-clamp-3 max-w-[30ch] text-balance text-lg font-semibold`}
                    >
                      {productName}
                    </h4>
                  </div>

                  <div>
                    <PriceConvertor
                      percentage={discountPercent}
                      price={price}
                    ></PriceConvertor>
                  </div>

                  <div className={``}>
                    <QuantityComp />
                  </div>

                  <div className={``}>
                    <PriceConvertor
                      price={1000}
                      percentage={discountPercent}
                    ></PriceConvertor>
                  </div>
                </div>

                <Divider />
              </>
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default CartContent;
