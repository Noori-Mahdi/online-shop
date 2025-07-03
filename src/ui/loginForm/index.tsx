'use client'
import { loginUser } from '@/actions/actions'
import Button from '@/components/Button'
import CheckBox from '@/components/CheckBox'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import Toast from '@/components/AcceptForm'
import { Context } from '@/context/MainContext'
import { ToastProvider, useToast } from '@/context/ToastContext'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import AcceptForm from '@/components/AcceptForm'
import { TLoginFormProps } from '@/types/type'
import { twMerge } from 'tailwind-merge'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const LoginForm = ({ className }: TLoginFormProps) => {
  const [showAcceptList, setShowAceptList] = useState(false)
  const [saveDeta, setSaveDeta] = useState(false)
  const [loading, setLoading] = useState(false)
  const { updateUserInfo, user } = useContext(Context)
  const { addToast } = useToast()

  const router = useRouter()

  const login = async (formData: FormData) => {
    try {
      const result = await loginUser(formData)
      await updateUserInfo()

      if (result.type !== 'error') {
        if (saveDeta && result.data?.userId) {
          const existing = localStorage.getItem('usersId')
          let usersId: string[] = []

          if (existing) {
            try {
              usersId = JSON.parse(existing)
              if (!usersId.includes(result.data.userId)) {
                usersId.push(result.data.userId)
              }
            } catch (e) {
              usersId = [result.data.userId]
            }
          } else {
            usersId = [result.data.userId]
          }

          localStorage.setItem('usersId', JSON.stringify(usersId))
        }
        addToast('Login successful. Welcome back!', 'success')
        router.push('/home')
      } else {
        addToast(
          result.message || 'Something went wrong',
          result.type === 'error' ? 'error' : 'info'
        )
      }
    } catch (error) {
      addToast('Login failed due to an unexpected error', 'error')
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    setLoading(true)
    addToast('Processing your request, please wait...', 'info')
    await login(formData)
    setLoading(false)
  }

  return (
    <div className={twMerge('', className)}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between h-full border-2 border-gray-500 rounded-md p-4 bg-white"
      >
        <div>
          <Input
            label="your email"
            name="email"
            type="email"
            activeValidation={true}
            required
            readOnly={loading}
          />
          <Input
            label="your password"
            name="password"
            type="password"
            activeValidation={false}
            required
            readOnly={loading}
          />
          <CheckBox
            onClick={(e) => {
              setSaveDeta(true)
              if (e) setShowAceptList(true)
            }}
            active={saveDeta}
            checkboxText="Remember Me"
            className="py-2"
            disable={loading}
          />
        </div>

        <div>
          <div>
            <Button
              label={loading ? 'loading...' : 'Log in'}
              rounded="normal"
              type="submit"
              color="primary"
              disabled={loading}
            />
          </div>
          <span className="block text-center w-full my-3 text-sm select-none">
            Forgot your password?{' '}
            <span
              className={twMerge(
                'cursor-pointer transition-all duration-300 ease-in-out font-semibold text-blue-500 hover:text-blue-700',
                loading && 'cursor-not-allowed text-blue-300'
              )}
            >
              you can reset it here.
            </span>
          </span>
          <span className="block text-center w-full my-3 text-sm select-none">
            Don't have an account?{' '}
            <span
              className={twMerge(
                'cursor-pointer transition-all duration-300 ease-in-out font-semibold text-blue-500 hover:text-blue-700',
                loading && 'cursor-not-allowed text-blue-300'
              )}
            >
              Create one now.
            </span>
          </span>
        </div>
        <div className="flex justify-center items-center gap-3 text-xs text-gray-500 ">
          <div
            className={twMerge(
              'border-2 border-red-600 text-red-500 content-center  cursor-pointer rounded hover:scale-110 p-2 text-xl duration-300 ease-in-out',
              loading && 'cursor-not-allowed text-red-400'
            )}
          >
            <FaGoogle />
          </div>
          <div
            className={twMerge(
              'border-2 text-gray-800 border-gray-800 content-center  cursor-pointer rounded p-2 text-xl hover:scale-110 duration-300 ease-in-out',
              loading && 'cursor-not-allowed text-gray-500'
            )}
          >
            <FaGithub />
          </div>
        </div>
      </form>
      <Modal
        type="warning"
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
