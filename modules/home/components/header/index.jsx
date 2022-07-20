import React from 'react'
import { Container } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Header() {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      modules={[Pagination, Navigation]}
      className="swiper">
      <SwiperSlide>
        <Container>
          Hola
        </Container>
      </SwiperSlide>
      <SwiperSlide>
        <Container>
          Hola
        </Container>
      </SwiperSlide>
    </Swiper>
  )
}
