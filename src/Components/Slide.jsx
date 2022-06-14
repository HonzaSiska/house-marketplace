// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

function Slide({images}) {
    console.log(images[0])
    return (
        <Swiper
        // install Swiper modules
        modules={[EffectFade,Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        effect="fade"
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}

        {images[0].map(( image, index ) => (
          <SwiperSlide key={index}>
            <div
              style={{
                background: `url(${image}) center no-repeat`,
                backgroundSize: 'cover',
                minHeight: '400px'
              }}
              className='swiperSlideDiv'
            ></div>
          </SwiperSlide>
        ))}

        {/* {images[0].map(( image, index ) => (
          <SwiperSlide key={index}>
            <>
                <img style={{
                maxHeight: '200px'
                }} 
                className='swiperSlideDiv' src={image} alt='index'/>
            </>
          </SwiperSlide>
        ))} */}
       
      </Swiper>
    
    )
  }
  
  export default Slide