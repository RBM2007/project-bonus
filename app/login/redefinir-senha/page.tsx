"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import Atendente2 from "../../assets/atendente2.png";
import { LayoutLeft } from "../../layout/App/Left";
import { LayoutRight } from "../../layout/App/Right";

import {
  Button,
  Container,
  Input,
  Subtitle,
  Title,
} from "../../styles/styled-components/login.styles";

import { getUser } from "../../api/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleResetPassword() {
    if (!email) {
      toast.error("Informe um e-mail válido");
      return;
    }

    const user = getUser();

    if (!user) {
      toast.error("Nenhum usuário cadastrado");
      return;
    }

    if (user.email !== email) {
      toast.error("E-mail não encontrado");
      return;
    }

    toast.success("E-mail validado com sucesso");
    router.push("/login/redefinir-senha/alterar-senha");
  }

  return (
    <Container>
      <LayoutLeft>
        <Title>Redefina sua senha</Title>

        <Subtitle>
          Informe o seu e-mail para que enviemos as instruções para você redefinir
          sua senha
        </Subtitle>

        <Input
          type="email"
          placeholder="Informe o seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button onClick={handleResetPassword}>Redefinir senha</Button>
      </LayoutLeft>

      <LayoutRight image={Atendente2} alt="" />
    </Container>
  );
}
