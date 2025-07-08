import Slider from '@/components/Slider'
import { Tcategory, TCategoryListProps } from '@/types/type'
import { getCategory } from '@/actions/actions'
import CategoryCard from '../CategoryCard'

const CategoryList = async ({ className }: TCategoryListProps) => {
  const categories = await getCategory()
  const sliderList = categories.map((category: Tcategory) => (
    <li className="w-[42dvw] sm:w-[30.5dvw] md:w-fit" key={category.id}>
      <CategoryCard {...category} />
    </li>
  ))
  return (
    <Slider
      title="browse by category"
      className={className}
      children={sliderList}
    />
  )
}

export default CategoryList
