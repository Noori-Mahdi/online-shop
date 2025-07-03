import Container from '@/components/Container'
import Link from 'next/link'
import {
  FaTelegram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-center bg-white py-4 gap-4">
      <div className="sm:flex gap-2 items-center font-medium tracking-wide sm:text-base">
        <span>© 2025 by Mahdi Nouri —</span>
        <Link
          href="https://github.com/Noori-Mahdi/online-shop"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-bold text-gray-800 transition-all duration-300 ease-in-out hover:text-blue-500 hover:scale-105"
        >
          View project
          <FaGithub className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500" />
        </Link>
      </div>

      <div className="flex flex-wrap gap-4 sm:items-center sm:justify-center text-xl">
        <span className="text-sm font-bold text-gray-600 w-full sm:w-fit">
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
          <FaGithub className="cursor-pointer transition-all duration-300 ease-in-out text-gray-800 hover:scale-110 hover:text-black" />
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

export default Footer
