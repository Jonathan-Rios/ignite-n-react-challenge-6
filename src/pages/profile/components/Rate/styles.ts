import { styled } from "@/styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  gap: "20px",
  background: "$gray700",
  borderRadius: "8px",

  "& > section": {
    display: "flex",
  },
});

export const Header = styled("header", {
  display: "flex",
  gap: "1rem",

  "& > img": {
    width: "110px",
    height: "150px",
    borderRadius: "4px",
  },

  "& > div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

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
  },
});
