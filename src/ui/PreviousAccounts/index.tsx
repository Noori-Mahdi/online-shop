'use client'
import { getUsersInfo, loginUser } from '@/actions/actions'
import AccountCard from '@/components/AccountCard'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import { Context } from '@/context/MainContext'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface usersInfo {
  id: string
  email: string
  userName: string
  userImg: string | null
}

const PreviousAccounts = () => {
  const [usersInfo, setUsersInfo] = useState<usersInfo[] | null>()
  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const [selectUserEmail, setSelectUserEmail] = useState<string>()
  const { updateUserInfo } = useContext(Context)
  const router = useRouter()

  const handleLogin = async (formData: FormData) => {
    try {
      await loginUser(formData)
      await updateUserInfo()
      router.push('/home')
    } catch (error) {
      console.log(error)
    }
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
    <div>
      <div>
        <h3 className="text-3xl font-bold tracking-wide">Previous Accounts</h3>
        <span className="text-sm">Select your account or add a new one</span>
      </div>
      <div className="flex gap-2 flex-wrap mt-3 max-h-96 overflow-scroll p-2">
        {usersInfo?.map((user) => (
          <AccountCard
            key={user.id}
            userId={user.id}
            userImg={user.userImg}
            userName={user.userName}
            handleClick={() => {
              setSelectUserEmail(user.email), setShowPasswordForm(true)
            }}
          />
        ))}
      </div>
      <Modal
        isOpen={showPasswordForm}
        onClose={() => {
          setShowPasswordForm(false)
        }}
      >
        <form action={handleLogin}>
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
          />

          <Button label="login" type="submit" />
        </form>
      </Modal>
    </div>
  )
}

export default PreviousAccounts
