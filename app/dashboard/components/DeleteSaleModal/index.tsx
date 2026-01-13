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

type DeleteSaleModalProps = {
  onCancel: () => void;
  onConfirm: () => void;
};

export function DeleteSaleModal({
  onCancel,
  onConfirm,
}: DeleteSaleModalProps) {
  return (
    <Overlay onClick={onCancel}>
      <Container onClick={(e) => e.stopPropagation()}>
        <IconWrapper>
          <WarningCircle size={22} weight="bold" />
        </IconWrapper>

        <Title>Deletar venda realizada?</Title>

        <Description>
          Tem a certeza de que pretende apagar essa venda?
          <strong>Esta ação não pode ser anulada.</strong>
        </Description>

        <Actions>
          <CancelButton onClick={onCancel}>
            Cancelar
          </CancelButton>

          <DeleteButton onClick={onConfirm}>
            Deletar
          </DeleteButton>
        </Actions>
      </Container>
    </Overlay>
  );
}
