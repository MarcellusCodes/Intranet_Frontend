import Image from "next/image";

const CarouselImage = ({ src, alt }) => {
  return (
    <>
      <Image
        src={`http://192.168.100.60:8055${src}`}
        alt={alt}
        objectFit="cover"
        width="900px"
        height="450px"
      />
    </>
  );
};

export default CarouselImage;
