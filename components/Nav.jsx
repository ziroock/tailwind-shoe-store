import Image from 'next/image'

import nikeLogo from '@/assets/nike-logo.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { TbShoppingBag } from 'react-icons/tb'

const ROUTES = ['Home', 'About', 'Pricing', 'Contact']

export default function Nav() {
  return (
    <nav className="flex flex-wrap items-center justify-between">
      <Image className="h-20 w-20" src={nikeLogo} alt="Nike Logo" />
      <button className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 lg:hidden">
        <RxHamburgerMenu size={25} />
      </button>
      <div className="w-full">
        <ul className="p4 rounded-lg border border-gray-50 bg-gray-50 text-lg">
          {ROUTES.map((route, i) => (
            <li
              className={`cursor-pointer rounded px-3 py-2 ${i === 0 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed bottom-4 left-4 lg:static">
        <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  )
}
