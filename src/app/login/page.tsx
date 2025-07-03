import BreadcrumbLinks from '@/components/BreadcrumbLinks/BreadcrumbLinks'
import Container from '@/components/Container'
import Footer from '@/ui/Footer'
import LoginForm from '@/ui/loginForm'
import PreviousAccounts from '@/ui/PreviousAccounts'

export default function Login() {
  return (
    <Container className="h-screen lg:px-16 lg:py-8 md:py-4 sm:py-3 p-1">
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-center gap-3 bg-gray-100 grow">
          <div className="lg:w-[500px] md:w-[350px] w-full order-2 md:order-1">
            <PreviousAccounts />
          </div>
          <div className="flex flex-col gap-1 grow order-1 md:order-2">
            <BreadcrumbLinks
              title="Login Form"
              links={[
                { url: '/login', text: 'sign in', isActive: true },
                { url: '/register', text: 'sign up' },
              ]}
              className="pb-4"
            />
            <LoginForm className={'grow'} />
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  )
}
