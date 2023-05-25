import { globalCss } from "./index";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",

    scrollbarWidth: "thin",

    "*::-webkit-scrollbar": {
      width: "8px",
    },

    "*::-webkit-scrollbar-track": {
      backgroundColor: "$gray700",
    },

    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "$gray600",
      borderRadius: "4px",

      "&:hover": {
        backgroundColor: "$purple100",
      },
    },
  },

  body: {
    backgroundColor: "$black",
    color: "$gray300",
    "-webkit-font-smoothing": "antialiased",

    margin: "auto",

    width: "100%",
    padding: "0 1.5rem",

    "@media (max-width: 1440px)": {
      width: "1280px",
      padding: "0 ",
    },

    // height: "100vh",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
  },
});
