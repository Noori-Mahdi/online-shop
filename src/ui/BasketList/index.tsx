'use client'
import Button from '@/components/Button'
import { useState } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi2'

const BasketList = () => {
  const [showList, setShowList] = useState(false)


  return (
    <div className="w-7 h-7">
      <Button
        className="flex justify-center items-center rounded-full text-base m-0 p-0"
        label={<HiOutlineShoppingCart />}
        type="button"
        onClick={() => {
          setShowList(!showList)
        }}
      />
      {showList && (
        <div className="fixed mt-3.5 rounded-sm right-0 bg-amber-400 w-1/4 h-full"></div>
      )}
    </div>
  )
}

export default BasketList
