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
        className={`flex flex-col justify-center items-center gap-2 h-screen relative inset-0 w-full bg-[linear-gradient(to_right,#80808012_3px,transparent_3px),linear-gradient(to_bottom,#80808012_3px,transparent_3px)] bg-[size:30px_30px]`}
      >
        <div
          className={`flex flex-col gap-y-0 px-5 py-2 text-transparent text-center space-y-0 leading-tight`}
        >
          <h2
            className={`text-[2rem] bg-clip-text sm:text-[4rem] lg:text-[4.2rem] bg-gradient-to-br dark:from-slate-50 dark:to-slate-400 from-slate-400 to-slate-800`}
          >
            We design & build
          </h2>
          <h1
            className={`text-[3rem] font-extrabold bg-clip-text sm:text-[5rem] lg:text-[5.5rem] bg-gradient-to-r dark:from-red-500 dark:to-purple-500 from-red-500 to-blue-700`}
          >
            Custom PC
          </h1>
        </div>
        <p
          className={`text-center max-w-[50ch] leading-5 mb-5 text-[.85rem] px-3 sm:text-[1.15rem] sm:leading-7 text-pretty`}
        >
          Building your own custom PC and needs ideas on where to get started?
          Explore our build guides which cover systems for a variety of
          use-cases and budgets
        </p>

        <motion.button
          className={`py-2 px-4 rounded-full group bg-black text-white select-none`}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.99 }}
          style={{ boxShadow, border }}
          onClick={() => {
            router.push(`/custom-pc`);
          }}
        >
          <span className={`flex gap-2 items-center text-xl font-bold`}>
            Custom PC
            <FaLongArrowAltRight
              className={`transition-transform group-hover:-rotate-25 group-active:-rotate-15`}
            />
          </span>
        </motion.button>
      </div>
    </motion.section>
  );
}
