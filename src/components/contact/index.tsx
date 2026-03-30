import React from "react";
import { socialLinks } from "@/constants";
import SocialLink from "../common/SocialLink";

function Contact() {
  return (
    <div className="w-[55%] flex flex-col items-end justify-center">
      <div className="w-3/5">
        <div className="text-9xl font-bebas">Contact</div>
        <p className="text-xl leading-snug mt-10 ms-2 font-varela text-brown-dark">
          Get in touch with me via social media
          <br />
          or send me an email.
        </p>
        <div className="text-lg mt-5 ms-2 font-varela text-brown-dark">
          Email: 0x12jung@gmail.com
          <div className="flex gap-1">
            Social Media:
            {socialLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <SocialLink name={link.name} url={link.url} />
                {index < socialLinks.length - 1 && "/"}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
