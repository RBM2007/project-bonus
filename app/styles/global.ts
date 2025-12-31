import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    fontFamily: "$inter",
    backgroundColor: "$white",
    color: "$gray900",
    WebkitFontSmoothing: "antialiased",
  },

  h1: {
    fontSize: "$heading1",
    fontWeight: "$bold",
    lineHeight: "$heading1",
  },

  h2: {
    fontSize: "$heading2",
    fontWeight: "$bold",
    lineHeight: "$heading2",
  },

  h3: {
    fontSize: "$heading3",
    fontWeight: "$bold",
    lineHeight: "$heading3",
  },

  label: {
    fontSize: "$sm",
    color: "$gray900",
    fontWeight: "$medium",
  },

  button: {
    height: "44px",
    borderRadius: "$md",
    border: "none",
    fontSize: "$sm",
    fontWeight: "$bold",
    cursor: "pointer",
    fontFamily: "$inter",
  },

  a: {
    fontSize: "$sm",
    color: "$green600",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },
});
