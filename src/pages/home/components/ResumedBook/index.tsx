import { StarRate } from "@/components/StarRate";
import { Container, Content } from "./styles";

import Image from "next/image";

import { reduceText } from "@/utils/text";
import { BookWithAverageRating } from "@/pages/explorer/index.page";

interface ResumedBookProps {
  book: BookWithAverageRating;
}

export function ResumedBook({ book }: ResumedBookProps) {
  return (
    <Container>
      <Image src={book.cover_url} alt="" width={64} height={94} />

      <Content>
        <div>
          <h2>{reduceText(book.name, 30)}</h2>
          <h3>{book.author}</h3>
        </div>

        <span className="starRate">
          <StarRate starRate={book.averageRating} />
        </span>
      </Content>
    </Container>
  );
}
