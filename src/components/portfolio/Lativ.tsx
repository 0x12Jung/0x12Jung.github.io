import LinkWithIcon from "../common/LinkWithIcon";
import lativImg1 from "@/assets/lativ1.webp";
import lativImg2 from "@/assets/lativ2.webp";
import lativImg3 from "@/assets/lativ3.webp";

const lativImgs = [lativImg1, lativImg2, lativImg3];

function Lativ() {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-[42vw] items-end pe-8 2xl:pe-16">
        <div className="flex flex-col w-[35vw] 2xl:w-[30vw] pt-20 2xl:pt-32">
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
      </div>
      <div className="flex flex-col grow py-8">
        <div className="flex gap-1">
          {lativImgs.map((img, index) => (
            <div key={img} className="w-[17vw]">
              <img
                src={img}
                alt={`Lativ Shopping APP ${index}`}
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

export default Lativ;
