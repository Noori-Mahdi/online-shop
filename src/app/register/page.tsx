import BreadcrumbLinks from '@/components/BreadcrumbLinks/BreadcrumbLinks'
import Footer from '@/ui/Footer'
import RegisterForm from '@/ui/RegisterForm'

export default function Register() {
  return (
    <div className="w-screen h-screen flex flex-col justify-between bg-gray-100">
      <div className="w-6/12 m-auto pt-2 ">
        <BreadcrumbLinks
          links={[
            { url: '/login', text: 'sign in' },
            { url: '/register', text: 'sign up', isActive: true },
          ]}
        />
        <RegisterForm />
      </div>
      <Footer />
    </div>
  )
}
