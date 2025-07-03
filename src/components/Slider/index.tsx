'use client'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useRef, useState, useEffect } from 'react'
import { TSliderProps } from '@/types/type'



const Slider = ({ title, children }: TSliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollButtons = () => {
    const el = scrollRef.current
    if (!el) return

    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  const scroll = (direction: 'left' | 'right') => {
    const { current } = scrollRef
    if (current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' })

      // به‌روز کردن دکمه‌ها با تاخیر کوتاه بعد از اسکرول
      setTimeout(updateScrollButtons, 300)
    }
  }

  useEffect(() => {
    updateScrollButtons()
    const el = scrollRef.current
    if (!el) return

    el.addEventListener('scroll', updateScrollButtons)
    window.addEventListener('resize', updateScrollButtons)

    return () => {
      el.removeEventListener('scroll', updateScrollButtons)
      window.removeEventListener('resize', updateScrollButtons)
    }
  }, [])

  return (
    <div className="w-full">
      <div className="flex justify-between items-center py-3 text-lg font-bold">
        <div className="capitalize">{title}</div>
        <div className="flex text-2xl gap-1">
          <IoIosArrowBack
            className={`cursor-pointer transition-opacity ${
              canScrollLeft ? 'opacity-100' : 'opacity-30 pointer-events-none'
            }`}
            onClick={() => scroll('left')}
          />
          <IoIosArrowForward
            className={`cursor-pointer transition-opacity ${
              canScrollRight ? 'opacity-100' : 'opacity-30 pointer-events-none'
            }`}
            onClick={() => scroll('right')}
          />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="overflow-hidden scroll-smooth px-2 scrollbar-hide"
      >
        <ul className="flex gap-3 justify-center w-max min-w-full">
          {children}
        </ul>
      </div>
    </div>
  )
}

export default Slider
