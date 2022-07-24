// @ts-nocheck
import '../styles/globals.css'
import '../styles/slick.min.css'
import type { AppProps } from 'next/app'
import MainLayout from '@/components/MainLayout'
import { StoreProvider } from 'easy-peasy'
import { store } from '@/requests/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </StoreProvider>
  )
}

export default MyApp
