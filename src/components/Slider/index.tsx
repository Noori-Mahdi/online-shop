'use client'

import { getIconByTitle } from '@/utils/iconMap'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface SliderPropsType {
  title: string
  children: React.ReactNode
}

const Slider = ({ title, children }: SliderPropsType) => {
  return (
    <div>
      <div className="flex justify-between items-center py-3 text-lg font-bold ">
        <div className="capitalize">{title}</div>
        <div className="flex text-2xl gap-1">
          <IoIosArrowBack className="cursor-pointer" />
          <IoIosArrowForward className="cursor-pointer" />
        </div>
      </div>
      {children}
    </div>
  )
}

export default Slider
