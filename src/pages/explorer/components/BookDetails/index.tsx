import { Content, Dialog, Shadow } from "./styles";

import { X } from "phosphor-react";
import { Book } from "./Book";
import { Rate } from "./Rate";
import { RateIt } from "./RateIt";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { IBook, IUser } from "@/@types/models";
import { useExplorer } from "@/hooks/Explorer";
import { useSession } from "next-auth/react";

interface BookDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  refreshBooks: () => void;
}

export interface BookDetailsRating {
  id: string;
  rate: number;
  description: string;
  created_at: Date;
  book: IBook;
  user: IUser;
}

export function BookDetails({
  isOpen,
  onClose,
  refreshBooks,
}: BookDetailsProps) {
  const [isRatingEnable, IsRatingEnable] = useState<boolean>(false);

  const { selectedBook } = useExplorer();
  const { data: session } = useSession();

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    // Adiciona o evento de escuta ao objeto document
    document.addEventListener("keydown", handleKeyPress);

    // Remove o evento de escuta ao desmontar o componente
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  function refreshRates() {
    refreshBooks();
    refetch();
  }

  const { data: ratings, refetch } = useQuery<BookDetailsRating[]>(
    ["getRating"],
    async () => {
      const { data } = await api.get<BookDetailsRating[]>(
        `/ratings/${selectedBook?.id}`
      );

      return data;
    }
  );

  return (
    <>
      {isOpen && (
        <>
          <Dialog className="modal">
            <button onClick={onClose}>
              <X />
            </button>

            <Content>
              <Book />
              <section className="book-details-post-list">
                <div>
                  <h4>Avaliações</h4>
                  <button onClick={() => IsRatingEnable(true)}>Avaliar</button>
                </div>
                {session && isRatingEnable && (
                  <RateIt
                    onClose={() => IsRatingEnable(false)}
                    refreshRates={refreshRates}
                  />
                )}

                {!!ratings?.length ? (
                  ratings.map((rate) => {
                    if (rate.user.id === session?.user.id) {
                      return <Rate key={rate.id} rate={rate} itIsMe />;
                    } else {
                      return <Rate key={rate.id} rate={rate} />;
                    }
                  })
                ) : (
                  <p>Nenhuma avaliação</p>
                )}
              </section>
            </Content>
          </Dialog>
          <Shadow onClick={onClose} />
        </>
      )}
    </>
  );
}
