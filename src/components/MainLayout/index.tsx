import React, { FunctionComponent, ReactNode } from 'react'
import Footer from '@/components/General/Footer'
import Header from '@/components/General/Header'
import HeaderList from '@/components/General/Atom/HeaderList'

type Props = {
  children: ReactNode
}

const MainLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <HeaderList />
      <main className="bg-white">{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
