import { motion } from "framer-motion";
import { styled } from "../../styles";

export const Container = styled(motion.header, {
  height: 50,
  padding: "60px 0 90px",

  "& .wrapper": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "& > button": {
      height: 50,
      padding: "15px 14px",
      gap: 16,
      fontSize: 12
    },

    "@breakpoint4": {
      "& > nav": {
        display: "none"
      },

      "& > button": {
        display: "none"
      }
    }
  }
});

export const Logo = styled("a");

export const MenuButtons = styled("div", {
  display: "none",

  button: {
    background: "none",
    border: 0,
    lineHeight: 0,

    svg: {
      width: 28,
      height: 28,
      color: "$textColor"
    }
  },

  "@breakpoint4": {
    display: "block"
  }
});
