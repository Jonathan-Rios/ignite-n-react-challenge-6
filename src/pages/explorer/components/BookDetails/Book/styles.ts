import { styled } from "@/styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",

  background: "$gray700",
  borderRadius: "10px",
  padding: "24px 32px",
  width: "100%",

  "& > section": {
    display: "flex",
    gap: "20px",

    borderRadius: "8px",
    width: "100%",

    "& > img": {
      width: "110px",
      height: "160px",
      borderRadius: "4px",
    },
  },

  "& > footer": {
    display: "flex",
    alignItems: "center",
    gap: "60px",
    width: "100%",
    marginTop: "40px",
    borderTop: "1px solid $gray600",
    paddingTop: "24px",

    ".book-details-footer-item": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",

      svg: {
        fontSize: "$_24",
        color: "$green100",
      },

      div: {
        display: "flex",
        flexDirection: "column",
      },
    },
  },
});

export const Content = styled("section", {
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

  "& > footer": {
    "& > p": {
      fontSize: "$_14",
      color: "$gray400",
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

  width: "53px",
  height: "24px",

  background: "$green300",
  color: "$green100",
  borderRadius: "0px 4px 0px 4px",
  fontSize: "$_12",
  fontWeight: "$bold",
});
