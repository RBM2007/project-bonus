import { styled } from "@/app/styles";

export const Overlay = styled("div", {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.4)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  zIndex: 1000,
});

export const Container = styled('main', {
  width: '100%',
  minHeight: '100vh',
  maxWidth: '1280px',
  margin: '0 auto',

  padding: '$6',
  boxSizing: 'border-box',

  display: 'flex',
  flexDirection: 'column',
  gap: '$5',

  overflowX: 'hidden',

  borderRadius: '$lg',      // ✅ AQUI
  backgroundColor: '$white' // ✅ necessário para o radius aparecer
});


export const IconWrapper = styled("div", {
  width: 36,
  height: 36,
  borderRadius: "50%",

  backgroundColor: "$red100",
  color: "$red500",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  marginBottom: "$3",
});

export const Title = styled("h2", {
  fontSize: "$sm",
  fontWeight: "$bold",
  color: "$gray900",

  marginBottom: "$1",
});

export const Description = styled("p", {
  fontSize: "$xs",
  color: "$gray500",
  lineHeight: "$short",

  marginBottom: "auto",

  strong: {
    color: "$gray700",
  },
});

export const Actions = styled("div", {
  width: "100%",
  display: "flex",
  gap: "$3",
});

export const CancelButton = styled("button", {
  flex: 1,
  height: 36,

  borderRadius: "$md",
  border: "1px solid $gray300",
  backgroundColor: "transparent",

  fontSize: "$sm",
  fontWeight: "$medium",
  color: "$gray700",
});

export const DeleteButton = styled("button", {
  flex: 1,
  height: 36,

  borderRadius: "$md",
  border: "none",
  backgroundColor: "$red500",

  fontSize: "$sm",
  fontWeight: "$medium",
  color: "$white",
});
