import { TPasswordRulesProps } from '@/types/type'
import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'

const PasswordRules = ({ password }: TPasswordRulesProps) => {
  const rules = [
    {
      label: 'At least 8 characters',
      isValid: password.length >= 8,
    },
    {
      label: 'Includes uppercase letters (A-Z)',
      isValid: /[A-Z]/.test(password),
    },
    {
      label: 'Includes lowercase letters (a-z)',
      isValid: /[a-z]/.test(password),
    },
    {
      label: 'Includes numbers (0-9)',
      isValid: /[0-9]/.test(password),
    },
    {
      label: 'Includes special characters (!@#$%)',
      isValid: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ]

  return (
    <div className=" w-62 bg-gray-100 border border-gray-300 rounded p-4 text-sm z-20">
      <p className="font-medium text-black mb-2">
        Your password must meet the following requirements :
      </p>
      <ul className="space-y-1">
        {rules.map((rule, index) => (
          <li key={index} className="flex items-start gap-2">
            {rule.isValid ? (
              <FaCheck className="text-green-500 text-xs" />
            ) : (
              <FaTimes className="text-red-500 text-xs" />
            )}
            <span className={rule.isValid ? 'text-green-700' : 'text-red-700'}>
              {rule.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PasswordRules
