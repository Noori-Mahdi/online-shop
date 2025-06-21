'use client'
import Button from '@/components/Button'
import { useContext, useState } from 'react'
import { LuUserRound } from 'react-icons/lu'
import { IoMdExit } from 'react-icons/io'
import { Context } from '@/context/MainContext'
import Link from 'next/link'
const MinProfile = () => {
  const [showList, setShowList] = useState(false)
  const { handleLogout, isLoggedIn } = useContext(Context)

  if (!isLoggedIn) {
    return (
      <div>
        <Link
          className="bg-gray-500 font-bold text-sm md:text-base px-3 py-1.5 capitalize rounded-sm tracking-wide"
          href={'/login'}
        >
          sign In
        </Link>
      </div>
    )
  }

  return (
    <div className="relative w-7 h-7">
      <Button
        className="flex justify-center items-center rounded-full text-base m-0 p-0"
        label={<LuUserRound />}
        type="button"
        onClick={() => {
          setShowList(!showList)
        }}
      />
      {showList && (
        <div className="absolute p-2 right-0 bg-gray-500 w-54 translate-y-3.5 rounded-sm">
          <div className="absolute rotate-45 -translate-y-1/2 w-3 h-3 bg-gray-500 right-2 top-0"></div>
          <ul>
            <li
              onClick={handleLogout}
              className="flex justify-between text-red-600 cursor-pointer font-bold items-center"
            >
              <span className="text-base">Exit</span>
              <IoMdExit className="text-lg" />
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default MinProfile
