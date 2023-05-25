import { styled } from "@/styles";

export const Container = styled("span", {
  display: "flex",
  width: "100%",
  borderRadius: "4px",
  height: "48px",

  border: "2px solid $gray500",
  transition: "border 0.2s ease-in-out",

  "&:focus-within": {
    border: "2px solid $green100",
  },

  input: {
    all: "unset",
    display: "flex",

    margin: "8px 16px",

    color: "$gray100",
    fontSize: "$_14",

    width: "100%",
    borderRadius: "4px",

    "&::placeholder": {
      color: "$gray400",
      fontSize: "$_16",
    },

    /*     "&:focus": {
      border: "2px solid $gray100",
    }, */
  },

  button: {
    all: "unset",

    cursor: "pointer",
    borderRadius: "4px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    height: "100%",
    width: "56px",

    svg: {
      transition: "all 0.1s ease-in-out",
      fontSize: "$_20",
      color: "$gray500",
    },

    "&:hover": {
      svg: {
        color: "$green100",
      },
    },
  },
});
