import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { id } = req.query;

  const books = await prisma.rating.findMany({
    where: {
      book_id: id as string,
    },
    include: {
      book: true,
      user: true,
    },

    orderBy: {
      created_at: "desc",
    },
  });

  return res.status(200).json(books);
}
