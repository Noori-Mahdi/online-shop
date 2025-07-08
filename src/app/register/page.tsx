import GroupLink from '@/components/GroupLink/BreadcrumbLinks'
import Container from '@/components/Container'
import ProfileFooter from '@/ui/ProfileFooter'
import RegisterForm from '@/ui/RegisterForm'

export default function Register() {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <Container className="md:px-32 lg:px-80 h-full content-center">
        <GroupLink
          links={[
            { url: '/login', text: 'sign in' },
            { url: '/register', text: 'sign up', isActive: true },
          ]}
          className="pb-3"
        />
        <RegisterForm />
        <ProfileFooter />
      </Container>
    </div>
  )
}
