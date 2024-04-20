import Container from "@/components/Container";
import AppInfo from "@/components/HomePage/AppInfo";
import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const metadata: Metadata = {
  title: "About Us",
};

const SectionWrapper = ({
  children,
  colReverse,
}: {
  children: React.ReactNode;
  colReverse: boolean;
}) => {
  return (
    <div
      className={`flex ${
        colReverse ? "flex-col-reverse" : "flex-col"
      } lg:flex-row gap-x-10 gap-y-6`}
    >
      {children}
    </div>
  );
};

const Headings = ({
  heading2,
  heading3,
}: {
  heading2: string;
  heading3: string;
}) => {
  return (
    <div className={`space-y-2`}>
      <h3 className={`font-semibold text-red-400 text-xl`}>{heading3}</h3>
      <h2 className={`font-extrabold text-3xl`}>{heading2}</h2>
    </div>
  );
};

const Description = ({ children }: { children: React.ReactNode }) => {
  return <div className={`text-pretty max-w-[65ch] space-y-4`}>{children}</div>;
};

const ImgWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`grow self-stretch overflow-hidden shadow-2xl shadow-slate-400 dark:shadow-gray-900 rounded-md select-none`}
    >
      {children}
    </div>
  );
};

const TeamMemberIMGWrapper = ({
  imageURL,
  size = 35,
  name,
  designation,
}: {
  imageURL: string;
  size?: number;
  name: string;
  designation: string;
}) => {
  return (
    <div className={`space-y-3 text-center`}>
      <div
        className={`h-[350px] overflow-hidden group relative shadow-md shadow-slate-400 dark:shadow-gray-900 rounded-sm`}
      >
        <Image
          src={imageURL}
          alt={name}
          width={300}
          height={400}
          loading={`lazy`}
          className={`h-full object-cover object-top group-hover:grayscale transition-all`}
        ></Image>

        <div
          className={`flex justify-center gap-5 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 *:cursor-pointer absolute bottom-0 w-full bg-gradient-to-b from-slate-400 to-slate-50 py-3 backdrop-blur-md backdrop-saturate-50`}
        >
          <Link href={``} className={`hover:scale-[1.15] transition-transform`}>
            <FaFacebookSquare size={size} color={`hsl(221, 44%, 41%)`} />
          </Link>
          <Link href={``} className={`hover:scale-[1.15] transition-transform`}>
            <FaSquareXTwitter size={size} color={`black`} />
          </Link>
          <Link href={``} className={`hover:scale-[1.15] transition-transform`}>
            <RiInstagramFill size={size} color={`hsl(332, 65%, 53%)`} />
          </Link>
        </div>
      </div>

      <div className={`flex flex-col gap-y-1`}>
        <h3 className={`font-bold text-lg`}>{name}</h3>
        <h4 className={``}>{designation}</h4>
      </div>
    </div>
  );
};

const InsideStats = ({ children }: { children: React.ReactNode }) => {
  return <div className={`flex flex-col gap-y-1`}>{children}</div>;
};

