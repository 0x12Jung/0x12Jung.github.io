import LinkWithIcon from "../common/LinkWithIcon";
import { type PortfolioProject } from "@/data/portfolio";

function Lativ({ project }: { project: PortfolioProject }) {
  return (
    <div className="animate-on-scroll flex flex-col items-center w-full">
      <div className="flex flex-col items-center max-w-[50vw] 2xl:max-w-[34vw] text-center">
        <LinkWithIcon href={project.url} title={project.title} />
        <div className="text-xl mt-6 2xl:text-2xl font-varela text-brown-dark">
          {project.description}
        </div>
      </div>

      <div className="flex gap-4 2xl:gap-6 mt-18 2xl:mt-20 items-end">
        {project.images.map((img, index) => (
          <div
            key={img}
            className={`w-[16vw] 2xl:w-[14vw] ${index === 1 ? "-translate-y-4" : ""}`}
          >
            <img
              src={img}
              alt={`${project.title} Shopping APP ${index}`}
              className="rounded-xl shadow-lg img-hover-lift ring-1 ring-brown/10"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lativ;
