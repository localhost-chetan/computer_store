import { CommonFields } from "@/lib/mongodb/models/products/commonTypes";
import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import ViewModeToggle from "@/components/ProductComps/ViewModeToggle";
import Container from "@/components/Container";

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
    .then((data: CommonFields[] | any) => data); // in then method we can use the parsed JSON data adn return it

  console.log(data?.at(0)?.discount?.percentage);

  return (
    <Container>
      <Breadcrumb>{data?.at(0)?.category as string}</Breadcrumb>

      <section className={`mb-10 flex w-full flex-col gap-y-10`}>
        <ViewModeToggle
          data={data as CommonFields[]}
          params={params.category}
        />
      </section>
    </Container>
  );
};

export default ProductCategory;
