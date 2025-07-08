import Container from '../../components/Container'
import SearchBox from '../../components/SearchBox'
import NavLinks from '@/ui/NavLinks'
import MinProfile from '@/ui/MinProfile'
import BasketList from '@/ui/BasketList'
import Logo from '../Logo'
import { getPage } from '@/actions/actions'
import { TNavBarProps } from '@/types/type'

const NavBar = async ({className}:TNavBarProps) => {
  const pages = await getPage()

  return (
    <div className="fixed left-0 top-0 w-screen bg-white z-30 border-b border-gray-400">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 sm:gap-8">
            <Logo />
            <SearchBox />
          </div>
          <div className="flex items-center gap-24">
            <NavLinks
              listLink={pages}
              classNameList={
                'hidden lg:flex justify-center gap-8 text-sm text-gray-500 font-extrabold capitalize tracking-wide'
              }
            />
            <div className="flex items-center gap-3 sm:gap-6 text-xl">
              <BasketList />
              <MinProfile />
              <NavLinks
                listLink={pages}
                type="hamburger"
                label="menu"
                classNameBtn={
                  'lg:hidden text-gray-900 bg-white hover:bg-white  flex justify-center items-center rounded-full text-lg m-0 p-0 '
                }
                classNameList={
                  'fixed top-0 right-0 h-full w-full sm:w-64 bg-gray-900 shadow-lg p-6 transform transition-transform duration-300 flex flex-col space-y-6 z-50flex flex-col space-y-6 z-50'
                }
              />
              <span className="hidden "></span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NavBar
