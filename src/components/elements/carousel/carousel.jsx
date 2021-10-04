import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CarouselImage from "./carousel-image";
import CarouselText from "./carousel-text";

import Yoga from "../../../static/images/yoga.jpg";

const Carousel = ({ data }) => {
  return (
    <>
      <Swiper>
        {data.karussells.map((data) => (
          <SwiperSlide>
            <CarouselImage
              src={`${data.bild.formats.medium.url}`}
              alt="Yoga Bild"
            />
            <CarouselText
              title={data.titel}
              caption={data.beschriftung}
              link={data.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
