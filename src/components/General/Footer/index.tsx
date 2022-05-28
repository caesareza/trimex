import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-slate-700 text-white">
      <div className="container mx-auto">
        <div className="p-5 mt-5">
          <div className="text-center">
            <div>
              <div className="flex justify-center mb-3">
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
              </div>
              <p>
                Our team discussed every single detail to make sure Boo is the
                most versatile and unique theme created so far.
              </p>
            </div>
          </div>
          <nav className="text-center mb-5">
            <Link href="/">
              <a className="px-2 text-slate-400 hover:text-yellow-300">
                Beranda
              </a>
            </Link>
            <Link href="/">
              <a className="px-2 text-slate-400 hover:text-yellow-300">
                Tentang Perusahaan
              </a>
            </Link>
            <Link href="/">
              <a className="px-2 text-slate-400 hover:text-yellow-300 ">
                Kontak Kami
              </a>
            </Link>
          </nav>
          <div className="border-t border-slate-500 text-center p-5">
            Copyright © {year} terimaexpress.com. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
