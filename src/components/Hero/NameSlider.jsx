import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "Swiper/css";

export const Name = () => {
  return (
    <div>
      <Swiper
        className="my-3 my-lg-4"
        direction="vertical"
        style={{
          height: "clamp(91px, 10.5vw, 145px)",
          overflow: "hidden",
        }}
        modules={[Autoplay]}
        loop={true}
        autoplay={{ speed: 2000, disableOnInteraction: false }}
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
