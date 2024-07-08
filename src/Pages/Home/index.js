import HomeBanner from "../../Components/HomeBanner";
import Banner1 from '../../assets/images/banner1.jpg';
import Banner2 from '../../assets/images/banner2.jpg';
import Banner3 from '../../assets/images/banner3.jpg';
import Banner4 from '../../assets/images/banner4.jpg';
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import newsLetterImg from '../../assets/images/coupon.png';
import { GoMail } from "react-icons/go";



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

      <HomeCat />

      {/* Product Section */}

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src={Banner1} alt="Banner1" className="cursor w-100" />
                </div>

                <div className="banner mt-4">
                  <img src={Banner2} alt="Banner1" className="cursor w-100" />
                </div>
              </div>
            </div>

            <div className="col-md-9 productRow">

              {/* Best seller */}
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLER</h3>
                  <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                </div>

                <Button className="viewAllBtn ml-auto">View All <IoIosArrowRoundForward /></Button>
              </div>

              <div className="product_row w-100 mt-4 d-flex">
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
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                </Swiper>
              </div>



              {/* New product */}

              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-light text-sml mb-0">New products with updated stocks.</p>
                </div>

                <Button className="viewAllBtn ml-auto">View All <IoIosArrowRoundForward /></Button>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>

              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner">
                  <img src={Banner3} alt="Banner1" className="cursor w-100" />
                </div>

                <div className="banner">
                  <img src={Banner4} alt="Banner1" className="cursor w-100" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* News Letter Section */}

      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">$20 discount for your first order.</p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">Join our email subscription now to get updates on <br />promotions and coupons.</p>

              <form>
                <GoMail/>
                <input type="text" placeholder="Your email address"/>
                <Button>Subcribe</Button>
              </form>


            </div>

            <div className="col-md-6">
              <img src={newsLetterImg} />
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Home;