import { styled } from "..";



export const Container = styled("main", {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$gray100",
});



export const Header = styled("header", {
  background: "linear-gradient(135deg, #0b1c2d, #0e2a47)",
  padding: "80px 24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "24px",
});




export const Content = styled("section", {
  backgroundColor: "$white",
  maxWidth: "640px",
  width: "100%",
  margin: "0 auto",
  padding: "40px 24px",
  textAlign: "center",
  flex: 1,
});

export const Title = styled("h1", {
  fontSize: "22px",
  fontWeight: "$bold",
  color: "$gray900",
  marginBottom: "24px",
});

export const DaysBox = styled("div", {
  border: "1px solid $gray300",
  borderRadius: "$md",
  padding: "12px 28px",
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "24px",
});

export const DaysLabel = styled("span", {
  fontSize: "12px",
  color: "$gray500",
});

export const DaysValue = styled("strong", {
  fontSize: "28px",
  color: "$gray900",
});



export const Text = styled("p", {
  fontSize: '$nm',
  color: "$gray600",
  lineHeight: 1.6,
  marginBottom: "16px",
});

export const StrongText = styled("p", {
  fontSize: "$nm",
  fontWeight: "$bold",
  color: "$gray800",
  margin: "24px 0",
});



export const Button = styled("button", {
  backgroundColor: "#16a34a",
  color: "$white",
  border: "none",
  borderRadius: "$md",
  padding: "14px 28px",
  fontSize: "14px",
  fontWeight: "$bold",
  cursor: "pointer",
  marginTop: "16px",

  "&:hover": {
    backgroundColor: "#15803d",
  },
});

/* ================= FOOTER ================= */

export const Footer = styled("footer", {
  background: "linear-gradient(135deg, #0b1c2d, #0e2a47)",
  padding: "40px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "16px",
  color: "$white",
});

export const FooterColumn = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  fontSize: "12px",
  opacity: 0.85,
});

export const HeadText = styled("p", {
  fontSize: "$sm",
  fontWeight: "$light",
  color: "$gray025",
  margin: 0,
  opacity: 0.85,
   marginTop: "8px",
  
});

export const HeadStrong = styled("h1", {
  fontSize: "$heading1",
  fontWeight: "$bold",
  color: "$gray025",
  margin: 0,
    marginTop: "20px",

});


