import { getBanners, getProductRecommendations } from '@/actions/actions'
import Container from '@/components/Container'
import ProductList from '@/components/ProductList'
import CardBanner from '@/ui/CardBanner'
import GridBanner from '@/ui/GridBanner/inedx'
import RecommendationItemsList from '@/ui/RecommendationItemsList'

import CategoryList from '@/ui/CategoryList'
import { TFilterListType } from '@/types/type'

export default async function Home() {
  const result = await getBanners(true)
  let banner = null
  let groupItem = null

  if (result.data != null) {
    banner = result.data.filter((banner) => banner.type === 'solo')
    groupItem = result.data.filter((banner) => banner.type === 'group')
  }


  return (
    <>
      <GridBanner />
      <Container>
        <CategoryList className={'py-3'} />
        <RecommendationItemsList
          filterList={['bestseller', 'new arrival', 'featured products']}
          count={8}
        />
      </Container>
      <CardBanner cardList={groupItem} type="groupItem" className="my-5" />
      <Container>
        <RecommendationItemsList filterList={['discountUp']} count={4} />
      </Container>
      <CardBanner cardList={banner} type="banner" />
    </>
  )
}
