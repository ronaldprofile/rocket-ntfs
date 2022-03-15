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
      },

      button: {
        visibility: "hidden",
        opacity: 0
      }
    },

    h1: {
      fontSize: 50,
      strong: {
        color: "$colorLogo"
      }
    },

    "@breakpoint4": {
      flexDirection: "column",

      ".box": {
        margin: "0 auto",
        order: 1,
        textAlign: "center",
        alignItems: "center",

        p: {
          marginBottom: 40,
          fontSize: 15
        },

        ".users": {
          display: "none"
        },

        button: {
          visibility: "visible",
          opacity: 1,
          div: {
            padding: "0 5px",
            marginLeft: 40,
            background: "#c7c7c7",

            borderRadius: "0.25rem",
            transition: ".3s"
          },

          "&:hover": {
            div: {
              background: "transparent"
            }
          }
        }
      },

      h1: {
        fontSize: 30,
        textAlign: "center"
      },

      "#badge": {
        display: "none"
      }
    }
  }
});

export const SectionGallery = styled("section");
