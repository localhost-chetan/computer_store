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

      <section className={`flex flex-col gap-x-5 gap-y-5 xl:flex-row`}>
        <div className={``}>
          <CartContent />
        </div>

        <div className={`invisible`}>
          <h2 className={`text-2xl font-bold`}>Cart Tools</h2>

          <div className={`gap-x- 10 flex items-center justify-between`}>
            <h4>Subtotal</h4>
            <PriceConvertor price={1000} percentage={0}></PriceConvertor>
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
