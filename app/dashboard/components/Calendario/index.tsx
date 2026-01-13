import { useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
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

type DateRangePickerProps = {
  start: string;
  end: string;
  onChange: (start: string, end: string) => void;
  onClear: () => void;
};

function formatDate(date?: Date) {
  if (!date) return "";
  return date.toISOString().split("T")[0];
}

function todayRange(): DateRange {
  const today = new Date();
  return { from: today, to: today };
}

function weekRange(): DateRange {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1);
  const start = new Date(now.setDate(diff));
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return { from: start, to: end };
}

function monthRange(): DateRange {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return { from: start, to: end };
}

function yearRange(): DateRange {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const end = new Date(now.getFullYear(), 11, 31);
  return { from: start, to: end };
}

export function DateRangePicker({
  start,
  end,
  onChange,
  onClear,
}: DateRangePickerProps) {
  const [open, setOpen] = useState(true);

  const [range, setRange] = useState<DateRange | undefined>({
    from: start ? new Date(start) : undefined,
    to: end ? new Date(end) : undefined,
  });

  function applyPreset(preset: DateRange) {
    setRange(preset);
    onChange(
      formatDate(preset.from),
      formatDate(preset.to)
    );
    setOpen(false);
  }

  function handleApply() {
    if (!range?.from || !range?.to) return;
    onChange(formatDate(range.from), formatDate(range.to));
    setOpen(false);
  }

  function handleClear() {
    setRange(undefined);
    onClear();
    setOpen(false);
  }

  if (!open) return null;

  return (
    <Container>
      <TriggerButton>Selecionar período</TriggerButton>

      <Popover>
        <Sidebar>
          <Preset onClick={() => applyPreset(todayRange())}>
            Hoje
          </Preset>

          <Preset onClick={() => applyPreset(weekRange())}>
            Esta semana
          </Preset>

          <Preset onClick={() => applyPreset(monthRange())}>
            Este mês
          </Preset>

          <Preset onClick={() => applyPreset(yearRange())}>
            Este ano
          </Preset>

          <Preset active>
            Personalizado
          </Preset>
        </Sidebar>

        <CalendarArea>
          <DayPicker
            mode="range"
            numberOfMonths={2}
            pagedNavigation
            showOutsideDays
            selected={range}
            onSelect={setRange}
          />

          <Footer>
            <ClearButton onClick={handleClear}>
              Limpar
            </ClearButton>

            <ApplyButton onClick={handleApply}>
              Aplicar
            </ApplyButton>
          </Footer>
        </CalendarArea>
      </Popover>
    </Container>
  );
}
