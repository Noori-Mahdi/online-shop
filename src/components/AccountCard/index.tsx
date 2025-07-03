'use client'

import { TAccountCardProps } from '@/types/type'
import { FaRegUser } from 'react-icons/fa'


const AccountCard = ({
  id,
  userName,
  userImg,
  handleClick,
}: TAccountCardProps) => {
  return (
    <div
      onClick={() => handleClick(id)}
      className="w-36 h-36 border cursor-pointer rounded-sm border-gray-500 transition-transform duration-300 ease-in-out hover:scale-105 hover:border-blue-500"
    >
      <div className="w-full flex justify-center items-center text-4xl h-4/5 border-1 border-gray-500 bg-gray-500">
        {userImg ? userImg : <FaRegUser />}
      </div>
      <div className="w-full h-1/5 truncate text-center font-normal text-sm p-1">
        {userName}
      </div>
    </div>
  )
}

export default AccountCard
