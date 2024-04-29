"use client";

import { Button, Chip } from "@nextui-org/react";
import Link from "next/link";
import RGBCAbinet from "@/../public/Home Page/AMD RGB Cabinet.png";
import Image from "next/image";
import Clock from "./Clock";
import { useEffect } from "react";
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import Container from "../Container";

const BGCOLORS = ["#13FFAA", "#1E67C6", "#effa51", "#DD335C"];

const CustomPCCTA = () => {
  useEffect(() => {
    animate(bgColor, BGCOLORS, {
      ease: "easeInOut",
      duration: 7,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });

  const bgColor = useMotionValue(BGCOLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(300px 300px at center, transparent 10%, ${bgColor}, transparent 40%)`;

  return (
    <Container>
      <div
        className={`flex flex-col justify-around gap-10 rounded-sm bg-gray-900 p-10 text-white md:flex-row`}
      >
        {/* Details */}
        <div className={`flex w-full flex-col gap-y-8`}>
          <Chip
            color={`danger`}
            variant={`shadow`}
            size={`sm`}
            className={`font-semibold`}
          >
            Categories
          </Chip>

          <h4
            className={`line-clamp-2 text-balance text-2xl font-bold leading-7 tracking-wider sm:text-4xl`}
          >
            Get Ready to Build Your Dream PC 😎
          </h4>

          <Clock />

          <Button
            variant={`shadow`}
            color={`danger`}
            as={Link}
            href={`/custom-pc`}
            radius={`sm`}
            className={`w-fit`}
          >
            Build Now
          </Button>
        </div>

        {/* Image */}
        <motion.div
          style={{
            backgroundImage,
          }}
          className={`mx-auto flex w-full justify-center`}
        >
          <Image
            src={RGBCAbinet}
            alt={`RGB cabinet/box system`}
            height={300}
            width={300}
            priority
            className={`object-cover`}
          ></Image>
        </motion.div>
      </div>
    </Container>
  );
};

export default CustomPCCTA;
