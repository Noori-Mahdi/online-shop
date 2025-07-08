import Button from '@/components/Button'
import { IoMdHeartEmpty } from 'react-icons/io'

const SkeletonProductCard = () => {
  return (
    <div
      className={`
        flex flex-col justify-start gap-1 items-center
        relative overflow-hidden w-[250px] h-[380px] p-4
        bg-gray-200 rounded-md border border-gray-300
        animate-pulse
      `}
    >
      <div className="absolute flex justify-center items-center rotate-45 w-1/2 h-7 bg-gray-300 -right-8 top-2 font-bold" />
      <div className="w-full flex gap-2 items-center text-gray-400">
        <IoMdHeartEmpty size={20} />
      </div>
      <div className="flex justify-center items-center grow bg-gray-300 w-full rounded-md" />
      <div className="w-full h-6 bg-gray-300 rounded-sm" />
      <div className="w-3/5 h-5 bg-gray-300 rounded-sm" />
      <Button
        label=""
        type="button"
        className="w-3/4 h-10 bg-gray-400 pointer-events-none"
        rounded="normal"
      />
    </div>
  )
}

export default SkeletonProductCard
