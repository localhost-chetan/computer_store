import CartContent from "@/components/cart/CartContent";
import Container from "@/components/Container";
import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
};

const CartPage = () => {
  return (
    <Container>
      <Breadcrumb>Cart</Breadcrumb>

      <CartContent />
    </Container>
  );
};

export default CartPage;
