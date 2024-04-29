import { IconType } from "react-icons";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsShieldFillCheck } from "react-icons/bs";
import Container from "../Container";

const Info = (Icon: IconType, heading: string, caption: string) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-y-1`}>
      <div
        className={`mb-5 aspect-square overflow-hidden rounded-full bg-gray-300 p-3 dark:bg-gray-400`}
      >
        <div className={`rounded-full bg-black p-3`}>
          {<Icon size={25} color={`white`} />}
        </div>
      </div>
      <div
        className={`line-clamp-2 text-pretty text-center text-lg font-extrabold tracking-wide lg:text-xl`}
      >
        {heading.toUpperCase()}
      </div>
      <div className={`text-pretty text-center text-sm md:text-base`}>
        {caption}
      </div>
    </div>
  );
};

const AppInfo = () => {
  return (
    <Container>
      <div
        className={`flex flex-col items-center justify-center gap-x-32 gap-y-11 py-10 lg:flex-row`}
      >
        {Info(
          TbTruckDelivery,
          "FREE AND FAST DELIVERY",
          `Free delivery for orders above ₹${Number(10000).toLocaleString()}`,
        )}

        {Info(
          TfiHeadphoneAlt,
          `24/7 Customer Service`,
          `Friendly 24/7 customer service`,
        )}

        {Info(
          BsShieldFillCheck,
          `Money Back Guarantee`,
          `We return money within 30 days`,
        )}
      </div>
    </Container>
  );
};

export default AppInfo;
