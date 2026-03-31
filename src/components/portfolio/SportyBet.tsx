import LinkWithIcon from "../common/LinkWithIcon";
import sb1 from "@/assets/SB1.webp";
import sb2 from "@/assets/SB2.webp";
import sb3 from "@/assets/SB3.webp";

const sbImgs = [sb1, sb2, sb3];

function SportyBet() {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-[42vw] items-end pe-8 2xl:pe-16">
        <div className="flex flex-col w-[35vw] 2xl:w-[30vw] pt-20 2xl:pt-32">
          <LinkWithIcon
            href="https://play.google.com/store/apps/details?id=com.sportybet.android.gp&hl=en_US"
            title="SportyBet"
          />
          <div className="text-xl mt-6 2xl:text-2xl font-varela text-brown-dark">
            {"SportyBet App is the ultimate destination for a thrilling sports betting experience. " +
              "It offers a wide range of sports betting options, with a special focus on football. " +
              "Users can enjoy diverse markets, competitive odds, attractive bonuses, and an in-house casino for added excitement. " +
              "The platform also includes responsible gambling features, seamless bet placement, and live streaming of popular matches."}
          </div>
        </div>
      </div>
      <div className="flex flex-col grow py-8">
        <div className="flex gap-1">
          {sbImgs.map((img, index) => (
            <div key={img} className="w-[17vw]">
              <img
                src={img}
                alt={`SportyBet APP ${index}`}
                width={1080}
                height={1290}
                style={{ width: "100%", height: "auto" }}
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SportyBet;
