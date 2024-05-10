import Container from "@/components/Container";
import ProductAssuranceCOD from "@/components/ProductAssuranceCOD";
import Breadcrumb from "@/components/ProductComps/Breadcrumb";
// import CustomerCarousel from "@/components/ProductComps/CustomerCarousel";
import { Metadata } from "next";
import Image from "next/image";
import IntelCabinet from "@/../public/Cabinets/Intel Gaming PC Cabinet.png";
import CustomPCBuilderComp from "@/components/CustomPC/CustomPCBuilderComp";

export const metadata: Metadata = {
  title: "Custom PC",
};

const CustomPC = () => {
  const categories = [
    {
      id: 1,
      productCategory: "processors",
      label: "Processor",
      quantity: false,
      max: 1,
      isRequired: true,
      defaultSelectedId: "65e82ee1b707a389eb78d197",
    },
    {
      id: 2,
      productCategory: "motherboards",
      label: "Motherboard",
      quantity: false,
      max: 1,
      isRequired: true,
      description:
        "Kindly choose your motherboard according to your CPU socket support.",
      defaultSelectedId: "65e84c5faae050bcfe22630e",
    },
    {
      id: 8,
      productCategory: "ram_modules",
      label: "RAM",
      quantity: true,
      max: 4,
      isRequired: true,
      defaultSelectedId: "65e835e0b707a389eb78d1c5",
    },
    {
      id: 11,
      productCategory: "graphics_cards",
      label: "Graphics Card",
      quantity: true,
      max: 2,
      isRequired: false,
      defaultSelectedId: "65e85674aae050bcfe226351",
    },
    {
      id: 3,
      productCategory: "mouses",
      label: "Mouse",
      quantity: false,
      max: 4,
      isRequired: false,
      defaultSelectedId: "65e874deaae050bcfe2263fd",
    },
    {
      id: 4,
      productCategory: "headsets",
      label: "Headset",
      quantity: true,
      max: 10,
      isRequired: false,
      defaultSelectedId: "65e8a981aae050bcfe226466",
    },
    {
      id: 5,
      productCategory: "cabinets",
      label: "Cabinet",
      quantity: false,
      max: 1,
      isRequired: true,
      defaultSelectedId: "65e86506aae050bcfe2263a4",
    },
    {
      id: 6,
      productCategory: "monitors",
      label: "Monitor",
      quantity: true,
      max: 3,
      isRequired: false,
      defaultSelectedId: "65e86c82aae050bcfe2263be",
    },
    {
      id: 7,
      productCategory: "keyboards",
      label: "Keyboard",
      quantity: true,
      max: 2,
      isRequired: false,
      defaultSelectedId: "65e87258aae050bcfe2263e3",
    },

    {
      id: 9,
      productCategory: "storage_devices",
      label: "Storage",
      quantity: true,
      max: 4,
      isRequired: true,
      defaultSelectedId: "65e87893aae050bcfe226419",
    },
    {
      id: 10,
      productCategory: "case_fans",
      label: "Case Fan",
      quantity: true,
      max: 10,
      isRequired: true,
      defaultSelectedId: "65e882cdaae050bcfe226433",
    },
  ];

  return (
    <Container>
      <Breadcrumb>Custom PC</Breadcrumb>

      <section
        className={`relative flex flex-col gap-x-5 md:gap-y-0 lg:flex-row lg:gap-y-10`}
      >
        {/* Image */}
        <div
          className={`top-0 w-full grow-0 select-none p-2 md:scale-95 lg:sticky lg:h-screen lg:scale-100`}
        >
          <div className={`flex h-full items-center p-2`}>
            <Image
              // src={`/Cabinet/Intel Gaming PC Cabinet.png`}
              src={IntelCabinet}
              alt={`Intel Gaming PC Cabinet`}
              priority
              quality={10}
              blurDataURL=""
              className={``}
            ></Image>
          </div>
        </div>

        {/* Form */}
        <div className={`w-full grow space-y-5 p-5`}>
          <h1
            className={`text-balance text-2xl font-extrabold sm:text-3xl md:text-2xl lg:text-3xl`}
          >
            Build Your Dream PC 😎
          </h1>

          <div className={`relative space-y-4`}>
            <h3 className={`text-balance text-xl font-bold`}>
              Our Latest PC Builds & Happy Customers!
            </h3>

            {/* <CustomerCarousel /> */}
          </div>

          <ProductAssuranceCOD />

          <CustomPCBuilderComp categories={categories}></CustomPCBuilderComp>
        </div>
      </section>
    </Container>
  );
};

export default CustomPC;
