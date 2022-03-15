import { styled } from "../../styles";

export const Container = styled("section", {
  "& .wrapper": {
    padding: "150px 0",

    h2: {
      fontSize: 50,
      strong: {
        color: "$colorLogo"
      }
    },

    "@breakpoint4": {
      h2: {
        fontSize: 30
      }
    }
  }
});

export const ContainerAstronauts = styled("div", {
  marginTop: 158,
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 32,

  "@breakpoint4": {
    gridTemplateColumns: "repeat(2, 1fr)"
  },

  "@breakpoint5": {
    gridTemplateColumns: "repeat(1, 1fr)"
  }
});

export const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 32
});
