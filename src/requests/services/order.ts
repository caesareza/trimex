import { getAxiosConfig } from '@/requests/axiosInstance'

const resolver = getAxiosConfig(false)
const URL_PATH = '/orders'

/**
 * getOrderDetail by ShippingNumber
 * @param noResi
 */
export const getOrderDetail = async (noResi: number) => {
  try {
    const response = await resolver.get(`${URL_PATH}/tracking/${noResi}`)
    return response
  } catch ({ response }) {
    return response
  }
}
