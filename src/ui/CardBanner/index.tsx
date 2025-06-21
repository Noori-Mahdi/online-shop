import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'

type CardBanner = {
  url: string
  content: string
  title: string
  image: string
  className?: string
}

type CardBannerPropsType = {
  cardList: CardBanner[]
  type?: 'banner' | 'groupItem'
}

const CardBanner = ({ cardList, type }: CardBannerPropsType) => {
  if (type === 'groupItem') {
    return (
      <ul className="flex h-[32rem] w-full">
        {cardList.map((card) => (
          <li className={`${card.className} px-4 grow`} key={card.title}>
            <Image
              className="m-auto h-2/3"
              alt={card.title}
              src={card.image}
              width={300}
              height={200}
            />
            <div className="text-start text-xl mx-3 mb-3 tracking-wide">
              {card.title}
            </div>
            <p className="text-sm text-gray-500 line mx-3 mb-4 leading-6 text-start">
              {card.content}
            </p>
            <Link
              href={card.url}
              className="capitalize text-start border mx-3 rounded-sm text-sm px-12 py-3 "
            >
              shop now
            </Link>
          </li>
        ))}
      </ul>
    )
  } else if (type === 'banner') {
    return (
      <div className="flex h-[32rem] w-full relative justify-center items-center">
        <Image
          className="absolute left-0 top-0 w-full h-full"
          alt={cardList[0].title}
          src={cardList[0].image}
        />
        <div>
          <div>{cardList[0].title}</div>
          <div>{cardList[0].content}</div>
          <Link
            href={cardList[0].url}
            className="capitalize text-start border mx-3 rounded-sm text-sm px-12 py-3 "
          >
            shop now
          </Link>
        </div>
      </div>
    )
  }
}

export default CardBanner
