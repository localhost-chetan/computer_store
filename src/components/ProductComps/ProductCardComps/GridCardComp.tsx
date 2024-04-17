import Image from "next/image";
import WishListIcon from "./WishListIcon";
import Discount from "./Discount";
import PriceConvertor from "./PriceConvertor";
import StarRating from "./StarRating";
import Link from "next/link";
import { CardCompType } from "@/lib/productTypes";
import { AddToCart } from "./ProductButtons";

const GridCardComp = ({
  params,
  productId,
  productName,
  imageURLs,
  index,
  discountPercent,
  description,
  price,
  productReviews,
  productCategory,
}: CardCompType) => {
  console.log(params);

  console.log(productCategory?.replace(` `, `_`).toLowerCase().concat(`s`));

  return (
    <div
      key={productId ?? index}
      className={`grid grid-rows-2 gap-y-3 overflow-hidden shadow-lg shadow-slate-300 dark:shadow-slate-900 max-w-[25rem] sm:min-w-[15rem] md:max-w-[24rem] lg:max-w-[22rem] xl:max-w-[25rem] content-between dark:bg-gray-900 bg-slate-100 group/card cursor-pointer hover:scale-[1.03] ease-in-out duration-200 rounded-md h-[500px] mx-auto`}
    >
      {/* Image section */}
      <div
        className={`w-full select-none relative bg-gradient-to-b from-slate-100 to-slate-300 border-b-gray-50 border-gray-600 self-stretch`}
      >
        <Image
          style={{ width: "auto" }}
          src={imageURLs.at(0)?.toString() ?? ""}
          alt={productName}
          width={350}
          height={300}
          // placeholder={`blur`}
          priority
          className={`object-scale-down object-center w-full h-full aspect-video`}
        />

        <div
          className={`absolute top-3 right-3 sm:invisible group-hover/card:visible`}
        >
          <WishListIcon />
        </div>

        {/* Discount badge */}
        <Discount percentage={discountPercent as number} />
      </div>

      {/* Details Section */}
      <div
        className={`p-3 pt-2 pb-4 flex flex-col gap-y-4 self-stretch justify-between`}
      >
        <h1
          className={`text-xl font-extrabold text-pretty line-clamp-2`}
          title={productName}
        >
          {productName}
        </h1>
        <h2
          className={`text-sm text-ellipsis dark:text-slate-400 text-slate-600 line-clamp-2`}
          title={description}
        >
          {description}
        </h2>

        <div className={`flex items-center justify-between`}>
          {/* Pricing */}
          <div className={`flex items-center gap-2`}>
            <PriceConvertor
              price={price}
              percentage={discountPercent as number}
            />

            <p className={`text-slate-500 text-sm line-through`}>
              {Math.floor(price * 80).toLocaleString()}
            </p>
          </div>

          {/* Rating */}
          <h4 className={`text-md flex gap-1 items-center select-none`}>
            <StarRating
              size={15}
              iconColor={`orange`}
              reviews={productReviews as any}
              showReviewCount={!true}
            />
          </h4>
        </div>

        <div className="flex gap-2 items-center justify-around mt-2">
          <AddToCart
            color={`primary`}
            variant={`shadow`}
            key={index}
            radius={`sm`}
            showIcon={true}
          >
            Add to Cart
          </AddToCart>

          <Link
            href={{
              pathname: `/products/${
                params ??
                productCategory?.toLocaleLowerCase().replaceAll(` `, `_`) + "s"
              }/${productId}`,
            }}
            scroll={true}
            className={`select-none font-bold text-blue-600 dark:text-blue-100 hover:underline decoration-2 underline-offset-4`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GridCardComp;
