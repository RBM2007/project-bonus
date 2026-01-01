import { styled } from "../styles";

export const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  minHeight: "100vh",
});

export const FormSection = styled("section", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray100",
});

export const Form = styled("form", {
  width: "100%",
  maxWidth: "380px",
});

export const Title = styled("h1", {
  fontSize: "$heading5",
  lineHeight: "$heading5",
  fontWeight: 600,
  marginBottom: "24px",
  color: "$gray900",
});

export const Input = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  marginBottom: "14px",

  label: {
    fontSize: "$sm",
    lineHeight: "$sm",
    color: "$gray700",
  },

  input: {
    height: "44px",
    borderRadius: "8px",
    border: "1px solid $gray300",
    padding: "0 12px",
    fontSize: "$sm",
    color: "$gray900",
    backgroundColor: "$gray100",

    "&::placeholder": {
      color: "$gray400",
    },

    "&:focus": {
      outline: "none",
      borderColor: "$greenwater500",
    },
  },

  select: {
    height: "44px",
    borderRadius: "8px",
    border: "1px solid $gray300",
    padding: "0 12px",
    fontSize: "$sm",
    color: "$gray900",
    backgroundColor: "$gray100",

    "&:focus": {
      outline: "none",
      borderColor: "$greenwater500",
    },
  },
});

export const Button = styled("button", {
  width: "100%",
  height: "44px",
  marginTop: "12px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "$greenwater500",
  color: "$gray100",
  fontSize: "$sm",
  fontWeight: 600,
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$green500",
  },
});

export const LoginLink = styled("a", {
  display: "block",
  marginTop: "12px",
  textAlign: "center",
  fontSize: "$sm",
  color: "$greenwater500",
  textDecoration: "none",
  fontWeight: "bold",
  fontFamily: "$inter",
});
