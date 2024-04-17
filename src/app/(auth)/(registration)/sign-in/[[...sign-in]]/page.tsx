import Container from "@/components/Container";
import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import GamingPCSetup from "@/../public/Auth/gaming-setup-with-computer-chair.jpg";
import Image from "next/image";
import { SignInComp } from "@/components/Auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

const SignInPage = () => {
  return (
    <>
      <Container>
        <Breadcrumb>Sign In</Breadcrumb>

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
            <SignInComp />
          </div>
        </section>
      </Container>
    </>
  );
};

export default SignInPage;
