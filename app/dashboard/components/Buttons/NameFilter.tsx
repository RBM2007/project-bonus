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

type NameFilterProps = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};

export function NameFilter({
  value,
  onChange,
  onClear,
}: NameFilterProps) {
  return (
    <Card>
      <Header>
        <Title>Nome</Title>
        <Clear onClick={onClear}>Limpar</Clear>
      </Header>

      <InputGroup>
        <Input
          placeholder="Informe"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <SearchButton>
          <MagnifyingGlass size={18} />
        </SearchButton>
      </InputGroup>
    </Card>
  );
}
