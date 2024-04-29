import { CommonFields } from "@/lib/mongodb/models/products/commonTypes";
import Clock from "../Clock";
import SectionHeading from "../SectionHeading";
import "react-multi-carousel/lib/styles.css";
import ProductCarousel from "./ProductCarousel";
import Container from "@/components/Container";

const FlashSales = async () => {
  const response = await fetch(
    `${process.env.BASE_URL}/api/products/all_products`,
    { cache: "force-cache" },
  );

  console.log(process.env.BASE_URL);

  const products = await response.json().then((data: any) => data);

  const filteredData = products?.filter((document: CommonFields) => {
    return document.discount?.percentage! >= 75;
  });

  return (
    <Container>
      <div className={`flex items-end gap-x-10 py-10`}>
        <SectionHeading subHeading={`Today's`}>{`Flash Sales`}</SectionHeading>

        <Clock />
      </div>

      <ProductCarousel filteredData={filteredData} />
    </Container>
  );
};

export default FlashSales;
