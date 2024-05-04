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
  isRequired = true,
}: {
  productCategory: string;
  label: string;
  quantity: boolean;
  max?: number;
  isRequired?: boolean;
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
  }, [productCategory]);

  return (
    <>
      <div
        className={`flex flex-col items-end gap-x-3 space-y-4 md:flex-row md:items-end`}
      >
        <Select
          isRequired={isRequired}
          label={label}
          size={`md`}
          isMultiline
          labelPlacement={`outside`}
          items={sortProductsByPrice(data) as CommonFields[]}
          placeholder={`Choose a component`}
          aria-label={`Product List`}
          radius={`sm`}
          className={`text-balance`}
          renderValue={(items) => {
            return items.map((product) => (
              <div
                key={product.key}
                aria-label={`Selected component`}
                className={`flex h-24 items-center gap-x-5 p-2 text-teal-50`}
              >
                <div
                  className={`flex h-full min-w-20 max-w-20 select-none justify-stretch rounded-sm border-2 border-gray-700 bg-slate-300 p-1 dark:border-white`}
                >
                  <Image
                    src={product.data?.imageURLs?.at(0) as string}
                    alt={product.data?.description!}
                    width={80}
                    height={80}
                    className={`h-full object-contain`}
                  ></Image>
                </div>

                <div className={`space-y-1`}>
                  <h2 className={`font-bold text-black dark:text-slate-200`}>
                    {product?.data?.name}
                  </h2>

                  <PriceConvertor
                    price={product.data?.price!}
                    percentage={product.data?.discount?.percentage!}
                    lg={`text-base`}
                    // md={`text-base`}
                  ></PriceConvertor>
                </div>
              </div>
            ));
          }}
        >
          {isLoading ? (
            <SelectItem key={`Loading`} isReadOnly textValue={`Getting Data`}>
              <Spinner color={`success`} />
            </SelectItem>
          ) : data.length > 0 ? (
            // sortProductsByPrice(data).map((product: CommonFields) => (
            (product) => (
              <SelectItem
                key={product._id?.toString() as string}
                value={product._id?.toString()}
                textValue={product.name}
                className={`text-balance p-2`}
                aria-label={`Product dropdown`}
                // onClick={() => alert(product.imageURLs?.at(0))}
              >
                <div className={`flex h-20 items-center gap-5 p-2`}>
                  <div
                    className={`flex h-full min-w-20 max-w-20 select-none justify-stretch rounded-sm border bg-slate-300 p-1`}
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
            )
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

        {quantity === true && (
          <QuantityComp max={max} scale={`scale-75 sm:scale-85`} />
        )}
      </div>
    </>
  );
};

export default ProductDropdown;
