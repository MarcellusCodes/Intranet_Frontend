import Image from "next/image";

const CarouselImage = ({ src, alt }) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        objectFit="cover"
        className={{ height: "100%", width: "100%", cursor: "grab" }}
      />
    </>
  );
};

export default CarouselImage;
