import LinkWithIcon from "../common/LinkWithIcon";
import { type PortfolioProject } from "@/data/portfolio";

function SportyBet({ project }: { project: PortfolioProject }) {
  return (
    <div className="animate-on-scroll flex items-center gap-24">
      <div className="flex py-8 ps-[8vw] 2xl:ps-[12vw]">
        <div className="flex gap-3">
          {project.images.map((img, index) => (
            <div key={img} className="w-[15vw] 2xl:w-[13vw]">
              <img
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                className="rounded-xl shadow-lg img-hover-lift ring-1 ring-brown/10"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-[36vw] 2xl:w-[32vw]">
        <LinkWithIcon href={project.url} title={project.title} />
        <div className="text-xl mt-6 2xl:text-2xl font-varela text-brown-dark">
          {project.description}
        </div>
      </div>
    </div>
  );
}

export default SportyBet;
