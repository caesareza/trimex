import axios, { AxiosRequestConfig } from 'axios'

export function getAxiosConfig(isAuth: boolean) {
  const options = {
    baseURL: `${process.env.NEXT_PUBLIC_URL_API}/api/v1`,
    headers: {
      'Content-type': 'application/json',
    },
  }

  if (!isAuth) return axios.create(options)

  const instance = axios.create(options)

  instance.interceptors.request.use(async function (
    config: AxiosRequestConfig
  ) {
    let token = ''
    const EasyPeasyStore = localStorage.getItem('userLoginStatus')

    if (EasyPeasyStore !== null) {
      const { data } = JSON.parse(EasyPeasyStore)
      token = data.access_token
    }

    if (token !== '') {
      // @ts-ignore
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  })

  return instance
}

export function uploadAxiosConfig(isAuth: boolean) {
  const options = {
    baseURL: process.env.BACKEND_URL,
    headers: {
      'Content-type': 'multipart/form-data',
    },
  }

  if (!isAuth) return axios.create(options)

  const instance = axios.create(options)

  instance.interceptors.request.use(async function (
    config: AxiosRequestConfig
  ) {
    let token = ''
    const EasyPeasyStore = sessionStorage.getItem(
      '[EasyPeasyStore][0][userSession]'
    )

    if (EasyPeasyStore !== null) {
      const { data } = JSON.parse(EasyPeasyStore)
      token = data.token
    }

    if (token !== '') {
      // @ts-ignore
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  })

  return instance
}
