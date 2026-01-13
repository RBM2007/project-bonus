'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';

import {
  PageContainer,
  Header,
  Title,
  Filters,
  FilterButton,
  TableWrapper,
  Table,
  Pagination,
  Actions,
  ActionButton,
  Overlay,
  FilterWrapper,
} from './styles';

import {
  CaretDown,
  PencilSimple,
  Trash,
} from 'phosphor-react';

import { getSales, Sale, saveSales } from '@/app/api/sales';

import { NameFilter } from '../components/Buttons/NameFilter';
import { LastNameFilter } from '../components/Buttons/LastNameFilter';
import { PhoneFilter } from '../components/Buttons/PhoneFilter';
import { PurchaseValueFilter } from '../components/Buttons/MoneyFilter';
import { BonusValueFilter } from '../components/Buttons/BonusFilter';
import { RepurchaseFilter } from '../components/Buttons/RepurchaseFilter';

import { DateRangePicker } from '../components/Calendario';
import { DeleteSaleModal } from '../components/DeleteSaleModal';

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

function formatDate(date?: string) {
  if (!date) return '-';
  try {
    return new Date(date).toLocaleDateString('pt-BR');
  } catch {
    return date;
  }
}

function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

function safeNumber(value: string) {
  if (value === '') return null;
  const parsed = Number(value);
  return isNaN(parsed) ? null : parsed;
}

type ActiveFilter =
  | 'name'
  | 'lastName'
  | 'phone'
  | 'value'
  | 'bonus'
  | 'repurchase'
  | null;

type ActiveCalendar =
  | 'date'
  | 'expiresAt'
  | null;

type FiltersState = {
  name: string;
  lastName: string;
  phone: string;
  minValue: string;
  maxValue: string;
  minBonus: string;
  maxBonus: string;
  minRepurchase: string;
  maxRepurchase: string;
  dateStart: string;
  dateEnd: string;
  expiresStart: string;
  expiresEnd: string;
};

const initialFilters: FiltersState = {
  name: '',
  lastName: '',
  phone: '',
  minValue: '',
  maxValue: '',
  minBonus: '',
  maxBonus: '',
  minRepurchase: '',
  maxRepurchase: '',
  dateStart: '',
  dateEnd: '',
  expiresStart: '',
  expiresEnd: '',
};

