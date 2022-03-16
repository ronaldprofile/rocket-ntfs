import { styled } from "../../styles";

export const Container = styled("footer", {
  background: "#121214"
});

export const Brand = styled("div", {
  width: "100%",
  padding: "82px 0 60px",
  borderBottom: "1px solid #29292e",

  ".wrapper": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    a: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      width: 48,
      height: 48,
      background: "#202024",
      transition: ".2s",
      borderRadius: ".312rem",

      "&:hover": {
        background: "$colorLogo"
      },

      svg: {
        width: 20,
        height: 20,
        color: "$textColor"
      }
    }
  }
});

export const FooterMain = styled("div", {
  borderBottom: "1px solid #29292e",

  ".wrapper": {
    display: "flex",
    justifyContent: "space-between",

    "@breakpoint4": {
      flexDirection: "column"
    }
  },

  nav: {
    padding: "67px 0 53px",

    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 128,

    ul: {
      span: {
        display: "block",
        fontSize: 16,
        fontWeight: 700,
        marginBottom: 16
      },

      li: {
        "& + li": {
          marginTop: 15
        },

        a: {
          color: "$subTitleColor",
          fontSize: 16
        }
      }
    },

    "@breakpoint3": {
      gap: 48,
      justifyContent: "space-between"
    }
  }
});

export const Newsletter = styled("div", {
  padding: "67px 0px 53px",

  h3: {
    maxWidth: 350,
    marginBottom: 25,
    fontSize: 30,
    fontWeight: 500,
    span: {
      color: "$colorLogo"
    }
  },

  form: {
    label: {
      position: "absolute",
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      borderWidth: 0
    },

    input: {
      height: 66,
      padding: "0 20px",

      background: "$colorInput",
      color: "$subtitleColor",

      fontSize: 20,
      border: "1px solid $bodyBackground",
      borderRadius: ".25rem 0 0 .25rem",
      outline: "none",
      transition: ".2s",
      "&:focus": {
        borderColor: "$colorLogo"
      }
    },

    button: {
      height: 66,
      padding: "0 25px",
      fontSize: 20,
      fontWeight: 700,
      background: "#fff",
      border: 0,
      borderRadius: "0 .25rem .25rem 0",

      "&:disabled": {
        background: "$colorLogo",
        color: "#202024",
        opacity: 0.5,
        cursor: "not-allowed"
      }
    }
  },

  "@breakpoint3": {
    h3: {
      fontSize: 26
    },

    form: {
      "input, button": {
        height: 50,
        fontSize: 16
      }
    }
  },

  "@breakpoint2": {
    h3: {
      fontSize: 26
    },

    form: {
      display: "flex",
      flexDirection: "column",
      gap: 12,

      "input, button": {
        width: "100%",
        borderRadius: ".312rem"
      }
    }
  }
});

export const FooterBottom = styled("div", {
  ".wrapper": {
    padding: "80px 0 60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    a: {
      fontSize: 20,
      color: "$subTitleColor"
    },

    "@breakpoint4": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 16
    }
  }
});

export const SocialsNetworks = styled("nav", {
  ul: {
    display: "flex",
    alignItems: "center",
    gap: 8,

    li: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#202024",
      borderRadius: ".312rem",
      transition: "all .3s ease",

      "&:hover": {
        background: "$colorLogo",
        a: {
          svg: {
            path: {
              fill: "$textColor"
            }
          }
        }
      },

      a: {
        width: "100%",
        padding: 8,

        svg: {
          width: 28,
          height: 28,
          color: "$colorLogo"
        }
      }
    }
  }
});
