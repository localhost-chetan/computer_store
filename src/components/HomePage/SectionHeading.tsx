type SectionHeadingPropType = {
  children: string;
  subHeading: string;
};

const SectionHeading = ({ children, subHeading }: SectionHeadingPropType) => {
  return (
    <div className={`flex flex-col gap-y-3`}>
      <div className={`flex items-center gap-x-2`}>
        <div
          className={`bg-rose-500 px-2 py-4`}
          style={{ borderRadius: "3px" }}
        ></div>
        <h4 className={`md:text-md text-sm font-semibold text-rose-400`}>
          {subHeading}
        </h4>
      </div>
      <h3 className={`text-xl font-bold tracking-wide md:text-2xl`}>
        {children}
      </h3>
    </div>
  );
};

export default SectionHeading;
