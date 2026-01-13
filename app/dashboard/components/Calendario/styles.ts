import { styled } from "@/app/styles";

export const Container = styled("div", {
  position: "relative",
  width: "fit-content",
});

export const TriggerButton = styled("button", {
  padding: "$2 $3",
  borderRadius: "$md",
  border: "1px solid $gray300",
  backgroundColor: "$white",
  fontSize: "$sm",
  cursor: "pointer",
});

/* 🔥 CALENDÁRIO SOBREPOSTO E CENTRALIZADO */
export const Popover = styled("div", {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  display: "flex",
  backgroundColor: "$white",
  border: "1px solid $gray300",
  borderRadius: "$lg",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",

  overflow: "hidden",
  zIndex: 9999,
});

export const Sidebar = styled("div", {
  width: 180,
  padding: "$3",
  borderRight: "1px solid $gray200",

  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

export const Preset = styled("button", {
  all: "unset",
  fontSize: "$sm",
  color: "$gray700",
  cursor: "pointer",

  display: "flex",
  alignItems: "center",
  gap: "$2",

  variants: {
    active: {
      true: {
        fontWeight: "$bold",
        color: "$gray900",
      },
    },
  },
});

export const CalendarArea = styled("div", {
  padding: "$4",

  ".rdp": {
    "--rdp-accent-color": "transparent",
    "--rdp-background-color": "transparent",
    margin: 0,
  },

  ".rdp-months": {
    gap: "$5",
  },

  ".rdp-caption": {
    fontWeight: "$medium",
    fontSize: "$sm",
  },

  ".rdp-weekday": {
    color: "$red500",
    fontWeight: "$bold",
    fontSize: "$xs",
  },

  ".rdp-day": {
    fontSize: "$xs",
    borderRadius: "$sm",
  },

  ".rdp-day_range_middle": {
    backgroundColor: "$green100",
  },

  ".rdp-day_selected": {
    backgroundColor: "$green600",
    color: "$white",
    fontWeight: "$bold",
  },
});

export const Footer = styled("div", {
  marginTop: "$3",
  display: "flex",
  justifyContent: "flex-end",
  gap: "$2",
});

export const ClearButton = styled("button", {
  padding: "$1 $3",
  borderRadius: "$md",
  border: "1px solid $red500",
  backgroundColor: "$white",
  color: "$red500",
  fontSize: "$sm",
  cursor: "pointer",
});

export const ApplyButton = styled("button", {
  padding: "$1 $3",
  borderRadius: "$md",
  border: "none",
  backgroundColor: "$green600",
  color: "$white",
  fontSize: "$sm",
  cursor: "pointer",
});
