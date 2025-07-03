'use client'
import { getUsersInfo, loginUser } from '@/actions/actions'
import AccountCard from '@/components/AccountCard'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import { Context } from '@/context/MainContext'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { TUsersInfo } from '@/types/type'
import { VscPersonAdd } from 'react-icons/vsc'
import { useToast } from '@/context/ToastContext'

const PreviousAccounts = () => {
  const [usersInfo, setUsersInfo] = useState<TUsersInfo[] | null>(null)
  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const [selectUserEmail, setSelectUserEmail] = useState<string>()
  const [loading, setLoading] = useState(false)
  const { updateUserInfo } = useContext(Context)
  const { addToast } = useToast()
  
  const router = useRouter()

  const Login = async (formData: FormData) => {
    try {
      await loginUser(formData)
      await updateUserInfo()
      addToast('Login successful. Welcome back!','success')
      router.push('/home')
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    setLoading(true)
    addToast('Processing your request, please wait...','info')
    await Login(formData)
    setLoading(false)
  }

  const getPreviousAccountInfo = async () => {
    const usersIdString = localStorage.getItem('usersId')

    if (usersIdString) {
      try {
        const takeUsersId: string[] = JSON.parse(usersIdString)

        if (takeUsersId.length > 0) {
          const resault = await getUsersInfo(takeUsersId)
          setUsersInfo(resault)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    getPreviousAccountInfo()
  }, [])

  return (
    <div className="flex flex-col gap-2 h-full">
      <h3 className="text-2xl font-bold tracking-wide">Previous Accounts</h3>
      <div className=" grow  rounded-md p-2 bg-gray-300 max-w-[200px] sm:max-w-[350px] md:max-w-[500px] m-auto md:m-0">
        {usersInfo?.length ? (
          <div className="flex gap-2 h-full flex-wrap p-2 overflow-auto overflow-x-hidden  rounded">
            {usersInfo?.map((user) => (
              <AccountCard
                key={user.id}
                id={user.id}
                userImg={user.userImg}
                userName={user.userName}
                handleClick={() => {
                  setSelectUserEmail(user.email), setShowPasswordForm(true)
                }}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col text-center p-4 justify-center items-center text-xs gap-3 h-full select-none  rounded font-bold">
            <VscPersonAdd className="text-6xl text-gray-900" />
            <div>There are currently no users to display</div>
            <div className="text-gray-900">
              Want us to remember you next time? Just check the 'Remember Me'
              box
            </div>
          </div>
        )}
      </div>
      <Modal
        isOpen={showPasswordForm}
        onClose={() => {
          setShowPasswordForm(false)
        }}
      >
        <form onSubmit={handleLogin}>
          <Input
            name="email"
            label="your email"
            defaultValue={selectUserEmail}
            type="email"
            readOnly
            required
          />
          <Input
            label="your password"
            name="password"
            type="password"
            activeValidation={false}
            required
            readOnly={loading}
          />

          <Button
            label={loading ? 'Loading....' : 'login'}
            type="submit"
            disabled={loading}
            rounded="normal"
          />
        </form>
      </Modal>
    </div>
  )
}

export default PreviousAccounts
