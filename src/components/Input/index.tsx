'use client'

import { useEffect, useState } from 'react'
import { IoIosEyeOff, IoIosEye } from 'react-icons/io'
import Tooltip from '../Tooltip'
import PasswordRules from '@/ui/PasswordRules/PasswordRules'
import validation from '@/utils/validation'
import { GoDot } from 'react-icons/go'
import { TInputProps } from '@/types/type'
import { twMerge } from 'tailwind-merge'

const Input = ({
  type,
  label,
  name,
  activeValidation = true,
  required = false,
  tooltipActive,
  tooltipPosition,
  tooltipText,
  toolTipClassName,
  defaultValue,
  error,
  placeholder,
  readOnly,
  className,
  onChange,
  onCheckValid,
}: TInputProps) => {
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
    <div className={`${label && 'my-8'} w-full`}>
      <div className="relative">
        <Tooltip
          text={
            type === 'password' && tooltipActive ? (
              <PasswordRules password={value ?? ''} />
            ) : (
              tooltipText
            )
          }
          position={tooltipPosition}
          tooltipActive={tooltipActive}
          className={toolTipClassName}
        >
          <label
            className={`absolute select-none cursor-pointer flex items-center justify-between w-full transition-all duration-200 ${
              focus || value.length != 0
                ? 'top-0 -translate-y-6'
                : 'top-1/2 -translate-y-1/2 p-2'
            } capitalize font-medium text-sm tracking-wide`}
            htmlFor={name}
          >
            <span className="select-none cursor-pointer">
              {label} {required && <span className="text-red-600">*</span>}
            </span>

            {type === 'password' &&
              (showPassword ? (
                <div
                  className="flex items-center"
                  onClick={() => setShowPassword(false)}
                >
                  <IoIosEye />
                  <span className="text-xs pl-1">Show</span>
                </div>
              ) : (
                <div
                  className="flex items-center"
                  onClick={() => setShowPassword(true)}
                >
                  <IoIosEyeOff />
                  <span className="text-xs pl-1">Hiden</span>
                </div>
              ))}
          </label>
          <input
            className={twMerge(
              'w-full p-2 border rounded-md text-base font-medium tracking-wide outline-0 transition-all duration-300 ease-in-out hover:border-blue-500 placeholder:text-xs placeholder:font-bold focus:ring-2 focus:ring-blue-500 z-10',
              className
            )}
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
        <div className="text-red-600 w-full flex gap-1 pl-3 items-center text-xs font-semibold mt-1">
          <GoDot className="text-xs" />
          <span className="whitespace-normal truncate break-words">
            {error || valid.message}
          </span>
        </div>
      )}
    </div>
  )
}

export default Input
