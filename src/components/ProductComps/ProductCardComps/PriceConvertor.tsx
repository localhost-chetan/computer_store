"use client";

import { cn } from "@/lib/utils";
import { memo, useEffect, useState } from "react";

type PriceConvertorPropType = {
  price: number;
  percentage: number;
  sm?: string;
  md?: string;
  lg?: string;
  fontWeight?: string;
  className?: string;
  quantity?: number;
  children?: React.ReactNode;
};

const PriceConvertor = ({
  quantity = 1,
  price,
  percentage,
  sm = "text-xl",
  md = "text-xl",
  lg = "text-2xl",
  fontWeight = "font-extrabold",
  className,
  children,
}: PriceConvertorPropType) => {
  return (
    <h3
      className={cn(
        `text-lg sm:${sm} md:${md} lg:${lg}
       text-green-700 dark:text-green-400 ${fontWeight} tabular-nums`,
        className,
      )}
    >
      {children}&#8377;
      {Math.floor(
        (price * 80 - (percentage / 100) * (price * 80)) * quantity!,
      ).toLocaleString()}
    </h3>
  );
};

export default memo(PriceConvertor);
