import { TTooltipProps } from '@/types/type'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const Tooltip = ({
  children,
  text,
  position = 'top',
  className,
  tooltipActive = false,
}: TTooltipProps) => {
  const [visible, setVisible] = useState(false)

  if (!tooltipActive) {
    return <>{children}</>
  }

  const tooltipPosition = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={
            twMerge(
              'absolute p-3 bg-gray-500 text-white text-xs rounded',
              tooltipPosition[position],
              className
            )
          }
        >
          {text}
        </div>
      )}
    </div>
  )
}

export default Tooltip
