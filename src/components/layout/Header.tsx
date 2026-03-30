import { menuItems } from "@/constants";
import { Link } from "@tanstack/react-router";

function Header() {
  return (
    <header>
      <nav>
        {menuItems.map((item) => (
          <Link className="px-4" key={item.path} to={item.path}>
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
