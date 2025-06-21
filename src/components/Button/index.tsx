'use client'

interface ButtonType {
  label: string | React.ReactNode
  type: 'submit' | 'reset' | 'button'
  color?: 'primary' | 'danger' | 'success' | 'transparent'
  rounded?: 'full' | 'normal' | 'none'
  disabled?: boolean
  className?: string
  animation?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  label,
  type,
  disabled,
  className,
  animation = true,
  color = 'primary',
  rounded = 'none',
  onClick,
}: ButtonType) => {
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
      className={`py-2 w-full h-full font-semibold 
         ${BtnRounded[rounded]}
         ${BtnColor[color]}
         ${disabled ? 'cursor-not-allowed' : 'cursor-pointer '} 
         ${animation && ' transition-all duration-300 ease-in-out hover:shadow-lg '}
         ${className} `}
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
