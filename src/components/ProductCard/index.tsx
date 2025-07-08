import Image from 'next/image'
import { IoMdHeartEmpty } from 'react-icons/io'
import Button from '../Button'
import { TProductCardProps } from '@/types/type'
import { twMerge } from 'tailwind-merge'

const ProductCard = ({
  id,
  image,
  name,
  price,
  discounts,
  like,
  className,
}: TProductCardProps) => {
  return (
    <div
      className={twMerge(
        'flex flex-col justify-center items-center gap-4 relative overflow-hidden w-full sm:w-[250px] h-[380px] p-4',
        className
      )}
    >
      <div className="absolute flex select-none justify-center items-center rotate-45 w-1/2 h-7 bg-red-500 -right-9 top-3 font-bold overflow-hidden">
        %{discounts}
      </div>
      <div className="w-full flex gap-2 items-center">
        <IoMdHeartEmpty />
      </div>
      <div className="flex justify-center items-center grow max-h-[100px]">
        <Image
          alt={name}
          src={image}
          width={150}
          height={100}
          className="max-h-full w-full"
        />
      </div>
      <div className="font-semibold text-base truncate">{name}</div>
      {discounts && (
        <div className="font-bold text-lg">
          $ {(price - price / discounts).toFixed(2)}
        </div>
      )}
      <div
        className={twMerge(
          'font-bold text-lg',
          discounts && 'line-through text-gray-500 text-base'
        )}
      >
        $ {price}
      </div>
      <Button
        label={'buy now'}
        type="button"
        className="h-fit w-2/3 bg-gray-950 hover:bg-gray-900 hover:text-white duration-300 ease-in-out"
        rounded="normal"
      />
    </div>
  )
}

export default ProductCard
