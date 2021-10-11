import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CarouselImage from "./carouselImage";
import CarouselText from "./carouselText";

const Carousel = ({ data }) => {
  return (
    <>
      <Swiper>
        {data.map((data) => (
          <SwiperSlide>
            <CarouselImage
              src={`/assets/${data.bild.filename_disk}`}
              alt="Yoga Bild"
            />
            <CarouselText
              title={data.titel}
              caption={data.beschriftung}
              link={data.link === null ? "/" : data.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
