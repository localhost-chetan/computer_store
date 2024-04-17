import { type CommonFields } from "@/lib/mongodb/models/products/commonTypes";
import GridCardComp from "../ProductCardComps/GridCardComp";
import { Review } from "@/lib/mongodb/models/User/type/userTypes";

type GridViewProp = {
  data: any;
  params?: string;
};

const GridView = ({ data, params }: GridViewProp) => {
  return (
    <section
      className={`grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-x-10 lg:gap-x-[3vw] gap-x-10 gap-y-12 px-[2vw] sm:px-0 justify-items-center justify-center`}
    >
      {data.map((product: CommonFields, index: number) => {
        return (
          <GridCardComp
            params={params as string}
            productId={product._id?.toString() as string}
            productName={product.name}
            imageURLs={product.imageURLs as string[]}
            description={product.description}
            index={index}
            price={product.price}
            productReviews={product.reviews as Review[]}
            discountPercent={product.discount?.percentage as number}
            productCategory={product.category}
            key={product._id?.toString()}
          />
        );
      })}
    </section>
  );
};
export default GridView;
