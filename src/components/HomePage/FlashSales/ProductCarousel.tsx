"use client";

import GridCardComp from "@/components/ProductComps/ProductCardComps/GridCardComp";
import { CommonFields } from "@/lib/mongodb/models/products/commonTypes";
import { Review } from "@/lib/mongodb/models/User/type/userTypes";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductCarousel = ({ filteredData }: [CommonFields] | any) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1370 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1370, min: 900 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      ssr={true}
      className={`mx-auto mb-16 py-10`}
      autoPlay={true}
    >
      {filteredData?.map((product: CommonFields) => {
        return (
          <GridCardComp
            key={product._id?.toString()!}
            productId={product._id?.toString()!}
            productName={product?.name}
            imageURLs={product?.imageURLs as string[]}
            description={product?.description}
            price={product?.price}
            productReviews={product?.reviews as Review[]}
            productCategory={product?.category}
            discountPercent={product?.discount?.percentage!}
          />
        );
      })}
    </Carousel>
  );
};

export default ProductCarousel;
