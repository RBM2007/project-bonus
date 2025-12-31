import { styled } from "..";





export const Container = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  height: "100vh",
});



export const Title = styled("h1", {
  fontSize: "$heading4",
  lineHeight: "$heading4",
  fontWeight: "$bold",
  color: "$gray900",
  marginBottom: "$4",
  textAlign: "center",
});

export const Description = styled("p", {
  fontSize: "$sm",
  lineHeight: "$sm",
  color: "$gray600",
  textAlign: "center",
  marginBottom: "$6",
});

export const LinkText = styled("a", {
  marginTop: "$4",
  fontSize: "$sm",
  fontWeight: "$medium",
  color: "$green600",
  cursor: "pointer",
  textAlign: "center",

  "&:hover": {
    textDecoration: "underline",
  },
});



export const Input = styled("input", {
  width: "100%",
  padding: "$4",
  marginBottom: "$4",
  fontSize: "$sm",
  fontFamily: "$inter",
  borderRadius: "$md",
  border: "1px solid $gray300",
  color: "$gray900",

  "&::placeholder": {
    color: "$gray400",
  },

  "&:focus": {
    outline: "none",
    borderColor: "$green600",
  },
});

export const Button = styled("button", {
  width: "100%",
  height: "44px",
  backgroundColor: "$green600",
  color: "$white",
  fontSize: "$sm",
  fontWeight: "$bold",
  borderRadius: "$md",
  border: "none",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$green500",
  },
});



export const Right = styled("section", {
   background: `linear-gradient(
    135deg,
    #004b25 0%,
    #137819 35%,
    #016c57 70%,
    #015c19 100%
  )`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ImageWrapper = styled("div", {
  position: "relative",
  width: "420px",
  height: "560px",
  borderRadius: "$xl",
  overflow: "hidden",
});
export const Subtitle = styled("h4", {
  fontSize: "$sm",
  lineHeight: "$sm",
  fontWeight: "$normal",
  color: "$gray600",
  textAlign: "center",
  marginBottom: "$6",
});

export const PasswordContainer = styled("div", {
  position: "relative",
  width: "100%",
  marginBottom: "$4",
});

export const EyeButton = styled("button", {
  all: "unset",
  position: "absolute",
  right: "$4",
  
  top: "44%",
  transform: "translateY(-50%)",
  cursor: "pointer",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: "$gray400",

  "&:hover": {
    color: "$gray600",
  },
});
