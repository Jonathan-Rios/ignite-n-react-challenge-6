import { CommonBooks, Content, Principal } from "./styles";

import { Rate } from "./components/Rate";
import { ResumedBook } from "./components/ResumedBook";

import { Header } from "@/components/Header";
import { CaretRight, ChartLineUp } from "phosphor-react";
import { MainBody } from "@/components/MainBody";

import { IBook, IUser } from "@/@types/models";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";
import Link from "next/link";

export interface HomeRating {
  id: string;
  rate: number;
  description: string;
  created_at: Date;
  book: IBook;
  user: IUser;
}

export interface FormattedRatings {
  myRates: HomeRating[];
  otherRates: HomeRating[];
}

interface BookWithAverageRating extends IBook {
  averageRating: number;
}

export default function Home() {
  const { data: session } = useSession();

  const { data: ratings } = useQuery<HomeRating[], QueryKey>(
    ["getRecentRatings"],
    async () => {
      const { data } = await api.get<HomeRating[]>(`/ratings`, {
        params: {
          limit: 5,
        },
      });

      return data;
    }
  );

  const formattedRatings = ratings
    ? ratings.reduce(
        (acc, rating) => {
          if (rating.user.id === session?.user?.id) {
            acc.myRates.push(rating);
          } else {
            acc.otherRates.push(rating);
          }

          return acc;
        },
        {
          myRates: [] as HomeRating[],
          otherRates: [] as HomeRating[],
        }
      )
    : {
        myRates: [] as HomeRating[],
        otherRates: [] as HomeRating[],
      };

  const { data: popularBooks } = useQuery<BookWithAverageRating[]>(
    ["getPopularBooks"],
    async () => {
      const { data } = await api.get<BookWithAverageRating[]>(
        `/books/popular`,
        {
          params: {
            limit: 5,
          },
        }
      );

      return data;
    }
  );

  return (
    <MainBody>
      <Header title="Início" icon={<ChartLineUp />} />

      <Content>
        <Principal>
          <h3>Sua última leitura</h3>

          {!!formattedRatings.myRates?.length ? (
            <Rate rate={formattedRatings.myRates[0]} />
          ) : (
            <p className="any-rate">Você ainda não avaliou nenhum livro</p>
          )}

          <br />

          <h4>Avaliações mais recentes</h4>

          {!!formattedRatings.otherRates?.length &&
            formattedRatings.otherRates.map((rate) => (
              <Rate key={rate.id} rate={rate} />
            ))}
        </Principal>

        <CommonBooks>
          <header>
            <h4>Livros populares</h4>
            <Link href="/explorer">
              <button>
                Ver todos <CaretRight />
              </button>
            </Link>
          </header>

          {popularBooks?.length &&
            popularBooks.map((book) => (
              <ResumedBook key={book.id} book={book} />
            ))}
        </CommonBooks>
      </Content>
    </MainBody>
  );
}