export default function Historico() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [page, setPage] = useState(1);

  const [activeFilter, setActiveFilter] = useState<ActiveFilter>(null);
  const [activeCalendar, setActiveCalendar] = useState<ActiveCalendar>(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [saleToDelete, setSaleToDelete] = useState<Sale | null>(null);

  const [filters, setFilters] = useState<FiltersState>(initialFilters);

  const itemsPerPage = 5;

  useEffect(() => {
    setSales(getSales());
  }, []);

  const resetPage = useCallback(() => {
    setPage(1);
  }, []);

  const closeAllOverlays = useCallback(() => {
    setActiveFilter(null);
    setActiveCalendar(null);
    setIsDeleteModalOpen(false);
  }, []);

  const openDeleteModal = useCallback((sale: Sale) => {
    setSaleToDelete(sale);
    setIsDeleteModalOpen(true);
  }, []);

  const confirmDelete = useCallback(() => {
    if (!saleToDelete) return;
    const updated = sales.filter((s) => s.id !== saleToDelete.id);
    setSales(updated);
    saveSales(updated);
    setSaleToDelete(null);
    setIsDeleteModalOpen(false);
  }, [saleToDelete, sales]);

  const filteredSales = useMemo(() => {
    return sales.filter((sale) => {
      const nameMatch = normalizeText(sale.name).includes(normalizeText(filters.name));
      const lastNameMatch = normalizeText(sale.lastName || '').includes(normalizeText(filters.lastName));
      const phoneMatch = sale.phone.includes(filters.phone);

      const minValue = safeNumber(filters.minValue);
      const maxValue = safeNumber(filters.maxValue);
      const valueMatch =
        (minValue === null || sale.value >= minValue) &&
        (maxValue === null || sale.value <= maxValue);

      const minBonus = safeNumber(filters.minBonus);
      const maxBonus = safeNumber(filters.maxBonus);
      const bonusMatch =
        (minBonus === null || sale.bonus >= minBonus) &&
        (maxBonus === null || sale.bonus <= maxBonus);

      const minRepurchase = safeNumber(filters.minRepurchase);
      const maxRepurchase = safeNumber(filters.maxRepurchase);
      const repurchaseMatch =
        (minRepurchase === null || (sale.repurchases ?? 0) >= minRepurchase) &&
        (maxRepurchase === null || (sale.repurchases ?? 0) <= maxRepurchase);

      const dateMatch =
        (!filters.dateStart || new Date(sale.date) >= new Date(filters.dateStart)) &&
        (!filters.dateEnd || new Date(sale.date) <= new Date(filters.dateEnd));

      const expiresMatch =
        (!filters.expiresStart || new Date(sale.expiresAt ?? '') >= new Date(filters.expiresStart)) &&
        (!filters.expiresEnd || new Date(sale.expiresAt ?? '') <= new Date(filters.expiresEnd));

      return (
        nameMatch &&
        lastNameMatch &&
        phoneMatch &&
        valueMatch &&
        bonusMatch &&
        repurchaseMatch &&
        dateMatch &&
        expiresMatch
      );
    });
  }, [sales, filters]);

  const totalPages = Math.max(1, Math.ceil(filteredSales.length / itemsPerPage));

  const paginatedSales = filteredSales.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const isOverlayVisible =
    activeFilter !== null ||
    activeCalendar !== null ||
    isDeleteModalOpen;

  return (
    <>
      {isOverlayVisible && <Overlay onClick={closeAllOverlays} />}

      <PageContainer>
        <Header>
          <Title>Histórico de vendas</Title>

          <Filters>
            <FilterButton onClick={() => setActiveCalendar('date')}>
              Data <CaretDown size={14} />
            </FilterButton>

            <FilterButton onClick={() => setActiveFilter('name')}>
              Nome <CaretDown size={14} />
            </FilterButton>

            <FilterButton onClick={() => setActiveFilter('lastName')}>
              Sobrenome <CaretDown size={14} />
            </FilterButton>

            <FilterButton onClick={() => setActiveFilter('phone')}>
              Celular <CaretDown size={14} />
            </FilterButton>

            <FilterButton onClick={() => setActiveFilter('value')}>
              Valor da compra <CaretDown size={14} />
            </FilterButton>

            <FilterButton onClick={() => setActiveFilter('bonus')}>
              Bônus <CaretDown size={14} />
            </FilterButton>

            <FilterButton onClick={() => setActiveCalendar('expiresAt')}>
              Validade <CaretDown size={14} />
            </FilterButton>

            <FilterButton onClick={() => setActiveFilter('repurchase')}>
              Visita <CaretDown size={14} />
            </FilterButton>
          </Filters>
        </Header>

        {(activeFilter || activeCalendar) && (
          <FilterWrapper onClick={(e) => e.stopPropagation()}>
            {activeFilter === 'name' && (
              <NameFilter
                value={filters.name}
                onChange={(v) => { setFilters(p => ({ ...p, name: v })); resetPage(); }}
                onClear={() => setFilters(p => ({ ...p, name: '' }))}
              />
            )}

            {activeFilter === 'lastName' && (
              <LastNameFilter
                value={filters.lastName}
                onChange={(v) => { setFilters(p => ({ ...p, lastName: v })); resetPage(); }}
                onClear={() => setFilters(p => ({ ...p, lastName: '' }))}
              />
            )}

            {activeFilter === 'phone' && (
              <PhoneFilter
                value={filters.phone}
                onChange={(v) => { setFilters(p => ({ ...p, phone: v })); resetPage(); }}
                onClear={() => setFilters(p => ({ ...p, phone: '' }))}
              />
            )}

            {activeFilter === 'value' && (
              <PurchaseValueFilter
                min={filters.minValue}
                max={filters.maxValue}
                onChange={(min, max) => { setFilters(p => ({ ...p, minValue: min, maxValue: max })); resetPage(); }}
                onClear={() => setFilters(p => ({ ...p, minValue: '', maxValue: '' }))}
              />
            )}

            {activeFilter === 'bonus' && (
              <BonusValueFilter
                min={filters.minBonus}
                max={filters.maxBonus}
                onChange={(min, max) => { setFilters(p => ({ ...p, minBonus: min, maxBonus: max })); resetPage(); }}
                onClear={() => setFilters(p => ({ ...p, minBonus: '', maxBonus: '' }))}
              />
            )}

            {activeFilter === 'repurchase' && (
              <RepurchaseFilter
                min={filters.minRepurchase}
                max={filters.maxRepurchase}
                onChange={(min, max) => { setFilters(p => ({ ...p, minRepurchase: min, maxRepurchase: max })); resetPage(); }}
                onClear={() => setFilters(p => ({ ...p, minRepurchase: '', maxRepurchase: '' }))}
              />
            )}

            {activeCalendar && (
              <DateRangePicker
                start={
                  activeCalendar === 'date'
                    ? filters.dateStart
                    : filters.expiresStart
                }
                end={
                  activeCalendar === 'date'
                    ? filters.dateEnd
                    : filters.expiresEnd
                }
                onChange={(start, end) => {
                  setFilters(p =>
                    activeCalendar === 'date'
                      ? { ...p, dateStart: start, dateEnd: end }
                      : { ...p, expiresStart: start, expiresEnd: end }
                  );
                  resetPage();
                }}
                onClear={() => {
                  setFilters(p =>
                    activeCalendar === 'date'
                      ? { ...p, dateStart: '', dateEnd: '' }
                      : { ...p, expiresStart: '', expiresEnd: '' }
                  );
                  resetPage();
                }}
              />
            )}
          </FilterWrapper>
        )}

        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Celular</th>
                <th>Valor da compra</th>
                <th>Bônus</th>
                <th>Validade</th>
                <th>Recompras</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {paginatedSales.map((sale) => (
                <tr key={sale.id}>
                  <td>{formatDate(sale.date)}</td>
                  <td>{sale.name}</td>
                  <td>{sale.lastName || '-'}</td>
                  <td>{sale.phone}</td>
                  <td>{formatCurrency(sale.value)}</td>
                  <td>{formatCurrency(sale.bonus)}</td>
                  <td>{formatDate(sale.expiresAt)}</td>
                  <td>{sale.repurchases ?? 0}</td>
                  <td>
                    <Actions>
                      <ActionButton variant="edit">
                        <PencilSimple />
                      </ActionButton>
                      <ActionButton
                        variant="delete"
                        onClick={() => openDeleteModal(sale)}
                      >
                        <Trash />
                      </ActionButton>
                    </Actions>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Pagination>
            <button
              disabled={page === 1}
              onClick={() => setPage(p => Math.max(p - 1, 1))}
            >
              Anterior
            </button>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(p => Math.min(p + 1, totalPages))}
            >
              Próxima
            </button>

            <span>Página {page} de {totalPages}</span>
          </Pagination>
        </TableWrapper>
      </PageContainer>

      {isDeleteModalOpen && (
        <DeleteSaleModal
          onCancel={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </>
  );
}
