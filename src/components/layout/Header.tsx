import { Link } from "@tanstack/react-router";

import { menuItems } from "@/constants";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-24 flex items-center bg-beige font-bebas text-xl 2xl:text-2xl">
      <div className="grow-4 2xl:grow-8 h-px bg-brown ml-10" />

      <nav className="grow-3 flex items-center mx-16">
        <div className="flex justify-between w-full ">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-brown-dark [&.active]:text-brown-400 hover:text-brown-400 duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <div className="grow h-px bg-brown mr-10" />
    </header>
  );
}

export default Header;
