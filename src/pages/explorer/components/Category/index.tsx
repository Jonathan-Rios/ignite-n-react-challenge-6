import { StarRate } from "@/components/StarRate";
import { Container } from "./styles";

interface CategoryProps extends React.HTMLAttributes<HTMLButtonElement> {
  name: string;
  active?: boolean;
}

export function Category({ name, active = false, ...props }: CategoryProps) {
  return (
    <Container active={active} {...props}>
      {name}
    </Container>
  );
}
