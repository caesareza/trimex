import React, { useEffect, useState } from 'react'
import { FaRegPaperPlane, FaHistory } from 'react-icons/fa'
import { GiCargoShip, GiShipBow } from 'react-icons/gi'
import { MdLocalShipping, MdTimelapse } from 'react-icons/md'
import { IOrder } from '@/type/order'
import { getOrderDetail } from '@/requests/services/order'
import { IResponse } from '@/type/global'
import TrackingLoader from '@/components/Loader/TrackingLoader'
import { formatTanggal } from '@/requests/helper'
import Alert from '@/components/General/Atom/Alert'

type IResi = {
  resi: number
}

export default function Resi({ resi }: IResi) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isDataNotFound, setIsDataNotFound] = useState<boolean>(false)
  const [orderData, setOrderData] = useState<IOrder>()

  const fetchTrackingOrder = async () => {
    setIsLoading(true)

    const response: any | IResponse = await getOrderDetail(resi)
    if (response.status !== 200) {
      setIsDataNotFound(true)
      setIsLoading(false)
    }

    setOrderData(response.data.data)
    setIsLoading(false)
  }
  useEffect(() => {
    fetchTrackingOrder()
  }, [])

  if (isLoading) return <TrackingLoader />
  if (isDataNotFound) {
    return (
      <div className="p-5 container mx-auto">
        <h1 className="text-2xl font-bold text-center">Track Your Order</h1>
        <Alert message="Resi tidak ditemukan" />
      </div>
    )
  }

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
              <div className="text-2xl font-bold">{orderData?.origin_name}</div>
            </div>
            <div className="border p-5">
              <div className="flex items-center text-gray-400">
                <MdLocalShipping />
                <span className="ml-1">To</span>
              </div>
              <div className="text-2xl font-bold">
                {orderData?.shipping_rate_name}
              </div>
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
              <div>{formatTanggal(orderData?.created_at)}</div>
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
              {orderData?.order_histories?.map((value, index: number) => (
                <li key={index} className="border-b relative">
                  <div className="border-l-4 ml-2 p-3 before:absolute before:w-3 before:h-3 before:rounded-full before:bg-slate-100 before:border before:border-slate-300 before:left-1 before:top-5">
                    <div className="uppercase">{value.description}</div>
                    <div className="text-xs text-slate-400/80">
                      {formatTanggal(value.created_at)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <div>Receiver Name</div>
              <div>{orderData?.receiver_name}</div>
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
              <div>{formatTanggal(orderData?.created_at)}</div>
            </div>
            <div>
              <div className="flex items-center text-gray-400">
                <GiCargoShip />
                <span className="ml-1">Koli</span>
              </div>
              <div>{orderData?.koli}</div>
            </div>
            <div>
              <div className="flex items-center text-gray-400">
                <GiCargoShip />
                <span className="ml-1">Weight</span>
              </div>
              <div>{orderData?.weight} Kg</div>
            </div>
          </div>
          <div>
            <div className="flex items-center text-gray-400 mt-2">
              <GiCargoShip />
              <span className="ml-1">Good Description</span>
            </div>
            <div>{orderData?.contents}</div>
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
              <div>{orderData?.sender_name}</div>
            </div>

            <div>
              <div className="flex items-center text-gray-400 mt-2">
                <GiCargoShip />
                <span className="ml-1">Shipper City</span>
              </div>
              <div>{orderData?.origin_name}</div>
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
