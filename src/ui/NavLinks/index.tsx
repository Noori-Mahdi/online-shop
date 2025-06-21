'use client'
import Button from '@/components/Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

interface Link {
  pageName: string
  path: string
}

interface NavLinksPropsType {
  listLink: Link[]
  type?: 'normal' | 'hamburger'
  classNameList?: string
  classNameBtn?: string
  label?: string
  onClose?: () => void
}

const NavLinks = ({
  listLink,
  type = 'normal',
  classNameList,
  classNameBtn,
  label,
  onClose,
}: NavLinksPropsType) => {
  const [showList, setShowList] = useState(false)
  const pathname = usePathname()

  if (type === 'normal') {
    return (
      <ul className={` ${classNameList}`}>
        {listLink.map((link) => (
          <li key={link.path}>
            <Link
              className={`${pathname.includes(link.path) && 'text-black'} hover:underline ease-in transform`}
              href={'/profile'}
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
          className={`${classNameBtn}`}
          label={<GiHamburgerMenu />}
          color="transparent"
          animation={false}
          type="button"
          onClick={() => {
            setShowList(!showList)
          }}
        />
        {showList && (
          <ul className={`${classNameList}`}>
            <div
              className={`absolute cursor-pointer  top-0 left-0 p-2 w-full flex ${label ? 'justify-between' : 'justify-end'} items-center`}
            >
              {label && <span className="capitalize text-3xl">{label}</span>}
              <IoClose
                onClick={() => setShowList(false)}
                className=" left-0 top-0 text-gray-400 hover:text-red-600"
              />
            </div>
            {listLink.map((link) => (
              <li key={link.path}>
                <Link
                  className={`${pathname.includes(link.path) && 'text-gray-500'} hover:underline`}
                  href={'/profile'}
                >
                  {link.pageName}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default NavLinks
