import { IconType } from "react-icons";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsShieldFillCheck } from "react-icons/bs";
import Container from "../Container";

const Info = (Icon: IconType, heading: string, caption: string) => {
  return (
    <div className={`flex flex-col gap-y-1 items-center justify-center`}>
      <div
        className={`bg-gray-300 dark:bg-gray-400 p-3 rounded-full aspect-square overflow-hidden mb-5`}
      >
        <div className={`bg-black rounded-full p-3`}>
          {<Icon size={25} color={`white`} />}
        </div>
      </div>
      <div
        className={`font-extrabold tracking-wide line-clamp-2 text-pretty text-center text-lg lg:text-xl`}
      >
        {heading.toUpperCase()}
      </div>
      <div className={`text-center text-pretty text-sm md:text-base`}>
        {caption}
      </div>
    </div>
  );
};

const AppInfo = () => {
  return (
    <Container>
      <div
        className={`flex flex-col lg:flex-row items-center justify-center gap-x-32 gap-y-11 py-10`}
      >
        {Info(
          TbTruckDelivery,
          "FREE AND FAST DELIVERY",
          `Free delivery for orders above ₹${Number(10000).toLocaleString()}`
        )}

        {Info(
          TfiHeadphoneAlt,
          `24/7 Customer Service`,
          `Friendly 24/7 customer service`
        )}

        {Info(
          BsShieldFillCheck,
          `Money Back Guarantee`,
          `We return money within 30 days`
        )}
      </div>
    </Container>
  );
};

export default AppInfo;
