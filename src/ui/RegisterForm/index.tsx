'use client'
import { registerUser } from '@/actions/actions'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useState } from 'react'

const RegisterForm = () => {
  const [formValidity, setFormValidity] = useState({
    userName: false,
    email: false,
    password: false,
    phoneNumber: false,
  })

  const handleValidation = (field: string, isValid: boolean) => {
    setFormValidity((prev) => ({ ...prev, [field]: isValid }))
  }

  const createNewUser = async (formData: FormData) => {
    try {
      const result = await registerUser(formData)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      action={createNewUser}
      className="border-2 mb-5 border-gray-400 rounded-md p-4 bg-white"
    >
      <Input
        label="Your name"
        name="userName"
        type="text"
        onCheckValid={(isValid) => handleValidation('userName', isValid)}
        required
      />
      <Input
        label="Your email"
        name="email"
        type="email"
        placeholder="ex: email@gmail.com"
        onCheckValid={(isValid) => handleValidation('email', isValid)}
        required
      />
      <Input
        label="Your password"
        name="password"
        type="password"
        TooltipPosition="right"
        TooltipActive
        onCheckValid={(isValid) => handleValidation('password', isValid)}
        required
      />
      <Input
        label="Your phone"
        name="phoneNumber"
        type="phone"
        placeholder="ex: 09123456789"
        onCheckValid={(isValid) => handleValidation('phoneNumber', isValid)}
        required
      />
      <Button
        disabled={!Object.values(formValidity).every(Boolean)}
        label="Register"
        type="submit"
      />
    </form>
  )
}

export default RegisterForm
