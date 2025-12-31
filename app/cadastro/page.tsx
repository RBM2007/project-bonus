
import Atendente from '../assets/atendente.png'

import {
  Container,
  FormSection,
  Title,
  Form,
  Input,
  Button,
  LoginLink,

} from "./styles";
import { LayoutRight } from "../layout/App/Right";

export default function Cadastro() {
  return (
    <Container>
 
      <FormSection>
        <Form>
          <Title>Comece a fidelizar seus clientes hoje mesmo</Title>

          <Input>
            <label>Nome da loja</label>
            <input placeholder="Informe" />
          </Input>

          <Input>
            <label>Nome do responsável</label>
            <input placeholder="Informe" />
          </Input>

          <Input>
            <label>Celular do responsável</label>
            <input placeholder="Informe" />
          </Input>

          <Input>
            <label>CNPJ / CPF</label>
            <input placeholder="Informe" />
          </Input>

          <Input>
            <label>Tipo de negócio</label>
            <select>
              <option value="">Selecione</option>
              <option>Restaurante</option>
              <option>Mercado</option>
              <option>Loja</option>
            </select>
          </Input>

          <Input>
            <label>Senha</label>
            <input type="password" placeholder="Informe" />
          </Input>

          <Input>
            <label>Confirme sua senha</label>
            <input type="password" placeholder="Informe" />
          </Input>

          <Button>Cadastre-se</Button>

          <LoginLink href="#">Já tenho uma conta</LoginLink>
        </Form>
      </FormSection>

      
    <LayoutRight
    image={Atendente}
    alt=""/>

    </Container>
  );
}
