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

type PhoneFilterProps = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};

export function PhoneFilter({
  value,
  onChange,
  onClear,
}: PhoneFilterProps) {
  return (
    <Card>
      <Header>
        <Title>Celular</Title>
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
