"use client";

import SectionHeading from "./SectionHeading";
import Processor from "@/../public/Home Page/Category Section/Processor.avif";
import AIOLiquidCooler from "@/../public/Home Page/Category Section/AIO Liquid Cooler.webp";
import AirCooler from "@/../public/Home Page/Category Section/Air Cooler.webp";
import Cabinet from "@/../public/Home Page/Category Section/Cabinet.jpg";
import CaseFan from "@/../public/Home Page/Category Section/Case Fans.webp";
import GPU from "@/../public/Home Page/Category Section/GPU.webp";
import HDD from "@/../public/Home Page/Category Section/Hard Disk Drive.webp";
import Headset from "@/../public/Home Page/Category Section/Headset.jpg";
import Keyboard from "@/../public/Home Page/Category Section/Keyboard.jpg";
import Monitor from "@/../public/Home Page/Category Section/Monitor.webp";
import Motherboard from "@/../public/Home Page/Category Section/Motherboard.webp";
import Mouse from "@/../public/Home Page/Category Section/Mouse.webp";
import SMPS from "@/../public/Home Page/Category Section/Power Supply.webp";
import RAMModule from "@/../public/Home Page/Category Section/RAM.webp";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "../Container";

const HomeCategories = () => {
  const categories = [
    {
      id: 0,
      imageURL: Headset,
      href: "/products/headsets",
      product: `Headsets`,
    },

    {
      id: 1,
      imageURL: AIOLiquidCooler,
      href: "/products/aio_liquid_coolers",
      product: `AIO Liquid Coolers`,
    },

    {
      id: 2,
      imageURL: AirCooler,
      href: "/products/air_cooler",
      product: `Air Coolers`,
    },

    {
      id: 3,
      imageURL: Cabinet,
      href: "/products/cabinets",
      product: `Cabinets`,
    },

    {
      id: 4,
      imageURL: CaseFan,
      href: "/products/case_fans",
      product: `Case Fans`,
    },

    {
      id: 5,
      imageURL: GPU,
      href: "/products/graphics_cards",
      product: `Graphics Cards`,
    },

    {
      id: 6,
      imageURL: Processor,
      href: "/products/processors",
      product: `Processor`,
    },

    {
      id: 7,
      imageURL: HDD,
      href: "/products/storage_devices",
      product: `Storage Devices`,
    },

    {
      id: 8,
      imageURL: Keyboard,
      href: "/products/keyboards",
      product: `Keyboards`,
    },

    {
      id: 9,
      imageURL: Monitor,
      href: "/products/monitors",
      product: `Monitors`,
    },

    {
      id: 10,
      imageURL: Motherboard,
      href: "/products/motherboards",
      product: `Motherboards`,
    },

    { id: 11, imageURL: Mouse, href: "/products/mouses", product: `Mouse` },

    {
      id: 12,
      imageURL: SMPS,
      href: "/products/power_supplies",
      product: `Power Supplies`,
    },

    {
      id: 13,
      imageURL: RAMModule,
      href: "/products/ram_modules",
      product: `RAM Module`,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1500 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1100 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1100, min: 915 },
      items: 3,
    },
    custom: {
      breakpoint: { max: 915, min: 630 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 630, min: 0 },
      items: 1,
    },
  };

  return (
    <Container>
      <div className="space-y-5 overflow-hidden">
        <div className={`flex items-end justify-between mb-10`}>
          <SectionHeading subHeading={`Categories`}>
            Browse By Category
          </SectionHeading>
        </div>

        <Carousel
          responsive={responsive}
          showDots={true}
          ssr={true}
          autoPlay={true}
          infinite={true}
        >
          {categories.map(
            ({
              id,
              imageURL,
              href,
              product,
            }: {
              id: number;
              imageURL: StaticImageData;
              href: string;
              product: string;
            }) => {
              return (
                <div
                  key={id}
                  className={`w-72 sm:w-64 lg:w-56 grow shrink-0 overflow-hidden bg-gradient-br from-slate-100 to-slate-400 shadow-lg rounded-lg shadow-slate-300 dark:shadow-slate-800 border-small mx-auto`}
                >
                  <Tooltip
                    content={product}
                    color={`danger`}
                    offset={10}
                    className={`select-none`}
                  >
                    <Link href={href!}>
                      <Image
                        src={imageURL}
                        alt={`Product Category`}
                        className={`hover:scale-110 transition-transform aspect-square object-cover min-w-28 select-none`}
                        priority
                        quality={100}
                      ></Image>
                    </Link>
                  </Tooltip>
                </div>
              );
            }
          )}
        </Carousel>
      </div>
    </Container>
  );
};

export default HomeCategories;
