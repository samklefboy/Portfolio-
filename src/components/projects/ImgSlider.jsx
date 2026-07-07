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
        {img.map((im) => {
          return (
            <SwiperSlide key={im}>
              <img href={`/${im}`} src={`/${im}`} className="card-img-top" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
