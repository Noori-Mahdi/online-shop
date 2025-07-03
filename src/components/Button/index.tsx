'use client'

import { TButtomProps } from '@/types/type'
import { twMerge } from 'tailwind-merge'

const Button = ({
  label,
  type,
  disabled,
  className,
  animation = true,
  color = 'primary',
  rounded = 'none',
  onClick,
}: TButtomProps) => {
  const BtnColor = {
    primary: 'text-white hover:bg-gray-600 bg-gray-500',
    danger: 'hover:bg-red-600 bg-red-500',
    success: 'hover:bg-green-600 bg-green-500',
    transparent: 'text-gray-900 bg-transparent',
  }
  const BtnRounded = {
    full: 'rounded-full',
    normal: 'rounded-sm',
    none: '',
  }
  return (
    <button
      className={twMerge(
        'py-2 w-full h-full font-semibold ',
        BtnRounded[rounded],
        BtnColor[color],
        animation &&
          ' transition-all duration-300 ease-in-out hover:shadow-lg ',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer ',
        className
      )}
      type={type}
      disabled={disabled ?? false}
      onClick={(e) => {
        onClick && onClick(e)
      }}
    >
      {label}
    </button>
  )
}

export default Button
