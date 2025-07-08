import ProductCard from '@/components/ProductCard'
import { TItemListProps } from '@/types/type'
import { IoMdHeartEmpty } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'
import Button from '../Button'
import SkeletonProductCard from '@/ui/SkeletonProductCard'

const ProductList = ({
  productList,
  isLoading = false,
  count,
  className,
}: TItemListProps) => {
  return (
      <ul
        className={twMerge(
          'flex flex-wrap items-start justify-center gap-3',
          className
        )}
      >
        {isLoading
          ? Array.from({ length: count ?? 1 }).map((_, index) => (
              <SkeletonProductCard key={index} />
            ))
          : productList.map((product) => (
              <li className="w-full sm:w-fit" key={product.id}>
                <ProductCard {...product} />
              </li>
            ))}
      </ul>
  )
}

export default ProductList
