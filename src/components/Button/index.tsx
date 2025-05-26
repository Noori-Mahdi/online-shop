'use client'

interface ButtonType {
  label: string | React.ReactNode
  type: 'submit' | 'reset' | 'button'
  disabled?: boolean
}

const Button = ({ label, type, disabled }: ButtonType) => {
  return (
    <button
      className={`bg-gray-500 font-semibold hover:bg-gray-600 text-white my-2 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer '} rounded-full py-2 w-full h-full transition-all duration-300 ease-in-out hover:shadow-lg`}
      type={type}
      disabled={disabled ?? false}
    >
      {label}
    </button>
  )
}

export default Button
