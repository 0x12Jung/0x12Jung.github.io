import BlogLink from "./BlogLink";
import blog1 from "@/assets/blog1.webp";
import blog2 from "@/assets/blog2.webp";

const blogs = [
  {
    title:
      "Evolution of RWA Compliance Standards: From ERC-3643 to the Lighter ERC-7943 Universal Interface",
    subtitle:
      "Explore how ERC-7943 simplifies and generalizes on-chain compliance for tokenized RWA compared with the heavier, identity-driven ERC-3643 standard.",
    url: "https://medium.com/bsos-taiwan/erc-3643-to-erc-7943-97a41bb9f779",
    img: blog2,
  },
  {
    title: "A Secure and Regulatory-Compliant Asset Tokenization Standard",
    subtitle:
      "In this article, we will discuss how ERC-4363 can be implemented to help Real-World Assets (RWA) achieve regulatory compliance.",
    url: "https://medium.com/bsos-taiwan/secure-and-regulatory-compliant-asset-tokenization-standard-ef555b0186d8",
    img: blog1,
  },
];

function Blog() {
  return (
    <div className="flex grow flex-col w-screen items-center">
      <div className="text-9xl font-bebas pt-8 pb-16">Blog</div>
      <div className="w-1/2">
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
