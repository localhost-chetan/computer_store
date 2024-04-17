import Container from "@/components/Container";
import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";
import { Button, Input, Textarea } from "@nextui-org/react";
import { IoCall, IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact Us",
};

const OurStore = ({
  icon,
  description,
}: {
  icon: React.ReactNode;
  description: React.ReactNode;
}) => {
  return (
    <div className={`flex items-center gap-x-4`}>
      <span className={``}>{icon}</span>
      <div
        className={`text-pretty text-sm md:text-base flex flex-col space-y-2 max-w-[40ch]`}
      >
        {description}
      </div>
    </div>
  );
};

const Hours = ({ row }: { row: React.ReactNode }) => {
  return <div className={`flex justify-between items-center`}>{row}</div>;
};

const ContactUs = () => {
  return (
    <Container>
      <Breadcrumb>Contact Us</Breadcrumb>

      {/* <section className={`flex gap-4 md:px-10 mt-10 border`}> */}
      {/* <div
          className={`flex flex-col gap-5 space-y-5 divide-y-1 divide-gray-700 dark:divide-slate-200 max-w-[30ch] border`}
        >
          <OurStore
            icon={<IoCall size={18} color={`white`} />}
            heading={`Call To Us`}
            description={
              <>
                <span>We are available 24/7, 7 days a week.</span>
                <span className={`flex items-center gap-2`}>
                  Phone:
                  <Link
                    href={`tel:919509129835`}
                    className={`text-lg font-bold text-orange-500 hover:text-orange-400 dark:text-orange-400 dark:hover:text-orange-500 `}
                  >
                    +91 9509129835
                  </Link>
                </span>
              </>
            }
          ></OurStore>

          <OurStore
            icon={<IoMail size={18} color={`white`} />}
            heading={`Write To Us`}
            description={
              <>
                <span>
                  Fill out our form and we will contact you within 24 hours.
                </span>
                <span>Emails: flashbyte99@gmail.com</span>
                <span>Emails: chetanseervi513@gmail.com</span>
              </>
            }
          ></OurStore>
        </div> */}

      <section
        className={`flex flex-col gap-x-4 gap-y-6 md:flex-row justify-center sm:justify-around items-center md:items-start p-0 md:py-5`}
      >
        <div
          className={`shadow-2xl rounded-md dark:shadow-gray-900 px-4 py-10 md:p-10 border-small dark:border-gray-700 space-y-4 w-full md:grow`}
        >
          <h1 className={`font-extrabold text-xl md:text-3xl`}>
            Leave Us A Message
          </h1>

          <p className={`text-pretty`}>
            Use the form below to get in touch with the sales team.
          </p>

          <div className={`mt-28`}>
            <form
              action={``}
              method={`POST`}
              className={`grid grid-cols-1 sm:grid-cols-2 gap-5`}
            >
              {/* First Name */}
              <Input
                placeholder={` `}
                isClearable
                isRequired
                inputMode={`text`}
                type={`text`}
                label={`First Name`}
                labelPlacement={`outside`}
                radius={`sm`}
                variant={`bordered`}
                className={`col-span-2 sm:col-span-1`}
              />

              {/* Last Name */}
              <Input
                placeholder={` `}
                isClearable
                isRequired
                type={`text`}
                label={`Last Name`}
                labelPlacement={`outside`}
                radius={`sm`}
                variant={`bordered`}
                inputMode={`text`}
                className={`col-span-2 sm:col-span-1`}
              />

              {/* Email */}
              <Input
                placeholder={` `}
                isClearable
                isRequired
                type={`email`}
                inputMode={`email`}
                label={`Email`}
                labelPlacement={`outside`}
                radius={`sm`}
                variant={`bordered`}
                className={`col-span-2`}
              />

              {/* Subject */}
              <Input
                placeholder={` `}
                isClearable
                isRequired
                type={`text`}
                label={`Subject`}
                inputMode={`text`}
                labelPlacement={`outside`}
                radius={`sm`}
                variant={`bordered`}
                className={`col-span-2`}
              />

              <Textarea
                minRows={4}
                maxRows={6}
                isRequired
                placeholder={` `}
                label={`Your Message`}
                type={`text`}
                inputMode={`text`}
                radius={`sm`}
                variant={`bordered`}
                labelPlacement={`outside`}
                className={`col-span-2`}
              />

              <Button
                color={`primary`}
                variant={`shadow`}
                radius={`sm`}
                size={`md`}
                className={`col-span-2 sm:w-fit px-5`}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div
          className={`w-full md:grow px-4 py-10 md:px-5 space-y-5 shadow-2xl rounded-md dark:shadow-gray-900 border-1.5 dark:border-gray-700 divide-y-1 divide-solid divide-gray-700 dark:divide-slate-500`}
        >
          <div className={`space-y-3`}>
            <h3 className={`font-bold text-xl md:text-2xl`}>Our Store</h3>
            <OurStore
              icon={<FaLocationDot size={20} />}
              description={
                <address>
                  Store Address: 809, 8th Floor, Bhandari House-91, Nehru Place,
                  New Delhi 110019
                </address>
              }
            />

            <OurStore
              icon={<IoCall size={20} />}
              description={
                <span className={`flex gap-2`}>
                  <Link href={`tel:919509129835`}>+91 9509129835</Link>
                  <Link href={`tel:919509129835`}>+91 9509129835</Link>
                </span>
              }
            />

            <OurStore
              icon={<IoMail size={20} />}
              description={`flashbyte99@gmail.com`}
            />
          </div>

          <div className={`pt-5 space-y-3`}>
            <h3 className={`font-bold text-xl md:text-2xl`}>Hours</h3>

            <div className={`space-y-2`}>
              <Hours
                row={
                  <>
                    <span>Saturday</span>
                    <span>10:00 PM</span>
                  </>
                }
              />
              <Hours
                row={
                  <>
                    <span>Sunday</span>
                    <span
                      className={`font-bold text-rose-500 dark:text-red-400`}
                    >
                      Closed
                    </span>
                  </>
                }
              />
              <Hours
                row={
                  <>
                    <span>Monday</span>
                    <span>10:00 PM</span>
                  </>
                }
              />
              <Hours
                row={
                  <>
                    <span>Tuesday</span>
                    <span>10:00 PM</span>
                  </>
                }
              />
              <Hours
                row={
                  <>
                    <span>Wednesday</span>
                    <span>10:00 PM</span>
                  </>
                }
              />
              <Hours
                row={
                  <>
                    <span>Thursday</span>
                    <span>10:00 PM</span>
                  </>
                }
              />
              <Hours
                row={
                  <>
                    <span>Friday</span>
                    <span>10:00 PM</span>
                  </>
                }
              />
            </div>
          </div>

          <div className={`pt-5`}>
            <h3 className={`font-bold text-xl md:text-2xl`}>Careers</h3>
          </div>
        </div>
      </section>
      {/* </section> */}
    </Container>
  );
};

export default ContactUs;
