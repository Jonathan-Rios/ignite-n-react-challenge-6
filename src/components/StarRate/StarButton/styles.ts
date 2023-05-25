import { styled } from "@/styles";

export const Container = styled("span", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& > svg": {
    color: "$purple100",
    transition: "color 0.2s ease-in-out",
  },

  ".half-star, .fill-star": {
    display: "none",
  },

  button: {
    all: "unset",
    cursor: "pointer",
  },

  ".star-button-left": {
    position: "absolute",
    top: 0,
    left: 0,

    height: "100%",
    width: "50%",
    borderRadius: "1rem 0 0 0.5rem",

    "&:hover ~ .half-star": {
      display: "block",
      color: "$gray200",
    },

    "&:hover ~ .fill-star, &:hover ~ .empty-star": {
      display: "none",
    },
  },

  ".star-button-right": {
    position: "absolute",
    top: 0,
    right: 0,

    height: "100%",
    width: "50%",
    borderRadius: "0 1rem 0.5rem 0",

    "&:hover ~ .half-star, &:hover ~ .empty-star": {
      display: "none",
    },

    "&:hover ~ .fill-star": {
      display: "block",
      color: "$gray200",
    },
  },

  "&.fill": {
    ".half-star, .empty-star": {
      display: "none",
    },

    ".fill-star": {
      display: "block",
    },
  },

  "&.half": {
    ".fill-star, .empty-star": {
      display: "none",
    },

    ".half-star": {
      display: "block",
    },
  },
});
