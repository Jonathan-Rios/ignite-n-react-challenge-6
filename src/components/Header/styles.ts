import { styled } from "@/styles";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",

  width: "100%",
  margin: "40px 0",
  height: "40px",

  "& > div": {
    display: "flex",
    gap: "0.75rem",
    fontSize: "$_24",
    fontWeight: "$bold",
    color: "$white",

    "& > svg": {
      width: "32px",
      height: "32px",
      color: "$green100",
    },
  },
});
