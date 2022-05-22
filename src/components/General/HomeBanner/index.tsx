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
      <div className="banner-home-img relative">
        <img src="/images/banners/1.jpg" alt="image-1" className="w-full" />
        <div className="absolute top-0 left-0 z-1 w-full">
          <div className="container mx-auto p-5 text-slate-600">
            <h1 className="text-2xl p-0 lg:pt-60">
              WELCOME TO TerimaExpress.com
            </h1>
            <p className="text-5xl mt-2">
              <span className="bg-white">
                Fast and Secure Move <br /> is Our Promise
              </span>
            </p>
          </div>
        </div>
      </div>
    </Slider>
  )
}
