import { styled } from "@/styles";

export const Container = styled("div", {
  display: "flex",
  padding: "16px 20px",
  gap: "20px",
  background: "$gray700",
  borderRadius: "8px",
  width: "324px",

  "& > img": {
    width: "64px",
    height: "94px",
    borderRadius: "4px",
  },
});

export const Content = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1rem",

  "& > div": {
    display: "flex",
    flexDirection: "column",

    h2: {
      fontSize: "$_16",
      color: "$white",
      fontWeight: "$bold",
    },

    h3: {
      fontSize: "$_16",
      color: "$gray400",
      fontWeight: "$regular",
    },
  },
});
