"use client";

import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";

const SocialShare = () => {
  const size = 30;

  return (
    <div className={`flex items-center gap-x-2`}>
      <p>Share: </p>

      <span className={`flex gap-x-2`}>
        <FacebookShareButton
          url={process.env.BASE_URL!}
          quote={
            "next-share is a social share buttons for your next React apps."
          }
          hashtag={"#nextshare"}
        >
          <FacebookIcon size={size} round />
        </FacebookShareButton>

        <PinterestShareButton
          url={process.env.BASE_URL!}
          media={
            "next-share is a social share buttons for your next React apps."
          }
        >
          <PinterestIcon size={size} round />
        </PinterestShareButton>

        <TwitterShareButton
          url={process.env.BASE_URL!}
          title={
            "next-share is a social share buttons for your next React apps."
          }
        >
          <TwitterIcon size={size} round />
        </TwitterShareButton>

        <WhatsappShareButton
          url={process.env.BASE_URL!}
          title={
            "next-share is a social share buttons for your next React apps."
          }
          separator=":: "
        >
          <WhatsappIcon size={size} round />
        </WhatsappShareButton>
      </span>
    </div>
  );
};

export default SocialShare;
