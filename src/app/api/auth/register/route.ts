import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

interface IRegisterBody {
  email: string
  password: string
  userName: string
  phoneNumber: string
}

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const data: IRegisterBody = await req.json()

    if (!data.email || !data.password || !data.userName) {
      return NextResponse.json(
        { message: 'please fill all the fields' },
        { status: 400 }
      )
    }

    const user = await prisma.user.findFirst({
      where: { email: data.email },
    })

    if (user)
      return NextResponse.json(
        { message: 'user already exists' },
        { status: 400 }
      )

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(data.password, salt)
    const newUser = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        userName: data.userName,
        phoneNumber: data.phoneNumber,
      },
    })

    return NextResponse.json(
      { message: 'user created successfully' },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
