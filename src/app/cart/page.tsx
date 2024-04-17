import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
};

const CartPage = () => {
  return (
    <section className={`sm:px-[5vw] py-5 px-2`}>
      <Breadcrumb>Cart</Breadcrumb>

      <section className={`h-[75vh] flex justify-center items-center`}>
        <h2 className={`font-bold text-4xl`}>Your cart is empty. 😎</h2>
      </section>
    </section>
  );
};

export default CartPage;
