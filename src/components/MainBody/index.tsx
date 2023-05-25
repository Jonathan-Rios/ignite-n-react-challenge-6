import { SideMenu } from "@/components/SideMenu";
import { Container, Content } from "./styles";

interface MainBodyProps {
  children: React.ReactNode | React.ReactNode[];
}

export function MainBody({ children }: MainBodyProps) {
  return (
    <Container>
      <SideMenu />
      <Content>{children}</Content>
    </Container>
  );
}
