import { styled } from "@/styles";

export const Content = styled("div", {
  display: "flex",
  gap: "66px",
});

export const Principal = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem", // 12px
  marginBottom: "60px",
  width: "100%",

  ".any-book-rated": {
    display: "flex",
    width: "100%",
  },
});

export const SearchForm = styled("form", {
  display: "flex",
  marginBottom: "24px",
});
