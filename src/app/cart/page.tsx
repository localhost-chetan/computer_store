import CartContent from "@/components/cart/CartContent";
import Container from "@/components/Container";
import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import PriceConvertor from "@/components/ProductComps/ProductCardComps/PriceConvertor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
};

const CartPage = () => {
  return (
    <Container>
      <Breadcrumb>Cart</Breadcrumb>

      {/* <section className={`flex flex-col gap-x-5 gap-y-5 border xl:flex-row`}> */}
      <section className={`grid grid-cols-1 gap-x-7 gap-y-5 lg:grid-cols-3`}>
        <div className={`col-span-2`}>
          <CartContent />
        </div>

        <div
          className={`border-small border-slate-500 bg-slate-100 p-4 dark:bg-gray-900`}
        >
          <h2 className={`mb-5 text-2xl font-bold`}>Order Summary</h2>

          <div
            className={`flex items-center justify-between gap-x-10 space-y-3`}
          >
            <h4>Subtotal</h4>
            <PriceConvertor
              price={1000}
              percentage={0}
              sm={`text-base`}
              md={`text-base`}
              lg={`text-base`}
            ></PriceConvertor>
          </div>

          <div className={`flex items-center justify-between`}>
            <h4>Shipping</h4>
          </div>
          <div className={`flex items-center justify-between`}>
            <h4>Total</h4>
            <PriceConvertor price={1000} percentage={0}></PriceConvertor>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CartPage;
