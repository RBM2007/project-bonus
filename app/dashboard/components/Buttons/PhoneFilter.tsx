
import { MagnifyingGlass } from "phosphor-react";
import {
  Card,
  Header,
  Title,
  Clear,
  InputGroup,
  Input,
  SearchButton,
} from "./styles";

export function PhoneFilter() {
  return (
    <Card>
      <Header>
        <Title>Celular</Title>
        <Clear>Limpar</Clear>
      </Header>

      <InputGroup>
        <Input placeholder="Informe" />
        <SearchButton>
          <MagnifyingGlass size={18} />
        </SearchButton>
      </InputGroup>
    </Card>
  );
}
