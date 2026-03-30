import { Link } from "@tanstack/react-router";

import { navMenuItems } from "@/constants";

function Home() {
  return (
    <div className="h-screen flex">
      <div className="w-2/5 flex flex-col justify-end">
        <div className="h-2/5 flex justify-end">
          <div className="w-[400px] 2xl:w-[600px]">
            <div className="text-4xl 2xl:text-5xl font-bebas">Jung Tu</div>
            <div className="text-lg 2xl:text-2xl mt-4 2xl:mt-6 font-varela text-brown-dark">
              Software Engineer in Blockchain & Mobile
            </div>
            <div className="text-lg 2xl:text-2xl mt-1 2xl:mt-2 font-varela text-brown-dark">
              Building secure smart contracts and maintainable production
              applications
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/5 flex items-center pl-24">
        <div className="h-[75vh] flex flex-col justify-between text-9xl 2xl:text-[200px]">
          {navMenuItems.map((item) => (
            <Link
              className="hover-slide-left font-bebas"
              key={item.path}
              to={item.path}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
