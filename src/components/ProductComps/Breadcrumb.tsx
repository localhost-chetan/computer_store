import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

type BreadcrumbProp = {
  children?: string;
  productName?: string;
};

const Breadcrumb = ({ children, productName }: BreadcrumbProp) => {
  return (
    <div className={`text-sm text-gray-400 flex items-center mb-8 select-none`}>
      <Link
        href={`/`}
        className={`text-gray-800 dark:text-slate-400 dark:hover:text-gray-200 hover:text-bold`}
      >
        Home
      </Link>

      <IoIosArrowForward size={15} />

      <span
        className={`cursor-pointer font-bold dark:font-medium text-gray-950 dark:text-white text-nowrap`}
      >
        {children}
      </span>

      {productName && (
        <>
          <IoIosArrowForward size={15} />

          <span
            className={`font-bold dark:font-medium text-gray-950 dark:text-white text-pretty`}
          >
            {productName}
          </span>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
