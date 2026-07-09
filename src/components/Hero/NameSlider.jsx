import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "Swiper/css";

export const Name = () => {
  return (
    <div>
      <Swiper
        className="my-3 my-lg-4 name-slider"
        direction="vertical"
        modules={[Autoplay]}
        loop={true}
        autoplay={{ speed: 1800, disableOnInteraction: false }}
      >
        <SwiperSlide className="">
          <span>Amuleagbagun</span>
        </SwiperSlide>

        <SwiperSlide className="">
          <span>Samuel</span>
        </SwiperSlide>

        <SwiperSlide>
          <span>Adeolu</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
