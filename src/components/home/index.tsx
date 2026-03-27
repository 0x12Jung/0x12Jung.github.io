import { Link } from "@tanstack/react-router";

function Home() {
  return (
    <div>
      <Link className="px-4" to="/about">
        ABOUT
      </Link>
      <Link className="px-4" to="/portfolio">
        PORTFOLIO
      </Link>
      <Link className="px-4" to="/blog">
        BLOG
      </Link>
      <Link className="px-4" to="/contact">
        CONTACT
      </Link>
    </div>
  );
}

export default Home;
