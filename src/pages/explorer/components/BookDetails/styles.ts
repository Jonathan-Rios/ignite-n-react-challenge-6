import { styled } from "@/styles";

export const Shadow = styled("span", {
  position: "fixed",
  inset: 0,
  backgroundColor: "$shadow",
});

export const Dialog = styled("div", {
  position: "fixed",
  top: 0,
  right: 10,

  zIndex: 10,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  maxHeight: "100vh",
  overflow: "auto",

  gap: "40px",
  padding: "4.5rem 2rem",

  height: "100%",
  width: "660px",

  background: "$gray800",
  boxShadow: "4px 16px 24px rgba(0, 0, 0, 0.25)",
  borderRadius: "12px",

  "& > button": {
    all: "unset",
    position: "absolute",

    top: 32,
    right: 32,

    cursor: "pointer",
    transition: "all 0.2s ease-in-out",

    "& > svg": {
      fontSize: "$_24",
      color: "$gray400",
    },

    "&:hover": {
      "& > svg": {
        color: "$green100",
      },
    },
  },
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",

  gap: "40px",

  ".book-details-post-list": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",

    "& > div": {
      display: "flex",
      justifyContent: "space-between",

      "& > button": {
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
  },
});
