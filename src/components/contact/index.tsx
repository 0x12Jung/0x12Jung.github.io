import React from "react";
import SocialLink from "../common/SocialLink";
import { contactData } from "@/data/contact";

function Contact() {
  return (
    <div className="w-[55%] flex flex-col items-end justify-center">
      <div className="w-3/5">
        <div className="text-9xl font-bebas">Contact</div>
        <p className="text-xl leading-snug mt-10 ms-2 font-varela text-brown-dark">
          {contactData.description[0]}
          <br />
          {contactData.description[1]}
        </p>
        <div className="text-lg mt-5 ms-2 font-varela text-brown-dark">
          Email: {contactData.email}
          <div className="flex gap-1">
            Social Media:
            {contactData.socialLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <SocialLink name={link.name} url={link.url} />
                {index < contactData.socialLinks.length - 1 && "/"}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
