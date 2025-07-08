import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type CardBanner = {
  url: string
  content: string
  title: string
  image: string
  imageMobile?: string
  className?: string
  type: 'solo' | 'group'
  active: boolean
}

type CardBannerPropsType = {
  cardList: CardBanner[] | null
  type?: 'banner' | 'groupItem'
  className?: string
}

const CardBanner = ({ cardList, type, className }: CardBannerPropsType) => {
  if (cardList === null) return null

  if (type === 'groupItem') {
    return (
      <ul className={twMerge('flex w-full flex-wrap', className)}>
        {cardList.map((card, index) => (
          <li
            className={twMerge(
              'p-4 grow flex flex-col gap-3 justify-start sm:w-1/2 lg:w-1/4',
              index == 0 && 'bg-gray-300 text-gray-900',
              index == 1 && 'bg-gray-400 text-gray-900',
              index == 2 && 'bg-gray-600 text-gray-100',
              index == 3 && 'bg-gray-900 text-gray-100',
              card.className
            )}
            key={card.url}
          >
            <div className="w-full h-2/5 flex items-center justify-center">
              <Image
                className="m-auto max-h-full"
                alt={card.title}
                src={card.image}
                width={140}
                height={100}
              />
            </div>

            <div className="text-start text-xl mx-3 mb-3 tracking-wide font-semibold">
              {card.title}
            </div>
            <p
              className={twMerge(
                'text-sm line mx-3 mb-4 leading-6 text-start line-clamp-5 ',
                index == 0 && 'text-gray-700',
                index == 1 && 'text-gray-700',
                index == 2 && 'text-gray-300',
                index == 3 && 'text-gray-300'
              )}
            >
              {card.content}
            </p>
            <Link
              href={card.url}
              className={twMerge(
                'capitalize text-start border mx-3 rounded-sm text-sm px-12 py-3 duration-300 ease-in-out w-fit',
                index == 0 &&
                  'hover:bg-gray-900 hover:text-gray-300 hover:border-transparent',
                index == 1 &&
                  'hover:bg-gray-900 hover:text-gray-400 hover:border-transparent',
                index == 2 &&
                  'hover:bg-gray-300 hover:text-gray-600 hover:border-transparent',
                index == 3 &&
                  'hover:bg-gray-300 hover:text-gray-900 hover:border-transparent'
              )}
            >
              shop now
            </Link>
          </li>
        ))}
      </ul>
    )
  } else if (type === 'banner') {
    return (
      <div className="flex w-full relative justify-center items-center">
        <Image
          className="absolute left-0 sm:block hidden top-0 w-full h-full"
          alt={cardList[0].title}
          src={cardList[0].image}
          width={2080}
          height={1024}
        />
        <Image
          className="absolute left-0 top-0 block sm:hidden w-full h-full"
          alt={cardList[0].title}
          src={
            cardList[0].imageMobile
              ? cardList[0].imageMobile
              : cardList[0].image
          }
          width={750}
          height={1024}
        />
        <div className="z-10 text-center flex flex-col gap-8 justify-center items-center p-20">
          <div className="text-6xl text-white tracking-wide">
            {cardList[0].title}
          </div>
          <div className="text-xs text-gray-200 font-medium  tracking-wide">
            {cardList[0].content}
          </div>
          <Link
            href={cardList[0].url}
            className="capitalize text-start text-gray-300 duration-300 ease-in-out border border-gray-300 mx-3 rounded-sm text-sm px-12 py-3 hover:bg-gray-300 hover:text-gray-900 hover:border-transparent"
          >
            shop now
          </Link>
        </div>
      </div>
    )
  }
}

export default CardBanner
