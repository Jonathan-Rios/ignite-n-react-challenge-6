import { Container } from "./styles";

interface HeaderProps {
  title?: string;
  icon: React.ReactNode;
}

export function Header({ title, icon }: HeaderProps) {
  return (
    <Container>
      <div>
        {icon}
        {title}
      </div>
    </Container>
  );
}
