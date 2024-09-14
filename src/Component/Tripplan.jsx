import React from 'react'
    // Import Swiper React components
    import { Swiper, SwiperSlide } from 'swiper/react';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/effect-cube';
    import 'swiper/css/pagination';

const Tripplan = () => {



    const boxdata = [
        { src: 'https://uptourism.gov.in/images/icons/hotel.png', text: 'Hotel Accomodation' },
        { src: 'https://uptourism.gov.in/images/icons/pakage.png', text: 'Package Tour' },
        { src: 'https://uptourism.gov.in/images/icons/oneday.png', text: 'One day Tour' },
        { src: 'https://uptourism.gov.in/images/icons/bus.png', text: 'Taxi / Bus' },
        { src: '	https://uptourism.gov.in/images/icons/tonga.png', text: 'Tonga Ride' },
    ]

    return (
        <div>
            <h1 className='dark:text-black text-[#ddd]' style={{ fontSize: '3rem', textAlign: 'center', margin: '10vh 0vh', fontWeight: '700' }}>Plan Your Trip</h1>
            <div className='flex justify-center my-10 gap-9 flex-wrap '>
            <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
                {/* {
                    boxdata.map((val) => {
                        return (
                            <div className="card bg-base-100 w-52 shadow-sm shadow-[#444] dark:bg-slate-100 dark:text-black ">
                                <div className="card-body flex flex-col items-center hover:bg-red-500 hover:rounded-xl hover:shadow-lg hover:shadow-red-300">
                                    <img className='h-[10vh] w-[10vh] dark:bg-slate-300 dark:rounded-xl' src={val.src} alt="" />
                                    <h2 className="card-title text-center text-white dark:text-black ">{val.text} </h2>
                                </div>
                            </div>
                        )
                    })
                } */}

</Swiper>
            </div>
        </div>
    )
}

export default Tripplan



// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cube';
// import 'swiper/css/pagination';

// import './Tripplan.css';

// // import required modules
// import { EffectCube, Pagination } from 'swiper/modules';

// export default function Tripplan() {
//   return (
//     <>
      {/* <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      > */}
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide> */}
      {/* </Swiper> */}
//     </>
//   );    
// }