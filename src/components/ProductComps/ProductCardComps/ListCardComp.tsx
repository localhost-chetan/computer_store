import { CardCompType } from "@/lib/productTypes";
import Image from "next/image";
import WishListIcon from "./WishListIcon";
import Discount from "./Discount";
import PriceConvertor from "./PriceConvertor";
import StarRating from "./StarRating";
import Link from "next/link";
import { AddToCart, BuyNow } from "./ProductButtons";

const ListCardComp = ({
  params,
  productId,
  productName,
  price,
  description,
  discountPercent,
  imageURLs,
  index,
  // productCategory,
  productReviews,
}: CardCompType) => {
  return (
    <div
      key={productId ?? index}
      className={`w-full h-64 overflow-y-hidden shadow-lg shadow-slate-300 dark:shadow-slate-900 group/card cursor-pointer hover:scale-[1.01] ease-in-out duration-200 rounded-md dark:bg-gray-900 bg-slate-100 flex gap-2`}
    >
      {/* Image Section */}
      <div className={`flex h-full relative`}>
        <Image
          style={{ height: "auto" }}
          src={imageURLs?.at(0)?.toString() as string}
          width={500}
          height={300}
          alt={description}
          priority
          className={`object-contain object-center bg-gradient-to-b from-slate-50 to-slate-300 select-none max-w-[20rem]`}
        />

        <div
          className={`absolute top-3 right-3 sm:invisible group-hover/card:visible`}
        >
          <WishListIcon />
        </div>

        {/* Disocunt Badge */}
        <Discount percentage={discountPercent as number} />
      </div>

      {/* Details Section */}
      <div className={`p-5 flex flex-col gap-y-2 relative`}>
        <h1 className={`text-pretty text-xl font-extrabold `}>{productName}</h1>
        <h2
          className={`text-sm dark:text-slate-400 text-slate-600 line-clamp-2 max-w-[60ch]`}
          title={description}
        >
          {description}
        </h2>

        {/* Pricing section */}
        <div className={`flex items-center gap-2`}>
          <PriceConvertor
            price={price}
            percentage={discountPercent as number}
          />

          <p className={`text-slate-500 text-sm line-through`}>
            {Math.floor(price * 80).toLocaleString()}
          </p>
        </div>

        {/* Star Rating section */}
        <h4 className={`text-md flex gap-1 items-center select-none mb-5`}>
          <StarRating
            size={15}
            iconColor={`orange`}
            reviews={productReviews as any}
            showReviewCount={true}
          />
        </h4>

        {/* Add to cart */}
        <div className={`absolute bottom-5 flex items-center gap-4`}>
          <AddToCart
            color={`primary`}
            variant={`shadow`}
            radius={`sm`}
            showIcon={true}
          ></AddToCart>

          <Link
            href={`/products/${params}/${productId}`}
            className={`select-none font-bold text-blue-600 dark:text-blue-100 hover:underline decoration-2 underline-offset-4`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListCardComp;
