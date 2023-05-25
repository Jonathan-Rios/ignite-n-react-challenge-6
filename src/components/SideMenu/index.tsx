import { Container, SideItem } from "./styles";

import Image from "next/image";
import logoImg from "@/assets/logo.svg";
import bookwiseImg from "@/assets/bookwise.svg";
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from "phosphor-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ConnectDialog } from "../ConnectDialog";
import { useSession, signOut } from "next-auth/react";
import { Avatar } from "../Avatar";

export function SideMenu() {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState<boolean>(false);
  const { data: session } = useSession();

  const { pathname } = useRouter();

  const routes = [
    {
      name: "Início",
      path: "/home",
      icon: <ChartLineUp />,
    },
    {
      name: "Explorar",
      path: "/explorer",
      icon: <Binoculars />,
    },
  ];

  const authenticatedRoutes = session
    ? [
        {
          name: "Perfil",
          path: `/profile?user=${session.user.id}`,
          icon: <User />,
        },
      ]
    : [];

  const mergedRoutes = [...routes, ...authenticatedRoutes];

  return (
    <>
      <Container>
        <header>
          <div>
            <Image src={logoImg} alt="Logo" width={32} height={32} />
            <Image src={bookwiseImg} alt="BookWise" width={100} />
          </div>
        </header>

        <section>
          {mergedRoutes.map((route) => (
            <Link key={route.path} href={route.path}>
              <SideItem active={pathname === route.path}>
                {route.icon}
                {route.name}
              </SideItem>
            </Link>
          ))}
        </section>

        <footer>
          {session ? (
            <>
              <Avatar url={session.user.avatar_url} />
              <button onClick={() => signOut()}>
                Sair
                <SignOut color="#F75A68" />
              </button>
            </>
          ) : (
            <button onClick={() => setIsConnectModalOpen(true)}>
              Entrar
              <SignIn />
            </button>
          )}
        </footer>
      </Container>
      {isConnectModalOpen && (
        <ConnectDialog
          isOpen={isConnectModalOpen}
          setIsOpen={setIsConnectModalOpen}
        />
      )}
    </>
  );
}
