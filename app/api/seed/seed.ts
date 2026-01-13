import { Sale, getSales, saveSale} from '@/app/api/sales'

// ======================= Utils =======================
function generateId(length = 12) {
  return Array.from({ length })
    .map(() => Math.floor(Math.random() * 36).toString(36))
    .join('')
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomPhone() {
  return `(${randomInt(11, 99)}) 9${randomInt(1000, 9999)}-${randomInt(1000, 9999)}`
}

function randomName() {
  const names = ['João', 'Maria', 'Carlos', 'Ana', 'Rafael', 'Paula', 'Marcos', 'Fernanda']
  const lastNames = ['Silva', 'Souza', 'Oliveira', 'Costa', 'Pereira', 'Gomes']

  return {
    name: randomChoice(names),
    lastName: randomChoice(lastNames),
  }
}

function randomDateBetween(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

function toISO(date: Date) {
  return date.toISOString()
}

// ======================= Criação de venda =======================
function createRandomSale(date: Date): Sale {
  const { name, lastName } = randomName()

  const value = randomInt(30, 300)
  const bonus = Number(((value * randomInt(5, 15)) / 100).toFixed(2))
  const finalValue = Number((value - bonus).toFixed(2))

  const expiresAt = new Date(date)
  expiresAt.setDate(expiresAt.getDate() + randomInt(-10, 30))

  return {
    id: generateId(),
    name,
    lastName,
    phone: randomPhone(),
    value,
    bonus,
    finalValue,
    date: toISO(date),
    expiresAt: toISO(expiresAt),
    repurchases: randomInt(0, 5),
  }
}

// ======================= Seed principal =======================
export function seedSales() {
  const existingSales = getSales()
  const newSales: Sale[] = []

  const today = new Date()

  // Hoje
  for (let i = 0; i < 5; i++) {
    newSales.push(createRandomSale(today))
  }

  // Ontem
  const yesterday = new Date()
  yesterday.setDate(today.getDate() - 1)
  for (let i = 0; i < 4; i++) {
    newSales.push(createRandomSale(yesterday))
  }

  // Este mês
  for (let i = 0; i < 20; i++) {
    const d = new Date(today)
    d.setDate(randomInt(1, today.getDate()))
    newSales.push(createRandomSale(d))
  }

  // Mês passado
  const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1)
  const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0)

  for (let i = 0; i < 15; i++) {
    const d = randomDateBetween(lastMonthStart, lastMonthEnd)
    newSales.push(createRandomSale(d))
  }

  // 🔥 Junta tudo (banco + seed novo)
  const mergedSales = [...existingSales, ...newSales]

  // Salva usando a função oficial
  mergedSales.forEach(saveSalesCompat)

  console.log(
    `🌱 Seed concluído: ${newSales.length} novas vendas adicionadas (total: ${mergedSales.length})`
  )
}

// ======================= Compat =======================
// Usa saveSale sem duplicar lógica
function saveSalesCompat(sale: Sale) {
  saveSale(sale)
}
