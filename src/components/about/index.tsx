import { Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.webp";

function About() {
  return (
    <div className="flex mt-4 mb-24">
      <div className="w-[55%]">
        <div className="flex flex-col h-full items-end">
          <div className="w-3/4 2xl:w-3/5">
            <div className="font-bebas">
              <div className="text-9xl font-bold">Hello</div>
              <div className="text-5xl leading-snug mt-10">
                I'm Jung
                <br />A software engineer
              </div>
            </div>

            <div className="mt-6 space-y-6 font-varela text-brown-dark text-lg leading-normal">
              <p>
                Over the past two years, I've been focused on building on-chain
                financial infrastructure, from lending protocols and yield
                vaults to tokenization systems that connect traditional finance
                with blockchain.
              </p>
              <p>
                With five years of experience building Android applications for
                e-commerce and sports gaming platforms, I bring a strong foundation in
                writing reliable, production-grade software to everything I
                build.
              </p>
            </div>

            <div className="mt-12">
              <div className="text-5xl font-bebas">Experience</div>
              <ul className="mt-4 ml-2 space-y-4 font-varela text-brown-dark text-lg list-disc list-inside">
                <li>
                  Built a supply chain lending protocol on EVM, connecting
                  liquidity providers with on-chain trade receivables through
                  trustless loan contracts
                </li>
                <li>
                  Designed yield vaults for stablecoins with a modular
                  strategy system, allowing new yield sources to be added
                  without changing core logic
                </li>
                <li>
                  Developed tokenization infrastructure for real-world assets,
                  covering the full lifecycle from issuance to redemption across
                  multiple blockchain environments
                </li>
                <li>
                  Shipped and maintained high-traffic Android applications,
                  including e-commerce platforms and a sports gaming app
                </li>
              </ul>
            </div>

            <Link
              to="/contact"
              className="inline-block px-16 py-4 mt-16 bg-black text-white text-2xl rounded-[36px] hover:px-20 duration-300 font-bebas"
            >
              Let's Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[700px] h-[800px] overflow-hidden relative ms-16 mt-12 shrink-0 rounded-l-md 2xl:rounded-md">
        <img
          src={portrait}
          alt="Profile"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </div>
    </div>
  );
}

export default About;
