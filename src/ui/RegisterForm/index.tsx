'use client'
import { registerUser } from '@/actions/actions'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useToast } from '@/context/ToastContext'
import { useActionState, useState } from 'react'

const RegisterForm = () => {
  const [loading, setLoading] = useState(false)
  const [formValidity, setFormValidity] = useState({
    userName: false,
    email: false,
    password: false,
    phoneNumber: false,
  })
  const { addToast } = useToast()

  const handleValidation = (field: string, isValid: boolean) => {
    setFormValidity((prev) => ({ ...prev, [field]: isValid }))
  }

  const createNewUser = async (formData: FormData) => {
    try {
      const result = await registerUser(formData)
      addToast(result.message, result.type)
    } catch (error) {
      addToast('Something went wrong', 'error')
    }
  }

  const handleRegister = async () => {
    setLoading(true)
    addToast('Processing your request, please wait...', 'info')
    await createNewUser
    setLoading(false)
  }

  return (
    <form
      onSubmit={handleRegister}
      className="border-2 mb-5 border-gray-400 rounded-md p-4 bg-white"
    >
      <Input
        label="Your name"
        name="userName"
        type="text"
        onCheckValid={(isValid) => handleValidation('userName', isValid)}
        required
        readOnly={loading}
      />
      <Input
        label="Your email"
        name="email"
        type="email"
        placeholder="ex: email@gmail.com"
        onCheckValid={(isValid) => handleValidation('email', isValid)}
        required
        readOnly={loading}
      />
      <Input
        label="Your password"
        name="password"
        type="password"
        tooltipPosition="right"
        tooltipActive
        toolTipClassName="hidden sm:block sm:-translate-x-1/2 lg:-translate-x-0 sm:-translate-y-0 lg:-translate-y-1/2 sm:left-1/2 lg:left-full sm:top-full lg:top-1/2 z-20"
        onCheckValid={(isValid) => handleValidation('password', isValid)}
        required
        readOnly={loading}
      />
      <Input
        label="Your phone"
        name="phoneNumber"
        type="phone"
        placeholder="ex: 09123456789"
        onCheckValid={(isValid) => handleValidation('phoneNumber', isValid)}
        required
        readOnly={loading}
      />
      <Button
        disabled={!Object.values(formValidity).every(Boolean) || loading}
        label={loading ? loading : 'Register'}
        type="submit"
      />
    </form>
  )
}

export default RegisterForm
