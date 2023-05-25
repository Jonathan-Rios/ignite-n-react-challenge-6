import { styled } from "@/styles";

export const Container = styled("div", {
  position: "relative",
  width: 598,
  height: 890,
  margin: "auto 0",
  display: "flex",

  "&:before": {
    content: "''",
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: 890,
    background:
      "linear-gradient(46deg, rgb(104 102 215 / 60%), rgb(22 20 94 / 60%), rgb(20 14 66 / 83%), rgb(7 0 64 / 83%))",
    backdropFilter: "blur(1px)",
    borderRadius: "10px",
  },

  "& > img": {
    borderRadius: "10px",
    height: 890,
  },

  "& > span": {
    zIndex: 9,
    position: "absolute",

    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  },

  "@media (max-width: 1440px)": {
    width: 380,
    height: 540,
    margin: 0,

    "& > img": {
      borderRadius: "10px",
      height: 540,
      width: 380,
    },

    "&:before": {
      height: 540,
      width: 380,
    },
  },
});
