"use client";

import Image from "next/image";
import {
  Container,
  Header,
  Content,
  Title,
  DaysBox,
  DaysLabel,
  DaysValue,
  Text,
  StrongText,
  Button,
  Footer,
  FooterColumn,
} from '../../styles/styled-components/tempo-sem-acessar.styles'

import Logo from '../../assets/logo-bonus-branca.png'

export default function AvisoInatividade1() {
  return (
    <Container>
      
      <Header>
        <Image src={Logo} alt="Mais Bônus" height={48} />
      </Header>

      
      <Content>
        <Title>
          Percebemos que você não cadastra um cliente a mais de uma semana
        </Title>

        <DaysBox>
          <DaysValue>07</DaysValue>
          <DaysLabel>Dias</DaysLabel>
        </DaysBox>

        <Text>
          Entendemos que o dia a dia é corrido, mas não queremos que você perca os
          benefícios que nossa plataforma oferece!
        </Text>

        <Text>
          Lembre-se: o Mais Bônus foi feito para você atrair e fidelizar seus
          clientes, impulsionando suas vendas e criando um relacionamento
          duradouro.
        </Text>

        <Text>
          São 15 segundos e 3 cliques para você fazer o cadastro de seus clientes.
        </Text>

          <Text>
          Comércios, lojas e negócios que cadastram mais de 75% de seus clientes
          conseguem alavancar as vendas em mais de 10% com uma receita superior a
          12%.
        </Text>

        <StrongText>
          Um cliente que retorna com a Mais Bônus, gasta mais e gera mais valor
          para o seu negócio.
        </StrongText>

        <Button>Voltar a cadastrar agora</Button>
      </Content>

      
      <Footer>
        <FooterColumn>
          <strong>Alexandre Altman</strong>
          <span>Cuidando da sua satisfação sempre</span>
        </FooterColumn>

        <FooterColumn>
          <span>alexandre.altman@maisbonus.com.br</span>
          <span>www.maisbonus.com.br</span>
          <span>(11) 97357-3576</span>
        </FooterColumn>
      </Footer>
    </Container>
  );
}