const Stats = ({
  first,
  second,
  third,
}: {
  first: React.ReactNode;
  second: React.ReactNode;
  third: React.ReactNode;
}) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-x-16 gap-y-10 text-center`}>
      <InsideStats>{first}</InsideStats>
      <InsideStats>{second}</InsideStats>
      <InsideStats>{third}</InsideStats>
    </div>
  );
};

const SpanTitle = ({ children }: { children: string }) => {
  return <span className={`font-bold text-red-400 text-lg`}>{children}</span>;
};

const AboutUs = () => {
  return (
    <Container>
      <Breadcrumb>About Us</Breadcrumb>

      <section className={`my-16 space-y-20`}>
        <SectionWrapper colReverse={false}>
          {/* description */}
          <div className={`grow space-y-6`}>
            <Headings
              heading3={`Our History`}
              heading2={`Power Up Your Play`}
            />

            <Description>
              <p>
                We're more than just an online store; we're PC enthusiasts
                passionate about building the perfect setup for every gamer and
                creator.
              </p>
              <p>
                We believe your PC should be an extension of yourself. It's not
                just about the latest graphics card or the trendiest case
                (although, we have those too!). That's why we offer a wide range
                of top-tier peripherals and the tools to build a PC that's as
                unique as you are.
              </p>
              <p>
                Fast forward to today, and we've grown from a spark of an idea
                into a thriving community of builders. We've helped over 20,000
                satisfied customers craft their dream PCs, with a 100% client
                satisfaction rating.
              </p>
            </Description>

            {/* <div className={`flex gap-x-16 text-center`}>
              <div className={`flex flex-col gap-y-2`}>
                <div className={``}></div>
                <div className={``}></div>
              </div>
              <div className={``}>
                <div className={``}></div>
                <div className={``}></div>
              </div>
              <div className={``}>
                <div className={``}></div>
                <div className={``}></div>
              </div>
            </div> */}

            <Stats
              first={
                <>
                  <div className={`font-bold text-3xl text-red-400`}>6</div>
                  <div className={``}>Years Experience</div>
                </>
              }
              second={
                <>
                  <div className={`font-bold text-3xl text-red-400`}>20K</div>
                  <div className={``}>Happy Customers</div>
                </>
              }
              third={
                <>
                  <div className={`font-bold text-3xl text-red-400`}>100%</div>
                  <div className={``}>Client Satisfaction</div>
                </>
              }
            ></Stats>
          </div>

          {/* illustration */}
          <ImgWrapper>
            <Image
              src={`/Footer/Gaming PC Setup.jpg`}
              alt={`Gaming PC Setup`}
              priority
              width={600}
              height={600}
              className={`w-full h-[300px] lg:h-full object-cover object-center`}
            ></Image>
          </ImgWrapper>
        </SectionWrapper>

        <SectionWrapper colReverse={true}>
          {/* illustration */}
          <ImgWrapper>
            <Image
              src={`/About Us/gaming-pc-build.webp`}
              alt={`Gaming PC Setup`}
              priority
              quality={100}
              width={600}
              height={600}
              className={`w-full h-[300px] lg:h-full object-cover object-center `}
            ></Image>
          </ImgWrapper>

          {/* description */}
          <div className={`grow space-y-6`}>
            <Headings
              heading3={`Our Vision`}
              heading2={`Building Beyond the Box`}
            />

            <Description>
              <p>
                We're here to revolutionize the way you experience PC ownership.
                Forget cookie-cutter builds: We envision a future where:
              </p>

              <ul className={`*:before:content-['👍'] *:before:mr-3 space-y-2`}>
                <li>
                  <SpanTitle>Every PC is a masterpiece</SpanTitle>
                  <p>
                    We empower you to craft a PC that reflects your unique style
                    and unleashes your full potential.
                  </p>
                </li>
                <li>
                  <SpanTitle>Building becomes effortless</SpanTitle>
                  <p>
                    Our user-friendly platform and expert support team guide you
                    through every step, from picking parts to hitting the power
                    button.
                  </p>
                </li>
                <li>
                  <SpanTitle>The community thrives</SpanTitle>
                  <p>
                    We foster a vibrant space for builders to connect, share
                    ideas, and celebrate each other's epic creations.
                  </p>
                </li>
                <li>
                  <SpanTitle>The cutting edge is accessible</SpanTitle>
                  <p>
                    We source the finest peripherals so you can build a
                    future-proof powerhouse.
                  </p>
                </li>
              </ul>

              <p className={`font-semibold`}>
                Join us, and let's build the future of PC creation, together!
              </p>
            </Description>
          </div>
        </SectionWrapper>

        <div className={`space-y-5`}>
          <h2 className={`font-extrabold text-2xl sm:text-3xl text-center`}>
            Meet Our Team Members
          </h2>

          <div
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 place-content-center justify-items-center`}
          >
            <TeamMemberIMGWrapper
              imageURL={`/About Us/Tony Stark.jfif`}
              name={`Tony Stark`}
              designation={`Founder`}
            />
            <TeamMemberIMGWrapper
              imageURL={`/About Us/Chris Evans.jfif`}
              name={`Steve Rogers`}
              designation={`Team Leader`}
            />
            <TeamMemberIMGWrapper
              imageURL={`/About Us/Chris Hemsworth.jfif`}
              name={`Chris Hemsworth`}
              designation={`Senior Officer`}
            />
            <TeamMemberIMGWrapper
              imageURL={`/About Us/Tom Holland.jpg`}
              name={`Tom Holland`}
              designation={`Marketing Officer`}
            />
          </div>
        </div>
        <AppInfo />
      </section>
    </Container>
  );
};

export default AboutUs;
