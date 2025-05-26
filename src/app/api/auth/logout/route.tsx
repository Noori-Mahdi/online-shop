import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json(
      { message: 'user logged out successfully' },
      {
        status: 200,
        headers: {
          'Set-Cookie': `token=; HttpOnly; Path=/; Max-Age=0`,
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
