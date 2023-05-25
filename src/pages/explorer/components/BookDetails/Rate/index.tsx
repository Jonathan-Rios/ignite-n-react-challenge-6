import { Avatar } from "@/components/Avatar";
import { StarRate } from "@/components/StarRate";
import { Container } from "./styles";
import { BookDetailsRating } from "..";
import dayjs from "dayjs";
import Link from "next/link";

interface RateProps {
  itIsMe?: boolean;
  rate: BookDetailsRating;
}

export function Rate({ itIsMe = false, rate }: RateProps) {
  return (
    <Container itIsMe={itIsMe}>
      <header>
        <Avatar url={rate.user.avatar_url} />

        <div>
          <Link href={`/profile?user=${rate.user.id}`}>
            <h3>{rate.user.name}</h3>
          </Link>
          <p>{dayjs(rate.created_at).fromNow()}</p>
        </div>

        <span className="starRate">
          <StarRate starRate={rate.rate} />
        </span>
      </header>

      <p>{rate.description}</p>
    </Container>
  );
}
