import { styled } from "../../styles";

export const Container = styled("section", {
  display: "flex",

  borderBottom: "1px solid $subTitleColor"
});

export const BoxLeft = styled("div", {
  padding: "133px 68px",
  display: "flex",
  flexDirection: "column",
  gap: 100,

  borderRight: "1px solid $subTitleColor",

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
  }
});

export const ContentSection = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  "& > div": {
    padding: "70px 68px",
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
  }
});
