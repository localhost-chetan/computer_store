type DiscountType = {
  percentage: number;
};
const Discount = ({ percentage }: DiscountType) => {
  return (
    <div
      className={`absolute left-3 top-3 ${
        percentage >= 80
          ? "bg-green-400 dark:bg-green-700"
          : percentage >= 40
          ? "bg-orange-500 dark:bg-orange-400 dark:text-white"
          : "bg-red-500 text-white"
      } px-2 py-1 rounded-md text-sm select-none shadow-lg shadow-slate-400`}
    >
      {`-${percentage || null}%`}
    </div>
  );
};

export default Discount;
