import Container from "@/components/Container";
import ProductDropdown from "@/components/CustomPC/ProductDropdown";
import ProductAssuranceCOD from "@/components/ProductAssuranceCOD";
import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import PriceConvertor from "@/components/ProductComps/ProductCardComps/PriceConvertor";
// import CustomerCarousel from "@/components/ProductComps/CustomerCarousel";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import IntelCabinet from "@/../public/Cabinets/Intel Gaming PC Cabinet.png";
import {
  AddToCart,
  BuyNow,
} from "@/components/ProductComps/ProductCardComps/ProductButtons";
import { Divider } from "@nextui-org/react";
import QuantityComp from "@/components/ProductComps/QuantityComp";
import SocialShare from "@/components/SocialShare";
import WishListIcon from "@/components/ProductComps/ProductCardComps/WishListIcon";

export const metadata: Metadata = {
  title: "Custom PC",
};

const CustomPC = () => {
  const categories = [
    {
      id: 1,
      productCategory: "processors",
      label: "Processor",
      quantity: false,
      max: 1,
      isRequired: true,
    },
    {
      id: 2,
      productCategory: "motherboards",
      label: "Motherboard",
      quantity: false,
      max: 1,
      isRequired: true,
    },
    {
      id: 8,
      productCategory: "ram_modules",
      label: "RAM",
      quantity: true,
      max: 4,
      isRequired: true,
    },
    {
      id: 3,
      productCategory: "mouses",
      label: "Mouse",
      quantity: false,
      max: 4,
      isRequired: false,
    },
    {
      id: 4,
      productCategory: "headsets",
      label: "Headset",
      quantity: true,
      max: 10,
      isRequired: false,
    },
    {
      id: 5,
      productCategory: "cabinets",
      label: "Cabinet",
      quantity: false,
      max: 1,
      isRequired: true,
    },
    {
      id: 6,
      productCategory: "monitors",
      label: "Monitor",
      quantity: false,
      max: 10,
      isRequired: false,
    },
    {
      id: 7,
      productCategory: "keyboards",
      label: "Keyboard",
      quantity: true,
      max: 2,
      isRequired: false,
    },

    {
      id: 9,
      productCategory: "storage_devices",
      label: "Storage",
      quantity: true,
      max: 4,
      isRequired: true,
    },
    {
      id: 10,
      productCategory: "case_fans",
      label: "Case Fan",
      quantity: true,
      max: 10,
      isRequired: true,
    },
  ];

  return (
    <Container>
      <Breadcrumb>Custom PC</Breadcrumb>

      <section
        className={`relative flex flex-col gap-x-5 md:gap-y-0 lg:flex-row lg:gap-y-10`}
      >
        {/* Image */}
        <div
          className={`top-0 w-full grow-0 select-none p-2 md:scale-95 lg:sticky lg:h-screen lg:scale-100`}
        >
          <div className={`flex h-full items-center p-2`}>
            <Image
              // src={`/Cabinet/Intel Gaming PC Cabinet.png`}
              src={IntelCabinet}
              alt={`Intel Gaming PC Cabinet`}
              priority
              quality={10}
              blurDataURL=""
              className={``}
            ></Image>
          </div>
        </div>

        {/* Form */}
        <div className={`w-full grow space-y-5 p-5`}>
          <h1
            className={`text-balance text-2xl font-extrabold sm:text-3xl md:text-2xl lg:text-3xl`}
          >
            Build Your Dream PC 😎
          </h1>

          <div className={`relative space-y-4`}>
            <h3 className={`text-balance text-xl font-bold`}>
              Our Latest PC Builds & Happy Customers!
            </h3>

            {/* <CustomerCarousel /> */}
          </div>

          <ProductAssuranceCOD />

          {/* Price */}
          <PriceConvertor price={1000} percentage={0} lg={`text-4xl`} />

          <div className={`space-y-2 text-pretty`}>
            <p className={`font-bold`}>
              Get Rs 500/- instant cashback. Follow these 4 steps to claim-
            </p>
            <ul className={`max-w-[70ch] list-inside list-decimal space-y-1`}>
              <li>Purchase a Custom PC from FlashByte.</li>
              <li>
                Make a 5-10 min review video (You can show unboxing or do a
                review of your PC).
              </li>
              <li>
                Upload it on YouTube and also tag FlashByte Channel in title.
              </li>
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
              }: {
                id: number;
                productCategory: string;
                label: string;
                quantity: boolean;
                max: number;
                isRequired: boolean;
              }) => (
                <>
                  <ProductDropdown
                    key={id}
                    productCategory={productCategory}
                    label={label}
                    quantity={quantity}
                    max={max}
                    isRequired={isRequired}
                  />

                  <Divider orientation={`horizontal`} />
                </>
              ),
            )}
          </div>

          {/* Pricing */}
          <div className={`flex items-center gap-x-1`}>
            <p className={`font-semibold`}>{`Total Price : `}</p>
            {
              <PriceConvertor
                price={1000}
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
            <WishListIcon />

            <SocialShare />
          </div>

          <div
            className={`flex flex-col gap-x-5 gap-y-2 sm:flex-row sm:items-center`}
          >
            <QuantityComp scale={`scale-75 sm:scale-85`} />
            <div className={`flex gap-x-5`}>
              <AddToCart />
              <BuyNow color={`danger`} />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CustomPC;
