interface ImgProps {
  src?: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
}

const Img = ({src, alt, className, onClick}: ImgProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e: any) => {
        e.target.src = "/assets/images/default_image.jpg";
      }}
      onClick={onClick}
    />
  );
};

export default Img;
