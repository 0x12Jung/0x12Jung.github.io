import Isle from "./Isle";
import Lativ from "./Lativ";
import SportyBet from "./SportyBet";

function Divider() {
  return <div className="divider-draw h-px bg-brown/20 w-[60vw] mx-auto" />;
}

function Portfolio() {
  return (
    <div className="w-full flex flex-col items-center pb-24">
      <h1 className="text-9xl font-bebas pt-8 tracking-widest">Portfolio</h1>
      <div className="h-px w-32 bg-brown-400 mt-4 mb-16 2xl:mb-20" />
      <div className="flex flex-col gap-32 2xl:gap-40 w-full">
        <Isle />
        <Divider />
        <SportyBet />
        <Divider />
        <Lativ />
      </div>
    </div>
  );
}

export default Portfolio;
