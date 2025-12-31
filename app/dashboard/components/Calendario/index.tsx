import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import {
  Container,
  TriggerButton,
  Popover,
  Sidebar,
  Preset,
  CalendarArea,
  Footer,
  ClearButton,
  ApplyButton,
} from "./styles";

export function DateRangePicker() {
  return (
    <Container>
      <TriggerButton>Selecionar período</TriggerButton>

      <Popover>
        <Sidebar>
          <Preset>Hoje</Preset>
          <Preset>Esta semana</Preset>
          <Preset>Este mês</Preset>
          <Preset>Este ano</Preset>
          <Preset active>Personalizado</Preset>
        </Sidebar>

        <CalendarArea>
          <DayPicker
            mode="range"
            numberOfMonths={2}
            pagedNavigation
            showOutsideDays
           
          />

          <Footer>
            <ClearButton>Limpar</ClearButton>
            <ApplyButton>Aplicar</ApplyButton>
          </Footer>
        </CalendarArea>
      </Popover>
    </Container>
  );
}
