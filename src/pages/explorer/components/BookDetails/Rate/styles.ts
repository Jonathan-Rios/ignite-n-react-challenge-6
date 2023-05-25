import { styled } from "@/styles";

export const Container = styled("div", {
  variants: {
    itIsMe: {
      true: {
        background: "$gray600",
      },
    },
  },

  display: "flex",
  flexDirection: "column",
  padding: "24px",
  gap: "32px",
  background: "$gray700",
  borderRadius: "8px",
  width: "100%",

  "& > header": {
    display: "flex",
    alignItems: "center",

    gap: "1rem",

    "& > div": {
      display: "flex",
      justifyContent: "center",

      flexDirection: "column",
      fontSize: "$medium",

      a: {
        textDecoration: "none",
        color: "white",
        cursor: "pointer",
        "& > :hover": {
          textDecoration: "underline",
        },
      },

      "& > h3": {
        color: "$white",
        fontWeight: "$medium",
      },

      "& > p": {
        color: "$gray400",
      },
    },

    ".starRate": {
      display: "flex",
      marginLeft: "auto",
      marginBottom: "auto",
    },
  },
});
