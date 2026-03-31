import LinkWithIcon from "../common/LinkWithIcon";
import isleImg from "@/assets/isle.webp";

function Isle() {
  return (
    <div className="animate-on-scroll flex flex-col items-center w-full">
      <div className="w-[65vw] 2xl:w-[60vw]">
        <img
          src={isleImg}
          alt="Isle Finance"
          className="rounded-xl shadow-lg img-hover-lift"
        />
      </div>

      <div className="flex flex-col max-w-[60vw] 2xl:max-w-[50vw] mt-10 2xl:mt-14">
        <LinkWithIcon href="https://isle.finance/" title="Isle Finance" />
        <div className="text-xl mt-6 2xl:text-2xl font-varela text-brown-dark">
          {"Isle Finance is the decentralized protocol for globally accessible supply chain finance, " +
            "with a mission to bring the world's supply chain activity on-chain while expanding " +
            "capital access and increasing supply chain resilience."}
        </div>
      </div>
    </div>
  );
}

export default Isle;
