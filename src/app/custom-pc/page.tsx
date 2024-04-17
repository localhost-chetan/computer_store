import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom PC",
};

const CustomPC = () => {
  return (
    <section className={`sm:px-[5vw] py-5 px-2`}>
      <Breadcrumb>Custom PC</Breadcrumb>

      <section className={`h-[75vh] flex justify-center items-center`}>
        <h2 className={`font-bold text-4xl`}>
          Get ready to build your dream PC
        </h2>
      </section>
    </section>
  );
};

export default CustomPC;
