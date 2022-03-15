import { styled } from "../../styles";

export const Container = styled("div", {
  padding: "25px 32px",
  display: "flex",
  alignItems: "center",
  gap: 40,
  background: "#121214",
  border: "1.5px solid #29292e",
  borderRadius: ".312rem",

  "& .user": {
    display: "flex",
    flexDirection: "column",
    gap: 10
  },

  variants: {
    isFeaturedArtist: {
      true: {
        background: "$colorLogo"
      }
    }
  },

  "@breakpoint1": {
    padding: "14px 0",
    flexDirection: "column"
  }
});
