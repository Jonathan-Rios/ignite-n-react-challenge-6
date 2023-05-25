import { styled } from "@/styles";

export const Container = styled("button", {
  variants: {
    active: {
      true: {
        backgroundColor: "$purple200",
        border: "1px solid $purple200",

        color: "$white",
      },
    },
  },

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  background: "none",

  padding: "4px 16px",
  gap: "8px",

  height: "34px",

  border: "1px solid $purple100",
  color: "$purple100",
  fontWeight: "$bold",

  borderRadius: "999px",

  cursor: "pointer",

  transition: "all 0.2s ease-in-out",

  "&:hover": {
    color: "$white",
  },
});
