import { styled } from "@/styles";

export const Container = styled("main", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  height: "100vh",

  aside: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "20rem",

    gap: "1rem",

    ".welcome-text": {
      display: "flex",
      flexDirection: "column",
      marginBottom: "1rem",
      width: "100%",

      h2: {
        color: "$gray100",
      },

      p: {
        color: "$gray200",
      },
    },
  },

  "@media (max-width: 1440px)": {
    aside: {
      marginRight: "10rem",
    },
  },
});
