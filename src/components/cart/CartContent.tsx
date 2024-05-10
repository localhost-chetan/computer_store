"use client";

import { CartContext, ProductDataType } from "@/context/CartContext";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import PriceConvertor from "../ProductComps/ProductCardComps/PriceConvertor";
import Image from "next/image";
import QuantityComp from "../ProductComps/QuantityComp";
import {
  Badge,
  Button,
  Divider,
  Radio,
  RadioGroup,
  Tooltip,
} from "@nextui-org/react";
import { FaTrashAlt } from "react-icons/fa";
import Discount from "../ProductComps/ProductCardComps/Discount";
import { toast } from "sonner";
import Link from "next/link";
import { FreeDeliveryContext } from "@/context/FreeDeliveryPrice";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import WishListIcon from "../ProductComps/ProductCardComps/WishListIcon";

const CartContent = () => {
  const { cartProducts, setCartProducts, handleRemove, calculateSubTotal } =
    useContext(CartContext);

  const freeDeliveryThreshold = useContext(FreeDeliveryContext);

  const router = useRouter();

  useEffect(() => {
    console.log(`useEffect hook in CartContent`);

    if (cartProducts?.length === 0) {
      const timeoutId = setTimeout(() => {
        router.push(`/`);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [cartProducts]);

  const handleClearCart = useCallback(() => {
    try {
      setCartProducts([]);
      localStorage.setItem("products", JSON.stringify(cartProducts));

      toast.success(`Your cart has been cleared ✔`);
    } catch (error) {
      toast.error(`Something went wrong ❌`);
    }
  }, []);

  const calculateSubTotalMemoized = useMemo(() => {
    // Optimized calculation logic for subTotal
    return calculateSubTotal(cartProducts);
  }, [cartProducts]);

  const [subTotal, setSubTotal] = useState(calculateSubTotalMemoized);

  useEffect(() => {
    console.log(`useEffect for setSubTotal()`);

    setSubTotal(calculateSubTotalMemoized);
  }, [calculateSubTotalMemoized]);

  console.log(subTotal);

  const [deliveryCharge, setDeliveryCharge] = useState(`270`);

  if (cartProducts?.length > 0) {
    return (
      <section
        className={`mb-10 mt-5 grid grid-cols-1 gap-x-7 space-y-14 xl:grid-cols-3`}
      >
        <div className={`col-span-2 space-y-4`}>
          <div className={`flex justify-center md:justify-end`}>
            <Badge
              content={cartProducts?.length}
              variant={`shadow`}
              color={`primary`}
            >
              <Button
                onClick={handleClearCart}
                radius={`none`}
                variant={`shadow`}
                color={`danger`}
                size={`lg`}
                className={`mb-4 w-full max-w-[350px] sm:w-[80%] md:mb-2 md:w-fit`}
              >
                Remove All
              </Button>
            </Badge>
          </div>

          <div className={`mx-auto space-y-8 sm:w-[80%] md:w-full`}>
            {cartProducts.map((product: ProductDataType) => {
              return (
                <div
                  key={product?.productId!}
                  className={`group relative mx-auto grid max-w-[350px] grid-cols-1 place-items-stretch items-center justify-center gap-x-2 gap-y-2 overflow-hidden rounded-md border-small border-slate-600 bg-slate-300 pb-3 dark:bg-gray-900 md:h-36 md:max-w-full md:grid-cols-2 md:pb-0 lg:gap-x-20 lg:pb-0 lg:pr-10 xl:gap-x-10 xl:pr-0`}
                >
                  <div
                    className={`flex h-full flex-col items-center gap-x-4 gap-y-3 md:h-full md:flex-row`}
                  >
                    {/* Image */}
                    <div
                      className={`relative w-full select-none overflow-hidden md:h-full md:w-60`}
                    >
                      <Image
                        src={product?.image}
                        alt={product?.description}
                        width={150}
                        height={200}
                        className={`h-52 w-full bg-slate-200 md:h-full md:object-contain`}
                      ></Image>

                      <Discount
                        percentage={product?.discountPercent}
                        className={`left-1 top-1 scale-80`}
                      />
                    </div>

                    {/* Details */}
                    <div className={`w-full space-y-1 px-3 py-2 text-left`}>
                      <span
                        className={`text-balance font-semibold text-gray-700 dark:text-white`}
                      >
                        {product?.productName}
                      </span>

                      <PriceConvertor
                        price={product?.price}
                        quantity={1}
                        percentage={0}
                        sm={`text-base`}
                        md={`text-lg`}
                        lg={`text-lg`}
                        className={`font-medium text-gray-800 dark:text-slate-300`}
                      ></PriceConvertor>
                    </div>

                    <Divider
                      className={`md:hidden`}
                      orientation={`horizontal`}
                    ></Divider>

                    <Divider
                      className={`hidden md:block`}
                      orientation={`vertical`}
                    ></Divider>
                  </div>

                  {/* Subtotal & trash */}
                  <div
                    className={`flex w-full items-center md:gap-x-14 xl:justify-end xl:gap-x-5`}
                  >
                    <WishListIcon
                      className={`absolute right-1 top-1 scale-85`}
                      productId={[product?.productId!]}
                      productName={product?.productName!}
                    ></WishListIcon>

                    <QuantityComp
                      key={product?.productId}
                      showText={false}
                      scale={`scale-75 md:scale-80 lg:scale-85`}
                      quantity={product?.quantity}
                      productId={product?.productId}
                    ></QuantityComp>

                    <div
                      className={`ml-auto flex items-center gap-x-2 md:gap-x-4`}
                    >
                      <PriceConvertor
                        price={product?.price}
                        quantity={product?.quantity}
                        percentage={product?.discountPercent || 10}
                        className={`text-xl text-green-700 dark:text-green-500`}
                      />

                      <Tooltip
                        className={`font-semibold`}
                        content={`Remove item`}
                        color={`danger`}
                        size={`sm`}
                        shadow={`lg`}
                        placement={`top`}
                        offset={1}
                        delay={0}
                        closeDelay={0}
                        motionProps={{
                          variants: {
                            exit: {
                              opacity: 0,
                              transition: {
                                duration: 0.1,
                                ease: "easeIn",
                              },
                            },
                            enter: {
                              opacity: 1,
                              transition: {
                                duration: 0.15,
                                ease: "easeOut",
                              },
                            },
                          },
                        }}
                      >
                        <Button
                          isIconOnly
                          variant={`light`}
                          radius={`full`}
                          onClick={() =>
                            handleRemove(
                              product?.productId!,
                              product?.productName,
                            )
                          }
                        >
                          <FaTrashAlt
                            color={`rgb(220, 90, 90)`}
                            size={20}
                            className={`scale-75 transition-colors hover:text-rose-500 hover:dark:text-rose-300 md:scale-100`}
                          />
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`rounded-md border-small border-slate-500 bg-slate-100 px-4 pb-5 pt-5 dark:bg-gray-900 md:col-span-2 xl:col-span-1 xl:self-start`}
        >
          <h2 className={`mb-5 text-2xl font-bold`}>Order Summary</h2>

          <div className={`flex items-center justify-between pb-2`}>
            <h4>Subtotal</h4>
            <p
              className={`sm:xl lg:2xl text-lg
       font-medium tabular-nums text-gray-700 dark:text-slate-300`}
            >
              &#8377;{subTotal?.toLocaleString()}
            </p>
          </div>

          <div className={`my-4 flex items-center justify-between`}>
            <h4>Shipping</h4>

            <div className={`scale-85 md:scale-100`}>
              <RadioGroup
                value={deliveryCharge}
                onValueChange={setDeliveryCharge}
              >
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
                      <span
                        className={`pl-1 text-lg font-semibold text-red-400`}
                      >
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

          <div className={`my-5 flex items-center justify-between`}>
            <h4>Total</h4>
            <PriceConvertor
              price={(subTotal + Number(deliveryCharge)) / 80}
              percentage={0}
            ></PriceConvertor>
          </div>

          <Button
            as={Link}
            href={`/checkout`}
            variant={`shadow`}
            radius={`sm`}
            color={`primary`}
            size={`lg`}
            className={`w-full md:w-fit xl:w-full`}
          >
            Proceed to Checkout
          </Button>
        </div>
      </section>
    );
  }

  return (
    <div className={`flex h-[80vh] flex-col items-center justify-center`}>
      <div className={`max-w-[65ch] space-y-4 text-balance text-center`}>
        <h1
          className={`text-2xl font-extrabold sm:text-4xl`}
        >{`Your cart is currently empty.`}</h1>

        <p
          className={`text-sm leading-6 sm:text-base`}
        >{`Before proceed to checkout you must add some products to your shopping cart.
You will find a lot of interesting products on our "Shop" page.`}</p>

        <Button
          as={Link}
          href={`/`}
          color={`primary`}
          variant={`shadow`}
          size={`lg`}
          radius={`sm`}
        >
          Retun to Shop
        </Button>
      </div>
    </div>
  );
};

export default CartContent;
