import {
  Card,
  Header,
  Title,
  Clear,
  InputGroup,
  Input,
  ApplyButton,
} from "./styles";

type BonusValueFilterProps = {
  min: string;
  max: string;
  onChange: (min: string, max: string) => void;
  onClear: () => void;
};

export function BonusValueFilter({
  min,
  max,
  onChange,
  onClear,
}: BonusValueFilterProps) {
  return (
    <Card>
      <Header>
        <Title>Valor do bônus</Title>
        <Clear onClick={onClear}>Limpar</Clear>
      </Header>

      <InputGroup>
        <Input
          placeholder="R$ Min"
          value={min}
          onChange={(e) => onChange(e.target.value, max)}
        />
        <Input
          placeholder="R$ Máx"
          value={max}
          onChange={(e) => onChange(min, e.target.value)}
        />
      </InputGroup>

      <ApplyButton>Aplicar</ApplyButton>
    </Card>
  );
}
