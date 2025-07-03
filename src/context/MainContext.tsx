'use client'

import { fetchUserData, logout } from '@/actions/actions'
import { TContextUser } from '@/types/type'
import React, { createContext, useEffect, useMemo, useState } from 'react'

type ContextReturnType = {
  user: TContextUser
  isLoggedIn: boolean
  updateUserInfo: () => void
  handleLogout: () => void
}

type MainContextPropsType = {
  children: React.ReactNode
}

type MainContextState = {
  user: any | undefined
}

export const Context = createContext<ContextReturnType>({} as ContextReturnType)

const MainContext = (props: MainContextPropsType) => {
  const [state, setState] = useState<MainContextState>({
    user: undefined,
  })

  const { children } = props

  const updateUserInfo = async () => {
    try {
      const result = await fetchUserData()
      setState((per) => ({
        ...per,
        user: result,
      }))
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = () => {
    try {
      const result = logout()
      setState((per) => ({ ...per, user: undefined }))
    } catch (error) {
      console.log(error)
    }
  }

  const isLoggedIn = useMemo(() => {
    return !!state.user
  }, [state.user])

  useEffect(() => {
    updateUserInfo()
  }, [])

  return (
    <Context.Provider
      value={{
        ...state,
        isLoggedIn,
        updateUserInfo,
        handleLogout,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default MainContext
