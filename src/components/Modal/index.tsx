'use client'

import { TModalProps } from '@/types/type'
import { useEffect, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import { IoWarningOutline } from 'react-icons/io5'
import { MdInfoOutline, MdOutlineReportGmailerrorred } from 'react-icons/md'
import { twMerge } from 'tailwind-merge'

const Modal = ({
  type = null,
  isOpen = false,
  onClose,
  className,
  children,
  size,
  label,
}: TModalProps) => {
  const [show, setShow] = useState(isOpen)

  useEffect(() => {
    setShow(isOpen)
  }, [isOpen])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 w-full flex items-center justify-center">
      <div
        style={{ backgroundColor: 'rgba(20,20,20,0.7)' }}
        className="absolute left-0 top-0 w-full h-full "
      ></div>
      <div
        className={twMerge(
          `px-3 py-4 rounded shadow-lg border text-zinc-200 bg-neutral-900 border-sky-500 relative`,
          size ? size : 'w-96',
          className
        )}
      >
        <div
          className={twMerge(
            'flex justify-end items-center text-lg',
            (type != null || label) && 'justify-between'
          )}
        >
          <div className="flex gap-2 items-center">
            {type === 'warning' ? (
              <IoWarningOutline className="text-yellow-500" />
            ) : type === 'info' ? (
              <MdInfoOutline className="text-sky-600" />
            ) : type === 'error' ? (
              <MdOutlineReportGmailerrorred className="text-red-800" />
            ) : null}
            {label ? (
              <span className="capitalize tracking-wide font-semibold">
                {label}
              </span>
            ) : (
              <span className="capitalize tracking-wide font-semibold">
                {type}
              </span>
            )}
          </div>
          <IoIosClose
            className=" cursor-pointer text-2xl text-gray-300 hover:text-red-600"
            onClick={onClose}
          />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
