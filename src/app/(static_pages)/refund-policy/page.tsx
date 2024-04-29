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

      <div className={`flex flex-col gap-10 pb-16 pt-6 lg:flex-row`}>
        <div className={`flex w-full flex-col gap-y-10`}>
          <h1
            className={`mb-2 text-pretty text-2xl font-extrabold sm:text-3xl lg:text-4xl`}
          >
            Refund, Return & Cancellation Policy
          </h1>

          <ul
            className={`max-w-[55ch] list-inside list-disc space-y-10 text-pretty sm:list-outside lg:max-w-[65ch]`}
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
              className={`mb-5 text-pretty text-2xl font-extrabold sm:text-3xl lg:text-4xl`}
            >
              Refund Policy
            </h2>

            <ul
              className={`max-w-[55ch] list-inside list-disc space-y-4 text-pretty sm:list-outside lg:max-w-[65ch]`}
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

        <div className={`w-full self-center overflow-hidden`}>
          <Image
            src={RefundPolicyPic}
            alt={`REfund and Cancellation Policy`}
            priority
            width={500}
            className={`select-none rounded-lg`}
          ></Image>
        </div>
      </div>
    </Container>
  );
};

export default RefundPolicy;
