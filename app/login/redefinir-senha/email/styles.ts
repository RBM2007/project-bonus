import { styled } from "@/app/styles";




export const Container = styled("main", {
  minHeight: "100vh",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  backgroundColor: "$white",

  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr",
  },
});



export const Left = styled("section", {
  padding: "80px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "40px",
  backgroundColor:'$gray100',

  "@media (max-width: 900px)": {
    padding: "48px 24px",
  },
});

export const Title = styled("h1", {
  fontSize: "40px",
  fontWeight: "$bold",
  color: "$gray900",
  lineHeight: 1.2,
});

export const Text = styled("p", {
  fontSize: "$nm",
  color: "$gray600",
  lineHeight: 1.6,
  maxWidth: "420px",
});

export const WarningText = styled("p", {
  fontSize: "$sm",
  color: "$gray500",
  lineHeight: 1.5,
  maxWidth: "420px",
});



export const Button = styled("button", {
  backgroundColor: "#16a34a",
  color: "$white",
  border: "none",
  borderRadius: "$md",
  padding: "14px 32px",
  fontSize: "14px",
  fontWeight: "$bold",
  cursor: "pointer",
  width: "fit-content",
  marginTop: "8px",

  "&:hover": {
    backgroundColor: "#15803d",
  },
});



export const Right = styled("section", {
  backgroundColor: "$gray100",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media (max-width: 900px)": {
    display: "none",
  },
});

export const IllustrationWrapper = styled("div", {
  position: "relative",
  width: "500px",
  height: "500px",
});
