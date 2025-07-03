import { TAcceptFormProps } from '@/types/type'
import Button from '../Button'

const AcceptForm = ({ text, onClick }: TAcceptFormProps) => {
  return (
    <div>
      <div className="text-sm font-semibold tracking-wide text-justify my-3">
        {text}
      </div>
      <div className="flex justify-center items-center gap-3 ">
        <Button
          onClick={() => {
            onClick(false)
          }}
          label="cansel"
          type="button"
          rounded="normal"
          className="bg-red-900 capitalize hover:bg-red-800"
        />
        <Button
          onClick={() => {
            onClick(true)
          }}
          label="accept"
          rounded="normal"
          type="button"
          className="bg-green-900 capitalize hover:bg-green-800"
        />
      </div>
    </div>
  )
}

export default AcceptForm
