import { Link } from "@tanstack/react-router";
import BlurImage from "../common/BlurImage";
import { aboutData } from "@/data/about";

function About() {
  return (
    <div className="flex mt-4 mb-24">
      <div className="w-[55%]">
        <div className="flex flex-col h-full items-end">
          <div className="w-3/4 2xl:w-3/5">
            <div className="font-bebas">
              <div className="text-9xl font-bold">{aboutData.greeting}</div>
              <div className="text-5xl leading-snug mt-10">
                {aboutData.name}
                <br />
                {aboutData.role}
              </div>
            </div>

            <div className="mt-6 space-y-6 font-varela text-brown-dark text-lg leading-normal">
              {aboutData.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12">
              <div className="text-5xl font-bebas">Experience</div>
              <ul className="mt-4 ml-2 space-y-4 font-varela text-brown-dark text-lg list-disc list-inside">
                {aboutData.experience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact"
              className="inline-block px-16 py-4 mt-16 bg-black text-white text-2xl rounded-[36px] hover:px-20 duration-300 font-bebas"
            >
              Let's Contact
            </Link>
          </div>
        </div>
      </div>

      <BlurImage
        src={aboutData.portrait}
        alt="Profile"
        className="w-full h-full object-cover"
        containerClassName="w-[700px] h-[800px] relative ms-16 mt-12 shrink-0 rounded-l-md 2xl:rounded-md"
        fetchPriority="high"
      />
    </div>
  );
}

export default About;
