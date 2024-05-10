"use client";

import { CartContext, ProductDataType } from "@/context/CartContext";
import Image from "next/image";
import { useContext, useEffect, useMemo, useState } from "react";
import PriceConvertor from "../ProductComps/ProductCardComps/PriceConvertor";
import { cn } from "@/lib/utils";
import { FaTrashAlt } from "react-icons/fa";
import {
  Button,
  Checkbox,
  Chip,
  Divider,
  Radio,
  RadioGroup,
  Tooltip,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FreeDeliveryContext } from "@/context/FreeDeliveryPrice";

const CheckoutContent = ({ className }: { className?: string }) => {
  const { cartProducts, handleRemove, calculateSubTotal } =
    useContext(CartContext);

  const freeDeliveryThreshold = useContext(FreeDeliveryContext);

  const [deliveryCharge, setDeliveryCharge] = useState(`270`);

  const router = useRouter();

  useEffect(() => {
    if (cartProducts?.length === 0) {
      const timeOutid = setTimeout(() => {
        router.push(`/`);
      }, 1500);

      return () => clearTimeout(timeOutid);
    }
  });

  console.log(`checkoutConten comp`);

  const initialSubTotal: number = useMemo(
    () => calculateSubTotal(cartProducts),
    [cartProducts],
  );
  const [subTotal, setSubTotal] = useState(initialSubTotal);

  useEffect(() => {
    setSubTotal(initialSubTotal);
  }, [initialSubTotal]);

  // useEffect(() => {
  //   console.log(`useEffect`);

  //   localStorage.setItem("products", JSON.stringify(cartProducts));
  // }, [cartProducts]);

  const [selectedCheckbox, setSelectedCheckbox] = useState<null | string>(null);

  const handleCheckboxChange = (id: string) => {
    setSelectedCheckbox(id === selectedCheckbox ? null : id);
  };

  return (
    <div>
      <h2 className={`mb-6 text-xl font-bold`}>Your Order</h2>

      <div className={cn(`mb-6 space-y-5`, className)}>
        {cartProducts?.map((product: ProductDataType) => {
          return (
            <div
              className={`group flex h-24 items-center justify-between gap-x-5 overflow-hidden rounded-md bg-slate-200 text-gray-800 ring-1 ring-gray-400 dark:bg-gray-900 dark:text-slate-200 dark:ring-cyan-700`}
              key={product?.productId}
            >
              {/* Image */}
              <div
                className={`relative flex h-full w-24 shrink-0 border-small bg-white dark:bg-gray-300 sm:w-32`}
              >
                <Image
                  src={product?.image}
                  alt={product?.description}
                  height={100}
                  width={110}
                  className={`h-full w-full object-contain object-center`}
                ></Image>

                <Tooltip
                  content={`Remove from checkout`}
                  size={`sm`}
                  color={`danger`}
                  offset={1}
                >
                  <Button
                    variant={`shadow`}
                    color={`danger`}
                    size={`sm`}
                    isIconOnly
                    radius={`full`}
                    className={`invisible absolute left-1 top-1 scale-95 shadow-lg transition-all duration-400 hover:scale-100 group-hover:visible`}
                    onClick={() => {
                      handleRemove(product?.productId, product?.productName);
                    }}
                  >
                    <FaTrashAlt size={13} className={``} />
                  </Button>
                </Tooltip>
              </div>

              {/* Details */}
              <div
                className={`flex flex-col items-end gap-y-2 text-balance pr-3 text-sm font-medium`}
              >
                <p
                  className={`text-right text-sm md:text-base lg:text-sm xl:text-base`}
                >
                  {product?.productName}
                </p>

                <div className={`flex items-center gap-x-3`}>
                  <PriceConvertor
                    price={product?.price}
                    percentage={product?.discountPercent}
                    className={`text-lg font-bold text-green-600 dark:text-green-400 sm:text-base md:text-base lg:text-base`}
                  ></PriceConvertor>

                  <Tooltip
                    content={`Item's quantity in the cart`}
                    color={`warning`}
                    size={`sm`}
                  >
                    <Chip color={`primary`} variant={`solid`} size={`sm`}>
                      Qty : {product?.quantity}
                    </Chip>
                  </Tooltip>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={`mb-5 mt-10 flex items-center justify-between`}>
        <div>Subtotal</div>
        <PriceConvertor
          price={subTotal / 80}
          percentage={0}
          className={``}
        ></PriceConvertor>
      </div>

      <Divider></Divider>

      <div className={`my-4 flex items-center justify-between`}>
        <h4>Shipping</h4>

        <div className={`scale-85 md:scale-100`}>
          <RadioGroup defaultValue={`0.0`} onValueChange={setDeliveryCharge}>
            <Radio
              value={subTotal < freeDeliveryThreshold ? `270` : `0.0`}
              classNames={{
                base: cn(
                  "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
                  "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-3 border-2 border-transparent",
                  "data-[selected=true]:border-primary",
                ),
              }}
            >
              {subTotal < freeDeliveryThreshold ? (
                <>
                  <span>Home delivery:</span>
                  <span className={`pl-1 text-lg font-semibold text-red-400`}>
                    &#8377;{Number(270).toLocaleString()}
                  </span>
                </>
              ) : (
                <span>Free Delivery</span>
              )}
            </Radio>

            <Radio
              value={`0`}
              classNames={{
                base: cn(
                  "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
                  "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-3 border-2 border-transparent",
                  "data-[selected=true]:border-primary",
                ),
              }}
            >
              Offline Pickup Store
            </Radio>
          </RadioGroup>
        </div>
      </div>

      <Divider></Divider>

      {selectedCheckbox !== null && (
        <div className={`items my-5 flex items-center justify-between gap-x-2`}>
          {selectedCheckbox === `option 1` && (
            <>
              <div>10% Booking Deposit</div>
              <div>
                <PriceConvertor
                  price={
                    (subTotal +
                      Number(deliveryCharge) -
                      (subTotal / 100) * 10) /
                    80
                  }
                  percentage={0}
                  className={`text-base text-rose-500 dark:text-rose-500 sm:text-lg md:text-lg lg:text-base xl:text-lg`}
                >
                  -
                </PriceConvertor>
              </div>
            </>
          )}

          {selectedCheckbox === `option 2` && (
            <>
              <div className={`text-balance`}>
                Cash on delivery amount (1% extra on delivery)
              </div>
              <div>
                <PriceConvertor
                  price={
                    (subTotal +
                      Number(deliveryCharge) -
                      (subTotal / 100) * 10) /
                    80
                  }
                  percentage={0}
                  className={`text-base text-rose-500 dark:text-rose-500 sm:text-lg md:text-lg lg:text-base xl:text-lg`}
                >
                  -
                </PriceConvertor>
              </div>
            </>
          )}
        </div>
      )}

      <Divider></Divider>

      <div className={`my-5 flex items-center justify-between`}>
        <h4>Total</h4>
        <PriceConvertor
          price={(subTotal + Number(deliveryCharge)) / 80}
          percentage={0}
        ></PriceConvertor>
      </div>

      <Divider></Divider>

      <p className={`mb-3 mt-8 text-pretty text-right font-bold`}>
        For Advance Booking or Cash on Delivery
      </p>

      <div className={`space-y-4`}>
        <Checkbox
          isSelected={selectedCheckbox === `option 1`}
          onClick={() => handleCheckboxChange(`option 1`)}
          radius={`sm`}
          classNames={{
            base: cn(
              "flex w-full max-w-md bg-content1",
              "hover:bg-content2 items-center justify-start",
              "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
              "data-[selected=true]:border-primary",
            ),
          }}
          className={`m-0 ml-auto w-full border-small border-gray-400 bg-zinc-100 dark:border-3 dark:bg-zinc-900`}
        >
          <p className={`text-pretty`}>
            10% Booking deposit and remaining before shipping
          </p>
        </Checkbox>

        <Checkbox
          isSelected={selectedCheckbox === `option 2`}
          onClick={() => handleCheckboxChange(`option 2`)}
          radius={`sm`}
          classNames={{
            base: cn(
              "flex w-full max-w-md bg-content1",
              "hover:bg-content2 items-center justify-start",
              "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
              "data-[selected=true]:border-primary",
            ),
          }}
          className={`m-0 ml-auto w-full border-small border-gray-300 bg-zinc-100 dark:border-3 dark:bg-zinc-900`}
        >
          <p className={`text-pretty`}>
            10% Booking deposit and remaining cash on delivery
          </p>
        </Checkbox>
      </div>
    </div>
  );
};

export default CheckoutContent;
