'use client'
import { getProductRecommendations } from '@/actions/actions'
import ProductList from '@/components/ProductList'
import ItemList from '@/components/ProductList'
import { filterListType, TProduct } from '@/types/type'
import { useState } from 'react'

const RecommendationItemsList = () => {
  const [typeSearchProduct, setTypeSearchProduct] =
    useState<filterListType>('new arrival')

  const [productList, setProductList] = useState<TProduct[]>([])

  const filterList: filterListType[] = [
    'new arrival',
    'bestseller',
    'featured products',
  ]

  const handleSwitchType = async (e: filterListType) => {
    try {
      setTypeSearchProduct(e)
      const resault = await getProductRecommendations(e)
      setProductList(resault)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <ul className="flex gap-6">
        {filterList.map((e) => (
          <li
            key={e}
            className={`${typeSearchProduct == e ? 'text-black underline' : 'text-gray-300'} font-bold  cursor-pointer`}
            onClick={() => {
              handleSwitchType(e)
            }}
          >
            {e}
          </li>
        ))}
      </ul>
        <ProductList productList={productList}/>
    </div>
  )
}

export default RecommendationItemsList
