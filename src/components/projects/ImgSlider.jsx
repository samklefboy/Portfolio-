import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "Swiper/css";

export const Slider = ({ img }) => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {img.map((i) => {
          return (
            <SwiperSlide key={i} style={{ zIndex: 1 }}>
              <img
                src={`public/${i}`}
                className="card-img-top"
                style={{ zIndex: 1 }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
