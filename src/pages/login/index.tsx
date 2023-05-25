import { Hero } from "./components/Hero";
import { Container } from "./styles";

import AuthButtons from "@/components/AuthButtons";

export default function Login() {
  return (
    <Container>
      <Hero />

      <aside>
        <div className="welcome-text">
          <h2>Boas vindas!</h2>
          <p>Faça seu login ou acesse como visitante.</p>
        </div>

        <AuthButtons hasVisitButton />
      </aside>
    </Container>
  );
}
