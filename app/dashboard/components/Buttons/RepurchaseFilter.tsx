import {
  Card,
  Header,
  Title,
  Clear,
  InputGroup,
  Input,
  ApplyButton,
} from "./styles";

export function RepurchaseFilter() {
  return (
    <Card>
      <Header>
        <Title>Recompras</Title>
        <Clear>Limpar</Clear>
      </Header>

      <InputGroup>
        <Input placeholder="Min" />
        <Input placeholder="Máx" />
      </InputGroup>

      <ApplyButton>Aplicar</ApplyButton>
    </Card>
  );
}
