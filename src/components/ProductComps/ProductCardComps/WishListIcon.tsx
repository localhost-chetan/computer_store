"use client";

import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { motion } from "framer-motion";

const WishListIcon = () => {
  return (
    <motion.button
      initial={{ scale: 0.9 }}
      whileHover={{ scale: 1 }}
      className={`scale-0 cursor-pointer rounded-full bg-rose-500 p-2 shadow-lg shadow-slate-300 ease-in-out group-hover/card:scale-100 motion-safe:transition-transform dark:shadow-gray-800`}
      onClick={() => {
        console.log(`Deadpool`);
      }}
    >
      <FaRegHeart
        className={`text-white`}
        size={18}
        title={`Add Product to Wishlist`}
      />
    </motion.button>
  );
};

export default WishListIcon;
