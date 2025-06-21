'use client'

import { useEffect, useState } from 'react'
import { IoIosEyeOff, IoIosEye } from 'react-icons/io'
import Tooltip from '../Tooltip'
import PasswordRules from '@/ui/PasswordRules/PasswordRules'
import validation from '@/utils/validation'
import { GoDotFill } from 'react-icons/go'
interface InputType {
  type: 'email' | 'password' | 'text' | 'phone'
  name: string
  label?: string
  defaultValue?: string
  placeholder?: string
  required?: boolean
  TooltipText?: string | React.ReactNode
  TooltipActive?: boolean
  TooltipPosition?: 'top' | 'bottom' | 'right' | 'left'
  error?: string
  activeValidation?: boolean
  className?: string
  readOnly?: boolean
  onCheckValid?: (e: boolean) => void
  onChange?: (e: string) => void
}

const Input = ({
  type,
  label,
  name,
  activeValidation = true,
  required = false,
  TooltipActive,
  TooltipPosition,
  TooltipText,
  defaultValue,
  error,
  placeholder,
  readOnly,
  className,
  onChange,
  onCheckValid,
}: InputType) => {
  const [value, setValue] = useState(defaultValue ? defaultValue : '')
  const [focus, setFocus] = useState(false)
  const [valid, setValid] = useState({
    isValid: true,
    message: '',
  })
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    onCheckValid && onCheckValid(valid.isValid)
  }, [valid.isValid])

  return (
    <div className={`${label && 'my-6'} w-full`}>
      <div className="relative">
        <Tooltip
          text={
            type === 'password' && TooltipActive ? (
              <PasswordRules password={value ?? ''} />
            ) : (
              TooltipText
            )
          }
          position={TooltipPosition}
          tooltipActive={TooltipActive}
        >
          <label
            className={`absolute select-none cursor-pointer flex items-center justify-between w-full transition-all duration-200 ${
              focus || value.length != 0
                ? 'top-0 -translate-y-5'
                : 'top-1/2 -translate-y-1/2 p-2'
            } capitalize font-medium text-sm tracking-wide`}
            htmlFor={name}
          >
            <span className="select-none cursor-pointer">
              {label} {required && <span className="text-red-600">*</span>}
            </span>

            {type === 'password' &&
              (showPassword ? (
                <div className="flex items-center">
                  <IoIosEye />
                  <span
                    className="text-xs pl-1"
                    onClick={() => setShowPassword(false)}
                  >
                    Show
                  </span>
                </div>
              ) : (
                <div className="flex items-center">
                  <IoIosEyeOff />
                  <span
                    className="text-xs pl-1"
                    onClick={() => setShowPassword(true)}
                  >
                    Hiden
                  </span>
                </div>
              ))}
          </label>
          <input
            className={`w-full p-2 border rounded-md text-base font-medium tracking-wide outline-0 transition-all duration-300 ease-in-out hover:border-blue-500 placeholder:text-xs placeholder:font-bold focus:ring-2 focus:ring-blue-500 ${className}`}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) => {
              setValue(e.target.value)
              if (value.length > 0 && activeValidation) {
                setValid(validation(e.target.value, type))
              } else if (required && activeValidation) {
                setValid({ isValid: false, message: 'This field is required.' })
              } else {
                setValid({ isValid: true, message: '' })
              }
              onChange && onChange(e.target.value)
            }}
            id={name}
            readOnly={readOnly}
            name={name}
            type={
              type === 'password'
                ? showPassword
                  ? 'text'
                  : 'password'
                : 'text'
            }
            value={value}
            required={required}
            placeholder={focus || !label ? placeholder : undefined}
          ></input>
        </Tooltip>
      </div>
      {(error || !valid.isValid) && (
        <div className="text-red-600 w-full flex gap-1 items-center text-sm mt-1">
          <GoDotFill className="text-xs font-semibold" />
          <span className="whitespace-normal truncate break-words">
            {error || valid.message}
          </span>
        </div>
      )}
    </div>
  )
}

export default Input
