interface ContainerPropsType {
  children: React.ReactNode
  containerClassName?: string
  removeSpaceY?: boolean
  removeSpaceX?: boolean
}
const Container = ({
  children,
  containerClassName,
  removeSpaceX = false,
  removeSpaceY = false,
}: ContainerPropsType) => {
  return (
    <div
      className={` ${removeSpaceX ? 'px-0' : 'px-3  md:px-16  lg:px-24'} ${removeSpaceY ? 'py-0' : 'py-3 '}${containerClassName} `}
    >
      {children}
    </div>
  )
}

export default Container
