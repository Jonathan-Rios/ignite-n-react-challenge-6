import { Avatar } from "@/components/Avatar";
import { StarRate } from "@/components/StarRate";
import { Container, Content } from "./styles";

import Image from "next/image";

import bookImg from "../../../../../public/images/books/Book.png";
import { HomeRating } from "../../index.page";
import dayjs from "dayjs";
import { useState } from "react";
import Link from "next/link";

interface RateProps {
  rate: HomeRating;
}

export function Rate({ rate }: RateProps) {
  const [showMoreText, setShowMoreText] = useState<boolean>(false);
  const textLimit = 200;

  function getText(text: string) {
    if (!showMoreText && text.length > textLimit) {
      return `${text.slice(0, textLimit)}...`;
    }

    return text;
  }

  return (
    <Container>
      <header>
        <Avatar url={rate.user.avatar_url} />

        <div>
          <Link href={`/profile?user=${rate.user.id}`}>
            <h3>{rate.user.name}</h3>
          </Link>
          <p>{dayjs(rate.user.created_at).fromNow()}</p>
        </div>

        <span className="starRate">
          <StarRate starRate={rate.rate} />
        </span>
      </header>

      <Content>
        <Image
          src={rate.book.cover_url}
          alt={rate.book.name}
          width={110}
          height={150}
        />

        <section>
          <div>
            <h2>{rate.book.name}</h2>
            <h3>{rate.book.author}</h3>
          </div>

          <p>
            {getText(rate.description)}
            {!showMoreText && rate.description.length > textLimit && (
              <button onClick={() => setShowMoreText(true)}>ver mais</button>
            )}
          </p>
        </section>
      </Content>
    </Container>
  );
}
