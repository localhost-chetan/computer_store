import Image from "next/image";
import WishListIcon from "./WishListIcon";
import Discount from "./Discount";
import PriceConvertor from "./PriceConvertor";
import StarRating from "./StarRating";
import Link from "next/link";
import { CardCompType } from "@/lib/productTypes";
import { AddToCart } from "./ProductButtons";
import { cn } from "@/lib/utils";

const GridCardComp = ({
  classNames,

  params,
  productId,
  productName,
  imageURLs,
  index,
  discountPercent = 10,
  description,
  price,
  productReviews,
  productCategory,
}: CardCompType) => {
  return (
    <div
      key={productId ?? index}
      className={cn(
        `group/card mx-auto grid h-[500px] max-w-[25rem] cursor-pointer grid-rows-2 content-between gap-y-3 overflow-hidden rounded-md bg-slate-100 shadow-lg shadow-slate-300 duration-200 ease-in-out hover:scale-[1.03] dark:bg-gray-900 dark:shadow-slate-900 sm:min-w-[15rem] md:max-w-[25rem] lg:max-w-[22rem] xl:min-w-[18rem] xl:max-w-[25rem]`,
        classNames,
      )}
    >
      {/* Image section */}
      <div
        className={`relative w-full select-none self-stretch border-gray-600 border-b-gray-50 bg-gradient-to-b from-slate-100 to-slate-300`}
      >
        <Image
          style={{ width: "auto" }}
          src={imageURLs.at(0)?.toString() ?? ""}
          alt={productName}
          width={350}
          height={300}
          // placeholder={`blur`}
          priority
          className={`aspect-video h-full w-full object-scale-down object-center`}
        />

        <div
          className={`absolute right-3 top-3 group-hover/card:visible sm:invisible`}
        >
          <WishListIcon productId={[productId]} productName={productName} />
        </div>

        {/* Discount badge */}
        <Discount percentage={discountPercent as number} />
      </div>

      {/* Details Section */}
      <div
        className={`flex flex-col justify-between gap-y-4 self-stretch p-3 pb-4 pt-2`}
      >
        <h1
          className={`line-clamp-2 text-pretty text-xl font-extrabold`}
          title={productName}
        >
          {productName}
        </h1>
        <h2
          className={`line-clamp-2 text-ellipsis text-sm text-slate-600 dark:text-slate-400`}
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
              md={`text-2xl`}
            />

            <p className={`text-sm text-slate-500 line-through`}>
              {Math.floor(price * 80).toLocaleString()}
            </p>
          </div>

          {/* Rating */}
          <h4 className={`text-md flex select-none items-center gap-1`}>
            <StarRating
              size={15}
              iconColor={`orange`}
              reviews={productReviews as any}
              showReviewCount={!true}
            />
          </h4>
        </div>

        <div className="mt-2 flex items-center justify-around gap-2">
          <AddToCart
            variant={`shadow`}
            key={index}
            radius={`sm`}
            productData={[
              {
                productId,
                productName,
                image: imageURLs.at(0)!,
                price,
                discountPercent,
                description,
                quantity: 1,
              },
            ]}
          />

          <Link
            href={{
              pathname: `/products/${
                params ??
                productCategory?.toLocaleLowerCase().replaceAll(` `, `_`) + "s"
              }/${productId}`,
            }}
            scroll={true}
            className={`select-none text-sm font-bold text-blue-600 decoration-2 underline-offset-4 hover:underline dark:text-blue-100`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GridCardComp;
