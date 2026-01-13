'use client'

import { useEffect, useMemo, useState } from 'react'
import { MagnifyingGlass, PencilSimple, Trash } from 'phosphor-react'

import { getSales, saveSale, Sale } from '@/app/api/sales'

import {
  Actions,
  PageContainer,
  Table,
  TableWrapper,
} from '../historico-vendas/styles'

import {
  Field,
  FormCard,
  FormGrid,
  Header,
  Input,
  InputGroup,
  Label,
  SearchButton,
  SubmitButton,
  TableCell,
  TableHead,
  TableRow,
  Title,
  TableHeader,
  LockedInput,
  FooterPagination,
} from './styles'

import { CancelButton } from '../components/DeleteSaleModal/styles'

const ITEMS_PER_PAGE = 5

export default function RegistrarVenda() {
  // ================= FORM =================
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [purchaseValue, setPurchaseValue] = useState('')

  // ================= HISTÓRICO =================
  const [allSales, setAllSales] = useState<Sale[]>([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    setAllSales(getSales())
  }, [])

  // ================= FILTRO =================
  const filteredSales = useMemo(() => {
    if (!search) return allSales

    const term = search.toLowerCase()

    return allSales.filter(
      (sale) =>
        sale.name.toLowerCase().includes(term) ||
        sale.lastName?.toLowerCase().includes(term) ||
        sale.phone.includes(term)
    )
  }, [search, allSales])

  // ================= PAGINAÇÃO =================
  const totalPages = Math.ceil(filteredSales.length / ITEMS_PER_PAGE)

  const paginatedSales = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE
    return filteredSales.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredSales, page])

  // ================= REGISTRAR =================
  function handleSubmit() {
    if (!phone || !name || !purchaseValue) return

    const valueNumber = Number(
      purchaseValue.replace('R$', '').replace(',', '.')
    )

    const newSale: Sale = {
      id: crypto.randomUUID(),
      phone,
      name,
      lastName,
      value: valueNumber,
      bonus: Number((valueNumber * 0.08).toFixed(2)),
      finalValue: Number((valueNumber * 0.92).toFixed(2)),
      date: new Date().toISOString(),
      expiresAt: new Date(
        Date.now() + 1000 * 60 * 60 * 24 * 30
      ).toISOString(),
      repurchases: 0,
    }

    saveSale(newSale)

    const updatedSales = [newSale, ...allSales]

    setAllSales(updatedSales)
    setPage(1)

    setPhone('')
    setName('')
    setLastName('')
    setPurchaseValue('')
  }

  // ================= UI =================
  return (
    <PageContainer>
      {/* HEADER */}
      <Header>
        <Title>Registrar venda</Title>
      </Header>

      {/* FORM */}
      <FormCard>
        <FormGrid>
          <Field>
            <Label>Celular</Label>
            <InputGroup>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(62) 9 9999-9999"
              />
              <SearchButton>
                <MagnifyingGlass size={18} />
              </SearchButton>
            </InputGroup>
          </Field>

          <Field>
            <Label>Nome</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
            />
          </Field>

          <Field>
            <Label>Sobrenome (opcional)</Label>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Sobrenome"
            />
          </Field>

          <Field>
            <Label>Valor da compra</Label>
            <Input
              value={purchaseValue}
              onChange={(e) => setPurchaseValue(e.target.value)}
              placeholder="380,00"
            />
          </Field>

          <Field>
            <Label>Valor com bônus</Label>
            <LockedInput disabled />
          </Field>

          <Field>
            <Label>Bônus</Label>
            <LockedInput disabled />
          </Field>
        </FormGrid>

        <Actions>
          <CancelButton>Cancelar</CancelButton>
          <SubmitButton onClick={handleSubmit}>
            Registrar venda
          </SubmitButton>
        </Actions>
      </FormCard>

      {/* HISTÓRICO */}
      <TableHeader>
        <Title section>Histórico de vendas</Title>

        <Input
          placeholder="Buscar por nome ou telefone"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setPage(1)
          }}
        />
      </TableHeader>

      <TableWrapper>
        <Table>
          <thead>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Sobrenome</TableHead>
              <TableHead>Celular</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Bônus</TableHead>
              <TableHead>Validade</TableHead>
              <TableHead>Recompras</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </thead>

          <tbody>
            {paginatedSales.map((sale) => (
              <TableRow key={sale.id}>
                <TableCell>
                  {new Date(sale.date).toLocaleDateString()}
                </TableCell>
                <TableCell>{sale.name}</TableCell>
                <TableCell>{sale.lastName || '-'}</TableCell>
                <TableCell>{sale.phone}</TableCell>
                <TableCell>
                  R$ {sale.value.toFixed(2).replace('.', ',')}
                </TableCell>
                <TableCell>
                  R$ {sale.bonus.toFixed(2).replace('.', ',')}
                </TableCell>
                <TableCell>
                  {sale.expiresAt
                    ? new Date(sale.expiresAt).toLocaleDateString()
                    : '-'}
                </TableCell>
                <TableCell>{sale.repurchases}</TableCell>
                <TableCell>
                  <PencilSimple size={16} />
                  <Trash size={16} />
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableWrapper>

      {/* PAGINAÇÃO */}
      <FooterPagination>
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Anterior
        </button>

        <span>
          Página {page} de {totalPages || 1}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Próxima
        </button>
      </FooterPagination>
    </PageContainer>
  )
}
