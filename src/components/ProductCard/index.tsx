import Image from 'next/image'
import { IoMdHeartEmpty } from 'react-icons/io'
import Button from '../Button'
import { TProductCardProps } from '@/types/type'


const ProductCard = ({
  id,
  image,
  name,
  price,
}: TProductCardProps) => {
  return (
    <div>
      <IoMdHeartEmpty />
      {/* <Image alt={name} src={image} /> */}
      <div>{price}</div>
      <div>{name}</div>
      <Button label={'buy now'} type="button" />
    </div>
  )
}

export default ProductCard
