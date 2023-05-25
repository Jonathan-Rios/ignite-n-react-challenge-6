import { styled } from "@/styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  gap: "1rem",

  "& > button": {
    all: "unset",

    display: "flex",
    alignItems: "center",
    gap: "20px",

    width: "372px",

    padding: "20px 24px",
    background: "$gray600",
    border: "1px solid $gray600",

    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "$_18",
    color: "$gray200",

    cursor: "pointer",

    transition: "all 0.2s ease-in-out",

    "&:hover": {
      filter: "brightness(1.1)",
      border: "1px solid $white",
    },
  },
});
