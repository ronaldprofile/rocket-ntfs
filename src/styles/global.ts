import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Montserrat, sans-serif"
  },

  "html, body, #root": {
    height: "100vh"
  },

  body: {
    background: "$bodyBackground",
    color: "$textColor",
    overflowX: "hidden"
  },

  ".wrapper": {
    maxWidth: 1277,
    margin: "0 auto"
  },

  button: {
    cursor: "pointer"
  },

  a: {
    textDecoration: "none"
  },

  li: {
    listStyle: "none"
  }
});
