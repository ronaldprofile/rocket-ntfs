import { styled } from "../../styles";

export const Container = styled("section", {
  ".wrapper": {
    padding: "0 0 148px",
    textAlign: "center",

    h2: {
      fontSize: 50,

      span: {
        color: "$colorLogo"
      }
    },

    a: {
      fontSize: 20,
      color: "$textColor",

      img: {
        marginLeft: 14
      }
    }
  }
});

export const ContainerArtists = styled("div", {
  margin: "120px 0 54px 0",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 100
});

export const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 100
});
