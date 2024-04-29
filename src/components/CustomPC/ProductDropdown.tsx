"use client";

import { CommonFields } from "@/lib/mongodb/models/products/commonTypes";
import { Select, SelectItem, Spinner } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import PriceConvertor from "../ProductComps/ProductCardComps/PriceConvertor";
import QuantityComp from "../ProductComps/QuantityComp";

const ProductDropdown = ({
  productCategory,
  label,
  quantity = false,
  max,
}: {
  productCategory: string;
  label: string;
  quantity: boolean;
  max?: number;
}) => {
  const [data, setData] = useState<CommonFields[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  const sortProductsByPrice = (products: CommonFields[]) => {
    // Improved sorting logic: handle missing prices gracefully
    return products.sort((a, b) => {
      const priceA = a.price || Infinity; // Set missing prices to Infinity for descending sort
      const priceB = b.price || Infinity;
      return priceA - priceB;
    });
  };

  console.log(process.env.BASE_URL);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/products/${productCategory}`, {
          cache: `force-cache`,
        }); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const fetchedData = await response.json().then((data) => data);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        className={`flex flex-col items-end gap-x-3 space-y-4 md:flex-row md:items-end`}
      >
        <Select
          isRequired
          isMultiline
          label={label}
          size={`lg`}
          labelPlacement={`outside`}
          items={sortProductsByPrice(data)}
          placeholder={`Choose a component`}
          aria-label={`Product List`}
          radius={`sm`}
          // renderValue={(items) => {
          //   return items.map((product) => {
          //     console.log(product);
          //     return (
          //       product.data && (
          //         <div
          //           key={product.data?._id?.toString()}
          //           aria-label={`Selected component`}
          //           className={`flex h-24 items-center gap-x-2 border text-teal-50`}
          //         >
          //           <Image
          //             src={product.data?.imageURLs?.at(0)!}
          //             alt={product.data?.description!}
          //             width={80}
          //             height={80}
          //             className={`h-full border object-contain`}
          //           ></Image>
          //           <h2 className={`border text-lg font-bold`}>
          //             {product.data?.name}
          //           </h2>
          //         </div>
          //       )
          //     );
          //   });
          // }}
          // className={`border-2 border-solid border-black dark:border-white`}
        >
          {isLoading ? (
            <SelectItem key={`Loading`} isReadOnly textValue={`Getting Data`}>
              <Spinner color={`success`} />
            </SelectItem>
          ) : data.length > 0 ? (
            sortProductsByPrice(data).map((product: CommonFields) => (
              <SelectItem
                key={product._id?.toString() as string}
                value={product._id?.toString()}
                textValue={product.name}
              >
                <div className={`flex h-[70px] items-center gap-5`}>
                  <div
                    className={`flex h-full min-w-20 max-w-20 select-none justify-stretch rounded-sm  border bg-slate-300 p-1`}
                  >
                    <Image
                      src={product.imageURLs?.at(0)!}
                      alt={product.description}
                      width={200}
                      height={200}
                      className={`h-full w-full object-contain`}
                    ></Image>
                  </div>

                  <div className={`overflow-auto`}>
                    <h2 className={`text-pretty font-semibold`}>
                      {product.name}
                    </h2>

                    <PriceConvertor
                      price={product.price}
                      percentage={product?.discount?.percentage!}
                      lg={`text-lg`}
                      fontWeight={`font-bold`}
                    />
                  </div>
                </div>
              </SelectItem>
            ))
          ) : (
            <SelectItem
              className={`text-bold text-xl`}
              key={`No data found`}
              // textValue={`Nothing found`}
              isReadOnly
            >
              No {`${label}s`} found
            </SelectItem> // Empty placeholder}
          )}
        </Select>

        {quantity === true && <QuantityComp max={max} />}
      </div>
    </>
  );
};

export default ProductDropdown;
