import { styled } from "@/styles";

export const Content = styled("div", {
  display: "flex",
  gap: "66px",
});

export const Principal = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem", // 12px
  marginBottom: "4rem",

  ".any-rate": {
    fontSize: "$_16",
    fontWeight: "$bold",
    color: "$gray400",
  },
});

export const CommonBooks = styled("aside", {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem", // 12px

  header: {
    display: "flex",
    justifyContent: "space-between",

    h4: {
      fontSize: "$_16",
      fontWeight: "$bold",
    },

    a: {
      textDecoration: "none",
    },

    button: {
      all: "unset",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

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
});
