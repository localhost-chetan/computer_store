import Image from "next/image";
import GamingPCSetup from "@/../public/Auth/gaming-setup-with-computer-chair.jpg";
import Container from "@/components/Container";
import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import { SignUpComp } from "@/components/Auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign UP",
};

const SignUpPage = () => {
  return (
    <>
      <title>FlashByte - Sign Up</title>
      <Container>
        <Breadcrumb>Sign Up</Breadcrumb>

        <section
          className={`flex flex-col lg:flex-row justify-center lg:justify-center lg:items-center items-stretch gap-5 overflow-hidden lg:pt-10 mb-10`}
        >
          <div
            className={`w-full lg:w-[50%] grow overflow-hidden self-stretch`}
          >
            <Image
              src={GamingPCSetup}
              alt={`Gaming Pc setup`}
              priority
              quality={15}
              className={`object-cover object-center h-full sm:max-w-[550px] lg:max-w-full mx-auto`}
            ></Image>
          </div>

          <div
            className={`w-fit grow-0 lg:w-[50%] self-center scale-95 sm:scale-100 shrink`}
          >
            <SignUpComp />
          </div>
        </section>
      </Container>
    </>
  );
};

export default SignUpPage;
