'use client'

import React from 'react'
import MainContext from '@/context/MainContext'
import { ToastProvider } from '@/context/ToastContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MainContext>
      <ToastProvider>{children}</ToastProvider>
    </MainContext>
  )
}