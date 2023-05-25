import { styled } from "@/styles";

export const HeaderContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "66px",

  ".searchField": {
    maxWidth: "440px",
  },
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "48px",
  width: "100%",

  header: {
    display: "flex",
    width: "100%",
    gap: "1rem 0.5rem",

    "flex-wrap": "wrap",
  },
});

export const Principal = styled("section", {
  display: "grid",
  width: "100%",
  marginBottom: "60px",

  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "1rem", //  16px

  "@media (max-width: 1440px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0.75rem", // 12px
  },

  "@media (max-width: 1280px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
    // gap: "0.75rem", // 12px
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

export const SearchForm = styled("form", {
  display: "flex",
});
