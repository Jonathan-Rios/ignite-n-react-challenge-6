import { styled } from "@/styles";

export const Container = styled("span", {
  variants: {
    border: {
      regular: {
        "& > img": {
          borderWidth: "1px",
          outlineWidth: "1px",
        },
      },
      x2: {
        "& > img": {
          borderWidth: "2px",
          outlineWidth: "2px",
        },
      },
    },
  },

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& > img": {
    border: "1px solid $gray800",
    borderRadius: "999px",
    outline: "1px solid $green50",
  },
});
