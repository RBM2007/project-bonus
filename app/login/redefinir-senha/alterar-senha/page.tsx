"use client"



import Atendente3 from '../../../assets/Atendente3.png'
import { Eye } from "phosphor-react";
import { Button, Container, EyeButton, Input, LinkText, PasswordContainer, Title } from "../../../styles/styled-components/login.styles";
import { LayoutLeft } from '@/app/layout/App/Left';
import { LayoutRight } from '@/app/layout/App/Right';



export default function AlterarSenha(){
    return(
    <Container>
        <LayoutLeft>
             <Title>
            Informe sua nova senha
                    </Title>


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




                
                    
<PasswordContainer>
  <Input
    type="password"
    placeholder="Informe a sua nova senha"
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
        image={Atendente3}
        alt=""
        />
    </Container>
    )
}