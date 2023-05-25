import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { user } = req.query;

  const booksWithRatings = await prisma.book.findMany({
    orderBy: [
      {
        name: "asc",
      },
    ],

    include: {
      ratings: true,
      categories: {
        select: {
          categoryId: true,
        },
      },
    },
  });

  const booksWithAverageRating = booksWithRatings.map((book) => {
    const isRead = !!book.ratings.some((rating) => rating.user_id === user);

    const totalRatings = book.ratings.length;
    const sumRatings = book.ratings.reduce(
      (total, rating) => total + rating.rate,
      0
    );
    const averageRating = totalRatings > 0 ? sumRatings / totalRatings : 0;

    return {
      ...book,
      averageRating,
      isRead,
    };
  });

  return res.status(200).json(booksWithAverageRating);
}
