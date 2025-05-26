import React, { useState } from 'react'

interface TooltipType {
  children: React.ReactNode
  text: string | React.ReactNode
  position?: 'top' | 'bottom' | 'right' | 'left'
  tooltipClass?: string
  tooltipActive?: boolean
}

const Tooltip = ({
  children,
  text,
  position = 'top',
  tooltipClass,
  tooltipActive = false,
}: TooltipType) => {
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
      className="relative w-full"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={`absolute ${tooltipPosition[position]} px-3 py-2 bg-gray-300 text-white text-xs rounded shadow-lg opacity-100 transition-opacity duration-300 ${tooltipClass}`}
        >
          {text}
        </div>
      )}
    </div>
  )
}

export default Tooltip
