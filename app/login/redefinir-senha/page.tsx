"use client"





import Atendente2 from '../../assets/atendente2.png'
import { LayoutLeft } from '../../layout/App/Left'
import { LayoutRight } from '../../layout/App/Right'
import { Button, Container, Input, Subtitle, Title } from '../../styles/styled-components/login.styles'

export default function LoginPage() {
  return (
    <Container>
      <LayoutLeft>
        <Title>
        Redefina sua senha

        
        </Title> 

        <Subtitle>Informe o seu e-mail para que enviemos as instruções para você redefinir sua senha</Subtitle>

        <Input type="email" placeholder="Informe o seu e-mail" />
        

        <Button>Redefinir senha</Button>
        
      </LayoutLeft>
      <LayoutRight
      image={Atendente2}
      alt=''
      />
        

      </Container>
    
  )
}
