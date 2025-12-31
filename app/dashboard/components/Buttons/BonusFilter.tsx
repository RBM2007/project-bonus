import {
  Card,
  Header,
  Title,
  Clear,
  InputGroup,
  Input,
  ApplyButton,
} from "./styles";

export function BonusValueFilter() {
  return (
    <Card>
      <Header>
        <Title>Valor do bônus</Title>
        <Clear>Limpar</Clear>
      </Header>

      <InputGroup>
        <Input placeholder="R$ Min" />
        <Input placeholder="R$ Máx" />
      </InputGroup>

      <ApplyButton>Aplicar</ApplyButton>
    </Card>
  );
}
