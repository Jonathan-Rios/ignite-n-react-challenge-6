import { styled } from "@/styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  padding: "2.5rem",

  width: 232,

  maxHeight: 890,
  height: "100%",

  borderRadius: "12px",
  margin: "auto 0",
  background:
    "linear-gradient(189.62deg, #22346C -11.35%, #1C2D6A 1.42%, #061549 22.08%, #0B2231 44.95%, #04213C 75.53%, #061833 96.54%)",

  "& > header": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    marginBottom: "4rem",

    "& > div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.75rem",
      width: "100%",
    },
  },

  "& > section": {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem", // 24px

    a: {
      textDecoration: "none",
    },
  },

  "& > footer": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem", // 16px

    marginTop: "auto",

    "& > button": {
      all: "unset",
      position: "relative",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem", // 8px

      color: "$white",
      fontWeight: "$bold",
      cursor: "pointer",

      transition: "all 0.2s ease-in-out",

      "& > svg": {
        color: "$green100",
        fontSize: "$_20",
      },

      "&:hover": {
        color: "$green100",
      },
    },
  },
});

export const SideItem = styled("button", {
  variants: {
    active: {
      true: {
        color: "$white",
        fontWeight: "$bold",

        "&::before": {
          content: "''",
          position: "absolute ",
          width: "4px",
          height: "24px",
          left: "-20px",
          top: "calc(50% - 24px/2)",
          background: "linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)",
          borderRadius: "999px",
        },
      },
    },
  },

  all: "unset",
  position: "relative",

  display: "flex",
  gap: "0.5rem", // 8px

  color: "$gray400",
  fontWeight: "$medium",
  cursor: "pointer",

  transition: "all 0.2s ease-in-out",

  "& > svg": {
    width: "24px",
    height: "24px",
  },

  "&:hover": {
    color: "$green100",

    svg: {
      color: "$green100",
    },
  },
});
