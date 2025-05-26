import { PrismaClient } from '@prisma/client'

// یک تابع برای ایجاد نمونه PrismaClient
const prismaClientSingleton = () => {
  return new PrismaClient()
}

// اعلام global variable
declare global {
  var prismaGlobal: PrismaClient | undefined
}

// بررسی وجود نمونه در global
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

// ذخیره نمونه در globalThis برای توسعه
if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma
}

export default prisma
