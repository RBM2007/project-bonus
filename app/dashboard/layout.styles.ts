import { styled } from "../styles";


export const LayoutContainer = styled("main", {
  position: "relative",
  minHeight: "100vh",
  width: "100%",
  background: "#0B1220", // fundo da sidebar
});

export const Content = styled("section", {
  position: "relative",
  zIndex: 1, // CONTEÚDO ACIMA

  minHeight: "100vh",
  marginLeft: "280px", // largura da sidebar
  padding: "2.5rem",

  background: "#F4F6F9",

  borderTopLeftRadius: 24,
  borderBottomLeftRadius: 24,

  boxShadow: "-8px 0 24px rgba(0, 0, 0, 0.08)",
  overflowY: "auto",
});
