import { getAxiosConfig } from '@/requests/axiosInstance'

const resolver = getAxiosConfig(false)
const URL_PATH = '/home-banners'

export const getHomeBanner = async () => {
  try {
    const response = await resolver.get(`${URL_PATH}`)
    return response
  } catch ({ response }) {
    return response
  }
}
