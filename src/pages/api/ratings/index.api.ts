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

  const books = await prisma.rating.findMany({
    take: Number(limit) || 10,
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
