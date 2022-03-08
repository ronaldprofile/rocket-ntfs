import { globalCss, styled } from ".";

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

  html: {
    scrollBehavior: "smooth"
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

export const LinkAnimated = styled("a", {
  position: "relative",

  "&::before": {
    content: "",
    position: "absolute",
    bottom: -5,
    right: 0,
    width: 0,
    height: 2,

    background: "$colorLogo",
    transition: "width .6s cubic-bezier(.25,1,.5,1)"
  },

  "&:hover": {
    "&::before": {
      width: "100%",
      left: 0,
      right: 0
    }
  }
});
