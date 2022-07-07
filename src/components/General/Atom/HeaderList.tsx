import React, { FunctionComponent } from 'react'
import { useRouter } from 'next/router'

const HeaderList: FunctionComponent = () => {
  const router = useRouter()
  const pathName = ['/']

  if (pathName.includes(router.pathname)) return <></>

  return (
    <div className="flex">
      <div className="w-1/2 h-2 bg-yellow-300"></div>
      <div className="w-full bg-yellow-500"></div>
    </div>
  )
}

export default HeaderList
