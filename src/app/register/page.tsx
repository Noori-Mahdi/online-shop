import BreadcrumbLinks from '@/components/BreadcrumbLinks/BreadcrumbLinks'
import Container from '@/components/Container'
import Footer from '@/ui/Footer'
import RegisterForm from '@/ui/RegisterForm'

export default function Register() {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <Container className="md:px-32 lg:px-80 h-full content-center">
        <BreadcrumbLinks
          links={[
            { url: '/login', text: 'sign in' },
            { url: '/register', text: 'sign up', isActive: true },
          ]}
          className='pb-3'
        />
        <RegisterForm />
        <Footer />
      </Container>
    </div>
  )
}
