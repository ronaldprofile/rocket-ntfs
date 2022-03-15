import { styled } from "../../styles";

export const Container = styled("div", {
  background: "#121214",
  border: "1px solid #29292e",
  borderRadius: ".312rem",
  transition: ".3s",

  "&:hover": {
    transform: "translateY(-5px)",
    borderColor: "$colorLogo"
  }
});

export const Heading = styled("div", {
  padding: "32px 24px",
  display: "flex",
  flexDirection: "column",
  gap: 44,

  "&  .astronaut-title": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    span: {
      fontSize: 30,
      fontWeight: 500
    },

    svg: {
      width: 28,
      height: 28,
      color: "$textColor"
    }
  },

  "& .astronaut-info": {
    strong: {
      fontSize: 16,
      color: "$subTitleColor"
    },

    span: {
      fontSize: 16,
      color: "$colorLogo"
    }
  },

  "@breakpoint1": {
    "& .astronaut-title": {
      span: {
        fontSize: 20
      }
    }
  }
});

export const AstronautImage = styled("img", {
  width: "100%"
});
