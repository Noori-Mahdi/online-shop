'use client'

import { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
interface CheckBoxType {
  checkboxText: string
  active?: boolean
  onClick: (e: boolean) => void
}

const CheckBox = ({ onClick, checkboxText, active = false }: CheckBoxType) => {
  const [value, setValue] = useState(active)

  useEffect(() => {
    setValue(active)
  }, [active])

  return (
    <div
      onClick={() => {
        setValue(!value)
        onClick(!value)
      }}
      className="flex items-center justify-start cursor-pointer gap-2 my-2"
    >
      <div
        className={`flex justify-center items-center w-4 h-4 rounded-sm border border-gray-500 transition-all duration-400 ease-in-out ${value ? 'bg-sky-500 scale-110' : 'scale-100'}`}
      >
        {value && (
          <FaCheck className="text-xs text-white opacity-100 transition-opacity duration-300 ease-in-out" />
        )}
      </div>
      <span className="text-sm select-none">{checkboxText}</span>
    </div>
  )
}

export default CheckBox
