import Container from "@/components/Container";
import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

const AboutUs = () => {
  return (
    <Container>
      <Breadcrumb>About Us</Breadcrumb>
    </Container>
  );
};

export default AboutUs;
