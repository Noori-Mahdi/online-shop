import Link from 'next/link'
import {
  FaTelegram,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaGithub,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full flex justify-between items-center border-t-2 border-gray-400 px-15 bg-white min-h-24">
      <div className="flex gap-2 items-center font-medium tracking-wide">
        @Copyright 2025 by{' '}
        <Link
          href={'https://github.com/Noori-Mahdi?tab=repositories'}
          className="flex items-center gap-1 font-bold capitalize text-gray-800 transition-all duration-300 ease-in-out hover:text-blue-500 hover:scale-105"
        >
          mahdi nouri
          <FaGithub className="transition-transform duration-300 ease-in-out  hover:scale-110 hover:text-blue-500" />
        </Link>
      </div>

      <div className="flex gap-4 cursor-pointer text-xl">
        <FaTelegram className="transition-all duration-300 ease-in-out text-[#0088cc] hover:scale-110 hover:text-[#006699]" />
        <FaInstagram className="transition-all duration-300 ease-in-out text-[#e4405f] hover:scale-110 hover:text-[#c13584]" />
        <FaTwitter className="transition-all duration-300 ease-in-out text-[#1da1f2] hover:scale-110 hover:text-[#1a91da]" />
        <FaGoogle className="transition-all duration-300 ease-in-out text-[#db4437] hover:scale-110 hover:text-[#c1351d]" />
        <span className="text-sm font-bold uppercase text-gray-700">
          TeamForge
        </span>
      </div>
    </div>
  )
}

export default Footer
