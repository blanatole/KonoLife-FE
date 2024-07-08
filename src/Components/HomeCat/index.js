import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import cat9 from '../../assets/images/cat-9.png';

const HomeCat = () => {

  const [itemBg, setItemBg] = useState([
    '#fffceb',
    '#ecffec',
    '#feefea',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#fffceb',
    '#feefea',
    '#ecffec',
    '#fff3eb',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#fffceb',
    '#feefea'
  ])

  return (
    <>
      <section className="homeCat">
        <div className="container">
          <h3 className="mb-4 hd">Featured Categories</h3>
          <Swiper
            slidesPerView={10}
            spaceBetween={10}
            slidesPerGroup={3}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {
              itemBg?.map((item, index) => {
                return (
                  <SwiperSlide>
                    <div className="item text-center cursor" style={{background:item}}>
                      <img src={cat9} />
                      <h6>Red Apple</h6>
                    </div>
                  </SwiperSlide>
                )
              })
            }




          </Swiper>


        </div>
      </section>
    </>
  )
}

export default HomeCat;