'use client'

import { useEffect } from 'react'
import { seedSales } from './api/seed/seed'


export default function Home() {
  useEffect(() => {
    seedSales()
  }, [])

  return <h1>Hello World</h1>
}
