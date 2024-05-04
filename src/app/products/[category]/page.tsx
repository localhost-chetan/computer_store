import GridView from "@/components/ProductComps/ProductSection/GridView";
import ListView from "@/components/ProductComps/ProductSection/ListView";
import { CommonFields } from "@/lib/mongodb/models/products/commonTypes";
import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import ViewModeToggle from "@/components/ProductComps/ViewModeToggle";
import { Button } from "@nextui-org/react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { useState } from "react";
import Container from "@/components/Container";
import ProductFilter from "@/components/ProductComps/ProductFilter";

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

  const buttonProps = {
    size: 25,
    radius: "sm",
  } as const;

  return (
    <>
      {/* <section className={`mb-10 mt-5 flex gap-2 px-2 py-5 sm:px-[5vw]`}> */}
      <Container>
        {/* categories */}
        <section className={`mb-10 mt-5 flex gap-x-4`}>
          <section
            className={`hidden min-h-screen w-96 border p-2 lg:block lg:w-80`}
          >
            <ProductFilter />
          </section>

          <section className={`w-full`}>
            <Breadcrumb>{data?.at(0)?.category as string}</Breadcrumb>

            <section className={`flex w-full flex-col gap-y-10`}>
              <ViewModeToggle data={data} params={params.category} />
            </section>
          </section>
        </section>
      </Container>
      {/* </section> */}
    </>
  );
};

export default ProductCategory;
