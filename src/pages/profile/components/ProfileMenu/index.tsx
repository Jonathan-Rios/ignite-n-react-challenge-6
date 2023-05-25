import { Avatar } from "@/components/Avatar";
import { Container, Content } from "./styles";
import { BookOpen, BookmarkSimple, Books, UserList } from "phosphor-react";
import dayjs from "dayjs";

interface ProfileMenuProps {
  name: string;
  avatar_url: string;
  created_at: string;
  pagesRead: number;
  booksRead: number;
  booksRated: number;
  mostReadCategory: string[];
}

export default function ProfileMenu({
  name,
  avatar_url,
  created_at,
  pagesRead,
  booksRead,
  booksRated,
  mostReadCategory,
}: ProfileMenuProps) {
  return (
    <Container>
      <Content>
        <header>
          <Avatar url={avatar_url} width={72} height={72} border="x2" />
          <div className="profileTextInfo">
            <h3>{name}</h3>
            <p>membro desde {dayjs(created_at).fromNow()}</p>
          </div>

          <span className="badge" />
        </header>

        <section>
          <div className="profileItemsCentralizer">
            <div className="profileItem">
              <BookOpen />
              <div>
                <h3>{pagesRead}</h3>
                <p>Páginas lidas</p>
              </div>
            </div>

            <div className="profileItem">
              <Books />
              <div>
                <h3>{booksRated}</h3>
                <p>Livros avaliados</p>
              </div>
            </div>

            <div className="profileItem">
              <UserList />
              <div>
                <h3>{booksRead}</h3>
                <p>Autores lidos</p>
              </div>
            </div>

            <div className="profileItem">
              <BookmarkSimple />
              <div>
                <h3>{mostReadCategory.join(", ")}</h3>
                <p>Categoria(s) mais lida(s)</p>
              </div>
            </div>
          </div>
        </section>
      </Content>
    </Container>
  );
}
