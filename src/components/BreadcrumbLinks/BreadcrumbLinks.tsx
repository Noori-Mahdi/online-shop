import Link from 'next/link'
import { useRouter } from 'next/router'

type BreadcrumbLinksPropsType = {
  links: { url: string; text: string ;isActive?:boolean}[]
}

const BreadcrumbLinks = ({ links }: BreadcrumbLinksPropsType) => {

  return (
    <div className="text-sm cursor-pointer font-bold mb-5 flex gap-2">
      {links.map((link, index) => {
        return (
          <span key={index}>
            <Link
              href={link.url}
              className={`transition-all duration-300 ease-in-out hover:text-blue-500 hover:underline hover:scale-105 
                          ${link.isActive ? 'text-black' : 'text-gray-500'}`} // تغییر رنگ
            >
              {link.text}
            </Link>
            {index < links.length - 1 && <span> /</span>}
          </span>
        )
      })}
    </div>
  )
}

export default BreadcrumbLinks
