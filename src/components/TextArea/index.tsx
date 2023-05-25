import { Container } from "./styles";

interface TextAreaProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  maxLength?: number;
  textAreaValue: string;
  onTextAreaChange: (value: string) => void;
}

export function TextArea({
  placeholder = "",
  maxLength = 450,
  textAreaValue = "",
  onTextAreaChange,
  ...props
}: TextAreaProps) {
  return (
    <Container {...props}>
      <textarea
        rows={5}
        cols={33}
        placeholder={placeholder}
        maxLength={maxLength}
        value={textAreaValue}
        onChange={(event) => onTextAreaChange(event.target.value)}
      />

      <span>{textAreaValue.length || 0}/450</span>
    </Container>
  );
}
