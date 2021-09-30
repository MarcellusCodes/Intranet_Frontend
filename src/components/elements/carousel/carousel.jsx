import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CarouselImage from "./carousel-image";
import CarouselText from "./carousel-text";

import Yoga from "../../../static/images/yoga.jpg";

const Carousel = () => {
  return (
    <>
      <Swiper>
        <SwiperSlide>
          <CarouselImage src={Yoga} alt="Yoga Bild" />
          <CarouselText
            title="Yoga im Bett"
            caption="Klicken Sie auf das Bild und Sie lernen mit Mady Morrison eine Yoga-Routine für das Bett sowie Atemübungen, welche Einschlafproblemen entgegensteuert."
            link="/"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
