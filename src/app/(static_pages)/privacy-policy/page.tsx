import Container from "@/components/Container";
import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className={`py-3`}>{children}</p>;
};

const PrivaryPolicy = () => {
  return (
    <Container>
      <Breadcrumb>Privacy Policy</Breadcrumb>

      <div className={`max-w-[50ch] text-pretty sm:max-w-[75ch]`}>
        <h1
          className={`mb-5 text-pretty text-xl font-extrabold sm:text-2xl md:text-3xl lg:text-4xl`}
        >
          Privacy Policy
        </h1>

        <Paragraph>
          FlashByte respects your privacy. This Privacy Policy provides
          succinctly the manner your data is collected and used by
          flashbyte.com. You are advised to please read this Privacy Policy
          carefully. By accessing the services provided by flashbyte.com you
          agree to the collection and use of your data by flashbyte.com and
          certain authorized third party service providers in the manner
          provided in this Privacy Policy. If you do not agree with this Privacy
          Policy, please do not use the website: flashbyte.com (“Site”)
        </Paragraph>

        <Paragraph>
          This Privacy Policy describes the information, as part of the normal
          operation of our services; we collect from you and what may happen to
          that information. Although this policy may seem long, we have prepared
          a detailed policy because we believe you should know as much as
          possible about flashbyte.com practices so that you can make informed
          decisions.
        </Paragraph>

        <Paragraph>
          By accepting the Privacy Policy during registration, you expressly
          consent to our use and disclosure of your personal information in
          accordance with this Privacy Policy. This Privacy Policy is
          incorporated into and subject to the terms of the User Agreement.
        </Paragraph>

        <ul className={`list-inside list-disc space-y-3 text-pretty py-3`}>
          <li className={``}>
            At flashbyte.com, we are extremely proud of our commitment to
            protect your privacy. We value your trust in us. We will work hard
            to earn your confidence so that you can enthusiastically use our
            services and recommend us to friends and family. Please read the
            following policy to understand how your personal information will be
            treated as you make full use of our Site. We want you to :
            <ul className={`list-inside list-disc space-y-3 text-pretty py-3`}>
              <li className={``}>feel comfortable using our Site.</li>
              <li className={``}>feel secure submitting information to us.</li>
              <li className={``}>
                contact us with your questions or concerns about privacy on this
                Site.
              </li>
              <li className={``}>
                know that by using our Site you are consenting to the collection
                of certain data.
              </li>
            </ul>
          </li>
          <li className={``}>
            flashbyte.com promises that we will not sell or rent your personal
            information to third parties without your consent. We and/or certain
            authorized third party service providers will use the personal
            information provided by you to provide you with the services, which
            are offered on flashbyte.com. From time to time we may reveal
            general statistical information about our Site and visitors, such as
            number of visitors, number and type of goods and services purchased,
            etc. Your trust and confidence are our highest priority.
          </li>

          <li>
            We collect information about you for 2 reasons: Firstly, to process
            your order and second, to provide you with the best possible
            service.
          </li>

          <li>
            We will give you the chance to refuse any marketing email from us.
          </li>

          <li>
            To protect against the loss, misuse and alteration of the
            information under our control, we have in place appropriate
            physical, electronic and managerial procedures. For example, our
            servers are accessible only to authorized personnel and that your
            information is shared with respective personnel on need to know
            basis to complete the transaction and to provide the services
            requested by you.
          </li>

          <li>
            Although we will endeavor to safeguard the confidentiality of your
            personally identifiable information, transmissions made by means of
            the Internet cannot be made absolutely secure. By using this Site,
            you agree that we will have no liability for disclosure of your
            information due to errors in transmission or unauthorized acts of
            third parties.
          </li>

          <li>
            The type of information we will collect about you includes:
            <ul className={`list-inside list-disc space-y-3 text-pretty py-3`}>
              <li className={``}>Your Name</li>
              <li className={``}>Address</li>
              <li className={``}>Phone Number</li>
              <li className={``}>Email Address</li>
            </ul>
          </li>

          <li>
            The information we hold will be accurate and up to date. You can
            check the information that we hold about you by emailing us. If you
            find any inaccuracies we will delete or correct it promptly.
          </li>

          <li>
            The personal information which we hold will be held securely in
            accordance with our internal security policy and the law.
          </li>

          <li>
            We may use technology to track the patterns of behavior of visitors
            to our site. This can include using a “cookie” which would be stored
            on your browser. You can usually modify your browser to prevent this
            happening. The information collected in this way can be used to
            identify you unless you modify your browser settings.
          </li>

          <li>
            If you have any further questions/comments about privacy, you should
            contact us.
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default PrivaryPolicy;
