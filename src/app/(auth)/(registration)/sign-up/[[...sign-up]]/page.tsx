import Image from "next/image";
import GamingPCSetup from "@/../public/Auth/gaming-setup-with-computer-chair.jpg";
import Container from "@/components/Container";
import Breadcrumb from "@/components/ProductComps/Breadcrumb";
// import { SignUpComp } from "@/components/Auth";
import { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

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
          className={`mb-10 flex flex-col items-stretch justify-center gap-5 overflow-hidden lg:flex-row lg:items-center lg:justify-center lg:pt-10`}
        >
          <div
            className={`w-full grow self-stretch overflow-hidden lg:w-[50%]`}
          >
            <Image
              src={GamingPCSetup}
              alt={`Gaming Pc setup`}
              priority
              quality={15}
              className={`mx-auto h-full object-cover object-center sm:max-w-[550px] lg:max-w-full`}
            ></Image>
          </div>

          <div
            className={`w-fit shrink grow-0 scale-95 self-center sm:scale-100 lg:w-[50%]`}
          >
            {/* <SignUpComp /> */}
            <SignUp
              afterSignUpUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL}
            />
          </div>
        </section>
      </Container>
    </>
  );
};

export default SignUpPage;
