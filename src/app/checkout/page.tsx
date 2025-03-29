"use client";

import CheckBox from "@/components/Checkout/CheckBox";
import CheckoutContent from "@/components/Checkout/CheckoutContent";
import Container from "@/components/Container";
import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import { Input } from "@nextui-org/react";

const Checkout = () => {
  return (
    <Container>
      <Breadcrumb>Checkout</Breadcrumb>

      <h1 className={`mb-10 mt-16 text-2xl font-bold xl:text-3xl`}>
        Billing Details
      </h1>

      <section
        className={`mb-14 grid grid-cols-1 items-start justify-between gap-x-10 space-y-6 lg:grid-cols-2`}
      >
        <div className={`order-last mt-10 lg:order-first lg:mt-0`}>
          <form
            action={``}
            className={`space-y-8 *:w-full *:scale-85 md:space-y-14 *:md:scale-100`}
          >
            <Input
              key={`name`}
              inputMode={`text`}
              isRequired
              isClearable
              labelPlacement={`outside`}
              label={`Name`}
              radius={`sm`}
              placeholder={` `}
              autoFocus
              size={`lg`}
              className={`ring-black focus-within:ring-2`}
            />

            <Input
              key={`company name`}
              inputMode={`text`}
              isClearable
              labelPlacement={`outside`}
              label={`Company Name`}
              radius={`sm`}
              placeholder={` `}
              size={`lg`}
              className={`ring-black focus-within:ring-2`}
            />

            <Input
              key={`street address`}
              inputMode={`text`}
              isRequired
              isClearable
              labelPlacement={`outside`}
              label={`Street Address`}
              radius={`sm`}
              placeholder={` `}
              size={`lg`}
              className={`ring-black focus-within:ring-2`}
            />

            <Input
              key={`Apartment`}
              inputMode={`text`}
              isClearable
              labelPlacement={`outside`}
              label={`Apartment, floor, etc. (Optional)`}
              radius={`sm`}
              placeholder={` `}
              size={`lg`}
              className={`ring-black focus-within:ring-2`}
            />

            <Input
              key={`Town`}
              inputMode={`text`}
              isClearable
              isRequired
              labelPlacement={`outside`}
              label={`Town/City`}
              radius={`sm`}
              placeholder={` `}
              size={`lg`}
              className={`ring-black focus-within:ring-2`}
            />

            <Input
              key={`phone_number`}
              inputMode={`numeric`}
              isClearable
              isRequired
              labelPlacement={`outside`}
              label={`Phone Number`}
              radius={`sm`}
              placeholder={` `}
              size={`lg`}
              className={`ring-black focus-within:ring-2`}
            ></Input>

            <div className={`space-y-5 text-balance`}>
              <Input
                key={`email`}
                inputMode={`email`}
                isClearable
                isRequired
                labelPlacement={`outside`}
                label={`Email Address`}
                radius={`sm`}
                placeholder={` `}
                size={`lg`}
                className={`ring-black focus-within:ring-2`}
              ></Input>

              <CheckBox />
            </div>
          </form>
        </div>

        <CheckoutContent className={``} />
      </section>
    </Container>
  );
};

export default Checkout;
