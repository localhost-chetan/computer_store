import { CommonFields } from "@/lib/mongodb/models/products/commonTypes";
import ListCardComp from "../ProductCardComps/ListCardComp";
import { Review } from "@/lib/mongodb/models/User/type/userTypes";

type ListViewType = {
  data: any;
  params: string;
};

const ListView = ({ data, params }: ListViewType) => {
  return (
    <section className={`hidden lg:grid gap-y-7 px-2`}>
      {data.map((product: CommonFields, index: number) => {
        return (
          <ListCardComp
            params={params}
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

export default ListView;
