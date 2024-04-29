import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import ShippingPolicyPic from "@/../public/Shipping Policy/Shipping Policy.jpg";
import Image from "next/image";
import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy",
};

const ShippingPolicy = () => {
  return (
    <Container>
      <Breadcrumb>Shipping Policy</Breadcrumb>

      <div className={`flex flex-col gap-10 pb-16 pt-6 lg:flex-row`}>
        <div className={`flex w-full flex-col gap-y-10`}>
          <h1
            className={`mb-2 text-pretty text-2xl font-extrabold sm:text-3xl lg:text-4xl`}
          >
            Shipping Policy
          </h1>
          <ul
            className={`max-w-[55ch] list-inside list-disc space-y-10 sm:list-outside lg:max-w-[65ch]`}
          >
            <li className={`text-pretty`}>
              Once a customer places an order the FlashByte team ships the
              products within 3-7 days. It depends on the order, the PC Builds
              are dispatched usually within 3-7 Days and single components
              orders are dispatched fast within 1-3 days.
            </li>
            <li className={`text-pretty`}>
              Sometimes we need to arrange components in case the components are
              out of stock, so in that case the customer needs to wait.
            </li>
            <li className={`text-pretty`}>
              In case of pre-paid orders the customer has to first complete the
              full payment in advance before shipping.
            </li>
            <li className={`text-pretty`}>
              We have shipping courier partners like Delhivery, Bluedart,
              Trackon, etc, and they deliver the orders depending on the order
              delivery location.
            </li>
          </ul>
        </div>

        <div className={`w-full self-center overflow-hidden`}>
          <Image
            src={ShippingPolicyPic}
            alt={"Shipping Policy"}
            priority
            width={500}
            className={`select-none rounded-lg`}
          ></Image>
        </div>
      </div>
    </Container>
  );
};

export default ShippingPolicy;
