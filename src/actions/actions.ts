'use server'

import {
  TFilterListType,
  TBanners,
  TLoginResponse,
  TProductRecommendations,
  TRegisterResponse,
} from '@/types/type'
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
export async function registerUser(
  formData: FormData
): Promise<TRegisterResponse> {
  try {
    const email = formData.get('email') as string
    const userName = formData.get('userName') as string
    const password = formData.get('password') as string
    const phoneNumber = formData.get('phoneNumber') as string

    if (!email || !userName || !password || !phoneNumber) {
      return { message: 'All fields are required', type: 'error' }
    }

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return { message: 'A user already exists with this email', type: 'error' }
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

    return {
      message: 'Registration successful! Welcome aboard',
      type: 'success',
    }
  } catch (error) {
    return { message: 'Something went wrong', type: 'error' }
  }
}

// Login user
export async function loginUser(formData: FormData): Promise<TLoginResponse> {
  try {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
      return {
        type: 'error',
        message: 'Please fill in all fields',
      }
    }

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    })

    if (!user) {
      return {
        type: 'error',
        message: 'User not found',
      }
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return {
        type: 'error',
        message: 'Invalid password',
      }
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
      type: 'success',
      message: 'User logged in successfully',
      data: { userId: user.id },
    }
  } catch (error) {
    return {
      type: 'error',
      message: error instanceof Error ? error.message : 'Something went wrong',
    }
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
      phoneNumber: true,
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
  recommendationType: TFilterListType,
  count: number
): Promise<TProductRecommendations> {
  try {
    // Create Obj with Record <K:key,V:value>
    const orderOptions: Record<
      TFilterListType,
      { [key: string]: 'asc' | 'desc' }
    > = {
      bestseller: { sellCount: 'desc' },
      'new arrival': { createTime: 'desc' },
      discountUp: { discounts: 'desc' },
      'featured products': { like: 'desc' },
    }

    const orderBy = orderOptions[recommendationType]

    if (!orderBy) {
      return { message: 'recommendationType not found', type: 'error' }
    }

    const recommendationList = await prisma.product.findMany({
      orderBy,
      take: count,
    })

    return {
      message: 'Items have been successfully loaded.',
      type: 'success',
      data: recommendationList,
    }
  } catch (error) {
    return { message: 'Something went wrong', type: 'error' }
  }
}

// test add automat product
export async function importProducts(products: Array<any>) {
  for (const product of products) {
    await prisma.product.create({
      data: {
        id: product.id,
        name: product.Name,
        image: product.image,
        price: product.Price,
        discounts: product.discounts,
        like: product.Like,
        count: product.count,
        sellCount: product.sellCount,
        createTime: new Date(product.createTime),
        category: {
          connect: {
            id: product.categoryId,
          },
        },
      },
    })
  }
  console.log('All products imported successfully.')
}

export async function getBanners(active: boolean): Promise<TBanners> {
  try {
    const result = await prisma.banner.findMany({
      where: {
        active: active,
      },
    })
    return {
      message: 'All banner imported successfully.',
      type: 'success',
      data: result,
    }
  } catch (error) {
    return { message: 'Something went wrong', type: 'error', data: null }
  }
}
