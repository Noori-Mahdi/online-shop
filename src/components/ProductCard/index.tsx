import Image from 'next/image'
import { IoMdHeartEmpty } from 'react-icons/io'
import Button from '../Button'
interface ProductCardTypeProps {
  ProductId: string
  productImage: string
  ProductName: string
  ProductPrice: number
}

const ProductCard = ({ProductId, productImage, ProductName, ProductPrice}: ProductCardTypeProps) => {
  return (
    <div>
      <IoMdHeartEmpty />
      <Image alt={ProductName} src={productImage} />
      <div>{ProductName}</div>
      <div>{ProductPrice}</div>
      <Button label={'buy now'} type='button'/>
    </div>
  )
}

export default ProductCard
