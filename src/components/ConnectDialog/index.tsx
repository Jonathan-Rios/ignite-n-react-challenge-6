import { Content, Dialog, Shadow } from "./styles";

import { X } from "phosphor-react";

import { useEffect } from "react";
import AuthButtons from "../AuthButtons";

interface ConnectDialogProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function ConnectDialog({ isOpen, setIsOpen }: ConnectDialogProps) {
  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    // Adiciona o evento de escuta ao objeto document
    document.addEventListener("keydown", handleKeyPress);

    // Remove o evento de escuta ao desmontar o componente
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <>
          <Dialog>
            <Content>
              <button onClick={() => setIsOpen(false)}>
                <X />
              </button>

              <h3>Faça login para deixar sua avaliação</h3>

              <section>
                <AuthButtons />
              </section>
            </Content>
          </Dialog>
          <Shadow onClick={() => setIsOpen(false)} />
        </>
      )}
    </>
  );
}
