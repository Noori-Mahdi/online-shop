import Container from '@/components/Container'
import Link from 'next/link'
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

type TProfileFooter = {
  className?: string
  theme?: 'dark' | 'light'
}

const ProfileFooter = ({ className, theme = 'light' }: TProfileFooter) => {
  return (
    <div
      className={twMerge(
        'w-full flex flex-wrap justify-center sm:justify-between items-center bg-transparent py-4 gap-4',
        className,
        theme === 'light' ? 'text-gray-700' : 'text-gray-300'
      )}
    >
      <div className="flex  flex-wrap gap-2 justify-center items-center font-medium tracking-wide sm:text-base">
        <span>© 2025 by Mahdi Nouri —</span>
        <Link
          href="https://github.com/Noori-Mahdi/online-shop"
          target="_blank"
          rel="noopener noreferrer"
          className={twMerge(
            'flex items-center gap-1 font-bold transition-all duration-300 ease-in-out hover:text-blue-500 hover:scale-105',
            theme === 'light' ? 'text-gray-900' : 'text-gray-100'
          )}
        >
          View project
          <FaGithub className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500" />
        </Link>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 sm:items-center sm:justify-center text-xl">
        <span className="text-sm font-bold  w-full sm:w-fit">
          Connect With Me :
        </span>
        <Link
          href={'https://www.linkedin.com/in/nourimahdi/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="cursor-pointer transition-all duration-300 ease-in-out text-[#0077b5] hover:scale-110 hover:text-[#005582]" />
        </Link>
        <Link
          href={'https://github.com/Noori-Mahdi'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className={twMerge(
              'cursor-pointer transition-all duration-300 ease-in-out  hover:scale-110 ',
              theme === 'light'
                ? 'text-gray-700 hover:text-black'
                : 'text-gray-300 hover:text-gray-100'
            )}
          />
        </Link>
        <Link
          href={'https://t.me/itmahdiN'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram className="cursor-pointer transition-all duration-300 ease-in-out text-[#1da1f2] hover:scale-110 hover:text-[#1a91da]" />
        </Link>
      </div>
    </div>
  )
}

export default ProfileFooter
