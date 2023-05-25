import { Star } from "phosphor-react";
import { Container } from "./styles";
import { StarHalf } from "phosphor-react";

interface StarButtonProps {
  size?: number;
  click?: (rate: number) => void;
  starValue: number;
  print?: "half" | "fill" | "empty";
  isEditable?: boolean;
}

export function StarButton({
  size,
  click,
  starValue,
  print = "empty",
  isEditable = false,
}: StarButtonProps) {
  function handleClick(value: number) {
    click && click(value);
  }

  return (
    <Container className={print}>
      {isEditable && (
        <>
          <button
            type="button"
            className="star-button-left"
            onClick={() => handleClick(starValue + 0.5)}
          />

          <button
            type="button"
            className="star-button-right"
            onClick={() => handleClick(starValue + 1)}
          />
        </>
      )}

      <StarHalf
        className="half-star"
        width={size}
        height={size}
        weight="fill"
      />

      <Star className="empty-star" width={size} height={size} />
      <Star className="fill-star" width={size} height={size} weight="fill" />
    </Container>
  );
}
