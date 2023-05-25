import { Container } from "./styles";
import { signIn } from "next-auth/react";
import Image from "next/image";

import rocketImg from "@/assets/rocket-icon.svg";
import googleImg from "@/assets/google-icon.svg";
import githubImg from "@/assets/github-icon.svg";
import { useRouter } from "next/router";

interface AuthButtonsProps {
  hasVisitButton?: boolean;
}

export default function AuthButtons({
  hasVisitButton = false,
}: AuthButtonsProps) {
  const router = useRouter();

  function handleSignIn(provider?: string) {
    if (!provider) {
      router.push("/home");
      return;
    }

    signIn(provider, {
      callbackUrl: "/home",
    });
  }

  return (
    <Container>
      <button onClick={() => handleSignIn("google")}>
        <Image src={googleImg} alt="Ícone do google" />
        <span>Entrar com Google</span>
      </button>

      <button onClick={() => handleSignIn("github")}>
        <Image src={githubImg} alt="Ícone do gitHub" />
        <span>Entrar com GitHub</span>
      </button>

      {hasVisitButton && (
        <button onClick={() => handleSignIn()}>
          <Image src={rocketImg} alt="Ícone de foguete" />
          <span>Acessar como visitante</span>
        </button>
      )}
    </Container>
  );
}
