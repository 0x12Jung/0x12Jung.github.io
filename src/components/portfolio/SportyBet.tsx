import LinkWithIcon from "../common/LinkWithIcon";
import sb1 from "@/assets/SB1.webp";
import sb2 from "@/assets/SB2.webp";
import sb3 from "@/assets/SB3.webp";

const sbImgs = [sb1, sb2, sb3];

function SportyBet() {
  return (
    <div className="animate-on-scroll flex items-center gap-24">
      <div className="flex py-8 ps-[8vw] 2xl:ps-[12vw]">
        <div className="flex gap-3">
          {sbImgs.map((img, index) => (
            <div key={img} className="w-[15vw] 2xl:w-[13vw]">
              <img
                src={img}
                alt={`SportyBet APP ${index}`}
                className="rounded-xl shadow-lg img-hover-lift ring-1 ring-brown/10"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-[36vw] 2xl:w-[32vw]">
        <LinkWithIcon
          href="https://play.google.com/store/apps/details?id=com.sportybet.android.gp&gl=ng&hl=en_NG"
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
  );
}

export default SportyBet;
