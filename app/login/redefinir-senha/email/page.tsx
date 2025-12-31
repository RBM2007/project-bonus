"use client";

import Image from "next/image";
import {
  Container,
  Left,
  Right,
  Title,
  Text,
  WarningText,
  Button,
  IllustrationWrapper,
} from "./styles";

import Imagem from '../../../assets/redefinir-senha.png'

export default function RedefinirSenha() {
  return (
    <Container>
      {/* LEFT */}
      <Left>
        <Title>
          Precisa alterar <br /> sua senha?
        </Title>

        <Text>
          Recebemos sua solicitação para redefinir a senha da sua conta.
          Utilize o link abaixo para configurar uma nova senha.
        </Text>

        <WarningText>
          Se você não solicitou essa alteração, por favor, desconsidere
          essa mensagem.
        </WarningText>

        <Button>Alterar senha</Button>
      </Left>

      {/* RIGHT */}
      <Right>
        <IllustrationWrapper>
          <Image
            src={Imagem}
            alt="Redefinir senha"
            fill
            priority
          />
        </IllustrationWrapper>
      </Right>
    </Container>
  );
}
