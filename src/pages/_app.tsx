// @ts-nocheck
import '../styles/globals.css'
import '../styles/slick.min.css'
import type { AppProps } from 'next/app'
import MainLayout from '@/components/MainLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
