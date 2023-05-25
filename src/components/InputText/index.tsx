import { MagnifyingGlass } from "phosphor-react";
import { Container } from "./styles";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export function InputText({ placeholder = "", ...props }: InputTextProps) {
  return (
    <Container {...props}>
      <input type="text" placeholder={placeholder} />

      <button>
        <MagnifyingGlass weight="bold" />
      </button>
    </Container>
  );
}
