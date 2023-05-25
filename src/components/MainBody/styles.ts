import { styled } from "@/styles";

export const Container = styled("main", {
  display: "flex",
  height: "100vh",
  padding: "1.5rem 0", // 24px
  gap: "96px",

  "&:has(.modal)": {
    overflow: "hidden",
  },
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
});
