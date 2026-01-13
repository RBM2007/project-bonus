import {
  Card,
  Header,
  Title,
  Clear,
  InputGroup,
  Input,
  ApplyButton,
} from "./styles";

type RepurchaseFilterProps = {
  min: string;
  max: string;
  onChange: (min: string, max: string) => void;
  onClear: () => void;
};

export function RepurchaseFilter({
  min,
  max,
  onChange,
  onClear,
}: RepurchaseFilterProps) {
  return (
    <Card>
      <Header>
        <Title>Recompras</Title>
        <Clear onClick={onClear}>Limpar</Clear>
      </Header>

      <InputGroup>
        <Input
          placeholder="Min"
          value={min}
          onChange={(e) => onChange(e.target.value, max)}
        />
        <Input
          placeholder="Máx"
          value={max}
          onChange={(e) => onChange(min, e.target.value)}
        />
      </InputGroup>

      <ApplyButton>Aplicar</ApplyButton>
    </Card>
  );
}
