import Container from '@/components/Container'
import ProfileFooter from '../ProfileFooter'

const AppFooter = () => {
  return (
    <footer className="bg-gray-950">
      <Container>
        <div className="flex flex-col sm:flex-row text-center sm:text-start items-center justify-between sm:items-start gap-5 py-4">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg text-white tracking-wide">
              cyber
            </h3>
            <p className="text-sm text-gray-500  sm:w-2/3">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>
          <ul className="flex flex-col gap-1 text-gray-500 text-sm w-1/3">
            <li className="text-white font-semibold">Services</li>
            <li className="hover:text-white cursor-pointer duration-300 ease-in-out">
              Bonus program
            </li>
            <li className="hover:text-white cursor-pointer duration-300 ease-in-out">
              Gift cards
            </li>
            <li className="hover:text-white cursor-pointer duration-300 ease-in-out">
              Credit and payment
            </li>
            <li className="hover:text-white cursor-pointer duration-300 ease-in-out">
              Service contracts
            </li>
            <li className="hover:text-white cursor-pointer duration-300 ease-in-out">
              Non-cash account
            </li>
            <li className="hover:text-white cursor-pointer duration-300 ease-in-out">
              Payment
            </li>
          </ul>
          <ul className="flex flex-col gap-1 text-gray-500 text-sm w-1/3">
            <li className="text-white font-semibold">
              Assistance to the buyer
            </li>
            <li className="hover:text-white cursor-pointer duration-300 ease-in-out">
              Find an order
            </li>
            <li className="hover:text-white cursor-pointer duration-300 ease-in-out">
              Terms of delivery
            </li>
            <li className="hover:text-white cursor-pointer duration-300 ease-in-out">
              Exchange and return of goods
            </li>
            <li className="hover:text-white cursor-pointer duration-300 ease-in-out">
              Guarantee
            </li>
            <li className="hover:text-white cursor-pointer duration-300 ease-in-out">
              Frequently asked questions
            </li>
            <li className="hover:text-white cursor-pointer duration-300 ease-in-out">
              Terms of use of the site
            </li>
          </ul>
        </div>
        <div>
          <ProfileFooter className={' text-white  text-center'} theme="dark" />
        </div>
      </Container>
    </footer>
  )
}

export default AppFooter
