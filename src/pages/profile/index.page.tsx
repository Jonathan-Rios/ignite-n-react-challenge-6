import { SideMenu } from "@/components/SideMenu";
import { Content, Principal, SearchForm } from "./styles";

import { Rate } from "./components/Rate";

import { Header } from "@/components/Header";
import { ChartLineUp } from "phosphor-react";
import { MainBody } from "@/components/MainBody";
import ProfileMenu from "./components/ProfileMenu";
import { InputText } from "@/components/InputText";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { IBook, IRating, IUser } from "@/@types/models";
import { useState } from "react";
import { useRouter } from "next/router";

export interface ProfileRating {
  id: string;
  rate: number;
  description: string;
  created_at: string;
  book: IBook;
  user: IUser;
}

interface ProfileData {
  id: string;
  name: string;
  avatar_url: string;
  created_at: string;

  pagesRead: number;
  booksRead: number;
  booksRated: number;
  mostReadCategory: string[];
  ratings: ProfileRating[];
}

export default function Profile() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { user } = router.query;

  const { data: profile } = useQuery<ProfileData>(["getProfile"], async () => {
    const { data } = await api.get<ProfileData>(`/profile/${user}`);

    return data;
  });

  function filterRates() {
    if (!profile) {
      return [];
    }

    if (!profile.ratings.length && search === "") {
      return profile.ratings;
    }

    let filteredRates = profile.ratings?.filter((rate) => {
      return rate.book.name.toLowerCase().includes(search.toLowerCase());
    });

    return filteredRates;
  }

  return (
    <MainBody>
      <Header title="Profile" icon={<ChartLineUp />} />

      <Content>
        {profile && (
          <>
            <Principal>
              <SearchForm>
                <InputText
                  placeholder="Buscar livro avaliado"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </SearchForm>

              {filterRates().length ? (
                filterRates().map((rating, index) => (
                  <>
                    {index > 0 && <br />}
                    <p>{dayjs(rating.created_at).fromNow()}</p>
                    <Rate rate={rating} />
                  </>
                ))
              ) : (
                <div className="any-book-rated">
                  <h1>Nenhum livro avaliado</h1>
                </div>
              )}
            </Principal>

            <ProfileMenu
              name={profile.name}
              avatar_url={profile.avatar_url}
              created_at={profile.created_at}
              pagesRead={profile.pagesRead}
              booksRead={profile.booksRead}
              booksRated={profile.booksRated}
              mostReadCategory={profile.mostReadCategory}
            />
          </>
        )}
      </Content>
    </MainBody>
  );
}
