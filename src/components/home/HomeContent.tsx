import Link from "next/link";

import { menuItems } from "@/constants";

const HomeContent = () => {
  const homeMenuItems = menuItems.filter((item) => item.name !== "Home");

  return (
    <div className="flex h-scree">
      <div className="w-2/5">
        <div className="flex flex-col h-full">
          <div className="flex-grow"></div>
          <div className="h-2/5 flex items-start justify-end">
            <div className="w-[400px] 2xl:w-[600px]">
              <div className="text-4xl 2xl:text-5xl font-bebasNeue">
                {"Jung Tu"}
              </div>
              <div className="text-lg 2xl:text-2xl mt-4 2xl:mt-6 font-varela text-brown-dark">
                {"Software Engineer in Blockchain & Mobile"}
              </div>
              <div className="text-lg 2xl:text-2xl mt-1 2xl:mt-2 font-varela text-brown-dark">
                {"Building secure smart contracts and maintainable production applications"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen flex items-center ps-8">
        <div className="flex flex-col justify-between h-[75vh] pl-12 text-9xl 2xl:text-[200px]">
          {homeMenuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={"hover-slide-left font-bebasNeue"}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
