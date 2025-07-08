import { Tcategory } from '@/types/type'
import { getIconByTitle } from '@/utils/iconMap'
import Link from 'next/link'

const CategoryCard = ({ id, categoryName }: Tcategory) => {
  return (
    <Link
      key={id}
      href={`/store?category=${categoryName}`}
      className="flex flex-col justify-center items-center bg-gray-400 rounded-lg cursor-pointer md:w-24 h-22 shrink-0 transition-all duration-300 ease-in-out hover:bg-gray-500 hover:shadow-lg hover:scale-105"
    >
      <div className="mb-2 text-xl transition-transform duration-300 group-hover:scale-110">
        {getIconByTitle(categoryName)}
      </div>
      <div className="text-xs font-medium select-none capitalize">
        {categoryName}
      </div>
    </Link>
  )
}

export default CategoryCard
