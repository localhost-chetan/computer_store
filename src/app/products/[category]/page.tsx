import GridView from "@/components/ProductComps/ProductSection/GridView";
import ListView from "@/components/ProductComps/ProductSection/ListView";
import { CommonFields } from "@/lib/mongodb/models/products/commonTypes";
import Breadcrumb from "@/components/ProductComps/Breadcrumb";

type PropTypes = {
  params: { category: string };
};

const ProductCategory = async ({ params }: PropTypes) => {
  console.log(params);
  const responseObj = await fetch(
    `${process.env.BASE_URL}/api/products/${params.category}`,
    { cache: `no-cache` },
  ); //returns a promise which resolves to a response object
  const data = await responseObj
    .json() // return a promise which resolves to parsed JSON data
    .then((data: CommonFields | any) => data); // in then method we can use the parsed JSON data adn return it

  return (
    <>
      <section className={`mb-10 mt-5 flex gap-2 px-2 py-5 sm:px-[5vw]`}>
        <section className={`w-full`}>
          <Breadcrumb>{data?.at(0)?.category as string}</Breadcrumb>

          <section className={`flex w-full flex-col gap-y-10`}>
            <h1 className={`text-2xl font-extrabold capitalize`}>
              {data.at(0)?.category} Page
            </h1>

            <GridView data={data} params={params.category} />

            <ListView data={data} params={params.category} />
          </section>
        </section>
      </section>
    </>
  );
};

export default ProductCategory;
