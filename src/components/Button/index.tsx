import { ButtonHTMLAttributes } from "react";
import { styled } from "../../styles";

const Container = styled("button", {
  padding: "15px 16px 15px 24px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: 16,
  fontWeight: 700,
  textTransform: "uppercase",
  color: "$blackText",
  transition: "all .3s ease-in-out",
  border: "1px solid $textColor",
  borderRadius: "0.312rem",

  variants: {
    appearance: {
      primary: {
        background: "$textColor",
        color: "$blackText",

        "&:hover": {
          background: "transparent",
          color: "$textColor",
          border: "1px solid $textColor"
        }
      },

      outlined: {
        background: "transparent",
        color: "$textColor",
        border: "1px solid $textColor",

        "&:hover": {
          background: "$textColor",
          color: "$blackText"
        }
      }
    }
  }
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: "primary" | "outlined";
}

export function ButtonCustom({
  children,
  appearance = "primary",
  ...props
}: ButtonProps) {
  return (
    <Container {...props} appearance={appearance}>
      {children}
    </Container>
  );
}
