
import { WarningCircle } from "phosphor-react";
import {
  Overlay,
  Container,
  IconWrapper,
  Title,
  Description,
  Actions,
  CancelButton,
  DeleteButton,
} from "./styles";

export function DeleteSaleModal() {
  return (
    <Overlay>
      <Container>
        <IconWrapper>
          <WarningCircle size={20} weight="bold" />
        </IconWrapper>

        <Title>Deletar venda realizada?</Title>

        <Description>
          Tem a certeza de que pretende apagar essa venda?
          <br />
          <strong>Esta ação não pode ser anulada.</strong>
        </Description>

        <Actions>
          <CancelButton>Cancelar</CancelButton>
          <DeleteButton>Deletar</DeleteButton>
        </Actions>
      </Container>
    </Overlay>
  );
}
