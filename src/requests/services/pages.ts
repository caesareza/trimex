import { getAxiosConfig } from '@/requests/axiosInstance'

const resolver = getAxiosConfig(false)
const URL_PATH = '/pages'

/**
 * getPageDetail by pageSlug
 * @param pageId
 */
export const getPageDetail = async (pageSlug: string) => {
  try {
    const response = await resolver.get(`${URL_PATH}/${pageSlug}`)
    return response
  } catch ({ response }) {
    return response
  }
}

export const getAllPage = async () => {
  try {
    const response = await resolver.get(`${URL_PATH}`)
    return response
  } catch ({ response }) {
    return response
  }
}
