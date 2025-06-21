'use client'
import { loginUser } from '@/actions/actions'
import Button from '@/components/Button'
import CheckBox from '@/components/CheckBox'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import Toast from '@/components/AcceptForm'
import { Context } from '@/context/MainContext'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import AcceptForm from '@/components/AcceptForm'

const LoginForm = () => {
  const [showAcceptList, setShowAceptList] = useState(false)
  const [saveDeta, setSaveDeta] = useState(false)
  const { updateUserInfo, user } = useContext(Context)
  const router = useRouter()

  const login = async (formData: FormData) => {
    try {
      const resault = await loginUser(formData)
      await updateUserInfo()

      if (saveDeta && resault.userId) {
        const existing = localStorage.getItem('usersId')
        let usersId: string[] = []

        if (existing) {
          try {
            usersId = JSON.parse(existing)
            if (!usersId.includes(resault.userId)) {
              usersId.push(resault.userId)
            }
          } catch (e) {
            usersId = [resault.userId]
          }
        } else {
          usersId = [resault.userId]
        }

        localStorage.setItem('usersId', JSON.stringify(usersId))
      }

      router.push('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full mt-7">
      <form
        action={login}
        className="co border-2 mb-5 border-gray-400 rounded-md p-4 bg-white"
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
        <CheckBox
          onClick={(e) => {
            setSaveDeta(true)
            if (e) setShowAceptList(true)
          }}
          active={saveDeta}
          checkboxText="Remember Me"
        />
        <Button label={'Log in'} type="submit" />
        <div className="underline cursor-pointer text-center w-full mt-2 text-sm transition-all duration-300 ease-in-out hover:text-blue-500 hover:underline-offset-4">
          Forget your Password ?
        </div>
      </form>
      <Modal
        isOpen={showAcceptList}
        onClose={() => {
          setSaveDeta(false), setShowAceptList(false)
        }}
      >
        <AcceptForm
          onClick={(e) => {
            setSaveDeta(e)
            setShowAceptList(false)
          }}
          text="To make it easier for you to log in next time, your info will be saved in your browser. If you're using a public or shared computer, it's better not to enable this option. Stay safe! Do you agree to save your login info on this device ?"
        />
      </Modal>
    </div>
  )
}

export default LoginForm
