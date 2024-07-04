import HomeBanner from "../../Components/HomeBanner";
import Banner1 from '../../assets/images/banner1.jpg';
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import product1 from "../../assets/images/product1.jpg";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Home = () => {

  var productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <>
      <HomeBanner />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img src={Banner1} alt="Banner1" className="cursor w-100" />
              </div>
            </div>

            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLER</h3>
                  <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                </div>

                <Button className="viewAllBtn ml-auto">View All <IoIosArrowRoundForward /></Button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img src={product1} className="w-100" />
                      </div>

                      <h4>Werther's Original Caramel Hard Candies</h4>
                      <span className="text-success">In Stock</span>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img src={product1} className="w-100" />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img src={product1} className="w-100" />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img src={product1} className="w-100" />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img src={product1} className="w-100" />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img src={product1} className="w-100" />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img src={product1} className="w-100" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;