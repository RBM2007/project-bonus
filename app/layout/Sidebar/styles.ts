import { styled } from "../../styles";



export const SidebarContainer = styled("aside", {
  position: "fixed",
  top: 0,
  left: 0,

  width: 280,
  height: "100vh",

  zIndex: 0,

  background: "linear-gradient(180deg, #0B1220 0%, #0E1A2F 100%)",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  padding: "2rem 1.5rem",
});


export const LogoBonus = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
});

export const Divider = styled("div", {
  width: "100%",
  height: 1,
  margin: "1.5rem 0",
  background: "rgba(255, 255, 255, 0.12)",
});

export const Menu = styled("nav", {
  marginBottom: "10rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const MenuItem = styled("button", {
  all: "unset",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  padding: "0.75rem 1rem",
  borderRadius: 8,
  color: "#C7D2E5",
  fontSize: "0.95rem",

  "&:hover": {
    background: "rgba(255,255,255,0.05)",
  },

  variants: {
    active: {
      true: {
        background: "#1BC47D",
        color: "#04120B",
        fontWeight: 500,
      },
    },
  },
});

export const Footer = styled("footer", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "#8FA2C0",
  fontSize: "0.75rem",

  strong: {
    color: "#fff",
    display: "block",
  },

  svg: {
    cursor: "pointer",
  },
});
