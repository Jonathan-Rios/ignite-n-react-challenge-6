import { styled } from "@/styles";

export const Container = styled("span", {
  display: "flex",
  position: "relative",

  width: "100%",
  borderRadius: "4px",

  border: "2px solid $gray500",
  transition: "border 0.2s ease-in-out",
  background: "$gray800",

  "&:focus-within": {
    border: "2px solid $green100",
  },

  textarea: {
    display: "flex",
    resize: "none",
    height: "auto",

    border: "none",
    outline: "none",

    background: "$gray800",

    margin: "8px 16px",
    color: "$gray100",
    fontSize: "$_14",
    width: "100%",
    borderRadius: "4px",

    "&::placeholder": {
      color: "$gray400",
      fontSize: "$_16",
    },
  },

  span: {
    position: "absolute",
    right: "8px",
    bottom: "4px",
    fontSize: "$_12",
    color: "$gray400",
    zIndex: 2,
  },
});
