import { styled } from "@/app/styles";

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Title = styled("h1", {
  fontSize: "$lg",
  fontWeight: "$bold",
  color: "$gray900",

  variants: {
    section: {
      true: {
        fontSize: "$sm",
        color: "$gray700",
      },
    },
  },
});

export const FormCard = styled("div", {
  border: "1px solid $gray200",
  borderRadius: "$md",
  padding: "$5",
  backgroundColor: "$white",
});

export const FormGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "$4",
});

export const Field = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",
});

export const Label = styled("label", {
  fontSize: "$xs",
  fontWeight: "$medium",
  color: "$gray600",
});

export const Input = styled("input", {
  height: 36,
  padding: "0 $3",
  borderRadius: "$sm",
  border: "1px solid $gray300",
  fontSize: "$sm",
  backgroundColor: "$white",

  "&:focus": {
    outline: "none",
    borderColor: "$green500",
  },
});

export const LockedInput = styled("input", {
  height: 36,
  padding: "0 $3",
  borderRadius: "$sm",
  border: "1px solid $gray200",
  fontSize: "$sm",
  backgroundColor: "$gray100",
  color: "$gray700",
  cursor: "not-allowed",

  "&:disabled": {
    opacity: 1,
  },
});

export const InputGroup = styled("div", {
  display: "flex",
  alignItems: "center",
  position: "relative",
});

export const SearchButton = styled("button", {
  position: "absolute",
  right: 4,
  height: 28,
  width: 28,
  borderRadius: "$sm",
  border: "none",
  backgroundColor: "$green500",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "$white",
});

export const Actions = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  gap: "$2",
  marginTop: "$4",
});

export const SubmitButton = styled("button", {
  height: 32,
  padding: "0 $3",
  borderRadius: "$sm",
  border: "none",
  backgroundColor: "$green500",
  color: "$white",
  fontSize: "$xs",
  fontWeight: "$bold",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$green600",
  },

  variants: {
    outline: {
      true: {
        backgroundColor: "$white",
        color: "$gray600",
        border: "1px solid $gray300",

        "&:hover": {
          backgroundColor: "$gray100",
        },
      },
    },
  },
});

export const TableHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "$6",
  marginBottom: "$2",
});

export const TableHead = styled("th", {
  padding: "$2",
  fontSize: "$xs",
  fontWeight: "$bold",
  color: "$gray600",
  borderBottom: "1px solid $gray200",
  whiteSpace: "nowrap",
});

export const TableRow = styled("tr", {
  "&:hover": {
    backgroundColor: "$gray50",
  },
});

export const TableCell = styled("td", {
  padding: "$2",
  fontSize: "$xs",
  color: "$gray800",
  borderBottom: "1px solid $gray100",
  whiteSpace: "nowrap",
});

export const FooterPagination = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "$3",
  gap: "$2",

  button: {
    height: 28,
    padding: "0 $3",
    borderRadius: "$sm",
    border: "1px solid $gray300",
    backgroundColor: "$white",
    fontSize: "$xs",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "$gray100",
    },
  },

  span: {
    fontSize: "$xs",
    color: "$gray600",
  },
});
