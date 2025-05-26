'use client'

interface AccountCardType {
  userName: string
  userImg: string
}

const AccountCard = ({ userName, userImg }: AccountCardType) => {
  return (
    <div className="w-44 h-44 border cursor-pointer rounded-sm border-gray-500 transition-transform duration-300 ease-in-out hover:scale-105 hover:border-blue-500">
      <div className="w-full h-4/5 border-1 border-gray-500 bg-gray-500">
        {userImg}
      </div>
      <div className="w-full h-1/5 truncate text-center font-normal text-sm p-1">
        {userName}
      </div>
    </div>
  )
}

export default AccountCard
