import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

type BreadcrumbProp = {
  children?: string;
  productName?: string;
};

const Breadcrumb = ({ children, productName }: BreadcrumbProp) => {
  return (
    <div className={`mb-8 flex select-none items-center text-sm text-gray-400`}>
      <Link
        href={`/`}
        className={`hover:text-bold text-gray-800 dark:text-slate-400 dark:hover:text-gray-200`}
      >
        Home
      </Link>

      <IoIosArrowForward size={15} />

      <span
        className={`cursor-pointer text-nowrap font-bold text-gray-950 dark:font-medium dark:text-white`}
      >
        {children}
      </span>

      {productName && (
        <>
          <IoIosArrowForward size={15} />

          <span
            className={`text-pretty font-bold text-gray-950 dark:font-medium dark:text-white`}
          >
            {productName}
          </span>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
