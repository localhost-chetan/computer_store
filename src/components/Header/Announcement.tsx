"use client";

import { FreeDeliveryContext } from "@/context/FreeDeliveryPrice";
import { useContext } from "react";
import MagicBorder from "../AceternityComps/MagicBorder";

const Announcement = () => {
  const minPrice = useContext(FreeDeliveryContext);

  return (
    <div
      className={`flex items-center justify-center gap-2 bg-gradient-to-r from-black to-blue-900 p-2 text-[.7rem] text-white sm:text-[.9rem]`}
    >
      <p className={``}>
        Free delivery for orders above{" "}
        <span className={`font-bold text-green-400`}>
          ₹{minPrice.toLocaleString()}
        </span>
      </p>
      <MagicBorder
        href={`/products/headsets`}
        size={`sm`}
        className={`text-[.75rem]`}
      >
        Shop 🎁
      </MagicBorder>
    </div>
  );
};

export default Announcement;
