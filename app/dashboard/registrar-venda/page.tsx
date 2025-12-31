"use client"
import {
  Page,
  Header,
  Title,
  FormCard,
  FormGrid,
  Field,
  Input,
  InputGroup,
  SearchButton,
  SectionCard,
  SectionTitle,
  FooterPagination,
  PaginationButton,
} from "./styles";

import { MagnifyingGlass } from "phosphor-react";

export default function RegistrarVenda() {
  return (
    <Page>
      <Header>
        <Title>Registrar venda</Title>
      </Header>

      <FormCard>
        <FormGrid>
          <Field>
            <label>Celular</label>
            <InputGroup>
              <Input placeholder="(61) 9 9999-9999" />
              <SearchButton>
                <MagnifyingGlass size={18} />
              </SearchButton>
            </InputGroup>
          </Field>

          <Field>
            <label>Nome</label>
            <Input placeholder="Informe" />
          </Field>

          <Field>
            <label>Sobrenome</label>
            <Input placeholder="Informe" />
          </Field>

          <Field>
            <label>Valor da compra</label>
            <Input placeholder="R$0,00" />
          </Field>

          <Field disabled>
            <label>Valor da compra com o bônus</label>
            <Input disabled placeholder="R$0,00" />
          </Field>

          <Field disabled>
            <label>Valor do bônus</label>
            <Input disabled placeholder="R$0,00" />
          </Field>

          <Field disabled>
            <label>Valor máximo em descontos</label>
            <Input disabled placeholder="R$0,00" />
          </Field>
        </FormGrid>
      </FormCard>

      <SectionCard>
        <SectionTitle>Últimas compras</SectionTitle>

        <FooterPagination>
          <div>
            <PaginationButton>Anterior</PaginationButton>
            <PaginationButton>Próxima</PaginationButton>
          </div>

          <span>Página 1 de 1</span>
        </FooterPagination>
      </SectionCard>
    </Page>
  );
}
