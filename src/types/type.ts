// Main User Type Definition
export type TUser = {
  id: string
  email: string
  userName: string
  password: string
  phoneNumber: string
  userImg: string | null
}
// TUsersInfo is used in the PreviousAccounts component to handle user data retrieved from localStorage.
export type TUsersInfo = Omit<TUser, 'phoneNumber' | 'password'>
// TContextUser is used in the Context as the type for the user state.
export type TContextUser = Omit<TUser, 'passowrd'>
// TLoginBody is used in login Function.
export type TLoginBody = Pick<TUser, 'email' | 'password'>
// TRegiesterBody is used in regiester Function.
export type TRegiesterBody = Omit<TUser, 'id' | 'userImg'>
// TPasswordRulesProps is used in PasswordRules Componenet.
export type TPasswordRulesProps = Pick<TUser, 'password'>
// TAccountCardProps is used in AccountCard Componenet.
export type TAccountCardProps = Pick<TUser, 'id' | 'userName' | 'userImg'> & {
  handleClick: (e: string) => void
}

// Main Product Type Definition
export type TProduct = {
  id: string
  name: string
  image: string
  price: number
  discounts: number
  like: number
  count: number
  sellCount: number
  categoryId: String
  createTime: Date
}
// TProductCardProps is used in ProductCard Componenet
export type TProductCardProps = Pick<
  TProduct,
  'id' | 'name' | 'image' | 'price'
>

// Fundamental types used across the app
export type filterListType =
  | 'new arrival'
  | 'bestseller'
  | 'featured products'
  | 'discountUp'

export type Link = {
  pageName: string
  path: string
}

// Componenets Props

export type TItemListProps = {
  productList: TProduct[]
  title?: string
}

export type TButtomProps = {
  label: string | React.ReactNode
  type: 'submit' | 'reset' | 'button'
  color?: 'primary' | 'danger' | 'success' | 'transparent'
  rounded?: 'full' | 'normal' | 'none'
  disabled?: boolean
  className?: string
  animation?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export type TCheckBoxProps = {
  checkboxText: string
  active?: boolean
  disable?: boolean
  className?: string
  onClick: (e: boolean) => void
}

export type TContainerProps = {
  children: React.ReactNode
  className?: string
  removeSpaceY?: boolean
  removeSpaceX?: boolean
}

export type TInputProps = {
  type: 'email' | 'password' | 'text' | 'phone'
  name: string
  label?: string
  defaultValue?: string
  placeholder?: string
  required?: boolean
  tooltipText?: string | React.ReactNode
  tooltipActive?: boolean
  tooltipPosition?: 'top' | 'bottom' | 'right' | 'left'
  toolTipClassName?:string
  error?: string
  activeValidation?: boolean
  className?: string
  readOnly?: boolean
  onCheckValid?: (e: boolean) => void
  onChange?: (e: string) => void
}

export type TModalProps = {
  type?: null | 'warning' | 'info' | 'error'
  isOpen?: boolean
  onClose?: () => void
  children: React.ReactNode
  className?: string
  size?: string
  label?: string
}

export type TSliderProps = {
  title: string
  children: React.ReactNode
}

export type TTooltipProps = {
  children: React.ReactNode
  text: string | React.ReactNode
  position?: 'top' | 'bottom' | 'right' | 'left'
  className?: string
  tooltipActive?: boolean
}

export type TAcceptFormProps = {
  text: string
  onClick: (e: boolean) => void
}

export type TNavLinksProps = {
  listLink: Link[]
  type?: 'normal' | 'hamburger'
  classNameList?: string
  classNameBtn?: string
  label?: string
  onClose?: () => void
}

export type TLoginFormProps = {
  className?: string
}

export type TToastProps = {
  id: number
  message: string
  type: 'info' | 'error' | 'warning' | 'success'
  onClose?: () => void
}

// actions Function Type

export type TLoginResponse =
  | { type: 'success'; message: string; data: { userId: string } }
  | { type: 'error'; message: string }

export type TRegisterResponse = {
  type: 'success' | 'error'
  message: string
}
