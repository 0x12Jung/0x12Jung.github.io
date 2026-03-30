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
                <br />A software developer
              </div>
            </div>

            <div className="mt-6 space-y-6 font-varela text-brown-dark text-lg leading-normal">
              <p>
                I started my career in mobile development, building Android
                applications with a strong focus on architecture,
                implementation, and long-term maintainability.
              </p>
              <p>
                Over time, my work expanded into blockchain engineering. I now
                focus primarily on EVM smart contracts and blockchain
                applications, with an emphasis on security, reliability, and
                practical system design.
              </p>
            </div>

            <div className="mt-12">
              <div className="text-5xl font-bebas">Experience</div>
              <ul className="mt-4 ml-2 space-y-4 font-varela text-brown-dark text-lg list-disc list-inside">
                <li>
                  Designed and implemented smart contracts for DeFi and supply
                  chain finance RWA protocols, with comprehensive test coverage
                  and audit-ready development practices.
                </li>
                <li>
                  Completed blockchain security training through DeFiHackLabs,
                  strengthening my understanding of common vulnerabilities,
                  security-focused smart contract design and development
                  workflows.
                </li>
                <li>
                  Developed maintainable mobile applications with improved
                  architecture, stronger test coverage, and automated testing
                  workflows.
                </li>
                <li>
                  Optimized test pipelines through sharding, reducing execution
                  time and improving development efficiency.
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

      <div className="w-[700px] h-[800px] overflow-hidden relative ms-16 mt-12 shrink-0">
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
