import { type CommonFields } from "@/lib/mongodb/models/products/commonTypes";

const ProductCategory = async ({
  params,
}: {
  params: { productCategory: string };
}) => {
  const response = await fetch(
    `http://127.0.0.1:3000/api/products/${params.productCategory}`
  );
  const data = await response.json().then((data: any) => data);
  console.log(data);

  return (
    <>
      <div>{params.productCategory} page</div>
      <br />

      <section>
        {data.map((product: CommonFields, index: number) => {
          return (
            <>
              <h1 key={product.name}>{product.name}</h1>
              <h2 key={product.description}>{product.description}</h2>
              <h3 key={product.price}>{product.price}</h3>
              <h4 key={product.reviews?.at(index)?.reviewer}>
                {product.reviews?.at(0)?.reviewer}
              </h4>
              <br />
            </>
          );
        })}
      </section>

      {/* <div>{JSON.stringify(data)}</div> */}
    </>
  );
};

export default ProductCategory;
