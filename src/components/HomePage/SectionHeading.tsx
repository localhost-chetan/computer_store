type SectionHeadingPropType = {
  children: string;
  subHeading: string;
};

const SectionHeading = ({ children, subHeading }: SectionHeadingPropType) => {
  return (
    <div className={`flex flex-col gap-y-3`}>
      <div className={`flex items-center gap-x-2`}>
        <div
          className={`px-2 py-4 bg-rose-500`}
          style={{ borderRadius: "3px" }}
        ></div>
        <h4 className={`text-rose-400 font-semibold text-sm md:text-md`}>
          {subHeading}
        </h4>
      </div>
      <h3 className={`font-bold text-xl md:text-2xl tracking-wide`}>
        {children}
      </h3>
    </div>
  );
};

export default SectionHeading;
