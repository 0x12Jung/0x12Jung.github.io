import { Link } from "@tanstack/react-router";

const navItems = [
  { lable: "HOME", path: "/" },
  { lable: "ABOUT", path: "/about" },
  { lable: "PORTFOLIO", path: "/portfolio" },
  { lable: "BLOG", path: "/blog" },
  { lable: "CONTACT", path: "/contact" },
];

function Header() {
  return (
    <header>
      <nav>
        {navItems.map((item) => (
          <Link className="px-4" key={item.lable} to={item.path}>
            {item.lable}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
