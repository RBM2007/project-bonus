"use client";

import Image from "next/image";
import {
  Container,
  Header,
  HeadStrong,
  HeadText,
  Content,
  Title,
  Text,
  StrongText,
  Button,
  Footer,
  FooterColumn,
} from "../styles/styled-components/tempo-sem-acessar.styles";

import Logo from '../assets/logo-bonus-branca.png'

export default function Cancelamento() {
  return (
    <Container>
      {/* HEADER */}
      <Header>
        <Image src={Logo} alt="Mais Bônus" height={48} />

        <HeadText>Olá, José Silva,</HeadText>
        <HeadStrong>É uma pena ver você partir</HeadStrong>
      </Header>


      <Content>
        <Title>
          Confirmamos o cancelamento do seu plano Mais Bônus.
        </Title>

        <StrongText>
          Ficamos tristes em ver você partir 😔
        </StrongText>

        <Text>
          Para nos ajudar a aprimorar nosso serviço e entender melhor às
          necessidades dos nossos futuros clientes, gostaríamos muito de ouvir
          sua opinião. Sua experiência é valiosa para nós.
        </Text>

        <Text>
          <strong>A pesquisa leva apenas 2 minutos:</strong>
        </Text>

        <Button>Realizar pesquisa</Button>

        <Text style={{ marginTop: "24px" }}>
          Agradecemos imensamente sua parceria e o tempo que passou conosco.
          Desejamos muito sucesso ao seu negócio!
        </Text>
      </Content>


      <Footer>
        <FooterColumn>
          <strong>Alexandre Altman</strong>
          <span>Cuidando da sua satisfação sempre</span>
        </FooterColumn>

        <FooterColumn>
          <span>alexandre.altman@maisbonus.com.br</span>
          <span>www.maisbonus.com.br</span>
          <span>(11) 9 7357-3576</span>
        </FooterColumn>
      </Footer>
    </Container>
  );
}
