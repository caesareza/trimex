import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { IMenu, IResponse } from '@/type/global'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import { getAllPage } from '@/requests/services/pages'
import { useStoreActions, useStoreState } from 'easy-peasy'

export default function Header() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isMenuShow, setIsMenuShow] = useState<boolean>(false)
  const menuRef = useRef<any>(null)
  const { mainMenu } = useStoreState((state: any) => state.menu)
  const { addMenu } = useStoreActions((action: any) => action.menu)

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuShow(false)
    }
  }

  const fetchAllPages = async () => {
    setIsLoading(true)

    const response: any | IResponse = await getAllPage()

    if (response.status !== 200) {
      return
    }

    const { data } = response.data
    addMenu(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchAllPages()

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const MenuMobile = () => {
    if (!isMenuShow) return <></>

    return (
      <section
        id="menu-mobile"
        className="bg-white fixed z-10 left-0 top-0 w-full h-full text-center"
      >
        <div className="container mx-auto relative">
          <button
            className="absolute right-5 top-7"
            onClick={() => setIsMenuShow(!isMenuShow)}
          >
            <IoMdClose size={30} />
          </button>
          <h3 className="py-5">Menu</h3>
          <ul className="">
            <li>
              <Link href="/">
                <a className="px-2 text-slate-400 hover:text-yellow-300">
                  Beranda
                </a>
              </Link>
            </li>
            {isLoading
              ? ''
              : mainMenu?.map((value: IMenu) => (
                  <li key={value.id}>
                    <Link href="/site/[slug]" as={`/site/${value.slug}`}>
                      <a className="p-5 text-2xl p-5 border-b block">
                        {value.title}
                      </a>
                    </Link>
                  </li>
                ))}
          </ul>
        </div>
      </section>
    )
  }

  return (
    <header className="w-full bg-white">
      <div className="container mx-auto">
        <div className="p-5 flex items-center">
          <Link href="/">
            <a className="logo font-bold flex items-center">
              <div className="mr-3">
                <img
                  src="/images/logo/logo-trimex.svg"
                  alt="logo trimex"
                  width={50}
                />
              </div>
              <div className="uppercase flex flex-col">
                <span className="font-bold">Terima Express</span>
                <span className="text-xs">One stop service</span>
              </div>
            </a>
          </Link>
          <ul className="ml-0 lg:ml-auto hidden lg:flex">
            <li>
              <Link href="/">
                <a className="p-5">Beranda</a>
              </Link>
            </li>
            {isLoading
              ? ''
              : mainMenu?.map((value: IMenu) => (
                  <li key={value.id}>
                    <Link href="/site/[slug]" as={`/site/${value.slug}`}>
                      <a className="p-5">{value.title}</a>
                    </Link>
                  </li>
                ))}
          </ul>

          <button
            className="ml-auto lg:ml-0"
            onClick={() => setIsMenuShow(!isMenuShow)}
            ref={menuRef}
          >
            <HiOutlineMenuAlt3 size={23} />
          </button>
        </div>
      </div>

      <MenuMobile />
    </header>
  )
}
