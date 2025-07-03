'use client'
import Button from '@/components/Button'
import { TNavLinksProps } from '@/types/type'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'




const NavLinks = ({
  listLink,
  type = 'normal',
  classNameList = '',
  classNameBtn = '',
  label,
  onClose,
}: TNavLinksProps) => {
  const [showList, setShowList] = useState(false)
  const pathname = usePathname()

  if (type === 'normal') {
    return (
      <ul className={`${classNameList} flex `}>
        {listLink.map((link) => (
          <li key={link.path}>
            <Link
              className={`relative inline-block py-1 text-base font-medium
                ${pathname.includes(link.path) ? 'text-black' : 'text-gray-600'}
                transition-all duration-300 ease-in-out
                hover:text-black
                before:content-[''] before:absolute before:bottom-0 before:left-0
                before:w-0 before:h-[2px] before:bg-black
                before:transition-all before:duration-300 before:ease-in-out
                hover:before:w-full`}
              href={link.path}
            >
              {link.pageName}
            </Link>
          </li>
        ))}
      </ul>
    )
  } else {
    return (
      <div className="relative w-7 h-7">
        <Button
          className={`${classNameBtn} text-2xl`}
          label={<GiHamburgerMenu />}
          color="transparent"
          animation={false}
          type="button"
          onClick={() => {
            setShowList(!showList)
          }}
          aria-label="Toggle menu"
        />
        {/* بک‌دراپ نیمه شفاف */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ${
            showList
              ? 'opacity-70 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setShowList(false)}
        />
        {/* منوی کشویی */}
        <div
          className={`
            ${showList ? 'translate-x-0' : 'translate-x-full'} 
            ${classNameList}
          `}
        >
          <div className={`flex items-center w-full justify-between mb-6`}>
            {label && (
              <span className="capitalize text-gray-100 text-2xl font-semibold">
                {label}
              </span>
            )}
            <button
              onClick={() => setShowList(false)}
              aria-label="Close menu"
              className="text-gray-100 cursor-pointer hover:text-red-600 text-3xl transition-all duration-300 ease-in-out transform "
            >
              <IoClose />
            </button>
          </div>
          <ul className="text-center sm:text-start">
            {listLink.map((link) => (
              <li key={link.path}>
                <Link
                  className={`block my-3 text-lg relative transition-all duration-300 ease-in-out group ${
                    pathname.includes(link.path)
                      ? 'text-gray-100 font-semibold'
                      : 'text-gray-500'
                  } hover:text-gray-300`}
                  href={link.path}
                  onClick={() => setShowList(false)}
                >
                  {link.pageName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default NavLinks
