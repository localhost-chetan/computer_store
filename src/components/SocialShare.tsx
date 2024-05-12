"use client";

import { Tooltip } from "@nextui-org/react";
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
        <span className={`sr-only`}>Facebokk Share</span>
        <FacebookShareButton
          url={process.env.BASE_URL!}
          quote={
            "next-share is a social share buttons for your next React apps."
          }
          hashtag={"#nextshare"}
        >
          <FacebookIcon size={size} round />
        </FacebookShareButton>

        <span className={`sr-only`}>Pinterest Share</span>
        <PinterestShareButton
          url={process.env.BASE_URL!}
          media={
            "next-share is a social share buttons for your next React apps."
          }
        >
          <PinterestIcon size={size} round />
        </PinterestShareButton>

        <span className={`sr-only`}>X(Twitter) Share</span>
        <TwitterShareButton
          url={process.env.BASE_URL!}
          title={
            "next-share is a social share buttons for your next React apps."
          }
        >
          <TwitterIcon size={size} round />
        </TwitterShareButton>

        <span className={`sr-only`}>Whatsapp Share</span>
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
