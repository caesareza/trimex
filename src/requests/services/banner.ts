import { getAxiosConfig } from '@/requests/axiosInstance'

const resolver = getAxiosConfig(false)
const URL_PATH = '/home-banners'

export const getHomeBanner = async () => {
  try {
    return await resolver.get(`${URL_PATH}`)
  } catch ({ response }) {
    return response
  }
}
