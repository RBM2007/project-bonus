import {
  Card,
  Header,
  Title,
  Clear,
  InputGroup,
  Input,
  ApplyButton,
} from "./styles";

export function PurchaseValueFilter() {
  return (
    <Card>
      <Header>
        <Title>Valor da compra</Title>
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
