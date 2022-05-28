import { IMenu } from '@/type/global'

export const menu: IMenu[] = [
  {
    id: 1,
    label: 'Beranda',
    href: '/',
    as: '/',
    keys: 'beranda',
  },
  {
    id: 2,
    label: 'Perusahaan',
    href: '/site/[slug]',
    as: '/site/perusahaan',
    keys: 'perusahaan',
  },
  {
    id: 3,
    label: 'Produk dan Layanan',
    href: '/site/[slug]',
    as: '/site/produk-dan-layanan',
    keys: 'produk-dan-layanan',
  },
].map((link: IMenu) => {
  link.keys = `main-menu-${link.id}`
  return link
})
