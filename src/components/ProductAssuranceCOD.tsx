const Wrapper = ({
  icon,
  heading,
  description,
}: {
  icon: React.ReactNode;
  heading: string;
  description: string;
}) => {
  return (
    <div className={`space-y-3 text-pretty`}>
      <h2 className={`font-bold text-xl flex gap-2 items-center`}>
        <span>{icon}</span>
        <span>{heading}</span>
      </h2>
      <p className={`opacity-85 text-sm max-w-[55ch]`}>{description}</p>
    </div>
  );
};

const ProductAssuranceCOD = () => {
  return (
    <div
      className={`bg-blue-100 dark:bg-gray-800 rounded-sm px-5 py-7 space-y-8`}
    >
      <Wrapper
        icon={`💥`}
        heading={`100% Genuine Products Guaranteed`}
        description={`FlashByte is known for their best in class service and 100% genuine
          products with full authenticity.`}
      />

      <Wrapper
        icon={`👉`}
        heading={`Cash on Delivery Available`}
        description={`     Order this product on Cash on Delivery. For more details kindly check
          details on the checkout page.`}
      />
    </div>
  );
};

export default ProductAssuranceCOD;
