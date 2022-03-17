import { styled } from "../../styles";

export const Container = styled("section", {
  display: "flex",
  borderBottom: "1px solid $subTitleColor",

  "> div": {
    borderRight: "1px solid $subTitleColor"
  },

  "@breakpoint4": {
    flexDirection: "column"
  }
});

export const BoxLeft = styled("div", {
  padding: "133px 36px",

  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: 100,

  div: {
    display: "flex",
    flexDirection: "column",
    gap: 8,

    strong: {
      fontSize: 50,
      color: "$textColor"
    },

    span: {
      fontSize: 20,
      fontWeight: 600,
      color: "$subTitleColor"
    }
  },

  "@breakpoint4": {
    paddingLeft: 24,
    paddingRight: 24,

    flexDirection: "row",
    borderRight: 0,

    div: {
      strong: {
        fontSize: 36
      }
    }
  }
});

export const ContentSection = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  "& > div": {
    margin: "133px 68px 70px",
    display: "flex",
    alignItems: "center",
    gap: 126,

    div: {
      maxWidth: 435,
      display: "flex",
      flexDirection: "column",
      gap: 63,

      p: {
        fontSize: 18,
        span: {
          color: "$colorLogo"
        }
      },

      a: {
        fontSize: 18,
        textDecoration: "underline",
        color: "$textColor"
      }
    }
  },

  "@breakpoint4": {
    background: "#121214",
    borderTop: "1px solid #29292e",

    "> div": {
      padding: "0 24px",
      marginLeft: 0,
      marginRight: 0
    }
  },

  "@breakpoint3": {
    "> div": {
      flexDirection: "column"
    }
  }
});
