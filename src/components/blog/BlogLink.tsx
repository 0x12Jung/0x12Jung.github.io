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
    className="flex flex-col items-center gap-4 2xl:gap-8 mb-32 2xl:mb-48"
  >
    <div className="text-5xl 2xl:text-7xl font-bebas">{title}</div>
    <div className="text-xl 2xl:text-2xl font-varela text-brown-700">
      {subtitle}
    </div>
    <div className="w-[50vw]">
      <img src={img} alt={title} className="rounded-lg shadow-lg" />
    </div>
  </a>
);

export default BlogLink;
