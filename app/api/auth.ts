
export type User = {
  loja: string;
  responsavel: string;
  celular: string;
  documento: string;
  tipoNegocio: string;
  email: string;
  senha: string;
};

const STORAGE_KEY = '@app:user';

export function saveUser(user: User) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function getUser(): User | null {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}