import { createStitches } from "@stitches/react";

export const { theme, styled, keyframes, globalCss } = createStitches({
  theme: {
    colors: {
      bodyBackground: "#0e0e0e",
      colorLogo: "#ff5b50",
      cardColor: "#252525",
      textColor: "#fff",
      subTitleColor: "#5a5757",
      blackText: "#000",
      colorInput: "#0D0D0D"
    }
  },

  media: {
    breakpoint1: "(max-width: 375px)",
    breakpoint2: "(max-width: 425px)",
    breakpoint3: "(max-width: 480px)",
    breakpoint4: "(max-width: 768px)",
    breakpoint5: "(max-width: 620px)"
  }
});
