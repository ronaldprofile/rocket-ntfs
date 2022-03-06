import { styled } from "../../styles";

export const Container = styled("section", {
  "& .wrapper": {
    padding: "150px 0",

    h2: {
      fontSize: 50,
      strong: {
        color: "$colorLogo"
      }
    }
  }
});

export const ContainerAstronauts = styled("div", {
  marginTop: 158,
  display: "flex",
  justifyContent: "space-between"
});

export const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 50
});

export const Divider = styled("div", {
  width: 1,
  background: "$subTitleColor"
});
