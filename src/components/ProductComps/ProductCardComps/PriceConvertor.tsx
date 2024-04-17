type PriceConvertorPropType = {
  price: number;
  percentage: number;
};

const PriceConvertor = ({ price, percentage }: PriceConvertorPropType) => {
  return (
    <h3
      className={`text-xl lg:text-2xl text-green-700 dark:text-green-400 font-extrabold`}
    >
      &#8377;
      {Math.floor(
        price * 80 - (percentage / 100) * (price * 80)
      ).toLocaleString()}
    </h3>
  );
};

export default PriceConvertor;
