import { Container } from "./styles";

import { useState } from "react";
import { StarButton } from "./StarButton";

interface StarRateProps {
  starRate: number;
  size?: number;
  editable?: boolean;
  selectRate?: (rate: number) => void;
}

export function StarRate({
  starRate = 3,
  size = 16,
  editable = false,
  selectRate,
}: StarRateProps) {
  const startNumber = 5;

  function getPrintValue(index: number) {
    const isDecimal = !!(starRate - Math.floor(starRate));

    if (isDecimal && Math.floor(starRate) === index) {
      return "half";
    }

    return starRate > index ? "fill" : "empty";
  }

  return (
    <Container>
      {Array(startNumber)
        .fill(0)
        .map((_, index) => (
          <StarButton
            key={index}
            size={size}
            click={selectRate}
            starValue={index}
            print={getPrintValue(index)}
            isEditable={editable}
          />
        ))}
    </Container>
  );
}
