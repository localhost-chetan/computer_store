import { cn } from "@/lib/utils";

type DiscountType = {
  percentage: number;
  className?: string;
};
const Discount = ({ percentage, className }: DiscountType) => {
  return (
    <div
      className={cn(
        `absolute left-3 top-3 ${
          percentage >= 80
            ? "bg-green-400 dark:bg-green-700"
            : percentage >= 40
              ? "bg-orange-500 dark:bg-orange-400 dark:text-white"
              : "bg-red-500 text-white"
        } select-none rounded-md px-2 py-1 text-sm shadow-lg shadow-slate-400`,
        className,
      )}
    >
      {`-${percentage || null}%`}
    </div>
  );
};

export default Discount;
