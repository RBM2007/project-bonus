export type User = {
  loja: string
  responsavel: string
  celular: string
  documento: string
  tipoNegocio: string
  email: string
  senha: string
}

const STORAGE_KEY = '@app:user'

export function saveUser(user: User) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}

export function getUser(): User | null {
  if (typeof window === 'undefined') return null

  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : null
}

/* =========================
   NOVA FUNÇÃO (necessária)
========================= */
export function updateUserPassword(newPassword: string): boolean {
  if (typeof window === 'undefined') return false

  const user = getUser()

  if (!user) return false

  const updatedUser: User = {
    ...user,
    senha: newPassword,
  }

  saveUser(updatedUser)
  return true
}
