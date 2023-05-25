import { styled } from "@/styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "24px",
  gap: "32px",
  background: "$gray700",
  borderRadius: "8px",

  "& > header": {
    display: "flex",
    alignItems: "center",

    gap: "1rem",

    "& > div": {
      display: "flex",
      justifyContent: "center",

      flexDirection: "column",
      fontSize: "$medium",

      a: {
        textDecoration: "none",
        color: "white",
        cursor: "pointer",
        "& > :hover": {
          textDecoration: "underline",
        },
      },

      "& > h3": {
        color: "$white",
        fontWeight: "$medium",
      },

      "& > p": {
        color: "$gray400",
      },
    },

    ".starRate": {
      display: "flex",
      marginLeft: "auto",
      marginBottom: "auto",
    },
  },
});

export const Content = styled("section", {
  display: "flex",
  gap: "1rem",

  "& > img": {
    width: "110px",
    height: "150px",
    borderRadius: "4px",
  },

  "& > section": {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",

    "& > div": {
      display: "flex",
      flexDirection: "column",

      h2: {
        color: "$white",
        fontWeight: "$bold",
      },

      h3: {
        color: "$gray400",
        fontWeight: "$regular",
      },
    },

    p: {
      fontSize: "$_14",

      button: {
        all: "unset",

        display: "inline-block",

        cursor: "pointer",
        color: "$purple100",
        fontSize: "$_16",
        fontWeight: "$bold",
        transition: "filter 0.2s ease-in-out",

        "&:hover": {
          filter: "brightness(1.2)",
        },
      },
    },
  },
});
