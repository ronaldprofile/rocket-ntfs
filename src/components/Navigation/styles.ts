import { styled } from "../../styles";

export const Container = styled("nav", {
  ul: {
    display: "flex",
    alignItems: "center",
    gap: 60,

    li: {
      a: {
        color: "$textColor",
        transition: ".2s",

        "&:hover": {
          fontWeight: "500"
        }
      }
    }
  }
});
