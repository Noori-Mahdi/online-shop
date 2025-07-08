'use client'
import { getProductRecommendations } from '@/actions/actions'
import ProductList from '@/components/ProductList'
import { useToast } from '@/context/ToastContext'
import {
  TFilterListType,
  TProduct,
  TRecommendationItemsListProps,
} from '@/types/type'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const RecommendationItemsList = ({
  filterList,
  count,
}: TRecommendationItemsListProps) => {
  const [typeSearchProduct, setTypeSearchProduct] = useState<TFilterListType>(
    filterList[0]
  )
  const [productList, setProductList] = useState<TProduct[]>([])
  const [loading, setLoading] = useState(true)
  const filter = filterList
  const { addToast } = useToast()

  const handleSwitchType = async (e: TFilterListType) => {
    try {
      setLoading(true)
      setTypeSearchProduct(e)
      const resault = await getProductRecommendations(e, count)
      if (resault.type != 'error') setProductList(resault.data)
    } catch (error) {
      addToast('Something went wrong', 'error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleSwitchType(typeSearchProduct)
  }, [])

  return (
    <div className="my-3">
      <ul className="flex gap-6 mb-3">
        {filter.map((e) => (
          <li
            key={e}
            className={twMerge(
              'font-bold select-none',
              filter.length > 1 && 'cursor-pointer',
              typeSearchProduct == e ? 'text-black underline' : 'text-gray-500'
            )}
            onClick={() => {
              if (filter.length > 1) handleSwitchType(e)
            }}
          >
            {e}
          </li>
        ))}
      </ul>
      {loading ? (
        <ProductList
          count={count}
          isLoading={loading}
          productList={productList}
        />
      ) : (
        <ProductList productList={productList} />
      )}
    </div>
  )
}

export default RecommendationItemsList
