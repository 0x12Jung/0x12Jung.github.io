const ContactContent = () => {
  const socialLinks = [
    { name: "Linkedin", url: "https://www.linkedin.com/in/jung0x12/" },
    { name: "Github", url: "https://github.com/0x12Jung" },
    { name: "X", url: "https://x.com/Tuanimoo" },
  ];

  const SocialLink = ({ name, url }: { name: string; url: string }) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline mx-2"
    >
      {name}
    </a>
  );

  return (
    <div className="flex flex-grow mt-4">
      <div className="w-[55%]">
        <div className="flex flex-col h-full items-end justify-center">
          <div className="w-3/5 2xl:w-3/5">
            <div className="text-9xl font-bebasNeue">Contact</div>
            <div className="text-xl leading-snug mt-10 ms-2 font-varela text-brown-dark">
              {"Get in touch with me via social media"}
              <br /> {"or send me an email."}
            </div>
            <div className="text-lg mt-5 ms-2 font-varela text-brown-dark">
              <div>
                {"Email: jwork1994212@gmail.com"}
                <br />
                {"ENS: Jung0x12.eth"}
              </div>
              <div>
                {"Social Media:"}
                {socialLinks.map((link, index) => (
                  <span key={index}>
                    <SocialLink name={link.name} url={link.url} />
                    {index < socialLinks.length - 1 && "/"}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
