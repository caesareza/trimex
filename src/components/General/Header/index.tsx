import React from 'react'
import Link from 'next/link'
import { menu } from '@/data/menu'
import { IMenu } from '@/type/global'

export default function Header() {
  return (
    <header className="fixed bg-black/30 text-white w-full backdrop-blur z-10">
      <div className="container mx-auto">
        <div className="p-5 flex">
          <div className="logo font-bold">TerimaExpress.com</div>
          <ul className="ml-auto flex">
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
