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
      className={`group/card flex h-72 w-full cursor-pointer gap-2 overflow-y-hidden rounded-md bg-slate-100 shadow-lg shadow-slate-300 duration-200 ease-in-out hover:scale-[1.01] dark:bg-gray-900 dark:shadow-slate-900`}
    >
      {/* Image Section */}
      <div className={`relative flex h-full`}>
        <Image
          style={{ height: "auto" }}
          src={imageURLs?.at(0)?.toString() as string}
          width={500}
          height={300}
          alt={description}
          priority
          className={`max-w-[20rem] select-none bg-gradient-to-b from-slate-50 to-slate-300 object-contain object-center`}
        />

        <div
          className={`absolute right-3 top-3 group-hover/card:visible sm:invisible`}
        >
          <WishListIcon />
        </div>

        {/* Disocunt Badge */}
        <Discount percentage={discountPercent as number} />
      </div>

      {/* Details Section */}
      <div className={`relative flex flex-col gap-y-2 p-5`}>
        <h1 className={`text-pretty text-xl font-extrabold `}>{productName}</h1>
        <h2
          className={`line-clamp-2 max-w-[60ch] text-sm text-slate-600 dark:text-slate-400`}
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

          <p className={`text-sm text-slate-500 line-through`}>
            {Math.floor(price * 80).toLocaleString()}
          </p>
        </div>

        {/* Star Rating section */}
        <h4 className={`text-md mb-5 flex select-none items-center gap-1`}>
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
            variant={`shadow`}
            radius={`sm`}
            productData={{
              productId,
              productName,
              image: imageURLs.at(0)!,
              price,
              discountPercent,
              description,
            }}
          ></AddToCart>

          <Link
            href={`/products/${params}/${productId}`}
            className={`select-none font-bold text-blue-600 decoration-2 underline-offset-4 hover:underline dark:text-blue-100`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListCardComp;
