import { getCategory, getProductRecommendations, importProducts } from '@/actions/actions'
import Container from '@/components/Container'
import ProductList from '@/components/ProductList'
import Slider from '@/components/Slider'
import CardBanner from '@/ui/CardBanner'
import GridBanner from '@/ui/GridBanner/inedx'
import RecommendationItemsList from '@/ui/RecommendationItemsList'
import { getIconByTitle } from '@/utils/iconMap'
import products from '../../../../data/products.json'

export default async function Home() {
  const categories = await getCategory()
  const topDiscountedItems = await getProductRecommendations('discountUp')


  // const sliderList = categories.map((category: category) => (
  //   <li
  //     key={category.id}
  //     className="flex flex-col justify-center items-center bg-gray-400 rounded-lg cursor-pointer w-24 h-22 shrink-0 transition-all duration-300 ease-in-out hover:bg-gray-500 hover:shadow-lg hover:scale-105"
  //   >
  //     <div className="mb-2 text-xl transition-transform duration-300 group-hover:scale-110">
  //       {getIconByTitle(category.categoryName)}
  //     </div>
  //     <div className="text-xs font-medium select-none">
  //       {category.categoryName}
  //     </div>
  //   </li>
  // ))

  return (
    <>
      <GridBanner />
      {/* <Container containerClassName="bg-gray-200">
        <Slider title="browse by category" children={sliderList} />
      </Container> */}
      <Container>
        <RecommendationItemsList />
      </Container>
      {/* <CardBanner cardList={} /> */}
      <Container>
        <ProductList title="Discounts up" productList={topDiscountedItems} />
      </Container>
      {/* <CardBanner  cardList={}/> */}

    </>
  )
}
