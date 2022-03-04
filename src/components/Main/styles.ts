import { styled } from "../../styles";

export const Container = styled("main", {
  marginTop: 90
});

export const SectionIntro = styled("section", {
  width: "100%",
  marginBottom: 100,

  "& .wrapper": {
    display: "flex",

    justifyContent: "space-between",
    gap: 40,

    ".box": {
      maxWidth: 400,
      display: "flex",
      flexDirection: "column",

      p: {
        fontSize: 18
      },

      ".users": {
        marginTop: 55,
        display: "flex",
        alignItems: "center",
        gap: 8,

        "> span": {
          display: "flex",
          flexDirection: "column"
        }
      }
    },

    h1: {
      fontSize: 50,
      strong: {
        color: "$colorLogo"
      }
    }
  }
});

export const SectionGallery = styled("section");
