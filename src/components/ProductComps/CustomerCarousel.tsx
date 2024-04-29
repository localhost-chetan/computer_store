"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";

import Customer1 from "@/../public/Custom PC/Customer 1.png";
import Customer2 from "@/../public/Custom PC/Customer 2.png";
import Customer3 from "@/../public/Custom PC/Customer 3.png";
import Customer4 from "@/../public/Custom PC/Customer 4.png";
import Customer5 from "@/../public/Custom PC/Customer 5.png";

const CustomerCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      autoPlay
      autoPlaySpeed={2000}
      renderDotsOutside
      infinite
      showDots
      className={`mx-auto flex h-[200px] w-full justify-center gap-3 border *:object-contain`}
    >
      <Image
        src={`/Custom PC/Customer 1.png`}
        width={300}
        height={350}
        alt={`Customer 1`}
      ></Image>
      <Image
        src={`/Custom PC/Customer 2.png`}
        width={300}
        height={350}
        alt={`Customer 2`}
      ></Image>
      <Image
        src={`/Custom PC/Customer 3.png`}
        width={300}
        height={350}
        alt={`Customer 3`}
      ></Image>
      <Image
        src={`/Custom PC/Customer 4.png`}
        width={300}
        height={350}
        alt={`Customer 4`}
      ></Image>
      <Image
        src={`/Custom PC/Customer 5.png`}
        width={300}
        height={350}
        alt={`Customer 5`}
      ></Image>
    </Carousel>
  );
};

export default CustomerCarousel;
