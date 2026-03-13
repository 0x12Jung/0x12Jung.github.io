import Image from "next/image";
import Link from "next/link";

import { generateBlurDataURLs } from "@/helpers";

const AboutContent = async () => {
  const blurUrls = await generateBlurDataURLs(["public/profile.webp"]);

  return (
    <div className="flex mt-4 mb-24">
      <div className="w-[55%]">
        <div className="flex flex-col h-full items-end">
          <div className="w-3/4 2xl:w-3/5">
            {/* Hello */}
            <div className="font-bebasNeue">
              <div className="text-9xl font-bold">Hello</div>
              <div className="text-5xl leading-snug mt-10">
                {"I'm Jung"}
                <br />A software developer
              </div>
            </div>

            {/* Intro */}
            <div className="text-lg leading-normal mt-6 space-y-6 font-varela text-brown-dark">
              <div>
                {"I started my career in mobile development, " +
                  "building Android applications with a strong focus on architecture, " +
                  "implementation, and long-term maintainability."}
              </div>
              <div>
                {"Over time, my work expanded into blockchain engineering. " +
                  "I now focus primarily on EVM smart contracts and blockchain applications, " +
                  "with an emphasis on security, " +
                  "reliability, and practical system design."}
              </div>
            </div>

            {/* Expierence */}
            <div className="mt-12">
              <div className="text-5xl font-bebasNeue">Experience</div>
              <div className="text-lg mt-4 ml-2 space-y-4 font-varela text-brown-dark">
                <div>- {"Designed and implemented smart contracts for DeFi and supply chain finance RWA protocols, with comprehensive test coverage and audit-ready development practices."}</div>
                <div>- {"Completed blockchain security training through DeFiHackLabs, strengthening my understanding of common vulnerabilities, security-focused smart contract design and development workflows."}</div>
                <div>- {"Developed maintainable mobile applications with improved architecture, stronger test coverage, and automated testing workflows."}</div>
                <div>- {"Optimized test pipelines through sharding, reducing execution time and improving development efficiency."}</div>
              </div>
            </div>

            {/* CV & Contact */}
            <Link
              href="/contact"
              className="inline-block px-16 py-4 mt-16 bg-black text-white text-2xl rounded-[36px] hover:px-20 duration-300 font-bebasNeue"
            >
              {"Let's Contact"}
            </Link>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="h-screen flex-grow">
        <div className="w-[700px] h-[800px] 2xl:w-[700px] 2xl:h-[800px] overflow-hidden relative ms-16 mt-12">
          <Image
            src="/profile.webp"
            alt="Profile"
            fill
            style={{ objectFit: "cover" }}
            priority={true}
            placeholder="blur"
            blurDataURL={blurUrls[0].blurDataURL}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
