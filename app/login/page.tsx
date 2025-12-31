'use client'


import {
  Container,
  Title,
  Input,
  Button,
  LinkText,
  PasswordContainer,
  EyeButton,
} from '../styles/styled-components/login.styles'


import Atendente from '../assets/atendente1.png'
import { LayoutLeft } from '../layout/App/Left'
import { Eye } from 'phosphor-react'
import { LayoutRight } from '../layout/App/Right'

export default function LoginPage() {
  return (
    <Container>
      
      <LayoutLeft>
        <Title>
          Acesse para conquistar
          <br />
          mais clientes
        </Title>
      <PasswordContainer>
        <Input type="email" placeholder="Informe o seu e-mail" />
        </PasswordContainer>
<PasswordContainer>
  <Input
    type="password"
    placeholder="Informe a sua senha"
    style={{ paddingRight: "44px" }}
  />
  <EyeButton>
    <Eye size={20} />
  </EyeButton>
</PasswordContainer>

        <Button>Login</Button>
        <LinkText>Redefinir senha</LinkText>
      </LayoutLeft>

    
      <LayoutRight
      image={Atendente}
      alt=''/>
    </Container>
  )
}
