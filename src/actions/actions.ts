'use server'

import { filterListType } from '@/types/type'
import prisma from '@/utils/db'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// getPage
export async function getPage() {
  const pages = await prisma.page.findMany()
  return pages
}

// Register new user
export async function registerUser(formData: FormData) {
  const email = formData.get('email') as string
  const userName = formData.get('userName') as string
  const password = formData.get('password') as string
  const phoneNumber = formData.get('phoneNumber') as string

  if (!email || !userName || !password || !phoneNumber) {
    throw new Error('All fields are required')
  }

  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) {
    throw new Error('A user already exists with this email')
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      email,
      userName,
      password: hashedPassword,
      phoneNumber,
    },
  })

  redirect('/login')
}

// Login user
export async function loginUser(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    throw new Error('Please fill in all fields')
  }

  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  })

  if (!user) {
    throw new Error('User not found')
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    throw new Error('Invalid password')
  }

  const tokenData = { id: user.id }
  const token = await jwt.sign(tokenData, 'my secret', { expiresIn: '1d' })

  const cookieStore = await cookies()
  cookieStore.set({
    name: 'token',
    value: token,
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24, // 1 day
  })

  return {
    userId: user.id,
    message: 'User logged in successfully',
  }
}

// Logout

export async function logout() {
  const cookieStore = await cookies()

  cookieStore.set({
    name: 'token',
    value: '',
    path: '/',
    expires: new Date(0),
  })

  return { message: 'Logged out successfully' }
}

// Fetch user data by user ID
export async function fetchUserData() {
  const cookieStore = await cookies()
  let token = cookieStore.get('token')

  if (!token) {
    throw new Error('Authorization required')
  }

  const tokenValue = token.value
  let decodedToken: any

  try {
    decodedToken = jwt.verify(tokenValue, 'my secret')
  } catch (error) {
    throw new Error('Invalid token or token expired')
  }

  if (!decodedToken) {
    throw new Error('Authorization required')
  }

  const user = await prisma.user.findFirst({
    where: {
      id: String(decodedToken.id),
    },
    select: {
      id: true,
      email: true,
      userName: true,
      userImg: true,
    },
  })

  if (!user) {
    throw new Error('User not found')
  }

  return user
}

// Get user info for previous account whit IDs
export async function getUsersInfo(usersId: string[]) {
  if (usersId.length <= 0) throw new Error('userId array empty')

  const users = await prisma.user.findMany({
    where: {
      id: {
        in: usersId,
      },
    },
    select: {
      id: true,
      userName: true,
      email: true,
      userImg: true,
    },
  })

  return users
}

// Get Categories
export async function getCategory() {
  const categories = await prisma.category.findMany()
  return categories
}

// Get Product with recommendations Filter
export async function getProductRecommendations(
  recommendationType: filterListType
) {
  let recommendationList
  if (recommendationType == 'bestseller') {
    recommendationList = await prisma.product.findMany({
      orderBy: {
        sellCount: 'desc',
      },
      take: 8,
    })
  } else if (recommendationType == 'new arrival') {
    recommendationList = await prisma.product.findMany({
      orderBy: {
        createTime: 'desc',
      },
      take: 8,
    })
  } else if (recommendationType == 'discountUp') {
    recommendationList = await prisma.product.findMany({
      orderBy: {
        discounts: 'desc',
      },
      take: 8,
    })
  } else if (recommendationType == 'featured products') {
    recommendationList = await prisma.product.findMany({
      orderBy: {
        Like: 'desc',
      },
      take: 8,
    })
  } else {
    throw new Error('recommendationType not found')
  }

  return recommendationList
}
