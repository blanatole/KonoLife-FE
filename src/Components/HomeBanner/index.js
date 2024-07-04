import React from "react";
import Slider from "react-slick";
import SlideBanner1 from "../../assets/images/slideBanner1.jpg";
import SlideBanner2 from "../../assets/images/slideBanner2.jpg";

const HomeBanner = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <>
      <div className="homeBannerSection">
        <Slider {...settings}>
          <div className="item">
            <img src={SlideBanner1} className="w-100" />
          </div>
          <div className="item">
            <img src={SlideBanner2} className="w-100" />
          </div>
          <div className="item">
            <img src={SlideBanner1} className="w-100" />
          </div>
          <div className="item">
            <img src={SlideBanner2} className="w-100" />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default HomeBanner;