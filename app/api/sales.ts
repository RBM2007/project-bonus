export type Sale = {
  id: string
  phone: string
  name: string
  lastName: string
  value: number
  bonus: number
  finalValue: number
  date: string
  expiresAt?: string
  repurchases?: number
}

const STORAGE_KEY = '@app:sales'

function randomId() {
  return crypto.randomUUID()
}

function randomPhone() {
  return `(${Math.floor(10 + Math.random() * 80)}) 9${Math.floor(
    1000 + Math.random() * 9000
  )}-${Math.floor(1000 + Math.random() * 9000)}`
}

function randomDate(daysBack = 180) {
  const date = new Date()
  date.setDate(date.getDate() - Math.floor(Math.random() * daysBack))
  return date.toISOString()
}

function generateSeedSales(amount = 40): Sale[] {
  const names = ['João', 'Maria', 'Pedro', 'Ana', 'Lucas', 'Marcos', 'Julia']
  const lastNames = ['Silva', 'Santos', 'Oliveira', 'Lima', 'Pereira']

  return Array.from({ length: amount }).map(() => {
    const value = Math.floor(100 + Math.random() * 2000)
    const bonus = Math.floor(value * 0.1)

    return {
      id: randomId(),
      name: names[Math.floor(Math.random() * names.length)],
      lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
      phone: randomPhone(),
      value,
      bonus,
      finalValue: value - bonus,
      date: randomDate(),
      expiresAt: randomDate(-30),
      repurchases: Math.floor(Math.random() * 5),
    }
  })
}

export function saveSales(sales: Sale[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sales))
}

export function getSales(): Sale[] {
  if (typeof window === 'undefined') return []

  const data = localStorage.getItem(STORAGE_KEY)

  if (!data) {
    const seed = generateSeedSales()
    saveSales(seed)
    return seed
  }

  return JSON.parse(data)
}

export function saveSale(sale: Sale) {
  const sales = getSales()
  sales.unshift(sale)
  saveSales(sales)
}
