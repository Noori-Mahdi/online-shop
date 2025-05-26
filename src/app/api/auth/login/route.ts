import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { encodeToken } from '@/utils/authentication'
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

interface ILoginBody {
  email: string
  password: string
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data: ILoginBody = await req.json()

    if (!data.email && !data.password) {
      return NextResponse.json(
        { message: 'please fill all the fields' },
        { status: 400 }
      )
    }

    const user = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    })

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    const value = await bcrypt.compare(data.password, user.password)

    if (!value) {
      return NextResponse.json(
        { message: 'Pasword not valid' },
        { status: 400 }
      )
    }

    const tokenData = {
      id: user.id,
    }

    const token = await jwt.sign(tokenData, 'my secret', {
      expiresIn: '1d',
    })
    // const token = await encodeToken(user.id);

    return NextResponse.json(
      { message: 'User logged in successfully' },
      {
        status: 200,
        headers: {
          'Set-Cookie': `token=${token}; HttpOnly; Path=/ `,
        },
      }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
