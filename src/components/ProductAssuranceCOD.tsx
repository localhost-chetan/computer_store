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
      <h2 className={`flex items-center gap-2 text-xl font-bold`}>
        <span>{icon}</span>
        <span>{heading}</span>
      </h2>
      <p className={`max-w-[55ch] text-sm opacity-85`}>{description}</p>
    </div>
  );
};

const ProductAssuranceCOD = () => {
  return (
    <div
      className={`space-y-8 rounded-sm bg-blue-100 px-5 py-7 dark:bg-gray-800`}
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
