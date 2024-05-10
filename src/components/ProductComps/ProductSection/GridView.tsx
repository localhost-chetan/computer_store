import { type CommonFields } from "@/lib/mongodb/models/products/commonTypes";
import GridCardComp from "../ProductCardComps/GridCardComp";
import { Review } from "@/lib/mongodb/models/User/type/userTypes";
import { cn } from "@/lib/utils";

type GridViewProp = {
  data: any;
  params?: string;
  className?: string;
};

const GridView = ({ data, params, className }: GridViewProp) => {
  console.log(data?.at(0)?.discount?.percentage);

  return (
    <section
      className={cn(
        `grid grid-cols-1 justify-center justify-items-center gap-x-5 gap-y-12 px-[2vw] sm:grid-cols-2 sm:px-0 md:gap-x-10 lg:gap-x-[3vw] xl:grid-cols-3`,
        className,
      )}
    >
      {data.map((product: CommonFields, index: number) => {
        return (
          <GridCardComp
            key={product._id?.toString()!}
            params={params as string}
            productId={product._id?.toString() as string}
            productName={product.name}
            imageURLs={product.imageURLs as string[]}
            description={product.description}
            index={index}
            price={product.price}
            productReviews={product.reviews as Review[]}
            discountPercent={product?.discount?.percentage as number}
            productCategory={product.category}
          />
        );
      })}
    </section>
  );
};
export default GridView;
