import { cn } from "@/lib/utils";

type PriceConvertorPropType = {
  price: number;
  percentage: number;
  sm?: string;
  md?: string;
  lg?: string;
  fontWeight?: string;
  className?: string;
};

const PriceConvertor = ({
  price,
  percentage,
  sm = "text-xl",
  md = "text-xl",
  lg = "text-2xl",
  fontWeight = "font-extrabold",
  className,
}: PriceConvertorPropType) => {
  return (
    <h3
      className={cn(
        `text-lg sm:${sm} md:${md} lg:${lg}
       text-green-700 dark:text-green-400 ${fontWeight} tabular-nums`,
        className,
      )}
    >
      &#8377;
      {Math.floor(
        price * 80 - (percentage / 100) * (price * 80),
      ).toLocaleString()}
    </h3>
  );
};

export default PriceConvertor;
