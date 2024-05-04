import { FaSquareXTwitter, FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

const SocialShare = () => {
  const size = 25;
  return (
    <div className={`flex gap-x-2`}>
      <p>Share: </p>
      <span className={`flex gap-x-2`}>
        <Link href={``}>
          <FaSquareXTwitter size={size} />
        </Link>

        <Link href={``}>
          <FaFacebook size={size} />
        </Link>

        <Link href={``}>
          <RiInstagramFill size={size} />
        </Link>

        <Link href={``}>
          <FaPinterest size={size} />
        </Link>

        <Link href={``}>
          <IoLogoWhatsapp size={size} />
        </Link>
      </span>
    </div>
  );
};

export default SocialShare;
