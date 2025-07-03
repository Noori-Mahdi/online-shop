'use client'

import { TCheckBoxProps } from '@/types/type'
import { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'

const CheckBox = ({
  onClick,
  checkboxText,
  active = false,
  className,
  disable = false,
}: TCheckBoxProps) => {
  const [value, setValue] = useState(active)

  useEffect(() => {
    setValue(active)
  }, [active])

  return (
    <div
      className={twMerge('flex items-center justify-start gap-2', className)}
    >
      <div
        onClick={() => {
          if (!disable) {
            setValue(!value)
            onClick(!value)
          }
        }}
        className={twMerge(
          `flex justify-center items-center  cursor-pointer w-4 h-4 rounded-sm border border-gray-500 transition-all duration-400 ease-in-out`,
          value ? 'bg-sky-500 scale-110' : 'scale-100',
          disable && 'bg-gray-500 cursor-not-allowed'
        )}
      >
        {value && (
          <FaCheck className="text-xs text-white opacity-100 transition-opacity duration-300 ease-in-out" />
        )}
      </div>
      <span
        onClick={() => {
          if (!disable) {
            setValue(!value)
            onClick(!value)
          }
        }}
        className="text-sm select-none"
      >
        {checkboxText}
      </span>
    </div>
  )
}

export default CheckBox
