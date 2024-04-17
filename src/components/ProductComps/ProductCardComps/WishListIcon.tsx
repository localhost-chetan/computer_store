"use client";

import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { motion } from "framer-motion";

const WishListIcon = () => {
  return (
    <motion.button
      initial={{ scale: 0.9 }}
      whileHover={{ scale: 1 }}
      className={`rounded-full bg-rose-500 p-2 scale-0 cursor-pointer motion-safe:transition-transform ease-in-out group-hover/card:scale-100 shadow-lg shadow-slate-300 dark:shadow-gray-800`}
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
