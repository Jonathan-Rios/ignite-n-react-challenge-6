import { Container } from "./styles";

import Image from "next/image";
import loginImg from "@/assets/login-image.png";
import logoImg from "@/assets/logo.svg";
import bookwiseImg from "@/assets/bookwise.svg";

export function Hero() {
  return (
    <Container>
      <span>
        <Image src={bookwiseImg} alt="BookWise" />
        <Image src={logoImg} alt="Logo" />
      </span>

      <Image src={loginImg} alt="Mulher lendo um livro deitada no sofá" />
    </Container>
  );
}
