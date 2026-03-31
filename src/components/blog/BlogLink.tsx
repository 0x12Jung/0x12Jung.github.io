const BlogLink = ({
  title,
  subtitle,
  url,
  img,
}: {
  title: string;
  subtitle: string;
  url: string;
  img: string;
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-start gap-8 2xl:gap-12 py-10 2xl:py-14 border-b border-brown-400/30 last:border-b-0 transition-colors duration-300"
  >
    <div className="flex-1 flex flex-col gap-3 2xl:gap-4">
            <h2 className="text-2xl 2xl:text-3xl font-bebas leading-tight tracking-wide text-brown-dark group-hover:text-brown transition-colors duration-300">
        {title}
      </h2>
            <p className="text-base 2xl:text-lg font-varela text-brown leading-relaxed line-clamp-3">
        {subtitle}
      </p>
      <span className="text-sm font-varela text-brown-400 mt-2 uppercase">
        Read on Medium →
      </span>
    </div>
    <div className="w-1/3 shrink-0 overflow-hidden rounded-md">
      <img
        src={img}
        alt={title}
        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  </a>
);

export default BlogLink;
