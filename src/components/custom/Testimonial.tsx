'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { testimonailData } from '@/lib/sample';

export default function Testimonial() {
  console.log(testimonailData, "data");

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={5} // Default slides to show
      breakpoints={{
        // Adjust the number of slides per view based on screen width
        320: { slidesPerView: 1 }, // Small screens (e.g., mobile)
        768: { slidesPerView: 2 }, // Medium screens (e.g., tablets)
        1024: { slidesPerView: 3 }, // Large screens
        1280: { slidesPerView: 4 }, // Extra-large screens
      }}
      className='pb-10 !pl-2 max-sm:ml-4 '
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {testimonailData.map((item, index) => (
        <SwiperSlide key={index} className='p-10'>
          <h2>⭐⭐⭐⭐⭐</h2>
          <h1 className="font-semibold">{item.name}</h1>
          <p className="font-thin text-base">{item.para}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
