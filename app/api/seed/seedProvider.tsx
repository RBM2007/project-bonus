'use client'

import { useEffect } from 'react'
import { seedSales } from './seed'


export function SeedProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const hasSeed = localStorage.getItem('@sales')

    if (!hasSeed) {
      seedSales()
    }
  }, [])

  return <>{children}</>
}
