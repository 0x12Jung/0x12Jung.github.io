import Isle from "./Isle";
import Lativ from "./Lativ";
import SportyBet from "./SportyBet";

function Portfolio() {
  return (
    <div className="w-full flex flex-col items-center pb-16">
      <h1 className="text-9xl font-bebas pt-8 pb-16">Portfolio</h1>
      <div className="flex flex-col gap-24">
        <Isle />
        <SportyBet />
        <Lativ />
      </div>
    </div>
  );
}

export default Portfolio;
