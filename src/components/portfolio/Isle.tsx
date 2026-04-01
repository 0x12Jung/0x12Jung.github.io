import BlurImage from "../common/BlurImage";
import LinkWithIcon from "../common/LinkWithIcon";
import { type PortfolioProject } from "@/data/portfolio";

function Isle({ project }: { project: PortfolioProject }) {
  return (
    <div className="animate-on-scroll flex flex-col items-center w-full">
      <div className="w-[65vw] 2xl:w-[60vw]">
        <BlurImage
          src={project.images[0]}
          alt={project.title}
          className="rounded-xl shadow-lg img-hover-lift"
          containerClassName="rounded-xl"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col max-w-[60vw] 2xl:max-w-[50vw] mt-10 2xl:mt-14">
        <LinkWithIcon href={project.url} title={project.title} />
        <div className="text-xl mt-6 2xl:text-2xl font-varela text-brown-dark">
          {project.description}
        </div>
      </div>
    </div>
  );
}

export default Isle;
