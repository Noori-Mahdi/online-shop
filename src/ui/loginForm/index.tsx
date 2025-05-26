'use client'
import { loginUser } from '@/actions/actions'
import Button from '@/components/Button'
import CheckBox from '@/components/CheckBox'
import Input from '@/components/Input'
import { Context } from '@/context/MainContext'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

const LoginForm = () => {
  const { updateUserInfo } = useContext(Context)
  const router = useRouter()

  const login = async (formData: FormData) => {
    try {
      await loginUser(formData)
      await updateUserInfo()
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full mt-7">
      <form
        action={login}
        className="border-2 mb-5 border-gray-400 rounded-md p-4 bg-white"
      >
        <Input
          label="your email"
          name="email"
          type="email"
          activeValidation={false}
          required
        />
        <Input
          label="your password"
          name="password"
          type="password"
          activeValidation={false}
          required
        />
        <CheckBox checkboxText="Remember Me" />
        <Button label={'Log in'} type="submit" />
        <div className="underline cursor-pointer text-center w-full mt-2 text-sm transition-all duration-300 ease-in-out hover:text-blue-500 hover:underline-offset-4">
          Forget your Password ?
        </div>
      </form>
    </div>
  )
}

export default LoginForm
