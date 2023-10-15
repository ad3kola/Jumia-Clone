"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from '@/assets/slider-background.jpg'
import sliderImage1 from '@/assets/slider-image1.png'
import sliderImage2 from '@/assets/slider-image2.jpg'
import sliderImage3 from '@/assets/slider-image3.png'
import sliderImage4 from '@/assets/slider-image4.jpg'
import sliderImage5 from '@/assets/slider-image5.jpg'
import sliderImage6 from '@/assets/slider-image6.jpg'
import sliderImage7 from '@/assets/slider-image7.jpg'
import sliderImage8 from '@/assets/slider-image8.jpg'
import sliderImage9 from '@/assets/slider-image9.png'

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/pagination";

// import required modules
import {
  Autoplay,
  EffectFade,
  Pagination,
} from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  const sliderImages = [
    {
      id: 1,
      image: sliderImage1,
    },
    {
      id: 2,
      image: sliderImage2,
    },
    {
      id: 3,
      image: sliderImage3,
    },
    {
      id: 4,
      image: sliderImage4,
    },
    {
      id: 5,
      image: sliderImage5,
    },
    {
      id: 6,
      image: sliderImage6,
    },

	{
		id: 7,
		image: sliderImage7,
	  },
	  {
		id: 8,
		image: sliderImage8,
    },
    {
		id: 9,
		image: sliderImage9,
	  },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination ]}
        className="mySwiper sm:w-[300px] w-[450px] md:w-[600px] lg:w-[730px] h-[390px] rounded-sm overflow-hidden z-20 mx-auto"
      >
        {sliderImages.map(({id, image}) => (
          <SwiperSlide
            key={id}
            className="text-center shadow-md flex justify-center text-base relative"
          >
			<Image src = {image} alt = 'slider-image' className = 'object-cover w-full h-full' />
            {id}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
