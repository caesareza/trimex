import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import BannerLoader from '@/components/Loader/BannerLoader'
import { getHomeBanner } from '@/requests/services/banner'
import { IResponse } from '@/type/global'

type IBanner = {
  id: number
  image_url: string
  title?: string
  description?: string
  link?: string
}

export default function HomeBanner() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [banner, setBanners] = useState<IBanner[]>()

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    dots: false,
    autoplay: true,
  }

  const fetchBanner = async () => {
    setIsLoading(true)
    const response: any | IResponse = await getHomeBanner()

    if (response.status !== 200) {
      setIsLoading(false)
      return
    }

    const { data } = response.data
    setBanners(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchBanner()
  }, [])

  if (isLoading) return <BannerLoader />

  return (
    <Slider {...settings}>
      {banner?.map((value: IBanner) => (
        <div className="banner-home-img relative" key={value.id}>
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
      ))}
    </Slider>
  )
}
