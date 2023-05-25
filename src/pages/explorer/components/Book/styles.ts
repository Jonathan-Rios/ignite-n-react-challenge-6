import { styled } from "@/styles";

export const Container = styled("button", {
  position: "relative",

  display: "flex",
  padding: "20px",
  gap: "20px",
  background: "$gray700",
  border: "1px solid $gray700",
  borderRadius: "8px",
  width: "320px",

  "& > img": {
    width: "110px",
    height: "160px",
    borderRadius: "4px",
  },

  transition: "border-color 0.2s ease-in-out",
  cursor: "pointer",

  "&:hover": {
    borderColor: "$purple100",
  },
});

export const Content = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "1rem",
  height: "100%",

  "& > div": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    h2: {
      fontSize: "$_16",
      color: "$white",
      fontWeight: "$bold",
      textAlign: "left",
    },

    h3: {
      fontSize: "$_16",
      color: "$gray400",
      fontWeight: "$regular",
    },
  },
});

export const IsReadBadge = styled("span", {
  position: "absolute",
  top: 0,
  right: 0,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "4px 12px",

  background: "$green300",
  color: "$green100",
  borderRadius: "0px 4px 0px 4px",
  fontSize: "$_12",
  fontWeight: "$bold",
});
