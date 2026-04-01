import isleImg from "@/assets/isle.webp";
import sb1 from "@/assets/SB1.webp";
import sb2 from "@/assets/SB2.webp";
import sb3 from "@/assets/SB3.webp";
import lativ1 from "@/assets/lativ1.webp";
import lativ2 from "@/assets/lativ2.webp";
import lativ3 from "@/assets/lativ3.webp";

export interface PortfolioProject {
  title: string;
  url: string;
  description: string;
  images: string[];
}

export const isleProject: PortfolioProject = {
  title: "Isle Finance",
  url: "https://isle.finance/",
  description:
    "Isle Finance is the decentralized protocol for globally accessible supply chain finance, " +
    "with a mission to bring the world's supply chain activity on-chain while expanding " +
    "capital access and increasing supply chain resilience.",
  images: [isleImg],
};

export const sportyBetProject: PortfolioProject = {
  title: "SportyBet",
  url: "https://play.google.com/store/apps/details?id=com.sportybet.android.gp&gl=ng&hl=en_NG",
  description:
    "SportyBet App is the ultimate destination for a thrilling sports betting experience. " +
    "It offers a wide range of sports betting options, with a special focus on football. " +
    "Users can enjoy diverse markets, competitive odds, attractive bonuses, and an in-house casino for added excitement. " +
    "The platform also includes responsible gambling features, seamless bet placement, and live streaming of popular matches.",
  images: [sb1, sb2, sb3],
};

export const lativProject: PortfolioProject = {
  title: "Lativ",
  url: "https://play.google.com/store/apps/details?id=tw.com.lativ.shopping&hl=zh_TW&pli=1",
  description:
    "Lativ is an e-commerce platform dedicated to offering nice quality clothing " +
    "and exceptional customer service. The platform strives to combine style, comfort, " +
    "and functionality, catering to a wide range of fashion preferences while maintaining " +
    "a commitment to quality and customer satisfaction, also ensures that customers enjoy " +
    "a seamless shopping experience.",
  images: [lativ1, lativ2, lativ3],
};
