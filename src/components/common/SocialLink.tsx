const SocialLink = ({ name, url }: { name: string; url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline mx-2"
  >
    {name}
  </a>
);

export default SocialLink;
