import { styled } from "@/app/styles";

export const Card = styled("div", {
  backgroundColor: "$white",
  borderRadius: "$lg",
  padding: "$3",

 
  flexDirection: "column",
  gap: "$2",

  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  zIndex: 20, 
  width: 320,
});


export const Header = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Title = styled("strong", {
  fontSize: "$sm",
  color: "$gray800",
});

export const Clear = styled("button", {
  all: "unset",
  fontSize: "$xs",
  fontWeight: 500,
  color: "$red500",
  cursor: "pointer",

  padding: "$1 $2",
  borderRadius: "$sm",

  transition: "all 0.15s ease",

  "&:hover": {
    backgroundColor: "$red100",
  },
});


export const InputGroup = styled("div", {
  display: "flex",
  gap: "$2",
});

export const Input = styled("input", {
  flex: 1,
  height: 36,
  padding: "0 $2",

  borderRadius: "$sm",
  border: "1px solid $green500",

  fontSize: "$sm",
  outline: "none",
  cursor:'text'
});

export const SearchButton = styled("button", {
  width: 36,
  height: 36,
  borderRadius: "$sm",

  border: "none",
  backgroundColor: "$green500",
  color: "$white",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ApplyButton = styled("button", {
  alignSelf: "flex-end",

  marginTop: "$2",
  padding: "$1 $3",

  borderRadius: "$sm",
  border: "none",

  backgroundColor: "$green500",
  color: "$white",
  fontSize: "$sm",
  cursor: "pointer",
});
