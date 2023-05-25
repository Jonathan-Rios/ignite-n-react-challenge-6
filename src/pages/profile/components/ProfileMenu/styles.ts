import { styled } from "@/styles";

export const Container = styled("aside", {
  display: "flex",
  flexDirection: "column",
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",

  gap: "0.75rem", // 12px
  borderLeft: "1px solid $gray700",
  minWidth: 310,

  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    img: {
      marginBottom: "1.25rem", // 20px
    },

    ".profileTextInfo": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

      h3: {
        fontSize: "$_20",
        fontWeight: "$bold",
      },

      p: {
        fontSize: "$_14",
        color: "$gray400",
      },
    },

    ".badge": {
      margin: "2rem 0", // 32px
      width: "32px",
      height: "4px",
      background: "linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)",
      borderRadius: "999px",
    },
  },

  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    ".profileItemsCentralizer": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",

      ".profileItem": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px 0",

        gap: "1.25rem", // 20px
        height: 44,

        svg: {
          fontSize: "2rem", // 32px
          color: "$green100",
        },

        h3: {
          fontSize: "$_16",
          fontWeight: "$bold",
          color: "$gray200",
          textBreak: "break-word",
          width: "150px",
        },

        p: {
          fontSize: "$_14",
          color: "$gray300",
        },
      },
    },
  },
});
