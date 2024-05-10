"use client";

import { CommonFields } from "@/lib/mongodb/models/products/commonTypes";
import { Select, SelectItem, Spinner } from "@nextui-org/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import PriceConvertor from "../ProductComps/ProductCardComps/PriceConvertor";
import QuantityComp from "../ProductComps/QuantityComp";
import { ProductDataType } from "@/context/CartContext";

const ProductDropdown = ({
  productCategory,
  label,
  quantity = false,
  max,
  isRequired = true,
  description,
  setTotalPrice,
  setSelectedProducts,
  defaultSelectedId,
}: {
  productCategory: string;
  label: string;
  quantity: boolean;
  max?: number;
  isRequired?: boolean;
  description?: string | null;
  setTotalPrice?: any;
  setSelectedProducts?: any;
  defaultSelectedId?: string | null;
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

  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );

  const usdToInr = (price: number) => {
    // Replace with your preferred USD to INR conversion rate (consider using an API for real-time rates)
    const conversionRate = 83.5; // Placeholder rate (update as needed)
    return Math.floor(price * conversionRate);
  };

  const handleSelectItem = useCallback((product: CommonFields) => {
    // ... existing logic ...
    const convertedPrice = usdToInr(product?.price);
    if (selectedProductId === product?._id?.toString()!) {
      // ... deselection logic ...

      setSelectedProducts((prevSelectedProducts: any) =>
        prevSelectedProducts.filter(
          (item: any) => item.productId !== product._id?.toString()!,
        ),
      );

      setTotalPrice((prevPrice: number) => prevPrice - convertedPrice);
    } else {
      // ... selection logic ...
      setSelectedProductId(product?._id?.toString()!);

      setSelectedProducts((prevSelectedProducts: any) => [
        ...prevSelectedProducts,
        {
          productId: product?._id?.toString()!,
          productName: product?.name,
          description: product?.description,
          price: product?.price as number,
          quantity: 1,
          image: product?.imageURLs?.at(0),
          discountPercent: product?.discount?.percentage! || 10,
        },
      ]);

      setTotalPrice((prevPrice: number) => prevPrice + convertedPrice);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`useEffect for ProductDropdown`);

        const response = await fetch(`/api/products/${productCategory}`, {
          cache: `force-cache`,
        }); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        const fetchedData = await response.json().then((data) => data);
        setData(() => [...fetchedData]);

        if (defaultSelectedId && data.length > 0) {
          // Find the product object with the defaultSelectedId
          const selectedItem = data.find(
            (product) => product._id?.toString() === defaultSelectedId,
          );
          if (selectedItem) {
            handleSelectItem(selectedItem);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [productCategory, selectedProductId]);

  return (
    <>
      <div
        className={`flex flex-col items-end gap-x-3 space-y-4 md:flex-row md:items-end`}
      >
        <Select
          defaultSelectedKeys={[defaultSelectedId!]}
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
          description={description}
          renderValue={(items) => {
            return items.map((product) => (
              <div
                key={product.key}
                aria-label={`Selected component`}
                className={`flex h-24 items-center gap-x-5 p-2 text-teal-50`}
              >
                <div
                  className={`flex h-full min-w-20 max-w-20 select-none justify-stretch rounded-sm border-small border-gray-700 bg-slate-300 p-1 dark:border-white`}
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
                    percentage={product.data?.discount?.percentage! || 10}
                    lg={`text-base`}
                    // md={`text-base`}
                  ></PriceConvertor>
                </div>
              </div>
            ));
          }}
        >
          {isLoading ? (
            <SelectItem
              key={`Loading`}
              isReadOnly
              textValue={`Getting Data...`}
            >
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
                onClick={() => handleSelectItem(product)}
              >
                <div className={`flex h-20 items-center gap-5 p-2`}>
                  <div
                    className={`flex h-full min-w-20 max-w-20 select-none justify-stretch rounded-sm border-small bg-slate-300 p-1`}
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
                      percentage={product?.discount?.percentage! || 10}
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
          <QuantityComp
            max={max}
            scale={`scale-75 sm:scale-85`}
            quantity={1}
          ></QuantityComp>
        )}
      </div>
    </>
  );
};

export default ProductDropdown;
function setSelectedProductId(arg0: null) {
  throw new Error("Function not implemented.");
}
