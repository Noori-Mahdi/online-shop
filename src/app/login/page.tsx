import BreadcrumbLinks from '@/components/BreadcrumbLinks/BreadcrumbLinks'
import Footer from '@/ui/Footer'
import LoginForm from '@/ui/LoginForm'
import PreviousAccounts from '@/ui/PreviousAccounts'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="w-screen h-screen flex flex-col justify-between">
      <div className="flex justify-center  gap-2 p-10 bg-gray-100 grow">
        <div className="w-1/2">
          <PreviousAccounts />
        </div>
        <div className="w-1/2">
          <BreadcrumbLinks
            links={[
              { url: '/login', text: 'sign in', isActive: true },
              { url: '/register', text: 'sign up' },
            ]}
          />
          <LoginForm />
          <Link
            className="w-11/12 mx-auto block text-center p-3 rounded-full font-semibold transition-all duration-300 ease-in-out bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 hover:shadow-lg"
            href="/register"
          >
            Create new account
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
