import React, { useEffect } from 'react'
import { FaRegPaperPlane, FaHistory } from 'react-icons/fa'
import { GiCargoShip, GiShipBow } from 'react-icons/gi'
import { MdLocalShipping, MdTimelapse } from 'react-icons/md'

export default function Resi({ resi }: any) {
  const fetchTrackingOrder = async () => {
    console.log('resi', resi)
  }
  useEffect(() => {
    fetchTrackingOrder()
  }, [])

  return (
    <section id="tracking-order">
      <div className="p-5 container mx-auto">
        <h1 className="text-2xl font-bold text-center">Track Your Order</h1>
        <div className="text-lg text-slate-600 mb-5">
          <div className="flex items-center border-b border-slate-300 py-2  text-2xl">
            <FaRegPaperPlane />
            <span className="ml-2">{resi}</span>
          </div>
          <div className="grid grid-cols-5 gap-0">
            <div className="border p-5">
              <div className="flex items-center text-gray-400">
                <GiCargoShip />
                <span className="ml-1">Shipment Service</span>
              </div>
              <div className="text-2xl font-bold">CTC</div>
            </div>
            <div className="border p-5">
              <div className="flex items-center text-gray-400">
                <GiShipBow />
                <span className="ml-1">From</span>
              </div>
              <div className="text-2xl font-bold">Jakarta</div>
            </div>
            <div className="border p-5">
              <div className="flex items-center text-gray-400">
                <MdLocalShipping />
                <span className="ml-1">To</span>
              </div>
              <div className="text-2xl font-bold">Bali</div>
            </div>
            <div className="border p-5">
              <div className="flex items-center text-gray-400">
                <MdTimelapse />
                <span className="ml-1">Estimate Delivery</span>
              </div>
              <div>2 Days</div>
            </div>
            <div className="border p-5">
              <div className="flex items-center text-gray-400">
                <MdLocalShipping />
                <span className="ml-1">Pod Date</span>
              </div>
              <div>24 MAY 2022 11:43</div>
            </div>
          </div>
        </div>

        <div className="text-lg text-slate-600 mb-5">
          <div className="flex items-center border-b border-slate-300 py-2 text-2xl mb-3">
            <FaHistory />
            <span className="ml-2">History Status</span>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <ul role="list" className="">
              {[0, 1, 2].map((index) => (
                <li key={index} className="border-b relative">
                  <div className="border-l-4 ml-2 p-3 before:absolute before:w-3 before:h-3 before:rounded-full before:bg-slate-100 before:border before:border-slate-300 before:left-1 before:top-5">
                    <div className="uppercase">
                      SHIPMENT RECEIVED BY JNE COUNTER OFFICER AT [JAKARTA]
                    </div>
                    <div className="text-xs text-slate-400/80">
                      23-12-2022 15.15
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <div>Receiver Name</div>
              <div>Nisa</div>
            </div>
          </div>
        </div>

        <div className="text-lg text-slate-600 mb-5">
          <div className="flex items-center border-b border-slate-300 py-2 text-2xl mb-3">
            <FaHistory />
            <span className="ml-2">Shippment Detail</span>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div>
              <div className="flex items-center text-gray-400">
                <GiCargoShip />
                <span className="ml-1">Shipment Date</span>
              </div>
              <div>23-05-2022 16:52</div>
            </div>
            <div>
              <div className="flex items-center text-gray-400">
                <GiCargoShip />
                <span className="ml-1">Koli</span>
              </div>
              <div>1</div>
            </div>
            <div>
              <div className="flex items-center text-gray-400">
                <GiCargoShip />
                <span className="ml-1">Weight</span>
              </div>
              <div>1 Kg</div>
            </div>
          </div>
          <div>
            <div className="flex items-center text-gray-400 mt-2">
              <GiCargoShip />
              <span className="ml-1">Good Description</span>
            </div>
            <div>Mouse</div>
          </div>
        </div>

        <div className="text-lg text-slate-600 mb-5">
          <div className="flex items-center border-b border-slate-300 py-2 text-2xl mb-3">
            <FaHistory />
            <span className="ml-2">Shippment Information</span>
          </div>

          <div>
            <div>
              <div className="flex items-center text-gray-400 mt-2">
                <GiCargoShip />
                <span className="ml-1">Shipper Name</span>
              </div>
              <div>Yuli</div>
            </div>

            <div>
              <div className="flex items-center text-gray-400 mt-2">
                <GiCargoShip />
                <span className="ml-1">Shipper City</span>
              </div>
              <div>JAKARTA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps({ query }: any) {
  const { resi } = query
  return {
    props: { resi }, // will be passed to the page component as props
  }
}
