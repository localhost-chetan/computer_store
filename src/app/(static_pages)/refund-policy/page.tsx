import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import Image from "next/image";
import RefundPolicyPic from "@/../public/Refund Policy/Refund Policy.jpg";
import Link from "next/link";
import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund and Cancellation Policy",
};

const RefundPolicy = () => {
  return (
    <Container>
      <Breadcrumb>Refund Policy</Breadcrumb>

      <div className={`flex gap-10 flex-col lg:flex-row pt-6 pb-16`}>
        <div className={`w-full flex flex-col gap-y-10`}>
          <h1
            className={`font-extrabold text-pretty mb-2 text-2xl sm:text-3xl lg:text-4xl`}
          >
            Refund, Return & Cancellation Policy
          </h1>

          <ul
            className={`text-pretty max-w-[55ch] lg:max-w-[65ch] space-y-10 list-inside sm:list-outside list-disc`}
          >
            <li className={``}>
              If the customer requests to cancel the order before we have
              started to process the order (Usually within 24 Hours) then 10% of
              total order amount will be charged as cancellation charges and
              rest will be refunded.
            </li>
            <li className={``}>
              If the customer requests to cancel the order after we have started
              processing the order (Usually after 24 Hours) then 25% of total
              amount will be charged as cancellation charges and rest will be
              refunded.
            </li>
            <li className={``}>
              If your product has been dispatched or delivered then the customer
              cannot cancel the order or return the product and refund is not
              possible in this case.
            </li>
          </ul>

          <div className={`mt-7`}>
            <h2
              className={`font-extrabold text-pretty mb-5 text-2xl sm:text-3xl lg:text-4xl`}
            >
              Refund Policy
            </h2>

            <ul
              className={`text-pretty max-w-[55ch] lg:max-w-[65ch] space-y-4 list-disc list-inside sm:list-outside`}
            >
              <li className={``}>
                For refund you can{" "}
                <Link
                  href={`/contact-us`}
                  className={`font-semibold text-blue-500 dark:text-blue-400`}
                >
                  contact us
                </Link>
                .
              </li>
              <li className={``}>The refund process can take upto 7 days.</li>
            </ul>
          </div>
        </div>

        <div className={`w-full overflow-hidden self-center`}>
          <Image
            src={RefundPolicyPic}
            alt={`REfund and Cancellation Policy`}
            priority
            width={500}
            className={`rounded-lg select-none`}
          ></Image>
        </div>
      </div>
    </Container>
  );
};

export default RefundPolicy;
