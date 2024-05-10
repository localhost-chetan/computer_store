"use client";

import { Divider } from "@nextui-org/react";
import ProductDropdown from "./ProductDropdown";
import { useState } from "react";
import Link from "next/link";
import PriceConvertor from "../ProductComps/ProductCardComps/PriceConvertor";
import WishListIcon from "../ProductComps/ProductCardComps/WishListIcon";
import SocialShare from "../SocialShare";
import {
  AddToCart,
  BuyNow,
} from "../ProductComps/ProductCardComps/ProductButtons";
import { ProductDataType } from "@/context/CartContext";

const CustomPCBuilderComp = ({ categories }: { categories: any }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const [selectedProducts, setSelectedProducts] = useState<
    ProductDataType[] | []
  >([]);

  console.log(selectedProducts);

  console.log(totalPrice);

  return (
    <>
      {/* Price */}
      <PriceConvertor
        price={totalPrice / 83.5}
        percentage={0}
        lg={`text-4xl`}
      />

      <div className={`space-y-2 text-pretty`}>
        <p className={`font-bold`}>
          Get Rs 500/- instant cashback. Follow these 4 steps to claim-
        </p>
        <ul className={`max-w-[70ch] list-inside list-decimal space-y-1`}>
          <li>Purchase a Custom PC from FlashByte.</li>
          <li>
            Make a 5-10 min review video (You can show unboxing or do a review
            of your PC).
          </li>
          <li>Upload it on YouTube and also tag FlashByte Channel in title.</li>
          <li>
            Share the video link to us on whatsapp
            <Link
              href={`tel:919509129835`}
              className={`font-semibold text-orange-400`}
            >
              +91 9509129835
            </Link>
          </li>
        </ul>
      </div>

      <div className={`space-y-8 py-5`}>
        {categories.map(
          ({
            id,
            productCategory,
            label,
            quantity,
            max,
            isRequired,
            description,
            defaultSelectedId,
          }: {
            id: number;
            productCategory: string;
            label: string;
            quantity: boolean;
            max: number;
            isRequired: boolean;
            description?: string | null;
            defaultSelectedId?: string | null;
          }) => (
            <div key={id} className={`space-y-4`}>
              <ProductDropdown
                productCategory={productCategory}
                label={label}
                quantity={quantity}
                max={max}
                isRequired={isRequired}
                description={description || null}
                setTotalPrice={setTotalPrice}
                setSelectedProducts={setSelectedProducts}
                defaultSelectedId={defaultSelectedId}
              />

              <Divider orientation={`horizontal`} />
            </div>
          ),
        )}
      </div>

      {/* Pricing */}
      <div className={`flex items-center gap-x-1`}>
        <p className={`font-semibold`}>{`Total Price : `}</p>
        {
          <PriceConvertor
            price={totalPrice / 83.5}
            percentage={0}
            sm={`text-2xl`}
            md={`text-3xl`}
            lg={`text-4xl`}
          />
        }
      </div>

      {/* Share */}
      <span className={`sr-only`}>Social Media Sharing</span>
      <div className={`flex justify-between`}>
        <WishListIcon productId={[]} />

        <SocialShare />
      </div>

      <div className={`flex items-center justify-start gap-x-8`}>
        <AddToCart productData={selectedProducts} />

        <BuyNow color={`danger`} />
      </div>
    </>
  );
};

export default CustomPCBuilderComp;
