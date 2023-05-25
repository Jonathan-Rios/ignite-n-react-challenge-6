import { styled } from "@/styles";

export const Shadow = styled("span", {
  position: "fixed",
  inset: 0,
  backgroundColor: "$shadow",
  zIndex: 30,
});

export const Dialog = styled("div", {
  zIndex: 31,

  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  gap: "40px",
  padding: "1.5rem",

  width: "516px",
  height: "337px",
  background: "$gray700",
  boxShadow: "4px 16px 24px rgba(0, 0, 0, 0.25)",
  borderRadius: "12px",
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  height: "100%",
  width: "100%",

  position: "relative",

  "& > button": {
    all: "unset",
    position: "absolute",

    top: 0,
    right: 0,

    cursor: "pointer",
    transition: "all 0.2s ease-in-out",

    svg: {
      fontSize: "$_24",
      color: "$gray400",
    },

    "&:hover": {
      svg: {
        color: "$green100",
      },
    },
  },

  "& > section": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    marginTop: "2.5rem", // 40px
    gap: "1rem",

    "& > button": {
      all: "unset",

      display: "flex",
      alignItems: "center",
      gap: "20px",

      width: "372px",

      padding: "20px 24px",
      background: "$gray600",
      border: "1px solid $gray600",

      borderRadius: "8px",
      fontWeight: "700",
      fontSize: "$_18",
      color: "$gray200",

      cursor: "pointer",

      transition: "all 0.2s ease-in-out",

      "&:hover": {
        filter: "brightness(1.1)",
        border: "1px solid $white",
      },
    },
  },
});
