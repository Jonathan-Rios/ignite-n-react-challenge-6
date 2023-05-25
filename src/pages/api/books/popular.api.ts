import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { limit } = req.query;

  const booksWithRatings = await prisma.book.findMany({
    take: Number(limit) || 5,
    include: {
      ratings: true,
    },

    orderBy: [
      {
        ratings: {
          _count: "desc",
        },
      },
    ],
  });

  const booksWithAverageRating = booksWithRatings.map((book) => {
    const totalRatings = book.ratings.length;
    const sumRatings = book.ratings.reduce(
      (total, rating) => total + rating.rate,
      0
    );
    const averageRating = totalRatings > 0 ? sumRatings / totalRatings : 0;

    return {
      ...book,
      averageRating,
    };
  });

  return res.status(200).json(booksWithAverageRating);
}
