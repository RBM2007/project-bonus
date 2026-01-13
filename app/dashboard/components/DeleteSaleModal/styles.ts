import { styled } from "@/app/styles";

export const Overlay = styled("div", {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.45)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  zIndex: 1000,
});

export const Container = styled("main", {
  width: "100%",
  maxWidth: 460,

  padding: "32px",
  boxSizing: "border-box",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",

  backgroundColor: "$white",
  borderRadius: 16,

  boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
});

export const IconWrapper = styled("div", {
  width: 56,
  height: 56,
  borderRadius: "50%",

  backgroundColor: "rgba(239, 68, 68, 0.12)",
  color: "$red500",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Title = styled("h2", {
  fontSize: "20px",
  fontWeight: 600,
  color: "$gray900",
  textAlign: "center",
});

export const Description = styled("p", {
  fontSize: "14px",
  color: "$gray500",
  lineHeight: "1.6",
  textAlign: "center",

  strong: {
    display: "block",
    marginTop: 4,
    color: "$gray700",
    fontWeight: 600,
  },
});

export const Actions = styled("div", {
  width: "100%",
  display: "flex",
  gap: "16px",
  marginTop: "8px",
});

export const CancelButton = styled("button", {
  flex: 1,
  height: 48,

  borderRadius: 10,
  border: "1px solid $gray300",
  backgroundColor: "$white",

  fontSize: "16px",
  fontWeight: 500,
  color: "$gray700",

  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$gray100",
  },
});

export const DeleteButton = styled("button", {
  flex: 1,
  height: 48,

  borderRadius: 10,
  border: "none",
  backgroundColor: "$red500",

  fontSize: "16px",
  fontWeight: 600,
  color: "$white",

  cursor: "pointer",

  "&:hover": {
    filter: "brightness(0.9)",
  },
});
