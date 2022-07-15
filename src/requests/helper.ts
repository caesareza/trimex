export const imageUrl = (image: string) => {
  const path = 'smartguysindonesia/image/upload/v1647495589'
  return `${process.env.IMAGE_URL}/${path}/${image}`
}

export const formatPrice = (price: number) => {
  const newPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(price)

  return newPrice
}

export const formatTanggal = (tanggal: any) => {
  if (!tanggal) return

  const o = new Intl.DateTimeFormat('id', {
    timeStyle: 'medium',
    dateStyle: 'long',
  })
  return o.format(new Date(tanggal))
}
