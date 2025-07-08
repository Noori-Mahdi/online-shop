import Link from 'next/link'
import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'

type GroupLinkPropsType = {
  links: { url: string; text: string; isActive?: boolean }[]
  className?: string
  title?: string
}

const GroupLink = ({ title, links, className }: GroupLinkPropsType) => {
  return (
    <div className={twMerge('flex justify-end', className)}>
      <ul className="text-sm cursor-pointer font-bold flex gap-2">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link
                href={link.url}
                className={`transition-all duration-300 ease-in-out hover:text-blue-500 hover:underline hover:scale-105 
                          ${link.isActive ? 'text-black' : 'text-gray-500'}`}
              >
                {link.text}
              </Link>
              {index < links.length - 1 && <span> /</span>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default GroupLink
