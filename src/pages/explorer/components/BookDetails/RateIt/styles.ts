import { styled } from "@/styles";

export const Container = styled("form", {
  display: "flex",
  flexDirection: "column",
  padding: "24px",

  background: "$gray700",
  borderRadius: "8px",
  width: "100%",

  "& > header": {
    display: "flex",
    alignItems: "center",
    marginBottom: "32px",

    gap: "1rem",

    "& > div": {
      display: "flex",
      justifyContent: "center",

      flexDirection: "column",
      fontSize: "$medium",

      "& > h3": {
        color: "$white",
        fontWeight: "$bold",
      },

      a: {
        textDecoration: "none",
        color: "white",
        cursor: "pointer",
        "& > :hover": {
          textDecoration: "underline",
        },
      },
    },

    ".starRate": {
      display: "flex",
      flexDirection: "column",
      marginLeft: "auto",
      marginBottom: "auto",
    },
  },

  "& > footer": {
    display: "flex",
    alignItems: "center",

    gap: "0.5rem",
    justifyContent: "flex-end",
    marginTop: "12px",

    button: {
      all: "unset",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      cursor: "pointer",

      width: "40px",
      height: "40px",

      background: "$gray600",
      borderRadius: "4px",
      color: "$purple100",
      fontSize: "$_24",
      fontWeight: "$bold",
      transition: "filter 0.2s ease-in-out",

      "&:hover": {
        filter: "brightness(1.2)",
      },
    },
  },
});

export const FormError = styled("p", {
  marginLeft: "0.125rem",
  marginTop: "0.125rem",

  color: "#f75a68",
  fontSize: "$sm2",
});
