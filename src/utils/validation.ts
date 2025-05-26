import { GoDot } from 'react-icons/go'

const validation = (
  value: string,
  type: string
): { isValid: boolean; message: string } => {
  let isValid = true
  let message = ''

  if (type === 'email') {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    isValid = emailRegex.test(value)
    if (!isValid) {
      message = 'Please enter a valid email address.'
    }
  } else if (type === 'password') {
    const rules = [
      {
        label: 'At least 8 characters',
        isValid: value.length >= 8,
        errorMessage: 'Password must be at least 8 characters long.',
      },
      {
        label: 'Includes uppercase letters (A-Z)',
        isValid: /[A-Z]/.test(value),
        errorMessage:
          'Password must contain at least one uppercase letter (A-Z).',
      },
      {
        label: 'Includes lowercase letters (a-z)',
        isValid: /[a-z]/.test(value),
        errorMessage:
          'Password must contain at least one lowercase letter (a-z).',
      },
      {
        label: 'Includes numbers (0-9)',
        isValid: /[0-9]/.test(value),
        errorMessage: 'Password must include at least one number (0-9).',
      },
      {
        label: 'Includes special characters (!@#$%)',
        isValid: /[!@#$%^&*(),.?":{}|<>]/.test(value),
        errorMessage:
          'Password must contain at least one special character (!@#$%).',
      },
    ]

    for (let rule of rules) {
      if (!rule.isValid) {
        isValid = false
        message = rule.errorMessage
        break
      }
    }

    if (isValid !== false) {
      isValid = true
      message = 'Password is strong.'
    }
  } else if (type === 'text') {
    isValid = true
  } else if (type === 'phone') {
    const phoneRegex = /^09\d{9}$/
    isValid = phoneRegex.test(value)
    message = isValid
      ? 'Valid phone number.'
      : 'Phone number must start with 09 and be 11 digits long.'
  } else {
    isValid = false
    message = 'Unknown input type.'
  }

  return { isValid, message }
}

export default validation
