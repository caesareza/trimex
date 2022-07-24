import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import HomeBanner from '@/components/General/HomeBanner'
import { ChangeEvent, useRef, useState } from 'react'

type IDataCargo = {
  id: string
  image: string
  title: string
  desc: string
}
const dataCargo: IDataCargo[] = [
  {
    id: '01',
    image: '/images/cargo/package.png',
    title: 'Give us a Details',
    desc: 'Extreme attention to detail is the essence of Boo’s unique.',
  },
  {
    id: '02',
    image: '/images/cargo/cargo.png',
    title: 'Provide an quote',
    desc: 'Extreme attention to detail is the essence of Boo’s unique.',
  },
  {
    id: '03',
    image: '/images/cargo/air-plane.png',
    title: 'Confirm Your Date',
    desc: 'Extreme attention to detail is the essence of Boo’s unique.',
  },
  {
    id: '04',
    image: '/images/cargo/shipping.png',
    title: 'move easy & stress free',
    desc: 'Extreme attention to detail is the essence of Boo’s unique.',
  },
]

const Home: NextPage = () => {
  const [trackingCode, setTrackingCode] = useState<string>('')
  const router = useRouter()
  const resiRef = useRef<HTMLInputElement>(null)

  const handleInputTracking = (event: ChangeEvent<HTMLInputElement>) => {
    setTrackingCode(event.target.value)
  }

  const handleSubmitNoResi = () => {
    if (trackingCode === '') {
      resiRef.current!.focus()
      return
    }

    router.push(`/tracking/${trackingCode}`)
  }

  return (
    <section id="home">
      <HomeBanner />

      <div className="bg-yellow-300 -mt-2">
        <div className="container mx-auto flex">
          <div className="p-5 py-10 flex-col lg:flex-row flex items-center justify-center w-full">
            <h2 className="text-2xl font-bold">Enter your tracking code #</h2>
            <input
              className="p-3 my-2 mx-3 w-1/2"
              placeholder="Nomor resi"
              onChange={handleInputTracking}
              ref={resiRef}
            />
            <button
              type="submit"
              className="bg-black p-3 text-white w-72"
              onClick={handleSubmitNoResi}
            >
              Track your cargo
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-10">
        <div className="p-5 gap-5 grid grid-cols-2 lg:grid-cols-4">
          {dataCargo.map((value, index) => (
            <div key={index}>
              <img src={value.image} alt={value.title} width={100} />
              <div className="flex items-center my-3 font-bold">
                <div className="mr-2 bg-yellow-300 p-1 px-2">{value.id}</div>
                <div>{value.title}</div>
              </div>
              <p className="text-slate-400">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto my-10">
        <div className="p-5 flex">
          <div>
            <h2>
              Tercepat dan Menjangkau seluruh pelosok Indonesia, menggunakan
              pesawat sendiri.
            </h2>
            <p>
              Dengan Lion Parcel, Anda dapat mengirim paket ke seluruh pelosok
              Indonesia yang didukung oleh armada pesawat Lion Air Group, tanpa
              khawatir menunggu terlalu lama
            </p>
          </div>
          <div></div>
        </div>
      </div>

      <div className="flex items-center bg-slate-800 text-white">
        <div className="w-1/2 bg-slate-700/70 flex justify-end">
          <h2 className="p-10 text-2xl">
            We give you complete control of your shipment.
          </h2>
        </div>
        <div className="w-full p-5">
          <h2 className="text-xl font-bold mb-2">Our Company</h2>
          <p>
            Our team discussed every single detail to make sure Boo is the most
            versatile and unique theme created so far.
          </p>
          <p>
            Now were up in the big leagues getting’ our turn at bat. And when
            the odds are against him and their dangers work to do Duis aute
            irure dolorEquita Group is a representative logistics operator.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home
