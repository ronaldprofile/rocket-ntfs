import { styled } from "../../styles";

export const Container = styled("section", {
  "& .wrapper": {
    ul: {
      display: "flex",
      flexWrap: "wrap",
      gap: "60px 16px ",

      li: {
        border: "1px solid $textColor",
        cursor: "pointer",
        borderRadius: "0.25rem",

        img: {
          width: "100%",

          objectFit: "cover",
          borderRadius: "0.25rem"
        }
      }
    },

    "@breakpoint4": {
      ul: {
        justifyContent: "center"
      }
    }
  }
});
