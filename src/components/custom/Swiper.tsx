
'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { productsData } from '@/lib/sample';
import { useEffect, useState } from 'react';

interface SwiperData {
    img1 : string;
    img2:string;img3:string;img4:string,className?:string;
}

export default function Swiper1({img1,img2,img3,img4,className}:SwiperData) {

  // let [storeWeith,setstoreWeith] = useState(window.innerWidth)
  const [swiperPerView ,setSwiperPerView] = useState(4.5);

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth < 600) {
        setSwiperPerView(1);
      } else if (innerWidth < 860) {
        setSwiperPerView(2.5);
      } else {
        setSwiperPerView(4);
      }
    };

    // Run once on mount
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  let sp1data = [ 
    {
      img: img1
    },
    {
      img: img2
    },
    {
      img: img3
    },
    {
      img: img4
    },
  ]




  return (
    <Swiper
      //  onChange={weithChange}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={swiperPerView}
      className='pb-10 !pl-2 max-sm:ml-4'
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        productsData.map((item,index) =>{
          return <SwiperSlide
          key={index}
          className=''
          >
          <Image
          className='h-[60vh ] w-80' width={200} height={200}
           src={item.productImg} alt="" />
            <div className={` ${className} p-4`} > 
      
      <div className="p-2">
        <h2 className="text-xl max-md:text-lg font-semibold">{item.name}</h2>
        <h1 className="text-sm">⭐⭐⭐⭐</h1>
        <h3 className="font-bold">{item.price}</h3>
      </div>
    </div>
        </SwiperSlide>
        })
      }

      {/* <SwiperSlide className='pb-10 ml-12 max-sm:ml-4 ' >
        <img  className='h-[62vh]'  src={img1} alt="" />
      
      </SwiperSlide>
      <SwiperSlide>
        <img  className='h-[62vh]' src={img2} alt="" />
      
      </SwiperSlide>
      <SwiperSlide>
        <img className='h-[62vh]'  src={img3} alt="" />
      
      </SwiperSlide>
      <SwiperSlide>
        <img className='h-[62vh]'  src={img4} alt="" />
      </SwiperSlide> */}
    
    </Swiper>
  )
}
