"use client";

import { CommonFields } from "@/lib/mongodb/models/products/commonTypes";
import Image from "next/image";
import Discount from "../ProductCardComps/Discount";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type ImageSliderProp = {
  productData: CommonFields;
};

const ImageSlider = ({ productData }: ImageSliderProp) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1235 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1235, min: 900 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      className={`relative w-full border-b-small border-gray-500 lg:w-[50%] lg:border-none`}
    >
      <Carousel
        responsive={responsive}
        className={`bg-[#e1e0e0] sm:h-[400px] lg:h-[450px]`}
        ssr={true}
        showDots={true}
        infinite={true}
        // autoPlay={true}
      >
        {productData.imageURLs?.map((_, index) => (
          <Image
            key={index}
            src={productData?.imageURLs?.at(index)!}
            alt={productData.description}
            width={500}
            height={500}
            priority
            quality={100}
            className={`h-64 w-full shrink-0 grow-0 cursor-pointer object-scale-down transition-transform duration-500 ease-in-out hover:scale-110 md:h-80 lg:h-[30rem]`}
          ></Image>
        ))}
      </Carousel>
      <Discount percentage={productData?.discount?.percentage as number} />
    </div>
  );
};

export default ImageSlider;
