'use client';

import { useState } from 'react';

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

import { NameFilter } from '../components/Buttons/NameFilter';
import { LastNameFilter } from '../components/Buttons/LastNameFilter';
import { PhoneFilter } from '../components/Buttons/PhoneFilter';
import { PurchaseValueFilter } from '../components/Buttons/MoneyFilter';
import { BonusValueFilter } from '../components/Buttons/BonusFilter';
import { RepurchaseFilter } from '../components/Buttons/RepurchaseFilter';

export default function Historico() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <>
      {/* 🌫️ OVERLAY ESCURECENDO O FUNDO */}
      {activeFilter && (
        <Overlay onClick={() => setActiveFilter(null)} />
      )}

      <PageContainer style={{ position: 'relative', zIndex: 2 }}>
        <Header>
          <Title>Histórico de vendas</Title>

          <Filters>
            <FilterButton onClick={() => setActiveFilter('name')}>
              Nome <CaretDown size={14} />
            </FilterButton>

            <FilterButton onClick={() => setActiveFilter('lastname')}>
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

            <FilterButton onClick={() => setActiveFilter('repurchase')}>
              Recompras <CaretDown size={14} />
            </FilterButton>
          </Filters>
        </Header>

        {/* 🧩 FILTROS FLUTUANTES */}
        {activeFilter === 'name' && (
          <FilterWrapper>
            <NameFilter />
          </FilterWrapper>
        )}

        {activeFilter === 'lastname' && (
          <FilterWrapper>
            <LastNameFilter />
          </FilterWrapper>
        )}

        {activeFilter === 'phone' && (
          <FilterWrapper>
            <PhoneFilter />
          </FilterWrapper>
        )}

        {activeFilter === 'value' && (
          <FilterWrapper>
            <PurchaseValueFilter />
          </FilterWrapper>
        )}

        {activeFilter === 'bonus' && (
          <FilterWrapper>
            <BonusValueFilter />
          </FilterWrapper>
        )}

        {activeFilter === 'repurchase' && (
          <FilterWrapper>
            <RepurchaseFilter />
          </FilterWrapper>
        )}

        {/* 📊 TABELA */}
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Data <CaretDown size={14} /></th>
                <th>Nome <CaretDown size={14} /></th>
                <th>Sobrenome <CaretDown size={14} /></th>
                <th>Celular <CaretDown size={14} /></th>
                <th>Valor da compra <CaretDown size={14} /></th>
                <th>Bônus <CaretDown size={14} /></th>
                <th>Validade <CaretDown size={14} /></th>
                <th>Recompras <CaretDown size={14} /></th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {[
                ['23/11/2024','Michele','Santos','11 9 0000-0000','R$ 414,50','R$ 41,45','23/12/2024',6],
                ['23/11/2024','Bárbara','-','11 9 0000-0000','R$ 450,00','R$ 45,00','23/12/2024',5],
                ['23/11/2024','Nicole','-','11 9 0000-0000','R$ 524,00','R$ 52,40','23/12/2024',4],
                ['23/11/2024','Marcos','Santana','11 9 0000-0000','R$ 58,00','R$ 58,00','23/12/2024',2],
                ['22/11/2024','Paulo','Melo','11 9 0000-0000','R$ 654,00','R$ 65,40','23/12/2024',7],
                ['22/11/2024','Alex','Paulino','11 9 0000-0000','R$ 244,00','R$ 24,40','22/12/2024',12],
                ['22/11/2024','Roberto','Andrade','11 9 0000-0000','R$ 2.457,00','R$ 245,70','22/12/2024',4],
                ['22/11/2024','Mathaus','-','11 9 0000-0000','R$ 145,00','R$ 14,50','22/12/2024',3],
                ['22/11/2024','Tatiana','Nascimento','11 9 0000-0000','R$ 342,00','R$ 34,20','22/12/2024',1],
              ].map((row, index) => (
                <tr key={index}>
                  {row.map((cell, i) => (
                    <td key={i}>{cell}</td>
                  ))}
                  <td>
                    <Actions>
                      <ActionButton variant="edit">
                        <PencilSimple />
                      </ActionButton>
                      <ActionButton variant="delete">
                        <Trash />
                      </ActionButton>
                    </Actions>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Pagination>
            <div>
              <button>Anterior</button>
              <button>Próxima</button>
            </div>
            <span>Página 1 de 4</span>
          </Pagination>
        </TableWrapper>
      </PageContainer>
    </>
  );
}
