import { styled } from "../../styles";

export const Container = styled("header", {
  height: 50,
  padding: "60px 0 90px",

  "& .wrapper": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export const Logo = styled("a");

export const Button = styled("button", {
  height: 50,
  padding: "15px 14px",
  display: "flex",
  alignItems: "center",
  gap: 16,

  background: "$textColor",
  color: "$blackText",

  fontSize: 16,
  fontWeight: "bold",
  cursor: "pointer",

  borderRadius: "0.25rem",
  transition: ".2s",

  "&:hover": {
    filter: "brightness(0.9)"
  }
});
