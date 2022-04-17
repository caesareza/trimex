import React from 'react'
import Slider from 'react-slick'

export default function HomeBanner() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    dots: false,
    autoplay: true,
  }

  return (
    <Slider {...settings}>
      <div className="banner-home-img">
        <img src="/images/banners/1.jpg" alt="image-1" />
      </div>
      <div className="banner-home-img">
        <img src="/images/banners/2.jpg" alt="image-1" />
      </div>
    </Slider>
  )
}
