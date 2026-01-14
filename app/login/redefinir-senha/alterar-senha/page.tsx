'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { Eye, EyeSlash } from 'phosphor-react'
import { z } from 'zod'

import {
  Button,
  Container,
  EyeButton,
  Input,
  PasswordContainer,
  Title,
  LinkText,
} from '../../../styles/styled-components/login.styles'

import Atendente3 from '../../../assets/Atendente3.png'
import { LayoutLeft } from '../../../layout/App/Left'
import { LayoutRight } from '../../../layout/App/Right'
import { updateUserPassword } from '../../../api/auth'


const passwordSchema = z
  .object({
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

export default function AlterarSenhaPage() {
  const router = useRouter()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  function handleChangePassword() {
    const validation = passwordSchema.safeParse({
      password,
      confirmPassword,
    })

    if (!validation.success) {
      toast.error(validation.error.errors[0].message)
      return
    }

    const success = updateUserPassword(password)

    if (!success) {
      toast.error('Usuário não encontrado')
      return
    }

    toast.success('Senha alterada com sucesso!')
    router.push('/login')
  }

  return (
    <Container>
      <LayoutLeft>
        <Title>Informe sua nova senha</Title>

        <PasswordContainer>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Nova senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ paddingRight: '44px' }}
          />
          <EyeButton
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
          </EyeButton>
        </PasswordContainer>

        <PasswordContainer>
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirme a nova senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ paddingRight: '44px' }}
          />
          <EyeButton
            type="button"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? (
              <EyeSlash size={20} />
            ) : (
              <Eye size={20} />
            )}
          </EyeButton>
        </PasswordContainer>

        <Button onClick={handleChangePassword}>Alterar senha</Button>

        <LinkText onClick={() => router.push('/login')}>
          Voltar para o login
        </LinkText>
      </LayoutLeft>

      <LayoutRight image={Atendente3} alt="" />
    </Container>
  )
}
