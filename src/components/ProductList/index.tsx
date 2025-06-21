import ProductCard from '@/components/ProductCard'
import { productType } from '@/types/type'
interface ItemListPropsType{
    productList:productType[]
    title?: string
}

const ProductList = ({productList, title}:ItemListPropsType) => {
  return (
    <ul>
      <div className='text-lg font-medium'>{title}</div>
      {productList.map((product) => (
        <li>
          <ProductCard
            ProductId={product.id}
            key={product.id}
            ProductName={product.Name}
            ProductPrice={product.Price}
            productImage={product.image}
          />
        </li>
      ))}
    </ul>
  )
}

export default ProductList
