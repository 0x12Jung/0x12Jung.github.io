import BlogLink from "./BlogLink";
import { blogs } from "@/data/blog";

function Blog() {
  return (
    <div className="flex grow flex-col w-screen items-center px-6">
      <header className="w-full max-w-4xl 2xl:max-w-7xl pt-12 pb-6 2xl:pt-16 2xl:pb-8">
        <h1 className="text-7xl 2xl:text-8xl font-bebas">
          Blog
        </h1>
        <div className="h-px bg-brown-dark/60 mt-4" />
      </header>
      <div className="w-full max-w-4xl 2xl:max-w-7xl pb-24">
        {blogs.map((blog) => (
          <BlogLink
            key={blog.url}
            title={blog.title}
            subtitle={blog.subtitle}
            url={blog.url}
            img={blog.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
