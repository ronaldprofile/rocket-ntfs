import { styled } from "../../styles";

export const Container = styled("div", {
  maxWidth: 376
});

export const Heading = styled("div", {
  marginBottom: 26,
  display: "flex",
  flexDirection: "column",
  gap: 44,

  "& > div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    span: {
      fontSize: 30,
      fontWeight: 500
    }
  },

  "& div:last-child": {
    strong: {
      fontSize: 20,
      color: "$subTitleColor"
    },

    span: {
      fontSize: 20,
      color: "$colorLogo"
    }
  }
});
