import React from 'react'
import Link from 'next/link'
import { menu } from '@/data/menu'
import { IMenu } from '@/type/global'

export default function Header() {
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
          <ul className="ml-auto hidden lg:flex">
            {menu.map((value: IMenu) => (
              <li key={value.keys}>
                <Link href={value.href} as={value.as}>
                  <a className="p-5">{value.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
