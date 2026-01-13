'use client'

import { useState } from 'react'
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
import { LayoutRight } from '../layout/App/Right'
import { Eye, EyeSlash } from 'phosphor-react'
import { getUser } from '../api/auth'



export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  function handleLogin() {
    const user = getUser()

    if (!user) {
      console.log('Nenhum usuário cadastrado')
      return
    }

    if (user.email === email && user.senha === senha) {
      console.log('✅ Login realizado com sucesso', user)
    } else {
      console.log('❌ Email ou senha inválidos')
    }
  }

  return (
    <Container>
      <LayoutLeft>
        <Title>
          Acesse para conquistar
          <br />
          mais clientes
        </Title>

        <PasswordContainer>
          <Input
            type="email"
            placeholder="Informe o seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </PasswordContainer>

        <PasswordContainer>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Informe a sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={{ paddingRight: '44px' }}
          />

          <EyeButton
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
          </EyeButton>
        </PasswordContainer>

        <Button onClick={handleLogin}>Login</Button>

        <LinkText>Redefinir senha</LinkText>
      </LayoutLeft>

      <LayoutRight image={Atendente} alt="" />
    </Container>
  )
}
