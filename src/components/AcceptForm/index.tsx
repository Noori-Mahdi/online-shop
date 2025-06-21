import Button from '../Button'

interface AcceptForm {
  text: string
  onClick: (e: boolean) => void
}

const AcceptForm = ({ text, onClick }: AcceptForm) => {
  return (
    <div>
      <div className='text-sm font-semibold tracking-wide text-justify my-5'>{text}</div>
      <div className="flex justify-center items-center gap-3 ">
        <Button
          onClick={() => {
            onClick(false)
          }}
          label="cansel"
          type="button"
          className="bg-red-600 capitalize hover:bg-red-700"
        />
        <Button
          onClick={() => {
            onClick(true)
          }}
          label="accept"
          type="button"
          className="bg-green-700 capitalize hover:bg-green-800"
        />
      </div>
    </div>
  )
}

export default AcceptForm
