"use client";

import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/react";

const WishListIcon = () => {
  return (
    <>
      <span className={`sr-only`}>Add to Wishlist</span>
      <Tooltip
        content={"Add to Wishlist"}
        color={`danger`}
        shadow={`lg`}
        showArrow
      >
        <motion.button
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1 }}
          className={`scale-0 cursor-pointer rounded-full bg-rose-500 p-2 shadow-lg shadow-slate-300 ease-in-out group-hover/card:scale-100 motion-safe:transition-transform dark:shadow-gray-800`}
          onClick={() => {
            console.log(`Deadpool`);
          }}
        >
          <FaRegHeart className={`text-white`} size={18} />
        </motion.button>
      </Tooltip>
    </>
  );
};

export default WishListIcon;
