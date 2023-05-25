import { StarRate } from "@/components/StarRate";
import { Container, Header } from "./styles";

import Image from "next/image";

import { ProfileRating } from "../../index.page";

interface RateProps {
  rate: ProfileRating;
}

export function Rate({ rate }: RateProps) {
  return (
    <Container>
      <Header>
        <Image
          src={rate.book.cover_url}
          alt={rate.book.name}
          width={110}
          height={150}
        />

        <div>
          <div>
            <h2>{rate.book.name}</h2>
            <h3>{rate.book.author}</h3>
          </div>

          <span className="starRate">
            <StarRate starRate={rate.rate} />
          </span>
        </div>
      </Header>
      <section>
        <p>{rate.description}</p>
      </section>
    </Container>
  );
}
