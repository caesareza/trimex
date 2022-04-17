import React, { FunctionComponent } from 'react'
import Footer from '@/components/General/Footer'
import Header from '@/components/General/Header'

type Props = {
  children: any
}

const MainLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-white">{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
