import { StarRate } from "@/components/StarRate";
import { Container, Content, IsReadBadge } from "./styles";

import Image from "next/image";
import { BookWithAverageRating } from "../../index.page";

interface BookProps extends React.HTMLAttributes<HTMLButtonElement> {
  isRead?: boolean;
  book: BookWithAverageRating;
}

export function Book({ book, isRead = false, ...props }: BookProps) {
  return (
    <Container {...props}>
      {isRead ? <IsReadBadge>LIDO</IsReadBadge> : <></>}

      <Image
        src={book?.cover_url || ""}
        alt={book?.name || ""}
        width={110}
        height={160}
      />

      <Content>
        <div>
          <h2>{book?.name || ""}</h2>
          <h3>{book?.author || ""}</h3>
        </div>

        <span className="starRate">
          <StarRate starRate={book.averageRating} />
        </span>
      </Content>
    </Container>
  );
}
