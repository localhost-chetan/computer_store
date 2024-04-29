"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const BGCOLORS = ["#13FFAA", "#1E67C6", "#effa51", "#DD335C"];

export default function HeroSection() {
  const router = useRouter();

  useEffect(() => {
    animate(bgColor, BGCOLORS, {
      ease: "easeInOut",
      duration: 7,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });

  const bgColor = useMotionValue(BGCOLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(110% 120% at 50% 0%, transparent 40%, ${bgColor})`;
  const border = useMotionTemplate`3px solid ${bgColor}`;
  const boxShadow = useMotionTemplate`0 0 5px ${bgColor}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
    >
      <div
        className={`relative inset-0 flex h-screen w-full flex-col items-center justify-center gap-2 bg-[linear-gradient(to_right,#80808012_3px,transparent_3px),linear-gradient(to_bottom,#80808012_3px,transparent_3px)] bg-[size:30px_30px]`}
      >
        <div
          className={`flex flex-col gap-y-0 space-y-0 px-5 py-2 text-center leading-tight text-transparent`}
        >
          <h2
            className={`bg-gradient-to-br from-slate-400 to-slate-800 bg-clip-text text-[2rem] dark:from-slate-50 dark:to-slate-400 sm:text-[4rem] lg:text-[4.2rem]`}
          >
            We design & build
          </h2>
          <h1
            className={`bg-gradient-to-r from-red-500 to-blue-700 bg-clip-text text-[3rem] font-extrabold dark:from-red-500 dark:to-purple-500 sm:text-[5rem] lg:text-[5.5rem]`}
          >
            Custom PC
          </h1>
        </div>
        <p
          className={`mb-5 max-w-[50ch] text-pretty px-3 text-center text-[.85rem] leading-5 sm:text-[1.15rem] sm:leading-7`}
        >
          Building your own custom PC and needs ideas on where to get started?
          Explore our build guides which cover systems for a variety of
          use-cases and budgets
        </p>

        <motion.button
          className={`group select-none rounded-full bg-black px-4 py-2 text-white`}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.99 }}
          style={{ boxShadow, border }}
          onClick={() => {
            router.push(`/custom-pc`);
          }}
        >
          <span className={`flex items-center gap-2 text-xl font-bold`}>
            Custom PC
            <FaLongArrowAltRight
              className={`group-hover:-rotate-25 group-active:-rotate-15 transition-transform`}
            />
          </span>
        </motion.button>
      </div>
    </motion.section>
  );
}
