import { useState, type ComponentProps } from "react";

type BlurImageProps = ComponentProps<"img"> & {
  containerClassName?: string;
};

function BlurImage({
  containerClassName,
  className,
  onLoad,
  ...props
}: BlurImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`overflow-hidden bg-beige ${containerClassName ?? ""}`}>
      <img
        {...props}
        className={`${className ?? ""} ${loaded ? "img-blur-loaded" : "img-blur-loading"}`}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
      />
    </div>
  );
}

export default BlurImage;
