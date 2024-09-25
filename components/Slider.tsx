"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
}

interface SliderProps {
  slides: Slide[];
}

const SliderHome: React.FC<SliderProps> = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="cursor-grab active:cursor-grabbing"
      loop
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center h-64"> 
        <Image
          src={slide.src}
          alt={slide.alt}
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
          priority
        />
      </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderHome;
