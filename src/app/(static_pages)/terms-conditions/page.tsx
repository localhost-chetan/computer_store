import Container from "@/components/Container";
import Breadcrumb from "@/components/ProductComps/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className={`py-3`}>{children}</p>;
};

const Heading2 = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="mt-5 text-lg font-bold md:text-2xl">{children}</h2>;
};

const TermsConditions = () => {
  return (
    <Container>
      <Breadcrumb>Terms & Conditions</Breadcrumb>

      <div className={`mb-14 max-w-[50ch] text-pretty sm:max-w-[75ch]`}>
        <h1
          className={`mb-5 text-pretty text-xl font-extrabold sm:text-2xl md:text-3xl lg:text-4xl`}
        >
          Terms & Conditions
        </h1>

        <div className={`mb-10 font-semibold text-red-500 dark:text-red-400`}>
          PLEASE READ THIS DOCUMENT CAREFULLY. IT CONTAINS VERY IMPORTANT
          INFORMATION ABOUT THE TERMS AND CONDITIONS GOVERNING YOUR USE OF THE
          SITE. PLEASE DO NOT USE THE SITE OR TRANSACT ON THE SITE IF YOU DO NOT
          AGREE WITH ANY OF THE TERMS AND CONDITIONS PROVIDED BELOW.
        </div>

        <div className={``}>
          <Heading2>Introduction</Heading2>
          {/* <Paragraph> */}
          <Paragraph>
            Welcome to the flashbyte.com service provided by FlashByte. In using
            the flashbyte.com service, of FlashByte you are deemed to have
            accepted the terms and conditions listed below.
          </Paragraph>
          {/* </Paragraph> */}
          <Paragraph>
            All products/services and information displayed on flashbyte.com
            (“Site” or flashbyte.com”) constitute an “invitation to offer”. Your
            order for purchase constitutes your “offer” which shall be subject
            to the terms and conditions as listed below. flashbyte.com reserves
            the right to accept or reject your offer. If you have supplied us
            with your email address, we will notify you by email as soon as
            possible to confirm your order and therefore process the order. Our
            acceptance of your order will take place upon dispatch of the
            product(s) ordered. No act or omission of flashbyte.com prior to the
            actual dispatch of the product (s) ordered will constitute
            acceptance of your offer.
          </Paragraph>
        </div>

        <div>
          <Heading2>Terms of Use</Heading2>
          <Paragraph>
            Use of the Site is available only to persons who can form legally
            binding contracts under applicable law. Persons who are “incompetent
            to contract” within the meaning of the Indian Contract Act, 1872
            including un-discharged insolvents etc. are not eligible to use the
            Site. If you are a minor i.e. under the age of 18 years but at least
            13 years of age you may use this Site only under the supervision of
            a parent or legal guardian who agrees to be bound by these Terms of
            Use. If your age is below that of 18 years your parents or legal
            guardians can transact on behalf of you if they are registered
            users. You are prohibited from purchasing any material which is for
            adult consumption the sale or purchase of which to/by minors are
            strictly prohibited. flashbyte.com reserves the right to terminate
            your membership and refuse to provide you with access to the Site if
            flashbyte.com discovers that you are under the age of 18 years. The
            Site is not available to persons whose membership has been suspended
            or terminated by flashbyte.com for any reason whatsoever. If you are
            registering as a business entity, you represent that you have the
            authority to bind the entity to this User Agreement. Unless
            otherwise specified, the materials on this website are directed
            solely at those who access this website from India. flashbyte.com
            makes no representation that any products or services referred to in
            the materials on this website are appropriate for use, or available
            outside India. Those who choose to access this Site from outside
            India are responsible for compliance with local laws if and to the
            extent local laws are applicable. flashbyte.com will deliver the
            products only within India and will not be liable for any claims
            relating to any products ordered from outside India.
          </Paragraph>
          <Paragraph>
            Except where additional terms and conditions are provided which are
            product specific, these terms and conditions supersede all previous
            representations, understandings, or agreements and shall prevail
            notwithstanding any variance with any other terms of any order
            submitted. By using the services of flashbyte.com you agree to be
            bound by the Terms and Conditions.
          </Paragraph>
        </div>

        <div>
          <Heading2>Account and Registration Obligations</Heading2>
          <Paragraph>
            “Your Information” is defined as any information you provide to us
            in the registration, buying or listing process, in the feedback area
            or through any e-mail feature. We will protect Your Information in
            accordance with our Privacy Policy. If you use the Site, you are
            responsible for maintaining the confidentiality of your account and
            Password and for restricting access to your computer, and you agree
            to accept responsibility for all activities that occur under your
            account or Password. flashbyte.com shall not be liable to any person
            for any loss or damage which may arise as a result of any failure by
            you to protect your password or account. If you know or suspect that
            someone else knows your password you should notify us by contacting
            us immediately through the address provided below. If flashbyte.com
            has reason to believe that there is likely to be a breach of
            security or misuse of the flashbyte.com Site, we may require you to
            change your password or we may suspend your account without any
            liability to flashbyte.com.
          </Paragraph>
        </div>

        <div>
          <Heading2>You also agree to:</Heading2>
          <Paragraph>
            Provide true, accurate, current and complete information about
            yourself as prompted by flashbyte’s registration form (such
            information being the “Registration Data”) Maintain and promptly
            update the Registration Data to keep it true, accurate, current and
            complete. If you provide any information that is untrue, inaccurate,
            incomplete, or not current or if flashbyte.com has reasonable
            grounds to suspect that such information is untrue, inaccurate, not
            current or not in accordance with the User Agreement, flashbyte.com
            has the right to indefinitely suspend or terminate your membership
            and refuse to provide you with access to the Site.
          </Paragraph>
        </div>

        <div>
          <Heading2>Pricing Information</Heading2>
          <Paragraph>
            While flashbyte.com strives to provide accurate product and pricing
            information, pricing or typographical errors may occur.
            flashbyte.com cannot confirm the price of a product until after you
            order. In the event that a product is listed at an incorrect price
            or with incorrect information due to an error in pricing or product
            information, flashbyte.com shall have the right, at our sole
            discretion, to refuse or cancel any orders placed for that product,
            unless the product has already been dispatched. In the event that an
            item is mis-priced, flashbyte.com may, at its discretion, either
            contact you for instructions or cancel your order and notify you of
            such cancellation. Unless the product ordered by you has been
            dispatched, your offer will not be deemed accepted and flashbyte.com
            will have the right to modify the price of the product and contact
            you for further instructions using the e-mail address or contact
            number provided by you during the time of registration, or cancel
            the order and notify you of such cancellation and initiate refund.
          </Paragraph>

          <Paragraph>
            We strive to provide you with the lowest prices possible on
            flashbyte.com as well as in our stores under the corporate entity –
            flashbyte. However, sometimes a price online does not match the
            price in a store. In our effort to be the lowest price provider in
            your particular geographic region, store pricing will sometimes
            differ from online prices. Prices and availability are subject to
            change without notice.
          </Paragraph>

          <Paragraph>
            Please note that there may be certain orders that we are unable to
            accept and must cancel. We reserve the right, at our sole
            discretion, to refuse or cancel any order for any reason. Some
            situations that may result in your order being canceled include
            limitations on quantities available for purchase, inaccuracies or
            errors in product or pricing information, or problems identified by
            our credit and fraud avoidance department. We may also require
            additional verifications or information before accepting any order.
            We will contact you if all or any portion of your order is canceled
            or if additional information is required to accept your order. If
            your order is cancelled after your account has been charged, the
            said amount will be reversed back in your account.
          </Paragraph>

          <Paragraph>
            Flashbyte has the right to change the Product prices without any
            prior notice to the customer. The selling price of the product may
            be higher in some cases than MRP due to the sort supply of the
            product, in this case, flashbyte is not liable for any penalty.
          </Paragraph>
        </div>

        <div>
          <Heading2>Out of Stock</Heading2>

          <Paragraph>
            If product is not in stock, flashbyte have every right to cancel the
            order without intimation to customer, email should be sent for
            cancelled order. In the event of Out Of Stock, full amount will be
            refunded to customer.
          </Paragraph>
        </div>

        <div>
          <Heading2>Product Information images and Specification</Heading2>

          <Paragraph>
            All specifications of products and its images mentioned on our
            website is just to identify the product, it may be vary time to time
            by its manufacturer, in that case our company is not liable for any
            errors or any technical thing which does not match with the product
            received by customer. Please refer to manufacturer website for the
            actual details like product images and specifications.
          </Paragraph>
        </div>

        <div>
          <Heading2>Cancellations by the customer</Heading2>

          <ul className={`list-inside list-disc space-y-3 text-pretty py-3`}>
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
        </div>

        <div>
          <Heading2>Sale Terms</Heading2>

          <Paragraph>
            Goods once sold will not be taken back or exchanged. Once invoice
            made cannot be modified or cancelled for any reasons thereof.
          </Paragraph>
          <Paragraph>
            The item is tested for physical damage at the point of sale and the
            company is not liable for the physical damage of item any more. It
            is also the duty of the buyer to immediately check the physical
            condition of the purchased goods. In case of online purchase the
            buyer has to make an uncut unboxing video and in case damage is
            visible in video then flashbyte will replace the product or refund
            after collecting back the damaged goods. In case of store purchase
            the buyer needs to check thoroughly up to their satisfaction before
            accepting and leaving the store.
          </Paragraph>
        </div>

        <div>
          <Heading2>Cancel/Return Policy:</Heading2>

          <ul className={`list-inside list-disc space-y-3 text-pretty py-3`}>
            <li className={``}>
              flashbyte.com Return Policy is implied only where the product have
              defect or damage. We do not accept returns in case of wrong
              selection made by customer.
            </li>
            <li className={``}>
              Customers may be asked to send the product back, in case the
              reverse pick up cannot be honored due to operational restrictions.
            </li>
            <li className={``}>
              No Cancellation or Return on wrong selection post delivery. All
              customers are requested to check specifications/configuration
              requirements.
            </li>
            <li className={``}>
              Customer can contact respective service center or contact us for
              warranty support.
            </li>
            <li className={``}>
              In case of order cancelled by customer after making payment or
              order is got confirmed, then there will be 10% cancellation
              charges will be deducted.
            </li>
            <li className={``}>
              Refunds usually takes 7-10 working days to reflect in your
              account.
            </li>
            <li className={``}>
              For domestic buyers, orders are shipped through registered
              domestic reputed courier companies and /or speed post only. Orders
              are shipped within 3-15 working days or as per the delivery date
              agreed at the time of order confirmation and delivering of the
              shipment subject to Courier Company/post office norms. flashbyte
              is not liable for any delay in delivery by the courier company /
              postal authorities and only guarantees to hand over the
              consignment to the courier company or postal authorities within
              3-15 working days from the date of the order and payment or as per
              the delivery date agreed at the time of order confirmation.
            </li>
          </ul>
        </div>

        <div>
          <Heading2>RMA Process for Online Customers:</Heading2>

          <Paragraph>
            GIn case customer have received the product as faulty/DOA, customer
            should inform us within 7 Days of time after receipt of the product.
            If we will receive the intimation for faulty/DOA product in time, if
            possible we will arrange for pick up and replacement. In case the
            product was arranged on special demand then in that case instant
            replacement is not done, we will pick up from customer and get it
            replaced by service centre and ship it back to customer, this
            process can take time upto 15-20 days. In other case if customer is
            not able to inform us about faulty/DOA product in time, in that case
            customer has to bear To and From charges for replacing the material.
            Customer can also go to nearby service centre for particular vendor.
          </Paragraph>
        </div>

        <div>
          <Heading2>Third Party Products</Heading2>

          <Paragraph>
            <span className={`font-semibold text-red-500 dark:text-red-400`}>
              {" "}
              PLEASE NOTE:{" "}
            </span>
            Along with the other terms and conditions these additional terms are
            applicable in case you have bought any products not manufactured by
            flashbyte.com . In other words these additional terms and conditions
            are applicable in case you buy products sold on flashbyte.com by
            third party vendors.
          </Paragraph>

          <Paragraph>
            <span className={`font-semibold text-orange-400`}>
              Features, Price and Specifications are subject to change without
              notice.
            </span>
          </Paragraph>

          <Paragraph>
            You understand and agree that there may be certain products, which
            will be sold on the Site by third party vendors (“Vendors”).
            flashbyte.com may not be able to control the transactions or the
            acts and omissions of the Vendors in such transactions. When you buy
            such products from Vendors on the Site the following additional
            terms and conditions will become applicable:
          </Paragraph>

          <Paragraph>
            flashbyte.com is not responsible for any non-performance or breach
            of any contract entered into between you and the Vendor.
            flashbyte.com cannot and does not guarantee that the Vendors will
            perform any transaction concluded on the Site.
          </Paragraph>

          <Paragraph>
            flashbyte.com does not make any representation or warranty as to the
            attributes (such as quality, worth, marketability etc.) of the items
            or services proposed to be sold on the Site by the Vendor. In
            particular, flashbyte.com does not implicitly or explicitly support
            or endorse the sale of any items or services on the Site.
            flashbyte.com accepts no liability for any errors or omissions,
            whether on behalf of itself or third parties.
          </Paragraph>

          <Paragraph>
            flashbyte has all the rights to cancel the order if prices has been
            increased by vendor without notification to customer.
          </Paragraph>

          <Paragraph>
            All other terms and conditions of this User Agreement are applicable
            to such transactions.
          </Paragraph>
        </div>

        <div>
          <Heading2>Shipping:</Heading2>

          <ul className={`list-inside list-disc space-y-3 text-pretty py-3`}>
            <li className={``}>
              Once a customer places an order the flashbyte team ships the
              products within 3-7 days. It depends on the order, the PC Builds
              are dispatched usually within 3-7 Days and single components
              orders are dispatched fast within 1-3 days.
            </li>
            <li className={``}>
              Sometimes we need to arrange components in case the components are
              out of stock, in that case the customer needs to wait. Also in
              case of Out Of Stock flashbyte can cancel the order.
            </li>
            <li className={``}>
              In case of pre-paid orders the customer has to first complete the
              full payment in advance before shipping.
            </li>
            <li className={``}>
              We have shipping courier partners like Delhivery, Bluedart,
              Trackon, etc, and they deliver the orders depending on the order
              delivery location.
            </li>
          </ul>
        </div>

        <div>
          <Heading2>Delivery:</Heading2>

          <Paragraph>
            Service delivery confirmation will be sent to your registered email
            address or whatsapp.
            <br /> For any issues with our logistics services, please contact
            our helpdesk at 7011805001
          </Paragraph>
        </div>

        <div>
          <Heading2>Credit Card Details:</Heading2>

          <Paragraph>
            You agree, understand and confirm that the credit card details
            provided by you for availing of services on flashbyte.com will be
            correct and accurate and you shall not use the credit card which is
            not lawfully owned by you. I.e. in a credit card transaction, you
            must use your own credit card. You further agree and undertake to
            provide the correct and valid credit card details to flashbyte.com.
            Further the said information will not be utilized and shared by
            flashbyte.com with any of the third parties unless required by law,
            regulation or court order. flashbyte.com will not be liable for any
            credit card fraud. The liability for use of a card fraudulently will
            be on you and the onus to ‘prove otherwise’ shall be exclusively on
            you.
          </Paragraph>

          <Paragraph>
            “We as a merchant shall be under no liability whatsoever in respect
            of any loss or damage arising directly or indirectly out of the
            decline of authorization for any Transaction, on Account of the
            Cardholder having exceeded the preset limit mutually agreed by us
            with our acquiring bank from time to time”
          </Paragraph>
        </div>

        <div>
          <Heading2>Fraudulent /Declined Transactions:</Heading2>

          <Paragraph>
            flashbyte.com reserves the right to recover the cost of goods,
            collection charges and lawyers fees from persons using the Site
            fraudulently. flashbyte.com reserves the right to initiate legal
            proceedings against such persons for fraudulent use of the Site and
            any other unlawful acts or acts or omissions in breach of these
            terms and conditions.
          </Paragraph>
        </div>

        <div>
          <Heading2>You Agree and Confirm</Heading2>

          <Paragraph>
            That in the event that a non-delivery occurs on account of a mistake
            by you (i.e. wrong name or address or any other wrong information)
            any extra cost incurred by flashbyte.com for redelivery shall be
            claimed from you.
            <br /> That you will use the services provided by flashbyte.com, its
            affiliates, consultants and contracted companies, for lawful
            purposes only and comply with all applicable laws and regulations
            while using the Site and transacting on the Site.
            <br /> You will provide authentic and true information in all
            instances where such information is requested of you. flashbyte.com
            reserves the right to confirm and validate the information and other
            details provided by you at any point of time. If upon confirmation
            your details are found not to be true (wholly or partly),
            flashbyte.com has the right in its sole discretion to reject the
            registration and debar you from using the Services of flashbyte.com
            and / or other affiliated websites without prior intimation
            whatsoever.
            <br /> That you are accessing the services available on this Site
            and transacting at your sole risk and are using your best and
            prudent judgment before entering into any transaction through this
            Site. That the address at which delivery of the product ordered by
            you is to be made will be correct and proper in all respects.
            <br /> That before placing an order you will check the product
            description carefully. By placing an order for a product you agree
            to be bound by the conditions of sale included in the item’s
            description.
          </Paragraph>
        </div>

        <div>
          <Heading2>
            You may not use the Site for any of the following purposes:
          </Heading2>

          <Paragraph>
            Disseminating any unlawful, harassing, libelous, abusive,
            threatening, harmful, vulgar, obscene, or otherwise objectionable
            material. Transmitting material that encourages conduct that
            constitutes a criminal offence, results in civil liability or
            otherwise breaches any relevant laws, regulations or code of
            practice. Gaining unauthorised access to other computer systems.
            Interfering with any other person’s use or enjoyment of the Site.
            Breaching any applicable laws; Interfering or disrupting networks or
            web sites connected to the Site. Making, transmitting or storing
            electronic copies of materials protected by copyright without the
            permission of the owner.
          </Paragraph>
        </div>

        <div>
          <Heading2>Colors</Heading2>

          <Paragraph>
            We have made every effort to display the colors of our products that
            appear on the Site as accurately as possible. However, as the actual
            colors you see will depend on your monitor, we cannot guarantee that
            your monitor’s display of any color will be accurate.
          </Paragraph>
        </div>

        <div>
          <Heading2>Modification of Terms and conditions of Service</Heading2>

          <Paragraph>
            flashbyte.com may at any time modify the User Agreement without any
            prior notification to you. Subsequent to any modification of the
            User Agreement, we will inform you of the modifications in the User
            Agreement via e-mail at the address provided by you while
            registering on flashbyte.com. You can access the latest version of
            the User Agreement at any given time on flashbyte.com. You should
            regularly review the User Agreement on flashbyte.com. In the event
            the modified User Agreement is not acceptable to you, you should
            discontinue using the service. However, if you continue to use the
            service you shall be deemed to have agreed to accept and abide by
            the modified User Agreement.
          </Paragraph>
        </div>

        <div>
          <Heading2>Copyright & Trademark</Heading2>

          <Paragraph>
            flashbyte.com and its suppliers and licensors expressly reserve all
            intellectual property rights in all text, programs, products,
            processes, technology, content and other materials, which appear on
            this Site. Access to this Site does not confer and shall not be
            considered as conferring upon anyone any license under any of
            flashbyte.com or any third party’s intellectual property rights. All
            rights, including copyright, in this website are owned by or
            licensed to flashbyte.com. Any use of this website or its contents,
            including copying or storing it or them in whole or part, other than
            for your own personal, non-commercial use is prohibited without the
            permission of flashbyte.com. You may not modify, distribute or
            re-post anything on this website for any purpose.
          </Paragraph>

          <Paragraph>
            The flashbyte.com names and logos and all related product and
            service names, design marks and slogans are the trademarks or
            service marks of flashbyte. All other marks are the property of
            their respective companies. No trademark or service mark license is
            granted in connection with the materials contained on this Site.
            Access to this Site does not authorize anyone to use any name, logo
            or mark in any manner.
          </Paragraph>
          <Paragraph>
            References on this Site to any names, marks, products or services of
            third parties or hypertext links to third party sites or information
            are provided solely as a convenience to you and do not in any way
            constitute or imply flashbyte.com endorsement, sponsorship or
            recommendation of the third party, information, product or service.
          </Paragraph>
          <Paragraph>
            flashbyte.com is not responsible for the content of any third party
            sites and does not make any representations regarding the content or
            accuracy of material on such sites. If you decide to link to any
            such third party websites, you do so entirely at your own risk.
          </Paragraph>
          <Paragraph>
            All materials, including images, text, illustrations, designs,
            icons, photographs, programs, music clips or downloads, video clips
            and written and other materials that are part of this Site
            (collectively, the “Contents”) are intended solely for personal,
            non-commercial use. You may download or copy the Contents and other
            downloadable materials displayed on the Site for your personal use
            only. No right, title or interest in any downloaded materials or
            software is transferred to you as a result of any such downloading
            or copying. You may not reproduce (except as noted above), publish,
            transmit, distribute, display, modify, create derivative works from,
            sell or participate in any sale of or exploit in any way, in whole
            or in part, any of the Contents, the Site or any related software.
            All software used on this Site is the property of flashbyte.com or
            its suppliers and protected by Indian and international copyright
            laws. The Contents and software on this Site may be used only as a
            shopping resource. Any other use, including the reproduction,
            modification, distribution, transmission, republication, display, or
            performance, of the Contents on this Site is strictly prohibited.
            Unless otherwise noted, all Contents are copyrights, trademarks,
            trade dress and/or other intellectual property owned, controlled or
            licensed by flashbyte.com ,one of its affiliates or by third parties
            who have licensed their materials to flashbyte.com and are protected
            by Indian and international copyright laws. The compilation (meaning
            the collection, arrangement, and assembly) of all Contents on this
            Site is the exclusive property of flashbyte.com and is also
            protected by Indian and international copyright laws.
          </Paragraph>
        </div>

        <div>
          <Heading2>Objectionable Material</Heading2>

          <Paragraph>
            You understand that by using this Site or any services provided on
            the Site, you may encounter Content that may be deemed by some to be
            offensive, indecent, or objectionable, which Content may or may not
            be identified as such. You agree to use the Site and any service at
            your sole risk and that to the fullest extent permitted under
            applicable law, flashbyte.com and its affiliates shall have no
            liability to you for Content that may be deemed offensive, indecent,
            or objectionable to you.
          </Paragraph>
        </div>

        <div>
          <Heading2>Limitation of Liability and Disclaimers</Heading2>

          <Paragraph>
            The Site is provided without any warranties or guarantees and in an
            “As Is” condition. You must bear the risks associated with the use
            of the Site.
          </Paragraph>

          <Paragraph>
            The Site provides content from other Internet sites or resources and
            while flashbyte.com tries to ensure that material included on the
            Site is correct, reputable and of high quality, it cannot accept
            responsibility if this is not the case. flashbyte.com will not be
            responsible for any errors or omissions or for the results obtained
            from the use of such information or for any technical problems you
            may experience with the Site.
          </Paragraph>

          <Paragraph>
            This disclaimer does not apply to any product warranty offered by
            the manufacturer of the product as specified in the product
            specifications. This disclaimer constitutes an essential part of
            this User Agreement.
          </Paragraph>

          <Paragraph>
            To the fullest extent permitted under applicable law, flashbyte.com
            or its suppliers shall not be liable for any indirect, incidental,
            special, incidental, consequential or exemplary damages, including
            but not limited to, damages for loss of profits, goodwill, use, data
            or other intangible losses arising out of or in connection with the
            Site, its services or this User Agreement.
          </Paragraph>

          <Paragraph>
            Without prejudice to the generality of the section above, the total
            liability of flashbyte.com to you for all liabilities arising out of
            this User Agreement be it in tort or contract is limited to the
            value of the product ordered by you.
          </Paragraph>

          <Paragraph>
            flashbyte.com, its associates and technology partners make no
            representations or warranties about the accuracy, reliability,
            completeness, correctness and/or timeliness of any content,
            information, software, text, graphics, links or communications
            provided on or through the use of the Site or that the operation of
            the Site will be error free and/or uninterrupted. Consequently,
            flashbyte.com assumes no liability whatsoever for any monetary or
            other damage suffered by you on account of the delay, failure,
            interruption, or corruption of any data or other information
            transmitted in connection with use of the Site; and/or any
            interruption or errors in the operation of the Site.
          </Paragraph>
        </div>

        <div>
          <Heading2>Site Security</Heading2>

          <Paragraph>
            You are prohibited from violating or attempting to violate the
            security of the Site, including, without limitation, (a) accessing
            data not intended for you or logging onto a server or an account
            which you are not authorized to access; (b) attempting to probe,
            scan or test the vulnerability of a system or network or to breach
            security or authentication measures without proper authorization;
            (c) attempting to interfere with service to any other user, host or
            network, including, without limitation, via means of submitting a
            virus to the Site, overloading, “flooding,” “spamming,”
            “mailbombing” or “crashing;” (d) sending unsolicited email,
            including promotions and/or advertising of products or services; or
            (e) forging any TCP/IP packet header or any part of the header
            information in any email or newsgroup posting. Violations of system
            or network security may result in civil or criminal liability.
            flashbyte.com will investigate occurrences that may involve such
            violations and may involve, and cooperate with, law enforcement
            authorities in prosecuting users who are involved in such
            violations. You agree not to use any device, software or routine to
            interfere or attempt to interfere with the proper working of this
            Site or any activity being conducted on this Site. You agree,
            further, not to use or attempt to use any engine, software, tool,
            agent or other device or mechanism (including without limitation
            browsers, spiders, robots, avatars or intelligent agents) to
            navigate or search this Site other than the search engine and search
            agents available from flashbyte.com on this Site and other than
            generally available third party web browsers (e.g., Netscape
            Navigator, Microsoft Explorer).
          </Paragraph>

          <Paragraph>
            The Website Visitor/Customer acknowledges and unequivocally accepts
            that flashbyte at their sole discretion may monitor the IP Address &
            other relevant information of each login session of the customer,
            and the same may be subsequently used for any investigation or in
            evidence. We may also use cookies to determine the authenticity of
            orders and for our internal risk analysis. The customer, by virtue
            of mere signing-up for and/or logging into flashbyte’s website for
            purchases indicates unequivocal acceptance of these conditions.
          </Paragraph>
        </div>

        <div>
          <Heading2>Entire Agreement</Heading2>

          <Paragraph>
            If any part of this agreement is determined to be invalid or
            unenforceable pursuant to applicable law including, but not limited
            to, the warranty disclaimers and liability limitations set forth
            above, then the invalid or unenforceable provision will be deemed to
            be superseded by a valid, enforceable provision that most closely
            matches the intent of the original provision and the remainder of
            the agreement shall continue in effect. Unless otherwise specified
            herein, this agreement constitutes the entire agreement between you
            and flashbyte.com with respect to the flashbyte.com sites/services
            and it supersedes all prior or contemporaneous communications and
            proposals, whether electronic, oral or written, between you and
            flashbyte.com with respect to the flashbyte.com sites/services.
            flashbyte.com’s failure to act with respect to a breach by you or
            others does not waive its right to act with respect to subsequent or
            similar breaches.
          </Paragraph>
        </div>
      </div>
    </Container>
  );
};

export default TermsConditions;
