import { styled } from "../../styles";

export const Container = styled("div", {
  padding: "25px 32px",
  display: "flex",
  alignItems: "center",
  gap: 40,
  background: "$cardColor",

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
  }
});
