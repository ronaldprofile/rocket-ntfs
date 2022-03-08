import { styled } from "../../styles";

export const Container = styled("footer", {
  background: "$cardColor"
});

export const Brand = styled("div", {
  width: "100%",
  padding: "82px 0 60px",
  borderBottom: "1px solid $subTitleColor",

  ".wrapper": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    a: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      width: 80,
      height: 80,
      background: "$colorLogo",
      transition: ".2s",
      "&:hover": {
        filter: "brightness(0.9)"
      }
    }
  }
});

export const FooterMain = styled("div", {
  borderBottom: "1px solid $subTitleColor",

  ".wrapper": {
    display: "flex",
    justifyContent: "space-between"
  },

  nav: {
    padding: "67px 0 53px",

    display: "flex",
    alignItems: "center",
    gap: 128,

    ul: {
      span: {
        display: "block",
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 16
      },

      li: {
        fontSize: 20,

        "& + li": {
          marginTop: 15
        },

        a: {
          color: "$subTitleColor"
        }
      }
    }
  }
});

export const Divider = styled("div", {
  width: 1,
  background: "$subTitleColor"
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
      borderRadius: "0 .25rem .25rem 0"
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
    }
  }
});

export const SocialsNetworks = styled("nav", {
  ul: {
    display: "flex",
    alignItems: "center",
    gap: 50
  }
});
