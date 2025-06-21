import { getCategory, getProductRecommendations } from '@/actions/actions'
import Container from '@/components/Container'
import ProductList from '@/components/ProductList'
import Slider from '@/components/Slider'
import CardBanner from '@/ui/CardBanner'
import GridBanner from '@/ui/GridBanner/inedx'
import RecommendationItemsList from '@/ui/RecommendationItemsList'
import { getIconByTitle } from '@/utils/iconMap'

export default async function Home() {
  const categories = await getCategory()
  const topDiscountedItems = await getProductRecommendations('discountUp')

  const sliderList = (
    <ul className="flex items-center justify-between">
      {categories.map((category) => (
        <li
          className="flex flex-col justify-center items-center bg-gray-300 rounded-lg w-24 h-22"
          key={category.id}
        >
          <div className=" mb-2 text-xl">
            {getIconByTitle(category.categoryName)}
          </div>
          <div className="text-xs font-medium">{category.categoryName}</div>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      <GridBanner />
      <Container containerClassName="bg-gray-200">
        <Slider title="browse by category" children={sliderList} />
      </Container>
      <Container>
        <RecommendationItemsList />
      </Container>
      {/* <CardBanner /> */}
      <Container>
        <ProductList title="Discounts up" productList={topDiscountedItems} />
      </Container>
      {/* <CardBanner /> */}
    </>
  )
}
