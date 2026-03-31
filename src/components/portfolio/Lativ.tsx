import LinkWithIcon from "../common/LinkWithIcon";
import lativImg1 from "@/assets/lativ1.webp";
import lativImg2 from "@/assets/lativ2.webp";
import lativImg3 from "@/assets/lativ3.webp";

const lativImgs = [lativImg1, lativImg2, lativImg3];

function Lativ() {
  return (
    <div className="animate-on-scroll flex flex-col items-center w-full">
      <div className="flex flex-col items-center max-w-[50vw] 2xl:max-w-[34vw] text-center">
        <LinkWithIcon
          href="https://play.google.com/store/apps/details?id=tw.com.lativ.shopping&hl=zh_TW&pli=1"
          title="Lativ"
        />
        <div className="text-xl mt-6 2xl:text-2xl font-varela text-brown-dark">
          {"Lativ is an e-commerce platform dedicated to offering nice quality clothing " +
            "and exceptional customer service. The platform strives to combine style, comfort, " +
            "and functionality, catering to a wide range of fashion preferences while maintaining " +
            "a commitment to quality and customer satisfaction, also ensures that customers enjoy " +
            "a seamless shopping experience."}
        </div>
      </div>

      <div className="flex gap-4 2xl:gap-6 mt-18 2xl:mt-20 items-end">
        {lativImgs.map((img, index) => (
          <div
            key={img}
            className={`w-[16vw] 2xl:w-[14vw] ${index === 1 ? "-translate-y-4" : ""}`}
          >
            <img
              src={img}
              alt={`Lativ Shopping APP ${index}`}
              className="rounded-xl shadow-lg img-hover-lift ring-1 ring-brown/10"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lativ;
