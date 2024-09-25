"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Card } from "@/components/Card";
import { Product } from "@/types/propducts";

interface CarouselProps {
  products: Product[]; // Tipar el prop products
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={5}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop
      navigation
      centeredSlides={true}
      modules={[Navigation]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 5, // Ajustar espacio entre elementos en pantallas muy pequeñas
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 0, // Ajustar espacio entre elementos en pantallas pequeñas
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 5, // Ajustar espacio entre elementos en pantallas pequeñas
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 15, // Ajustar espacio entre elementos en pantallas medianas
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
      className="relative p-3 flex justify-center"
    >
      {products.map((product, id) => (
        <SwiperSlide key={id}>
          <Card
            imageSrc={
              product.images.length > 0
                ? product.images[0]
                : "/defaultProduct.jpg"
            }
            hoverImageSrc={
              product.images.length > 1 ? product.images[1] : undefined
            }
            name={product.name_product}
            price={parseFloat(product.price)}
            stock={product.stock}
            rating={parseFloat(product.rating)}
            className="my-4"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
