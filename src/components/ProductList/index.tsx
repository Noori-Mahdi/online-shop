import ProductCard from '@/components/ProductCard'
import { TItemListProps } from '@/types/type'


const ProductList = ({ productList, title }: TItemListProps) => {
  return (
    <ul>
      <div className="text-lg font-medium">{title}</div>
      {productList.map((product) => (
        <li key={product.id}>
          <ProductCard
            id={product.id}
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        </li>
      ))}
    </ul>
  )
}

export default ProductList
