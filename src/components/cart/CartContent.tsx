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
        <div className={`space-y-3`}>
          <div
            className={`grid w-full grid-cols-6 p-3 *:text-center dark:bg-gray-800`}
          >
            <span className={`col-span-3`}>PRODUCT</span>
            <span className={``}>PRICE</span>
            <span className={``}>QUANTITY</span>
            <span className={`ml-auto`}>SUBTOTAL</span>
          </div>
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
                  className={`grid w-full grid-cols-6 items-center justify-between gap-x-2 align-middle`}
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

                  <div className={`text-center`}>
                    <PriceConvertor
                      percentage={discountPercent}
                      price={price}
                      md={`text-xl`}
                      lg={`text-2xl`}
                    ></PriceConvertor>
                  </div>

                  <div
                    className={`col-span-2 flex w-full flex-col items-center gap-x-4 gap-y-3 lg:flex-row`}
                  >
                    <div className={`ml-2`}>
                      <QuantityComp showText={false} />
                    </div>

                    <div className={`ml-auto w-fit justify-end`}>
                      <PriceConvertor
                        price={1000}
                        percentage={discountPercent}
                        md={`text-xl`}
                        lg={`text-2xl`}
                      ></PriceConvertor>
                    </div>
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
