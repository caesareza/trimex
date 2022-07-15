export type IOrderHistory = {
  id: number
  order_id: number
  user_id: string
  user_name: string
  description: string
  city_id: string
  lat: string
  long: string
  created_at: string
}

export type IOrderStation = {
  id: number
  station_name: string
  station_branch: string
  address: string
  lat: string
  long: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export type IOrder = {
  id: number
  sender_name: string
  sender_phone: string
  receiver_name: string
  receiver_phone: string
  origin_id: number
  origin_name: string
  shipping_rate_id: number
  shipping_rate_name: string
  shipping_rate_price: number
  postal_code: string
  total_price: number
  koli: number
  weight: number
  volumetric: number
  dimention: string
  contents: string
  instruction: string
  service_type: string
  status: string
  product_type: string
  additional_price: boolean
  received_at: string
  shipping_number: string
  user_id: string
  station_id: number
  cost_method: string
  vendor_name: string
  created_at: string
  updated_at: string
  order_histories: IOrderHistory[]
  stations: IOrderStation
}
