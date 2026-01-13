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

type LastNameFilterProps = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};

export function LastNameFilter({
  value,
  onChange,
  onClear,
}: LastNameFilterProps) {
  return (
    <Card>
      <Header>
        <Title>Sobrenome</Title>
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
