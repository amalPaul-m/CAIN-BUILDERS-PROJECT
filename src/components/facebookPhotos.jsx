import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../assets/gallery/1.jpeg"
import img2 from "../assets/gallery/2.jpeg";
import img3 from "../assets/gallery/3.jpeg";
import img4 from "../assets/gallery/4.jpeg";
import img5 from "../assets/gallery/5.jpeg";
import img6 from "../assets/gallery/6.jpeg";

import "./FacebookPhotos.css";

export default function FacebookPhotos() {
  const photos = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="local-photo-slider">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        spaceBetween={20}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 },     
          640: { slidesPerView: 2 },   
          1024: { slidesPerView: 3 }, 
        }}
      >
        {photos.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="slide-card">
              <img src={src} alt={`photo-${i}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
