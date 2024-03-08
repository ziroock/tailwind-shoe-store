import Image from 'next/image'

import nikeLogo from '@/assets/nike-logo.svg'
import { RxHamburgerMenu } from 'react-icons/rx'

const ROUTES = ['Home', 'About', 'Pricing', 'Contact']

export default function Nav() {
  return (
    <nav className="flex flex-wrap items-center justify-between">
      <Image className="h-20 w-20" src={nikeLogo} alt="Nike Logo" />
      <button className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
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
    </nav>
  )
}
