'use client'

import Image from 'next/image'
import { useState } from 'react'

import nikeLogo from '@/assets/nike-logo.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { TbShoppingBag } from 'react-icons/tb'

const ROUTES = ['Home', 'About', 'Services', 'Pricing', 'Contact']

export default function Nav() {
  const [isMobileMenueShown, setIsMobileMenueShown] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between">
      {/* Logo */}
      <Image className="h-20 w-20" src={nikeLogo} alt="Nike Logo" />

      {/* Hamburger menu */}
      <button
        onClick={() => setIsMobileMenueShown(!isMobileMenueShown)}
        className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>

      {/* Menu list */}
      <div className={`${!isMobileMenueShown && 'hidden'} w-full lg:block lg:w-auto`}>
        <ul className="flex flex-col rounded-lg border border-gray-50 bg-gray-50 p-4 text-lg lg:flex-row lg:space-x-8 lg:border-none lg:bg-transparent">
          {ROUTES.map((route, i) => (
            <li
              className={`cursor-pointer rounded px-3 py-2 ${i === 0 ? 'bg-blue-500 text-white lg:bg-transparent lg:text-blue-500' : 'hover:bg-gray-100'}`}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>

      {/* Shopping bag */}
      <div className="fixed bottom-4 left-4 lg:static">
        <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  )
}
