import React from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Github,
  Linkedin,
  Globe
} from "lucide-react";
import Link from "next/link";

function Socials({ socials }) {
  const renderSocialIcons = socials => {
    const iconsToDisplay = [];

    if (socials.instagram) {
      iconsToDisplay.push(
        <Link href={socials.instagram} target="_blank">
          <Instagram
            size={20}
            key="instagram"
            className=" transition-all duration-200 ease-linear hover:text-[#f1a054]"
          />
        </Link>
      );
    }

    if (socials.twitter) {
      iconsToDisplay.push(
        <Link href={socials.twitter} target="_blank">
          <Twitter
            size={20}
            key="twitter"
            className=" transition-all duration-200 ease-linear hover:text-[#3aaae2]"
          />
        </Link>
      );
    }

    if (socials.facebook) {
      iconsToDisplay.push(
        <Link href={socials.facebook} target="_blank">
          <Facebook
            size={20}
            key="facebook"
            className=" transition-all duration-200 ease-linear hover:text-[#237197]"
          />
        </Link>
      );
    }

    if (socials.github) {
      iconsToDisplay.push(
        <Link href={socials.github} target="_blank">
          <Github
            size={20}
            key="github"
            className=" transition-all duration-200 ease-linear hover:text-[#171515]"
          />
        </Link>
      );
    }

    if (socials.linkedin) {
      iconsToDisplay.push(
        <Link href={socials.linkedin} target="_blank">
          <Linkedin
            size={20}
            key="linkedin"
            className=" transition-all duration-200 ease-linear hover:text-[#043a55]"
          />
        </Link>
      );
    }

    if (socials.website) {
      iconsToDisplay.push(
        <Link href={socials.website} target="_blank">
          <Globe
            size={20}
            key="website"
            className=" transition-all duration-200 ease-linear hover:text-[#a3c0ce]"
          />
        </Link>
      );
    }

    return iconsToDisplay.length > 0 ? iconsToDisplay : null;
  };

  const socialIcons = renderSocialIcons(socials);

  return <div className="flex space-x-3">{socialIcons}</div>;
}

export default Socials;
