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

      <div className={`flex gap-10 flex-col lg:flex-row pt-6 pb-16`}>
        <div className={`w-full flex flex-col gap-y-10`}>
          <h1
            className={`font-extrabold text-pretty mb-2 text-2xl sm:text-3xl lg:text-4xl`}
          >
            Shipping Policy
          </h1>
          <ul
            className={`max-w-[55ch] lg:max-w-[65ch] space-y-10 list-inside sm:list-outside list-disc`}
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

        <div className={`w-full overflow-hidden self-center`}>
          <Image
            src={ShippingPolicyPic}
            alt={"Shipping Policy"}
            priority
            width={500}
            className={`rounded-lg select-none`}
          ></Image>
        </div>
      </div>
    </Container>
  );
};

export default ShippingPolicy;
