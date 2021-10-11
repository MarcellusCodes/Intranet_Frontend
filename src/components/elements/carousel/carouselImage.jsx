import Image from "next/image";

const CarouselImage = ({ src, alt }) => {
  return (
    <>
      <Image
        src={`http://localhost:8055${src}`}
        alt={alt}
        objectFit="cover"
        width="900px"
        height="450px"
      />
    </>
  );
};

export default CarouselImage;
