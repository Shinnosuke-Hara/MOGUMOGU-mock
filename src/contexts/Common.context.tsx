import React, { createContext, useMemo, useContext, useState } from 'react'

interface CommonContext {
  location: number | undefined
  setLocation: React.Dispatch<React.SetStateAction<number | undefined>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const CommonContext = createContext<CommonContext | undefined>(undefined)

export function useCommonContext(): CommonContext {
  const context = useContext(CommonContext)
  if (context === undefined) {
    throw new Error('CommonContext is not defined.')
  }
  return context
}

export function CommonProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState<number>()
  const [loading, setLoading] = useState(false)

  const value = useMemo(
    () => ({
      location,
      setLocation,
      loading,
      setLoading,
    }),
    [location, loading]
  )

  return (
    <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
  )
}
